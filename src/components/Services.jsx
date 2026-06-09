import React, { useState } from 'react';

// ============================================================
// SERVICES — Updated cards and messaging for AI-first delivery
// ============================================================
const services = [
  {
    icon: '🤖',
    badge: 'AI AGENTS',
    title: 'AI Agent Development',
    description:
      'We design and deploy autonomous AI agents that think, decide, and act. From workflow automation to multi-agent systems — we build AI that works while you sleep.',
    features: [
      'Custom LLM pipeline design',
      'Multi-agent orchestration',
      'RAG systems for real-time context',
      'Automated workflow execution',
      'Predictive decision systems',
      'Voice & chat AI interfaces',
    ],
    tags: ['OpenAI', 'Claude API', 'LangChain', 'Python', 'RAG'],
    accent: 'var(--accent-green)',
    accentDim: 'var(--accent-green-dim)',
  },
  {
    icon: '⚡',
    badge: 'ENGINEERING',
    title: 'AI-Augmented Engineering',
    description:
      'Full-stack teams that use AI at every stage. We ship production-ready products 3× faster with AI pair programming, automated review, and battle-tested deployment.',
    features: [
      'React / Next.js frontends',
      'Node.js / Python backends',
      'Mobile apps (React Native)',
      'AI-assisted code generation',
      'Automated QA & testing',
      'CI/CD & DevOps pipelines',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'GitHub Copilot'],
    accent: '#1F8BFF',
    accentDim: 'rgba(31, 139, 255, 0.12)',
  },
  {
    icon: '🧠',
    badge: 'STRATEGY',
    title: 'AI Strategy & Integration',
    description:
      'We help products become smarter. From intelligent search to predictive UX, we layer AI onto existing systems to improve outcomes and performance.',
    features: [
      'AI readiness audits',
      'LLM integration into existing apps',
      'Predictive analytics & recommendations',
      'AI personalization',
      'Model fine-tuning & evaluation',
      'Vendor-agnostic platform design',
    ],
    tags: ['Anthropic', 'OpenAI', 'HuggingFace', 'Pinecone', 'Supabase'],
    accent: 'var(--accent-orange)',
    accentDim: 'var(--accent-orange-dim)',
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? service.accent + '33' : 'var(--border-subtle)'}`,
        borderRadius: 24,
        padding: '34px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 28px 60px rgba(15, 23, 42, 0.09)' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{
          width: 58,
          height: 58,
          borderRadius: 18,
          background: service.accentDim,
          border: `1px solid ${service.accent}44`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.65rem',
        }}>
          {service.icon}
        </div>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.74rem',
          fontWeight: 700,
          color: service.accent,
          letterSpacing: '0.18em',
          background: `${service.accent}14`,
          border: `1px solid ${service.accent}33`,
          padding: '8px 14px',
          borderRadius: 999,
        }}>{service.badge}</span>
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.45rem',
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: 14,
          lineHeight: 1.22,
        }}>{service.title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
        }}>{service.description}</p>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11, margin: 0, padding: 0 }}>
        {service.features.map((f, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}>
            <span style={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              flexShrink: 0,
              background: `${service.accent}20`,
              border: `1px solid ${service.accent}44`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              color: service.accent,
            }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>
        {service.tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <a href="#contact" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '0.95rem',
        color: service.accent,
        marginTop: 4,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
      >
        Get started <span>→</span>
      </a>
    </div>
  );
};

const Services = () => (
  <section id="services" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 620, marginBottom: 60 }}>
        <p className="section-label">// What we do</p>
        <h2 className="section-title">
          Three ways we<br />
          <span className="gradient">build with AI</span>
        </h2>
        <p className="section-sub">
          We design software around intelligence, not add it later. Every project starts with AI-first architecture, automated delivery, and measurable business impact.
        </p>
      </div>

      <div className="grid-3">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>

      <div style={{
        marginTop: 56,
        padding: '36px 40px',
        background: 'rgba(10, 124, 92, 0.08)',
        border: '1px solid rgba(10, 124, 92, 0.18)',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--text-primary)',
            marginBottom: 6,
          }}>Not sure which service fits your needs?</p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Book a free AI audit and we’ll map the fastest path to product-market fit and production.
          </p>
        </div>
        <a href="#contact" className="btn-primary">Schedule Free Audit →</a>
      </div>
    </div>
  </section>
);

export default Services;
