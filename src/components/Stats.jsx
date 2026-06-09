import React from 'react';

// ============================================================
// STATS — Edit metrics[] to update numbers and labels
// ============================================================
const metrics = [
  { value: '43+',  label: 'Projects Delivered',   note: 'Across 8 countries' },
  { value: '6',    label: 'Weeks Average Delivery', note: 'Versus 6-month industry average' },
  { value: '12+',  label: 'AI Agents Built',        note: 'Live in production' },
  { value: '98%',  label: 'Client Retention Rate',  note: 'Long-term partnerships' },
];

const Stats = () => (
  <section style={{
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-subtle)',
    borderBottom: '1px solid var(--border-subtle)',
    padding: '72px 6%',
  }}>
    <div style={{
      maxWidth: 1200, margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 28,
    }}>
      {metrics.map((m, i) => (
        <div key={i} style={{
          display: 'flex', flexDirection: 'column', gap: 12,
          background: 'var(--bg-card)',
          padding: '28px 26px',
          borderRadius: 24,
          boxShadow: '0 18px 45px rgba(9, 27, 42, 0.08)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2.1rem, 4vw, 3rem)',
            letterSpacing: '-0.04em',
            color: 'var(--accent-green)',
            lineHeight: 1,
          }}>{m.value}</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            lineHeight: 1.4,
          }}>{m.label}</span>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
          }}>{m.note}</span>
        </div>
      ))}
    </div>

    <div style={{
      maxWidth: 1200, margin: '56px auto 0',
      display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
      padding: '0 2px',
    }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: '0.78rem',
        fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase',
        letterSpacing: '0.18em', whiteSpace: 'nowrap',
      }}>Trusted by</span>
      <div style={{ height: 1, flex: 1, background: 'var(--border-subtle)', minWidth: 20 }} />
      {['eMushrif', 'SwapLink', 'Carigo', 'eCare21', 'Fotki', 'Enfiny'].map(name => (
        <span key={name} style={{
          fontFamily: 'var(--font-body)', fontWeight: 700,
          fontSize: '0.92rem', color: 'var(--text-muted)',
          letterSpacing: '-0.01em', transition: 'color 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >{name}</span>
      ))}
    </div>
  </section>
);

export default Stats;
