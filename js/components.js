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

  // ── Active nav link on scroll (Intersection Observer) ──
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
});
