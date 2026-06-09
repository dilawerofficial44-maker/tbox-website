import React from 'react';

// ============================================================
// TEAM — Edit members[] to update team profiles
// ============================================================
const members = [
  {
    initials: 'DK',
    name: 'Dilawer K.',
    role: 'Founder & AI Strategy Lead',
    bio: 'Technical founder with 10+ years building software products. Leads AI strategy and client architecture decisions.',
    skills: ['AI Architecture', 'Product Strategy', 'Full-Stack'],
    accent: 'var(--accent-green)',
    linkedin: '#',
  },
  {
    initials: 'AK',
    name: 'Ali K.',
    role: 'Lead AI Engineer',
    bio: 'Specializes in LLM integration, RAG pipelines, and deploying AI models into production environments at scale.',
    skills: ['LangChain', 'OpenAI', 'Python', 'RAG'],
    accent: '#00C4FF',
    linkedin: '#',
  },
  {
    initials: 'MR',
    name: 'M. Raza',
    role: 'Senior Full-Stack Engineer',
    bio: 'Builds robust backends and performant frontends using AI pair programming to deliver features 3× faster.',
    skills: ['React', 'Node.js', 'AWS', 'Copilot'],
    accent: 'var(--accent-orange)',
    linkedin: '#',
  },
  {
    initials: 'SN',
    name: 'Sara N.',
    role: 'LLM Integration Specialist',
    bio: 'Bridges the gap between AI models and real products. Expert in prompt engineering, fine-tuning, and model evaluation.',
    skills: ['Prompt Eng.', 'HuggingFace', 'Pinecone', 'Evals'],
    accent: '#A78BFA',
    linkedin: '#',
  },
  {
    initials: 'UH',
    name: 'Usman H.',
    role: 'AI-Augmented UX Designer',
    bio: 'Designs user experiences with AI tools — from wireframe to prototype in days, not weeks.',
    skills: ['Figma', 'Framer', 'v0.dev', 'Design Systems'],
    accent: '#FB7185',
    linkedin: '#',
  },
  {
    initials: 'ZA',
    name: 'Zain A.',
    role: 'DevOps & AI Infrastructure',
    bio: 'Keeps everything running. CI/CD, containerization, cloud infrastructure, and AI model serving pipelines.',
    skills: ['Docker', 'Terraform', 'GitHub Actions', 'K8s'],
    accent: '#34D399',
    linkedin: '#',
  },
];

const Team = () => (
  <section id="team" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        marginBottom: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: 24,
      }}>
        <div style={{ maxWidth: 500 }}>
          <p className="section-label">// The Team</p>
          <h2 className="section-title">AI Engineers,<br />Not Just Developers</h2>
          <p className="section-sub">
            Every team member works with AI tools daily — not because it's trendy,
            but because it's how we deliver the quality and speed our clients depend on.
          </p>
        </div>
        <a href="#contact" className="btn-ghost">We're Hiring AI Engineers →</a>
      </div>

      <div className="grid-3">
        {members.map((m, i) => (
          <div key={i} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 24,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            transition: 'all 0.28s ease',
            boxShadow: '0 18px 40px rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `${m.accent}44`;
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.transform = 'none';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: `${m.accent}20`,
                border: `2px solid ${m.accent}55`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1rem',
                color: m.accent,
              }}>{m.initials}</div>
              <a href={m.linkedin} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 12px',
                borderRadius: 999,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = m.accent; e.currentTarget.style.borderColor = m.accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
              >in →</a>
            </div>

            <div>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                marginBottom: 6,
              }}>{m.name}</h4>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: m.accent,
                letterSpacing: '0.02em',
                marginBottom: 0,
              }}>{m.role}</p>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
            }}>{m.bio}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {m.skills.map(s => (
                <span key={s} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(0,0,0,0.03)',
                  borderRadius: 999,
                  padding: '7px 12px',
                }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 48,
        padding: '34px 36px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 20,
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
        }}>
          🚀 <strong style={{ color: 'var(--text-primary)' }}>We're growing.</strong> Looking for AI engineers, LLM specialists, and full-stack devs who love working with AI tools. {' '}
          <a href="#contact" style={{ color: 'var(--accent-green)', fontWeight: 700 }}>Drop us a line →</a>
        </p>
      </div>
    </div>
  </section>
);

export default Team;
