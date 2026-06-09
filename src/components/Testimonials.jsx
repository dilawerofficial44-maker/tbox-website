import React from 'react';

// ============================================================
// TESTIMONIALS — Edit testimonials[] to update quotes
// ============================================================
const testimonials = [
  {
    quote:
      `TBox delivered our full marketplace in 5 weeks — 3× faster than any other agency quoted us. The AI fraud detection they embedded has been running with 94% precision since launch. Best tech partner we've worked with.`,
    name: 'Ahmad R.',
    title: 'CEO, SwapLink',
    metric: { value: '5 weeks', label: 'to full launch' },
    initials: 'AR',
    accent: 'var(--accent-green)',
  },
  {
    quote:
      `The AI-powered attendance and reporting features transformed how our schools operate. What used to take our staff 2 hours now takes minutes. TBox didn't just build software — they changed how we work.`,
    name: 'Dr. Khalid M.',
    title: 'Founder, eMushrif',
    metric: { value: '4×', label: 'faster reporting' },
    initials: 'KM',
    accent: '#00C4FF',
  },
  {
    quote:
      `We went from a rough product spec to a live monitored system in 12 weeks. The AI alert prioritization alone has reduced clinical staff alert fatigue by 60%. TBox understood our domain immediately.`,
    name: 'Sarah T.',
    title: 'CTO, eCare21',
    metric: { value: '60%', label: 'fewer false alerts' },
    initials: 'ST',
    accent: 'var(--accent-orange)',
  },
];

const Stars = ({ accent }) => (
  <div style={{ display: 'flex', gap: 4 }}>
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{ color: accent, fontSize: '0.95rem' }}>★</span>
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 560, marginBottom: 60 }}>
        <p className="section-label">// Client Testimonials</p>
        <h2 className="section-title">Don't Take Our Word For It</h2>
        <p className="section-sub">
          Here's what clients say after we've shipped — with the numbers to back it up.
        </p>
      </div>

      <div className="grid-3">
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 24,
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            transition: 'all 0.3s ease',
            boxShadow: '0 16px 32px rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `${t.accent}44`;
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.transform = 'none';
          }}
          >
            <Stars accent={t.accent} />

            <div style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 10,
              background: `${t.accent}14`,
              border: `1px solid ${t.accent}33`,
              borderRadius: 14,
              padding: '14px 18px',
              width: 'fit-content',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.6rem',
                color: t.accent,
                letterSpacing: '-0.03em',
              }}>{t.metric.value}</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}>{t.metric.label}</span>
            </div>

            <blockquote style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              lineHeight: 1.95,
              borderLeft: `4px solid ${t.accent}66`,
              paddingLeft: 18,
              fontStyle: 'italic',
              flex: 1,
            }}>
              "{t.quote}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: `${t.accent}20`,
                border: `2px solid ${t.accent}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.9rem',
                color: t.accent,
                flexShrink: 0,
              }}>{t.initials}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                }}>{t.name}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                }}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
