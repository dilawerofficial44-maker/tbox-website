#!/usr/bin/env python3
"""
TBox Site Tracker — local viewer with file-based checkbox persistence.

Why this exists: a page opened directly (file://) cannot write a file next to
itself (browser security). Run this script and open the printed URL instead;
your checkbox state is then saved to `tbox-site-tracker-state.json` in this
folder, so it survives reloads, browser changes, and machine restarts.

Usage:
    cd /path/to/tbox-website-new
    python3 tbox-site-tracker-server.py            # then open the printed URL
    python3 tbox-site-tracker-server.py --port 9000

No third-party dependencies — standard library only.
"""

import argparse
import http.server
import json
import os
import socketserver
from urllib.parse import urlparse

HERE = os.path.dirname(os.path.abspath(__file__))
STATE_FILE = os.path.join(HERE, "tbox-site-tracker-state.json")
PAGE = "tbox-site-tracker.html"


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=HERE, **kwargs)

    def do_POST(self):
        if urlparse(self.path).path == "/save-state":
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length) if length else b"{}"
            try:
                data = json.loads(raw or b"{}")
                if not isinstance(data, dict):
                    raise ValueError("state must be a JSON object")
                with open(STATE_FILE, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2, sort_keys=True)
                self._json(200, {"ok": True, "saved": len(data)})
            except Exception as exc:  # noqa: BLE001 - report any parse/write failure to the page
                self._json(400, {"ok": False, "error": str(exc)})
        else:
            self._json(404, {"ok": False, "error": "unknown endpoint"})

    def _json(self, code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self):
        # State (and the page during editing) should never be cached.
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        # Keep the console quiet except for our own startup banner.
        pass


def main():
    parser = argparse.ArgumentParser(description="Serve the TBox site tracker with file-based state.")
    parser.add_argument("--port", type=int, default=8778)
    parser.add_argument("--host", default="127.0.0.1")
    args = parser.parse_args()

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((args.host, args.port), Handler) as httpd:
        url = f"http://{args.host}:{args.port}/{PAGE}"
        print("TBox Site Tracker is running.")
        print(f"  Open:        {url}")
        print(f"  State file:  {STATE_FILE}")
        print("  Stop:        Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
