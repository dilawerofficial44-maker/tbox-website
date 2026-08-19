// ── Cookie consent + GA4 bootstrap ───────────────────────────────────────────
// Strategy: EU/UK visitors see a consent banner (GDPR/UK GDPR).
// Everyone else gets GA4 immediately — no banner, no friction.
// Geo result is cached in localStorage (30 days) so the lookup API
// is only called once per browser, never on return visits.
(function () {
  var CONSENT_KEY = 'tbox_cookie_consent';
  var GEO_KEY     = 'tbox_geo';           // stores {r:'eu'|'other', t:<timestamp>}
  var GEO_TTL     = 30 * 86400 * 1000;   // 30 days in ms
  var GA_ID       = 'G-B90NNFGHY7';
  var ga4Loaded   = false;

  // EU member states + UK (ISO 3166-1 alpha-2)
  var EU_UK = { GB:1,AT:1,BE:1,BG:1,CY:1,CZ:1,DE:1,DK:1,EE:1,
                ES:1,FI:1,FR:1,GR:1,HR:1,HU:1,IE:1,IT:1,LT:1,
                LU:1,LV:1,MT:1,NL:1,PL:1,PT:1,RO:1,SE:1,SI:1,SK:1 };

  // ── GA4 loader ────────────────────────────────────────────────────────────
  function loadGA4() {
    if (ga4Loaded) return;
    if (window.location.hostname !== 'tboxsolutionz.com') return;
    ga4Loaded = true;
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { send_page_view: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  // Fire GA4 after the page is fully loaded (never blocks rendering)
  function scheduleGA4() {
    if (document.readyState === 'complete') {
      loadGA4();
    } else {
      window.addEventListener('load', loadGA4);
    }
  }

  // ── Banner (shown only to EU/UK first-timers) ──────────────────────────────
  function dismissBanner(banner) {
    banner.style.transform = 'translateY(120%)';
    banner.style.opacity = '0';
    setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = [
      '<div class="cb-inner">',
        '<div class="cb-text">',
          '<p class="cb-title">This site uses cookies</p>',
          '<p class="cb-desc">We use Google Analytics to understand how visitors use this site. Analytics cookies are only set with your consent. See our <a href="/privacy.html">Privacy Policy</a> for details.</p>',
        '</div>',
        '<div class="cb-actions">',
          '<button class="cb-btn cb-decline" id="cb-decline">Decline</button>',
          '<button class="cb-btn cb-accept" id="cb-accept">Accept analytics</button>',
        '</div>',
      '</div>'
    ].join('');

    var style = document.createElement('style');
    style.textContent = [
      '#cookie-banner{',
        'position:fixed;bottom:1.25rem;left:50%;transform:translateX(-50%) translateY(0);',
        'z-index:9999;width:calc(100% - 2rem);max-width:720px;',
        'background:#fff;border:1px solid #ECEAE7;border-radius:14px;',
        'box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06);',
        'font-family:"IBM Plex Sans",system-ui,-apple-system,sans-serif;',
        'transition:transform 0.35s cubic-bezier(0.4,0,0.2,1),opacity 0.35s ease;',
      '}',
      '.cb-inner{display:flex;align-items:center;gap:1.5rem;padding:1rem 1.25rem;flex-wrap:wrap;}',
      '.cb-text{flex:1;min-width:200px;}',
      '.cb-title{font-size:14px;font-weight:600;color:#161412;margin-bottom:0.25rem;}',
      '.cb-desc{font-size:13px;color:#66645F;line-height:1.55;margin:0;}',
      '.cb-desc a{color:#E01B1B;text-decoration:none;}',
      '.cb-desc a:hover{text-decoration:underline;}',
      '.cb-actions{display:flex;gap:0.625rem;flex-shrink:0;flex-wrap:wrap;}',
      '.cb-btn{',
        'font-family:"IBM Plex Sans",system-ui,-apple-system,sans-serif;',
        'font-size:13px;font-weight:500;border-radius:8px;',
        'padding:0.5rem 1rem;cursor:pointer;border:none;white-space:nowrap;',
        'transition:background 0.15s,color 0.15s;',
      '}',
      '.cb-decline{background:#F3F1EE;color:#161412;}',
      '.cb-decline:hover{background:#E8E5E1;}',
      '.cb-accept{background:#E01B1B;color:#fff;}',
      '.cb-accept:hover{background:#b81212;}',
      '@media(max-width:520px){',
        '.cb-inner{flex-direction:column;align-items:flex-start;gap:0.875rem;}',
        '.cb-actions{width:100%;}',
        '.cb-btn{flex:1;text-align:center;}',
      '}',
      '@media(prefers-color-scheme:dark){',
        '#cookie-banner{background:#1E1C18;border-color:#2E2B25;}',
        '.cb-title{color:#F0EDE8;}',
        '.cb-desc{color:#A09C95;}',
        '.cb-decline{background:#2E2B25;color:#F0EDE8;}',
        '.cb-decline:hover{background:#3A3730;}',
      '}',
    ].join('');
    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('cb-accept').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      dismissBanner(banner);
      scheduleGA4();
    });
    document.getElementById('cb-decline').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'declined');
      dismissBanner(banner);
    });
  }

  // ── EU/UK path: respect stored consent, or show banner ────────────────────
  function handleEuUk() {
    var consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      scheduleGA4();
    } else if (consent !== 'declined') {
      // No decision yet — show banner after DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
      } else {
        showBanner();
      }
    }
    // 'declined' → GA4 never loads
  }

  // ── Non-EU/UK path: load GA4 freely, no banner ────────────────────────────
  function handleOther() {
    scheduleGA4();
  }

  // ── Geo detection ─────────────────────────────────────────────────────────
  // 1. Check localStorage cache first (zero network cost on return visits).
  // 2. On miss: call ipapi.co for the country code (plain-text, ~80 bytes).
  //    A 3 s timeout falls back to non-EU/UK so GA4 isn't blocked forever.
  // 3. On API error: treat as EU/UK (safer default — compliant).
  // 4. Cache result for 30 days.

  var cached = null;
  try {
    var raw = localStorage.getItem(GEO_KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && (Date.now() - parsed.t) < GEO_TTL) {
        cached = parsed.r; // 'eu' or 'other'
      } else {
        localStorage.removeItem(GEO_KEY); // expired
      }
    }
  } catch (e) {
    localStorage.removeItem(GEO_KEY);
  }

  if (cached === 'eu') {
    handleEuUk();
  } else if (cached === 'other') {
    handleOther();
  } else {
    // First visit — detect geo. Everything is async; page rendering is unblocked.
    var settled = false;

    var timer = setTimeout(function () {
      if (settled) return;
      settled = true;
      // Timed out — don't cache, retry next visit
      handleOther();
    }, 3000);

    fetch('https://ipapi.co/country/', { cache: 'no-store' })
      .then(function (res) { return res.text(); })
      .then(function (code) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        code = (code || '').trim().toUpperCase();
        var isEuUk = !!EU_UK[code];
        try {
          localStorage.setItem(GEO_KEY, JSON.stringify({ r: isEuUk ? 'eu' : 'other', t: Date.now() }));
        } catch (e) {}
        if (isEuUk) { handleEuUk(); } else { handleOther(); }
      })
      .catch(function () {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        // API failed — don't cache, treat as EU/UK to stay compliant
        handleEuUk();
      });
  }
})();

async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(path);
  if (!res.ok) return;
  el.outerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('nav-placeholder', '/components/nav.html'),
    loadComponent('footer-placeholder', '/components/footer.html'),
  ]);

  // ── Mobile hamburger toggle ──────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    // Close menu when a nav link is tapped
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // ── Active nav link — page match + scroll-based section highlight ──
  const allNavLinks = document.querySelectorAll('.navbar-nav li a:not(.btn)');
  const currentPath = window.location.pathname;

  // Mark a page-level link active (e.g. /blog/, /careers.html)
  // Normalize by stripping .html so /careers and /careers.html both match
  const normPath = p => p.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.includes('#')) return;
    const linkPath = normPath(new URL(href, window.location.origin).pathname);
    const cur = normPath(currentPath);
    if (linkPath === cur || (linkPath !== '/' && cur.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });

  // Scroll-based section highlight for anchor links (homepage sections)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav li a[href*="#"]');

  function setActive(id) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const matches = href === `#${id}` || href === `/#${id}`;
      link.classList.toggle('active', matches);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));

  // ── Analytics event tracking ──────────────────────────────────────────────
  // gtag is only defined on the live domain — no-op on localhost
  const _gtag = typeof gtag === 'function' ? gtag : () => {};
  const page = window.location.pathname;

  // 1. CTA clicks — primary + secondary action buttons
  document.querySelectorAll('a.btn-primary, a.btn-secondary, a.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _gtag('event', 'cta_click', {
        button_text: btn.innerText.trim(),
        destination: btn.getAttribute('href'),
        page_location: page
      });
    });
  });

  // 2. Nav link clicks
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      _gtag('event', 'nav_click', {
        nav_item: link.innerText.trim(),
        destination: link.getAttribute('href')
      });
    });
  });

  // 3. Case study card clicks (homepage + /work/ listing)
  document.querySelectorAll('a.work-card-link, a[href*="/work/"]').forEach(card => {
    card.addEventListener('click', () => {
      const href = card.getAttribute('href') || '';
      const slug = href.split('/').pop().replace('.html', '') || href;
      _gtag('event', 'case_study_open', {
        case_study_name: slug,
        source_page: page
      });
    });
  });

  // 4. Blog article clicks (listing page + related posts)
  document.querySelectorAll('a[href*="/blog/"]').forEach(link => {
    if (link.getAttribute('href') === '/blog/') return;
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      const slug = href.split('/').pop().replace('.html', '') || href;
      _gtag('event', 'blog_article_open', {
        article_slug: slug,
        source_page: page
      });
    });
  });

  // 5. Project page clicks (/projects/ technical architecture pages)
  document.querySelectorAll('a[href*="/projects/"]').forEach(link => {
    if (link.getAttribute('href') === '/projects/') return;
    link.addEventListener('click', () => {
      _gtag('event', 'project_page_open', {
        project_name: link.getAttribute('href').replace('/projects/', '').replace('.html', ''),
        source_page: page
      });
    });
  });

  // 6. Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      _gtag('event', 'contact_form_submit', {
        form_name: 'contact',
        page_location: page
      });
    });
  }

  // 7. Outbound link clicks (external domains)
  document.querySelectorAll('a[href^="https://"]').forEach(link => {
    const url = link.getAttribute('href');
    if (url.includes('tboxsolutionz.com')) return;

    // App Store — tracked separately for higher-value signal
    if (url.includes('apps.apple.com') || url.includes('play.google.com')) {
      link.addEventListener('click', () => {
        _gtag('event', 'app_store_click', {
          store: url.includes('apps.apple.com') ? 'App Store' : 'Google Play',
          link_url: url,
          page_location: page
        });
      });
      return;
    }

    // LinkedIn share / company page
    if (url.includes('linkedin.com')) {
      link.addEventListener('click', () => {
        const isShare = url.includes('sharing');
        _gtag('event', isShare ? 'article_share' : 'outbound_link_click', {
          platform: 'LinkedIn',
          link_url: url,
          page_location: page
        });
      });
      return;
    }

    // Twitter/X share
    if (url.includes('twitter.com')) {
      link.addEventListener('click', () => {
        _gtag('event', 'article_share', {
          platform: 'Twitter',
          link_url: url,
          page_location: page
        });
      });
      return;
    }

    // Clutch — tracked separately as a high-value trust signal
    if (url.includes('clutch.co')) {
      link.addEventListener('click', () => {
        _gtag('event', 'clutch_click', {
          link_url: url,
          page_location: page
        });
      });
      return;
    }

    // All other outbound links
    link.addEventListener('click', () => {
      _gtag('event', 'outbound_link_click', {
        link_url: url,
        link_text: link.innerText.trim() || link.getAttribute('aria-label') || url,
        page_location: page
      });
    });
  });

  // 8. Mailto clicks (careers email, contact email)
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    const href = link.getAttribute('href') || '';
    const isCareersApply = href.includes('careers@') && page.includes('careers');
    const isJoinTeam = href.includes('careers@') && !page.includes('careers');

    link.addEventListener('click', () => {
      if (isCareersApply) {
        const subject = href.includes('subject=') ? decodeURIComponent(href.split('subject=')[1]) : '';
        _gtag('event', 'career_apply_click', {
          role: subject.replace('Application —', '').replace('Application', '').trim() || 'General',
          page_location: page
        });
      } else if (isJoinTeam) {
        _gtag('event', 'join_team_click', {
          page_location: page
        });
      }
      _gtag('event', 'email_click', {
        email_address: href.replace('mailto:', '').split('?')[0],
        page_location: page
      });
    });
  });

  // 9. Scroll depth — fires at 25 / 50 / 75 / 90%
  const depthMilestones = [25, 50, 75, 90];
  const fired = new Set();
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY + window.innerHeight;
    const total = document.documentElement.scrollHeight;
    const pct = Math.round((scrolled / total) * 100);
    depthMilestones.forEach(m => {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        _gtag('event', 'scroll_depth', {
          depth_percent: m,
          page_title: document.title,
          page_location: page
        });
      }
    });
  }, { passive: true });

  // 10. Carousel interactions — work carousel + testimonials
  document.querySelectorAll('#carousel-prev, #carousel-next').forEach(btn => {
    btn.addEventListener('click', () => {
      _gtag('event', 'work_carousel_interaction', {
        direction: btn.id.includes('prev') ? 'prev' : 'next',
        page_location: page
      });
    });
  });

  document.querySelectorAll('#testimonial-prev, #testimonial-next').forEach(btn => {
    btn.addEventListener('click', () => {
      _gtag('event', 'testimonial_interaction', {
        direction: btn.id.includes('prev') ? 'prev' : 'next',
        page_location: page
      });
    });
  });

  // 11. Related articles — renders 2–3 cards before the author card on blog pages
  (function () {
    const catalog = [
      { slug: 'ai-native-architecture',              title: 'How We Made Existing Software Operable by AI',              tag: 'Software Architecture', img: '/assets/images/blog/ai-native-architecture.webp',  date: 'Aug 2, 2026',   read: '12 min' },
      { slug: 'founder-stack-building-products-ai-era', title: 'The Founder Stack: Building Successful Products in the AI Era', tag: 'Product Strategy',    img: '/assets/images/blog/founder-stack.webp',          date: 'Jul 31, 2026',  read: '7 min' },
      { slug: 'mobile-app-stack-2026',               title: 'Building a Mobile App in 2026: Native vs. Cross-Platform',   tag: 'Mobile Development',  img: '/assets/images/blog/mobile-stack.webp',           date: 'Jul 17, 2026',  read: '6 min' },
      { slug: 'ai-agents-business-automation',       title: 'AI Agents in Production: What They Can Actually Automate',  tag: 'AI & Automation',     img: '/assets/images/blog/ai-agents.webp',              date: 'Jul 10, 2026',  read: '7 min' },
      { slug: 'mobile-app-development-timeline',     title: 'The Real Mobile App Development Timeline in 2026',         tag: 'Mobile Development',  img: '/assets/images/blog/app-timeline.webp',           date: 'Jul 3, 2026',   read: '6 min' },
      { slug: 'fractional-cto-2026',                 title: 'When Should a Startup Hire a Fractional CTO?',             tag: 'Startup Strategy',    img: '/assets/images/blog/fractional-cto.webp',         date: 'Jun 26, 2026',  read: '5 min' },
      { slug: 'saas-mvp-scoping',                    title: 'How to Scope Your SaaS MVP Without Wasting Six Months',    tag: 'Product Strategy',    img: '/assets/images/blog/saas-mvp.webp',               date: 'Jun 19, 2026',  read: '5 min' },
      { slug: 'offshore-development-myths',          title: 'Offshore Development Isn\'t the Problem. Bad Engagement Models Are.',       tag: 'Engineering',         img: '/assets/images/blog/offshore-dev.webp',           date: 'Jun 12, 2026',  read: '6 min' },
    ];

    const anchor = document.querySelector('.ba-author-card');
    if (!anchor) return;

    // Identify current article from URL slug
    const currentSlug = window.location.pathname.split('/').pop().replace('.html', '');
    const current = catalog.find(a => a.slug === currentSlug);
    if (!current) return;

    // Pick up to 3 related: same tag first, then fill from others, never self
    const sameTag = catalog.filter(a => a.slug !== currentSlug && a.tag === current.tag);
    const others  = catalog.filter(a => a.slug !== currentSlug && a.tag !== current.tag);
    const related = [...sameTag, ...others].slice(0, 3);
    if (!related.length) return;

    const cards = related.map(a => `
      <a href="/blog/${a.slug}.html" class="ra-card">
        <div class="ra-img-wrap"><img src="${a.img}" alt="${a.title}" width="360" height="200" loading="lazy"></div>
        <div class="ra-body">
          <span class="ra-tag">${a.tag}</span>
          <p class="ra-title">${a.title}</p>
          <span class="ra-meta">${a.date} &middot; ${a.read} read</span>
        </div>
      </a>`).join('');

    const section = document.createElement('div');
    section.className = 'ra-section';
    section.innerHTML = `<h3 class="ra-heading">More articles</h3><div class="ra-grid">${cards}</div>`;
    anchor.parentNode.insertBefore(section, anchor);
  })();

  // 12. Time on page — fires when tab is hidden / page unloads
  var _pageStart = Date.now();
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      _gtag('event', 'time_on_page', {
        seconds: Math.round((Date.now() - _pageStart) / 1000),
        page_title: document.title,
        page_location: page
      });
    }
  });
});
