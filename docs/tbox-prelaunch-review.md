# TBox Solutionz — Pre-Launch Review Brief

**Live (current) site:** https://tboxsolutionz.com  
**New site status:** Built locally, ready to upload to cPanel  
**Hosting:** Apache / cPanel shared hosting (traditional, no Node/PHP server)  
**Stack:** Pure static HTML + CSS + JS — no CMS, no framework, no build tool  
**Date prepared:** 25 July 2026

---

## Purpose of This Document

This document is a full record of what has been built, what SEO work has been done, what redirects are in place, and what is still pending before the new site goes live. The goal is to get a second opinion on whether anything is missing or should be addressed before upload.

---

## Site Structure — All Pages

| URL | Title | Notes |
|-----|-------|-------|
| `/` | TBox Solutionz — AI-Native Engineering Studio | Homepage |
| `/work/` | All Case Studies — TBox Solutionz | Case study listing |
| `/work/emushrif.html` | eMushrif Case Study | |
| `/work/spendlio.html` | Spendlio Case Study | |
| `/work/impause.html` | Impause Case Study | |
| `/work/betterback.html` | BetterBack Case Study | |
| `/work/smart-infra-platform.html` | Smart Infrastructure Platform Case Study | |
| `/work/us-neobank.html` | US Neobank Case Study | |
| `/projects/` | Projects — TBox Solutionz | Technical architecture listing (different from /work/) |
| `/projects/emushrif.html` | eMushrif — Technical Architecture | |
| `/projects/spendlio.html` | Spendlio — Technical Architecture | |
| `/projects/impause.html` | Impause — Technical Architecture | |
| `/projects/betterback.html` | BetterBack — Technical Architecture | |
| `/blog/` | Blog — TBox Solutionz | Blog listing |
| `/blog/mobile-app-stack-2026.html` | Building a Mobile App in 2026: Native vs. Cross-Platform | Published 2026-07-17 |
| `/blog/ai-agents-business-automation.html` | AI Agents in Production: What They Can Actually Automate | Published 2026-07-10 |
| `/blog/mobile-app-development-timeline.html` | The Real Mobile App Development Timeline in 2026 | Published 2026-07-03 |
| `/blog/fractional-cto-2026.html` | When Should a Startup Hire a Fractional CTO? | Published 2026-06-26 |
| `/blog/saas-mvp-scoping.html` | How to Scope Your SaaS MVP Without Wasting Six Months | Published 2026-06-19 |
| `/blog/offshore-development-myths.html` | What Founders Get Wrong About Offshore Development in 2026 | Published 2026-06-12 |
| `/careers.html` | Careers at TBox Solutionz — Join the Team | |
| `/contact.html` | Contact TBox Solutionz — Start a Project | |
| `/404.html` | Page Not Found — TBox Solutionz | Custom error page |

**Total pages: 25**

---

## SEO Implementation — What Is Done

### Meta Tags (all pages)
- `<title>` — unique per page ✅
- `<meta name="description">` — unique per page ✅
- `<link rel="canonical">` — set per page ✅
- `<meta name="robots" content="index, follow">` — present ✅
- `<meta name="robots" content="noindex, follow">` — on 404.html only ✅

### Open Graph / Social Sharing (all pages)
- `og:title` ✅
- `og:description` ✅
- `og:url` ✅
- `og:type` (`website` on main pages, `article` on blog posts) ✅
- `og:image` — set on all main pages and all 6 blog articles using per-article cover photos ✅
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` ✅

### Blog Articles — Additional SEO
- `<meta property="article:published_time">` — set with Pakistan Standard Time (UTC+5) timestamps ✅
- Full `Article` JSON-LD structured data on every blog post — includes: ✅
  - `headline`
  - `datePublished`
  - `author` — Dilawer Hussain, Founder & CEO
  - `image` (per-article cover photo)
  - `publisher` — links to organization schema via `@id`
  - `url`

### Organization Schema
- `Organization` JSON-LD on homepage — name, URL, logo, social profiles ✅

### Sitemap
- `sitemap.xml` in root — covers all 25 pages ✅
- Blog articles include `<lastmod>` dates ✅
- `/projects/` and all 4 project pages included ✅

### robots.txt
- Present in root ✅

### Favicon
- `favicon.ico` ✅
- `favicon-16.png`, `favicon-32.png`, `favicon-192.png` ✅
- `site.webmanifest` ✅

---

## SEO Migration — Redirects (.htaccess)

The current live site runs on WordPress. The new site is static HTML. The following 301 redirects are configured in `.htaccess` to preserve SEO equity from URLs that existed on the old site:

```apache
# HTTPS enforcement
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# WWW → non-www
RewriteCond %{HTTP_HOST} ^www\.tboxsolutionz\.com$ [NC]
RewriteRule ^ https://tboxsolutionz.com%{REQUEST_URI} [L,R=301]

# /blogs → /blog/  (1,051 page views confirmed via AWStats)
RewriteRule ^blogs/?$ /blog/ [L,R=301]
RewriteRule ^blogs/(.*)$ /blog/ [L,R=301]

# /feed/ → /blog/  (WordPress RSS, 834 confirmed views)
RewriteRule ^feed/?$ /blog/ [L,R=301]
RewriteRule ^feed/(.*)$ /blog/ [L,R=301]

# /company → /  (632 confirmed views)
RewriteRule ^company/?$ / [L,R=301]

# /careers → /careers.html
RewriteRule ^careers/?$ /careers.html [L,R=301]

# /projects/* unknown slugs → /projects/  (file-existence check so live pages are NOT redirected)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^projects/(.+)$ /projects/ [L,R=301]

# Custom 404
ErrorDocument 404 /404.html
```

**Why the redirect traffic numbers matter:** The current site receives approximately 430–570 real human visitors per month (source: AWStats Jan–Jul 2026). The `/blogs` and `/feed/` slugs alone account for ~1,900 historical hits that would 404 without these redirects.

---

## Technical Implementation Notes

### Nav / Footer Injection
- Nav and footer are stored as component HTML files: `/components/nav.html`, `/components/footer.html`
- They are injected into every page via `/js/components.js` using `data-component="nav"` / `data-component="footer"` attributes
- **Known limitation:** nav/footer require JavaScript to render. Users with JS disabled will see no nav. Crawlers can handle this but it adds a rendering step vs. static HTML.

### Contact Form
- Currently uses `action="mailto:info@tboxsolutionz.com"` — opens visitor's email client
- **Not a real form backend.** Planned fix: migrate to Formspree (`action="https://formspree.io/f/[id]"`, submissions to dilawer.official44@gmail.com)
- This is the one interactive feature that is not fully functional yet

### Analytics
- **No analytics script installed yet** — this is the only remaining Critical blocker before launch
- Plan: add GA4 or Plausible script tag to `/components/nav.html` so it applies to all pages automatically
- Plausible is preferred (cookieless, GDPR-compliant without a consent banner, <1KB)

### Directory Listing
- `Options -Indexes` set in `.htaccess` — visitors cannot browse folder contents ✅

---

## Known Issues — Not Yet Fixed

| # | Issue | Severity | Plan |
|---|-------|----------|------|
| 1 | No analytics installed | Critical | Add GA4 or Plausible before launch |
| 2 | Contact form uses `mailto:` | Medium | Formspree integration (PL-13) |
| 3 | Nav "Work" link → `/#work` anchor, not `/work/` | Medium | Update `components/nav.html` |
| 4 | `/projects/` pages missing canonical, og:image, og:title | Medium | Add meta tags to all 4 project pages |
| 5 | `/projects/` pages load external CDN (devicons) | Low | Self-host the icon font |
| 6 | Two draft files exist: `work/smart-infra-platform copy.html`, `work/us-neobank copy.html` | Low | Delete before uploading to cPanel |
| 7 | `TBox-Website-TypeA.html` prototype in root | Low | Delete before uploading to cPanel |

---

## What Has Been Built (New vs Old Site)

The old site was a WordPress install. The new site replaces it entirely with:

- New homepage with services, case study previews, process section, and contact CTA
- `/work/` section — 6 detailed case study pages + listing page (did not exist on old site as structured pages)
- `/projects/` section — 4 technical architecture deep-dives (preserved from old site at same URLs)
- `/blog/` section — 6 original articles with full SEO markup (Article JSON-LD, per-article OG images, published timestamps)
- `/careers.html` — new page, was missing entirely from old site
- `/contact.html` — new design with inline SVG illustration
- `/404.html` — custom branded error page
- `sitemap.xml` — covers all 25 pages
- `.htaccess` — HTTPS, www→non-www, and all SEO migration redirects

---

## Pre-Launch Checklist

- [ ] Install analytics (GA4 or Plausible) — **must do before upload**
- [ ] Delete `work/smart-infra-platform copy.html`
- [ ] Delete `work/us-neobank copy.html`
- [ ] Delete `TBox-Website-TypeA.html`
- [ ] Fix nav "Work" link from `/#work` → `/work/`
- [ ] Add canonical + og:image to `/projects/` pages
- [ ] Upload to cPanel / `public_html/`
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Test all .htaccess redirects on live server
- [ ] Submit a test contact form and verify email received
- [ ] Verify 404.html appears for broken URLs

---

## Question for Second Opinion

Given everything above:
1. Is there anything missing in the SEO implementation before this static HTML site goes live as a WordPress replacement?
2. Are the .htaccess redirect rules complete and correctly structured for an Apache/cPanel host?
3. Is there anything in the technical setup that could negatively affect Google rankings in the first 30–90 days after migration?
4. Any quick wins that are commonly missed in migrations like this?
