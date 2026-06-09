import React from 'react';

// ============================================================
// FOOTER — Update links and social handles
// ============================================================
const footerLinks = {
  Services: [
    { label: 'AI Agent Development', href: '#services' },
    { label: 'AI-Augmented Engineering', href: '#services' },
    { label: 'AI Strategy & Integration', href: '#services' },
    { label: 'Free AI Audit', href: '#contact' },
  ],
  Company: [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Team', href: '#team' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#contact' },
  ],
  Connect: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter/X', href: 'https://twitter.com' },
    { label: 'Upwork', href: 'https://upwork.com' },
  ],
};

const Footer = () => (
  <footer style={{
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-subtle)',
    padding: '80px 6% 40px',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: 48,
        marginBottom: 64,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.45rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}>TBOX</span>
            <span style={{
              background: 'var(--accent-green)',
              color: '#000',
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 6,
              letterSpacing: '0.12em',
            }}>AI</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.85,
            maxWidth: 300,
            marginBottom: 24,
          }}>
            AI-native software engineering. We build faster, solve smarter, and ship
            products that actually work — powered by AI at every step.
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '0.88rem', padding: '12px 22px' }}>
            Book Free AI Audit →
          </a>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              marginBottom: 22,
            }}>{title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0, margin: 0 }}>
              {links.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        padding: '24px 0',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: 32,
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>Built with</span>
        {['React', 'Next.js', 'Python', 'Node.js', 'OpenAI', 'Claude API', 'LangChain', 'AWS', 'Cursor', 'GitHub Copilot'].map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
        }}>
          © {new Date().getFullYear()} TBox Solutionz. All rights reserved.
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}>
          Built AI-native · Shipped fast ·{' '}
          <span style={{ color: 'var(--accent-green)' }}>Pakistan 🇵🇰</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
