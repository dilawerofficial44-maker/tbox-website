// ── Spendlio GA4 + event tracking ────────────────────────────────────────────
// Geo-gated consent (EU/UK get banner, everyone else tracked immediately).
// Same logic as components.js — self-contained for the /spendlio/ microsite.
(function () {
  var CONSENT_KEY = 'tbox_cookie_consent';
  var GEO_KEY     = 'tbox_geo';
  var GEO_TTL     = 30 * 86400 * 1000;
  var GA_ID       = 'G-B90NNFGHY7';
  var ga4Loaded   = false;

  var EU_UK = { GB:1,AT:1,BE:1,BG:1,CY:1,CZ:1,DE:1,DK:1,EE:1,
                ES:1,FI:1,FR:1,GR:1,HR:1,HU:1,IE:1,IT:1,LT:1,
                LU:1,LV:1,MT:1,NL:1,PL:1,PT:1,RO:1,SE:1,SI:1,SK:1 };

  // ── GA4 loader ──────────────────────────────────────────────────────────────
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
    attachEvents();
  }

  function scheduleGA4() {
    if (document.readyState === 'complete') { loadGA4(); }
    else { window.addEventListener('load', loadGA4); }
  }

  // ── Event tracking ──────────────────────────────────────────────────────────
  function track(name, params) {
    if (typeof gtag !== 'function') return;
    gtag('event', name, params || {});
  }

  function attachEvents() {
    // Event delegation — catches all clicks regardless of React re-renders
    document.addEventListener('click', function (e) {
      var el = e.target;
      // Walk up max 4 levels to find an <a> or <button>
      for (var i = 0; i < 4; i++) {
        if (!el || el === document.body) break;
        var tag  = el.tagName;
        var text = (el.innerText || '').trim();
        var href = el.href || '';

        // App Store download buttons (button text or href contains App Store)
        if ((tag === 'BUTTON' || tag === 'A') &&
            (text.toLowerCase().includes('download') || text.toLowerCase().includes('app store'))) {
          var loc = 'cta';
          var cls = (el.className || '');
          // Distinguish nav Download from hero/mid-page by position in DOM
          var inNav = !!el.closest('nav, header');
          if (inNav) loc = 'nav';
          else if (el.closest('[class*="hero"], [class*="Hero"]')) loc = 'hero';
          track('app_store_click', { location: loc, label: text });
          break;
        }

        // Watch Demo
        if ((tag === 'BUTTON' || tag === 'A') && text.toLowerCase().includes('watch demo')) {
          track('demo_click', { label: 'watch_demo' });
          break;
        }

        // See All Features
        if (tag === 'A' && text.toLowerCase().includes('see all features')) {
          track('features_page_click', { label: 'see_all_features' });
          break;
        }

        // Features nav link
        if (tag === 'A' && text === 'Features' && href.includes('#features')) {
          track('nav_click', { label: 'features_anchor' });
          break;
        }

        // Blog article links
        if (tag === 'A' && text.toLowerCase().includes('read')) {
          track('blog_click', { label: href });
          break;
        }

        // Support mailto
        if (tag === 'A' && href.startsWith('mailto:')) {
          track('support_click', { label: href.replace('mailto:', '') });
          break;
        }

        // Privacy link
        if (tag === 'A' && text.toLowerCase() === 'privacy') {
          track('nav_click', { label: 'privacy' });
          break;
        }

        el = el.parentElement;
      }
    }, true); // capture phase so React's synthetic events don't interfere

    // Scroll depth — fires once each at 25 / 50 / 75 / 100%
    var depths = [25, 50, 75, 100];
    var fired  = {};
    function checkScroll() {
      var scrolled = window.scrollY + window.innerHeight;
      var total    = document.documentElement.scrollHeight;
      var pct      = Math.round((scrolled / total) * 100);
      depths.forEach(function (d) {
        if (!fired[d] && pct >= d) {
          fired[d] = true;
          track('scroll_depth', { depth: d });
        }
      });
    }
    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  // ── Consent banner (EU/UK only) ─────────────────────────────────────────────
  function dismissBanner(banner) {
    banner.style.transform = 'translateY(120%)';
    banner.style.opacity = '0';
    setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
  }

  function showBanner() {
    if (document.getElementById('sp-cookie-banner')) return;
    var banner = document.createElement('div');
    banner.id = 'sp-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="sp-cb-inner">' +
        '<div class="sp-cb-text">' +
          '<p class="sp-cb-title">This site uses cookies</p>' +
          '<p class="sp-cb-desc">We use Google Analytics to understand how visitors use Spendlio. Analytics cookies are only set with your consent.</p>' +
        '</div>' +
        '<div class="sp-cb-actions">' +
          '<button class="sp-cb-btn sp-cb-decline" id="sp-cb-decline">Decline</button>' +
          '<button class="sp-cb-btn sp-cb-accept" id="sp-cb-accept">Accept</button>' +
        '</div>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '#sp-cookie-banner{position:fixed;bottom:1.25rem;left:50%;transform:translateX(-50%);' +
      'z-index:9999;width:calc(100% - 2rem);max-width:680px;background:#fff;' +
      'border:1px solid #e2e8f0;border-radius:14px;' +
      'box-shadow:0 8px 32px rgba(0,0,0,0.12);' +
      'font-family:Inter,-apple-system,sans-serif;' +
      'transition:transform .35s cubic-bezier(.4,0,.2,1),opacity .35s ease;}' +
      '.sp-cb-inner{display:flex;align-items:center;gap:1.5rem;padding:1rem 1.25rem;flex-wrap:wrap;}' +
      '.sp-cb-text{flex:1;min-width:180px;}' +
      '.sp-cb-title{font-size:14px;font-weight:600;color:#0f172a;margin:0 0 .25rem;}' +
      '.sp-cb-desc{font-size:13px;color:#64748b;line-height:1.5;margin:0;}' +
      '.sp-cb-actions{display:flex;gap:.5rem;flex-shrink:0;}' +
      '.sp-cb-btn{font-family:inherit;font-size:13px;font-weight:500;border-radius:8px;' +
      'padding:.5rem 1rem;cursor:pointer;border:none;white-space:nowrap;transition:background .15s;}' +
      '.sp-cb-decline{background:#f1f5f9;color:#0f172a;}' +
      '.sp-cb-decline:hover{background:#e2e8f0;}' +
      '.sp-cb-accept{background:#1d4ed8;color:#fff;}' +
      '.sp-cb-accept:hover{background:#1e40af;}' +
      '@media(max-width:500px){.sp-cb-inner{flex-direction:column;gap:.75rem;}' +
      '.sp-cb-actions{width:100%;}.sp-cb-btn{flex:1;text-align:center;}}';
    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('sp-cb-accept').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      dismissBanner(banner);
      scheduleGA4();
    });
    document.getElementById('sp-cb-decline').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'declined');
      dismissBanner(banner);
    });
  }

  // ── Routing ─────────────────────────────────────────────────────────────────
  function handleEuUk() {
    var consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') { scheduleGA4(); }
    else if (consent !== 'declined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner);
      } else { showBanner(); }
    }
  }

  function handleOther() { scheduleGA4(); }

  // ── Geo detection (cached 30 days) ──────────────────────────────────────────
  var cached = null;
  try {
    var raw = localStorage.getItem(GEO_KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && (Date.now() - parsed.t) < GEO_TTL) cached = parsed.r;
      else localStorage.removeItem(GEO_KEY);
    }
  } catch (e) { localStorage.removeItem(GEO_KEY); }

  if (cached === 'eu') { handleEuUk(); }
  else if (cached === 'other') { handleOther(); }
  else {
    var settled = false;
    var timer = setTimeout(function () {
      if (settled) return;
      settled = true;
      handleOther();
    }, 3000);

    fetch('https://ipapi.co/country/', { cache: 'no-store' })
      .then(function (r) { return r.text(); })
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
        handleEuUk();
      });
  }
})();
