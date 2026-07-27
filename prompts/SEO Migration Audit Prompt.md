# SEO Migration Audit Prompt

You are acting as a Senior Technical SEO Consultant and Website Migration Specialist.

## Context

We are planning to replace the current production website:

**Current Live Website**
http://tboxsolutionz.com

with a completely redesigned version that exists locally in this project.

The redesign focuses on:

* AI-native agency positioning
* Better UI/UX
* Lightweight pages
* Better Lighthouse score
* Faster loading
* Improved developer experience
* Better SEO

However, I DO NOT want to lose any existing SEO equity from the current website.

Your task is to perform a complete SEO migration audit and provide a detailed report before deployment.

---

# Phase 1 — Crawl Existing Website

Analyze the current production website.

Produce a complete inventory of:

* All URLs
* Page titles
* Meta descriptions
* Canonical tags
* H1/H2 hierarchy
* Structured Data (Schema)
* OpenGraph tags
* Twitter Cards
* Robots directives
* Sitemap.xml
* robots.txt
* Internal links
* Breadcrumbs
* Image alt text
* URL structure
* Navigation structure
* Footer links

Also identify:

* Pages likely receiving SEO value
* Service pages
* Blog pages
* Landing pages
* Indexable pages
* Non-indexable pages

---

# Phase 2 — Analyze Local Website

Inspect the local project.

Generate the same inventory.

Compare against the live website.

---

# Phase 3 — SEO Gap Analysis

Identify everything that has changed.

Examples:

Missing pages

Changed URLs

Missing titles

Missing meta descriptions

Missing H1

Multiple H1s

Canonical issues

Schema removed

Structured data changes

Broken internal links

Missing OpenGraph

Missing Twitter Cards

Missing image alt text

Duplicate titles

Duplicate meta descriptions

Thin pages

Pages with insufficient content

Incorrect heading hierarchy

Missing sitemap

Robots issues

Missing favicon

Missing manifest

Missing structured navigation

---

# Phase 4 — Migration Risk Report

For every issue provide:

Severity

Critical

High

Medium

Low

Also explain:

Why it affects SEO

Potential ranking impact

How to fix it

Estimated implementation effort

---

# Phase 5 — URL Mapping

Compare every page.

Create a table:

Old URL

New URL

Redirect Required?

301 Destination

Status

Examples:

Keep

Redirect

Merge

Delete

Needs Review

Highlight any live page that has no destination.

---

# Phase 6 — Content Preservation

Compare page content.

Detect whether valuable keyword content has been removed.

Examples:

Services

Industry pages

Portfolio

Case studies

About

Contact

Blog

Explain if removing content could reduce rankings.

---

# Phase 7 — Technical SEO Audit

Audit:

HTML semantics

Heading hierarchy

Accessibility

Structured Data

JSON-LD

Canonical tags

Meta robots

Pagination

Internal linking

Core Web Vitals readiness

Image optimization

Lazy loading

CLS risks

LCP risks

Unused JS

Unused CSS

Render blocking resources

Font loading

Prefetch/preconnect

Caching opportunities

Compression

Security headers

HTTPS assumptions

404 handling

500 handling

Custom error pages

---

# Phase 8 — AI Agency Positioning

Evaluate whether the new website is positioned better than the current one.

Review:

Homepage messaging

Service pages

CTAs

Trust signals

Case studies

Portfolio

Industry positioning

Brand clarity

Conversion opportunities

Suggest improvements while preserving SEO.

---

# Phase 9 — Deliverables

Generate the following files inside /seo-audit/

1. seo-migration-report.md

2. migration-checklist.md

3. redirect-map.csv

4. page-comparison.csv

5. technical-seo-report.md

6. content-gap-analysis.md

7. ai-positioning-review.md

8. pre-launch-checklist.md

9. post-launch-monitoring.md

---

# Requirements

Do NOT only run Lighthouse.

Actually inspect:

* source code
* routing
* metadata
* layouts
* components
* generated HTML
* robots
* sitemap
* schema
* internal linking

If browser automation is available, crawl both websites.

If not, inspect the codebase directly.

Whenever possible, provide concrete examples with affected URLs.

Finally assign an overall migration risk score:

Low Risk

Medium Risk

High Risk

Critical Risk

along with the estimated probability of losing SEO traffic if the site is launched today.

Your goal is to ensure that replacing the current website causes minimal SEO loss while improving overall technical SEO, performance, and conversion potential.
