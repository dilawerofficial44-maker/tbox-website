// ── GA4 bootstrap ────────────────────────────────────────────────────────────
// Scripts injected via innerHTML/outerHTML don't execute, so GA4 must be
// initialised here via createElement instead of inside nav.html.
(function () {
  var GA_ID = 'G-B90NNFGHY7';
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { send_page_view: true });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
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
  const page = window.location.pathname;

  // 1. CTA clicks — primary + secondary action buttons
  document.querySelectorAll('a.btn-primary, a.btn-secondary, a.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', 'cta_click', {
        button_text: btn.innerText.trim(),
        destination: btn.getAttribute('href'),
        page_location: page
      });
    });
  });

  // 2. Nav link clicks
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'nav_click', {
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
      gtag('event', 'case_study_open', {
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
      gtag('event', 'blog_article_open', {
        article_slug: slug,
        source_page: page
      });
    });
  });

  // 5. Project page clicks (/projects/ technical architecture pages)
  document.querySelectorAll('a[href*="/projects/"]').forEach(link => {
    if (link.getAttribute('href') === '/projects/') return;
    link.addEventListener('click', () => {
      gtag('event', 'project_page_open', {
        project_name: link.getAttribute('href').replace('/projects/', '').replace('.html', ''),
        source_page: page
      });
    });
  });

  // 6. Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      gtag('event', 'contact_form_submit', {
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
        gtag('event', 'app_store_click', {
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
        gtag('event', isShare ? 'article_share' : 'outbound_link_click', {
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
        gtag('event', 'article_share', {
          platform: 'Twitter',
          link_url: url,
          page_location: page
        });
      });
      return;
    }

    // All other outbound links (Clutch, getbetterback, etc.)
    link.addEventListener('click', () => {
      gtag('event', 'outbound_link_click', {
        link_url: url,
        link_text: link.innerText.trim() || link.getAttribute('aria-label') || url,
        page_location: page
      });
    });
  });

  // 8. Mailto clicks (careers email, contact email)
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'email_click', {
        email_address: link.getAttribute('href').replace('mailto:', '').split('?')[0],
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
        gtag('event', 'scroll_depth', {
          depth_percent: m,
          page_title: document.title,
          page_location: page
        });
      }
    });
  }, { passive: true });

  // 10. Time on page — fires when tab is hidden / page unloads
  var _pageStart = Date.now();
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      gtag('event', 'time_on_page', {
        seconds: Math.round((Date.now() - _pageStart) / 1000),
        page_title: document.title,
        page_location: page
      });
    }
  });
});
