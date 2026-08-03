#!/usr/bin/env bash
# ==============================================================================
#  deploy.sh — TBox Solutionz FTP Deployment Script
#  Uploads one or more local files to the live cPanel server via FTP.
#
#  REQUIRES: lftp (see INSTALLATION below)
#  CREDENTIALS: stored in .env.deploy (see that file for setup instructions)
#
#  USAGE:
#    ./deploy.sh <file1> [file2] [file3] ...
#
#  EXAMPLES:
#    ./deploy.sh blog/index.html
#    ./deploy.sh blog/ai-native-architecture.html sitemap.xml
#    ./deploy.sh blog/*.html
#    ./deploy.sh assets/images/blog/ai-native-architecture.webp
#
#  All paths must be relative to the root of the tbox-website-new folder.
#  The script preserves the directory structure on the remote server.
#
#  INSTALLATION (one-time setup):
#    If lftp is not installed, run this command first:
#      brew install lftp
#    Then run this script normally.
# ==============================================================================

set -euo pipefail

# ── Colour helpers ─────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

print_header() { echo -e "\n${BOLD}${CYAN}$1${RESET}"; }
print_ok()     { echo -e "  ${GREEN}✓${RESET}  $1"; }
print_warn()   { echo -e "  ${YELLOW}⚠${RESET}  $1"; }
print_err()    { echo -e "  ${RED}✗${RESET}  $1"; }
print_step()   { echo -e "  ${CYAN}→${RESET}  $1"; }

# ── Banner ─────────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BOLD}   TBox Solutionz — FTP Deployment Script${RESET}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"

# ── Step 1: Check that lftp is installed ───────────────────────────────────────
print_header "Step 1 / 4 — Checking dependencies"

if ! command -v lftp &>/dev/null; then
  print_err "lftp is not installed."
  echo ""
  echo -e "  Install it now by running:"
  echo -e "    ${BOLD}brew install lftp${RESET}"
  echo ""
  echo -e "  Then re-run this script."
  exit 1
fi

LFTP_VERSION=$(lftp --version 2>&1 | head -1)
print_ok "lftp found: $LFTP_VERSION"

# ── Step 2: Load credentials from .env.deploy ─────────────────────────────────
print_header "Step 2 / 4 — Loading credentials"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.deploy"

if [[ ! -f "$ENV_FILE" ]]; then
  print_err ".env.deploy file not found at: $ENV_FILE"
  echo ""
  echo -e "  Create the file by copying the template:"
  echo -e "    ${BOLD}cp .env.deploy.example .env.deploy${RESET}"
  echo -e "  Then fill in your FTP credentials."
  exit 1
fi

# Source the .env.deploy file (only export the variables we need)
# shellcheck source=.env.deploy
source "$ENV_FILE"

# Validate that all required variables are set and not still placeholder values
MISSING=0
check_var() {
  local var_name="$1"
  local var_value="${!var_name:-}"
  if [[ -z "$var_value" || "$var_value" == your_* ]]; then
    print_err "$var_name is not set in .env.deploy"
    MISSING=1
  fi
}

check_var FTP_HOST
check_var FTP_USER
check_var FTP_PASS
check_var FTP_PORT
check_var FTP_REMOTE_ROOT

if [[ $MISSING -eq 1 ]]; then
  echo ""
  echo -e "  Open ${BOLD}.env.deploy${RESET} and fill in all required values."
  echo -e "  See the comments inside that file for instructions."
  exit 1
fi

print_ok "Credentials loaded from .env.deploy"
print_step "Host:   $FTP_HOST:$FTP_PORT"
print_step "User:   $FTP_USER"
print_step "Remote: $FTP_REMOTE_ROOT"

# ── Step 3: Validate the file list ────────────────────────────────────────────
print_header "Step 3 / 4 — Validating files"

if [[ $# -eq 0 ]]; then
  print_err "No files specified."
  echo ""
  echo -e "  Usage:  ${BOLD}./deploy.sh <file1> [file2] ...${RESET}"
  echo -e "  Example: ${BOLD}./deploy.sh blog/index.html sitemap.xml${RESET}"
  echo -e "  Example: ${BOLD}./deploy.sh blog/*.html${RESET}"
  exit 1
fi

FILES=()
MISSING_FILES=0

for f in "$@"; do
  LOCAL_PATH="$SCRIPT_DIR/$f"
  if [[ -f "$LOCAL_PATH" ]]; then
    FILES+=("$f")
    print_ok "$f"
  else
    print_err "$f  ← file not found"
    MISSING_FILES=1
  fi
done

if [[ $MISSING_FILES -eq 1 ]]; then
  echo ""
  print_err "One or more files were not found. Fix the paths above and try again."
  exit 1
fi

echo ""
echo -e "  ${BOLD}${#FILES[@]} file(s) ready to deploy.${RESET}"

# ── Step 4: Upload files via lftp ─────────────────────────────────────────────
print_header "Step 4 / 4 — Uploading to server"
echo ""

# Build the lftp command script dynamically.
# Each file is uploaded with `put -O <remote_dir> <local_file>` which
# places the file into the correct directory, creating it if needed.
LFTP_COMMANDS=""

for f in "${FILES[@]}"; do
  LOCAL_PATH="$SCRIPT_DIR/$f"
  # Get the remote directory path (strip the filename from the path)
  REMOTE_DIR="$FTP_REMOTE_ROOT/$(dirname "$f")"
  # Normalise: if dirname is ".", keep just the root
  REMOTE_DIR="${REMOTE_DIR%/.}"
  LFTP_COMMANDS+="
  mkdir -p \"$REMOTE_DIR\" 2>/dev/null || true
  put -O \"$REMOTE_DIR\" \"$LOCAL_PATH\""
done

# Run lftp with a single connection, uploading all files
lftp -u "$FTP_USER","$FTP_PASS" "ftp://$FTP_HOST:$FTP_PORT" <<EOF
set ftp:ssl-allow no
set net:timeout 30
set net:max-retries 3
set net:reconnect-interval-base 5
$LFTP_COMMANDS
bye
EOF

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BOLD}   Deployment complete${RESET}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""

for f in "${FILES[@]}"; do
  print_ok "$f  →  $FTP_REMOTE_ROOT/$f"
done

echo ""
echo -e "  ${GREEN}${BOLD}All files uploaded successfully.${RESET}"
echo -e "  Live site: ${BOLD}https://tboxsolutionz.com${RESET}"
echo ""
