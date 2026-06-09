import React, { useState } from 'react';

// ============================================================
// CASE STUDIES — Updated to showcase outcome-driven production launches
// ============================================================
const caseStudies = [
  {
    tag: 'EdTech · AI Platform',
    name: 'eMushrif',
    headline: 'AI-powered school management platform serving 50,000+ students',
    challenge:
      'A regional school network needed a scalable platform to manage attendance, parent communication, and academic performance — while adding intelligent insights for teachers.',
    solution:
      'Built a full-stack EdTech platform with AI-driven attendance tracking, NLP-powered progress reports, and a predictive analytics dashboard for administrators.',
    metrics: [
      { value: '50K+', label: 'Students on platform' },
      { value: '4×', label: 'Faster reporting' },
      { value: '18 wks', label: 'Delivery time' },
    ],
    stack: ['React', 'Node.js', 'Python', 'OpenAI', 'PostgreSQL', 'AWS'],
    accent: 'var(--accent-green)',
  },
  {
    tag: 'HealthTech · Analytics',
    name: 'eCare21',
    headline: 'Remote patient monitoring with AI risk prediction',
    challenge:
      'Healthcare needed real-time monitoring for chronic patients without overwhelming clinical staff with noise.',
    solution:
      'Deployed an ML risk-scoring engine for wearables, and built a clinical dashboard with smart alerts and prioritized patient triage.',
    metrics: [
      { value: '82%', label: 'Alert accuracy' },
      { value: '60%', label: 'Fewer false alarms' },
      { value: '12 wks', label: 'MVP launch' },
    ],
    stack: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'HL7 FHIR'],
    accent: '#1F8BFF',
  },
  {
    tag: 'Marketplace · SaaS',
    name: 'SwapLink',
    headline: 'P2P exchange marketplace with AI-powered fraud detection',
    challenge:
      'A startup needed a launch-ready marketplace fast, with intelligent fraud prevention from day one.',
    solution:
      'Shipped the marketplace in 5 weeks and embedded anomaly detection plus trust scoring to protect early users.',
    metrics: [
      { value: '5 wks', label: 'MVP launch' },
      { value: '94%', label: 'Fraud precision' },
      { value: '3×', label: 'Faster than scoped' },
    ],
    stack: ['Next.js', 'Node.js', 'Stripe', 'OpenAI', 'MongoDB', 'Vercel'],
    accent: 'var(--accent-orange)',
  },
];

const CaseStudyCard = ({ cs }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card" style={{ overflow: 'hidden', boxShadow: '0 20px 70px rgba(17, 24, 39, 0.08)' }}>
      <div style={{ height: 4, background: cs.accent }} />
      <div style={{ padding: '34px' }}>
        <span className="tag tag-green" style={{
          color: cs.accent,
          borderColor: `${cs.accent}44`,
          background: `${cs.accent}14`,
        }}>
          {cs.tag}
        </span>

        <div style={{ margin: '22px 0 18px' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: 14,
          }}>{cs.name}</h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.96rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            margin: 0,
          }}>{cs.headline}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 16,
          margin: '22px 0',
          padding: '22px',
          borderRadius: 18,
          background: `${cs.accent}0F`,
          border: `1px solid ${cs.accent}22`,
        }}>
          {cs.metrics.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: cs.accent,
                letterSpacing: '-0.02em',
              }}>{m.value}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: 6,
              }}>{m.label}</div>
            </div>
          ))}
        </div>

        {expanded && (
          <div style={{ animation: 'fadeInUp 0.3s ease' }}>
            <div style={{ marginBottom: 18 }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>Challenge</p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}>{cs.challenge}</p>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>Our Solution</p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}>{cs.solution}</p>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '22px 0 18px' }}>
          {cs.stack.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <button
          onClick={() => setExpanded(prev => !prev)}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: cs.accent,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {expanded ? '↑ Show less' : '↓ Read full case study'}
        </button>
      </div>
    </div>
  );
};

const CaseStudies = () => (
  <section id="case-studies" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 640, marginBottom: 60 }}>
        <p className="section-label">// Case Studies</p>
        <h2 className="section-title">Real projects, measurable AI outcomes.</h2>
        <p className="section-sub">
          We’ve shipped AI-enabled products into production for real customers, with fast delivery and proven results.
        </p>
      </div>

      <div className="grid-3">
        {caseStudies.map((cs, i) => <CaseStudyCard key={i} cs={cs} />)}
      </div>
    </div>
  </section>
);

export default CaseStudies;
