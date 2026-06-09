import React from 'react';

// ============================================================
// BLOG — Edit posts[] to update article cards
// ============================================================
const posts = [
  {
    tag: 'Engineering',
    title: 'How We Cut Development Time 40% Using AI Pair Programming',
    excerpt:
      'We tracked 6 months of sprints before and after adopting Cursor + GitHub Copilot. Here\'s the honest data — including where AI made things worse.',
    date: 'Apr 22, 2026',
    readTime: '7 min read',
    accent: 'var(--accent-green)',
    href: '#',
  },
  {
    tag: 'AI Strategy',
    title: 'The 5 AI Agents Every SaaS Product Needs in 2026',
    excerpt:
      'From onboarding assistants to anomaly detectors — these are the AI agents that actually move retention and engagement numbers, based on what we\'ve shipped.',
    date: 'Apr 8, 2026',
    readTime: '9 min read',
    accent: '#00C4FF',
    href: '#',
  },
  {
    tag: 'Agency Life',
    title: 'From Staff Aug to AI-Native: Why We Rebuilt Our Entire Delivery Model',
    excerpt:
      'Two years ago we were a conventional dev shop. Here\'s exactly how — and why — we transformed into an AI-native agency, and what it actually means in practice.',
    date: 'Mar 15, 2026',
    readTime: '11 min read',
    accent: 'var(--accent-orange)',
    href: '#',
  },
];

const Blog = () => (
  <section id="blog" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 60,
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div style={{ maxWidth: 480 }}>
          <p className="section-label">// Insights</p>
          <h2 className="section-title">We Write About<br />What We Build</h2>
        </div>
        <a href="#" style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: 'var(--accent-green)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          transition: 'gap 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '12px'}
        onMouseLeave={e => e.currentTarget.style.gap = '8px'}
        >All articles →</a>
      </div>

      <div className="grid-3">
        {posts.map((p, i) => (
          <a
            key={i}
            href={p.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 24,
              overflow: 'hidden',
              transition: 'all 0.28s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${p.accent}44`;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ height: 3, background: p.accent }} />

            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: p.accent,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  background: `${p.accent}14`,
                  border: `1px solid ${p.accent}33`,
                  padding: '6px 14px',
                  borderRadius: 999,
                }}>{p.tag}</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}>{p.readTime}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
              }}>{p.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}>{p.excerpt}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}>{p.date}</span>
                <span style={{ color: p.accent, fontSize: '1.05rem' }}>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div style={{
        marginTop: 56,
        padding: '42px 40px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 24,
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'var(--accent-green)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}>Newsletter</p>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.55rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: 12,
        }}>AI in Software Engineering — Weekly</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          marginBottom: 28,
          lineHeight: 1.8,
        }}>
          Practical insights on AI tools, agent design, and shipping software faster. No fluff.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 12,
              padding: '14px 20px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              outline: 'none',
              width: 300,
              minWidth: '220px',
            }}
          />
          <button className="btn-primary">Subscribe →</button>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
