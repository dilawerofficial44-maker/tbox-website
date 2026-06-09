import React, { useState, useEffect } from 'react';

// ============================================================
// NAVBAR — Edit navLinks[] to change menu items
// ============================================================
const navLinks = [
  { label: 'Services',      href: '#services' },
  { label: 'Case Studies',  href: '#case-studies' },
  { label: 'How We Work',   href: '#how-we-work' },
  { label: 'Team',          href: '#team' },
  { label: 'Contact',       href: '#contact' },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    height: 72,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 6%',
    background: scrolled ? 'rgba(250,250,249,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(22px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
    transition: 'all 0.35s ease',
  };

  return (
    <>
      <nav style={navStyle}>
        {/* ---- Logo ---- */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '1.45rem', letterSpacing: '-0.03em', color: '#111110',
          }}>
            TBOX
          </span>
          <span style={{
            background: 'var(--bg-dark)', color: '#fff',
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700,
            padding: '3px 8px', borderRadius: 5, letterSpacing: '0.1em',
          }}>
            AI
          </span>
        </a>

        {/* ---- Desktop links ---- */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{
                fontSize: '0.88rem', fontWeight: 500,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* ---- Desktop CTA ---- */}
        <a
          href="#contact"
          className="nav-cta-desktop btn-primary"
          style={{ fontSize: '0.85rem', padding: '10px 22px' }}
          onMouseEnter={e => e.currentTarget.style.background = '#333333'}
          onMouseLeave={e => e.currentTarget.style.background = '#111110'}
        >
          Book Free AI Audit →
        </a>

        {/* ---- Hamburger ---- */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ color: '#111110', fontSize: '1.5rem' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* ---- Mobile drawer ---- */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
          background: 'rgba(250,250,249,0.98)',
          padding: '28px 6% 36px',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          display: 'flex', flexDirection: 'column', gap: 24,
          animation: 'fadeIn 0.2s ease',
        }}>
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
                fontSize: '1.1rem', fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ marginTop: 8, justifyContent: 'center' }}
          >
            Book Free AI Audit →
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
