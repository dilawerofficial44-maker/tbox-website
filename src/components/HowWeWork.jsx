import React, { useState } from 'react';

// ============================================================
// HOW WE WORK — Updated for AI-native delivery clarity
// ============================================================
const steps = [
  {
    number: '01',
    duration: '2 days',
    title: 'Discovery Sprint',
    description:
      'We dive deep into your business, users, and existing systems. AI-assisted research maps your product fit and defines a fast, confident project roadmap.',
    tools: ['Notion AI', 'Miro', 'Claude', 'FigJam'],
    output: 'Project brief, tech stack recommendation, delivery roadmap',
  },
  {
    number: '02',
    duration: '1 week',
    title: 'AI-Assisted Prototyping',
    description:
      'Before code, we validate the concept with AI-generated interface prototypes, architecture sketches, and clickable flows — reducing risk and aligning stakeholders quickly.',
    tools: ['Figma', 'v0.dev', 'Claude', 'Framer'],
    output: 'Clickable prototype, architecture diagram, API contract',
  },
  {
    number: '03',
    duration: '3–4 weeks',
    title: 'AI-Augmented Development',
    description:
      'Engineering runs at 3× speed with AI pair programming, automated code reviews, and production-ready architecture. We ship features fast without sacrificing quality.',
    tools: ['Cursor', 'GitHub Copilot', 'Claude', 'Vercel'],
    output: 'Production-ready codebase, live staging environment',
  },
  {
    number: '04',
    duration: '3 days',
    title: 'Automated QA & Testing',
    description:
      'AI-generated test suites cover unit, integration, and end-to-end flows. Regression checks run in minutes and ensure your product is stable before launch.',
    tools: ['Playwright', 'Vitest', 'Testim.io', 'SonarQube'],
    output: 'Full test coverage report, performance benchmarks',
  },
  {
    number: '05',
    duration: '1 day',
    title: 'Ship & Deploy',
    description:
      'Automatically deploy to staging and production with CI/CD. Infrastructure-as-code, zero-downtime rollout, and a live launch-ready product on day one.',
    tools: ['GitHub Actions', 'AWS / GCP', 'Terraform', 'Docker'],
    output: 'Live production system, deployment runbook',
  },
  {
    number: '06',
    duration: 'Ongoing',
    title: 'AI Monitoring & Iteration',
    description:
      'Post-launch, we monitor product health, user behavior, and AI performance. Continuous improvement sprints keep your software evolving and scaling smoothly.',
    tools: ['Datadog', 'Sentry', 'PostHog', 'Mixpanel'],
    output: 'Monthly performance reports, continuous improvement sprints',
  },
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section id="how-we-work" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <p className="section-label">// How We Work</p>
          <h2 className="section-title">
            AI-native delivery process<br />
            <span className="gradient">designed to ship in weeks</span>
          </h2>
          <p className="section-sub">
            Six phases built for speed, quality, and production. Every step is powered by AI to reduce risk and accelerate launch.
          </p>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 20,
          marginBottom: 52,
        }}>
          {[
            { label: 'Traditional agency', value: '5–8 months', subtitle: 'slow, expensive, uncertain', dim: true },
            { label: 'TBox AI', value: '4–6 weeks', subtitle: 'fast, transparent, production-ready', dim: false },
          ].map((item, i) => (
            <div key={i} style={{
              flex: '1 1 240px',
              minWidth: 240,
              padding: '24px 28px',
              borderRadius: 22,
              background: item.dim ? 'var(--bg-card)' : 'rgba(10, 124, 92, 0.08)',
              border: item.dim ? '1px solid var(--border-subtle)' : '1px solid rgba(10, 124, 92, 0.18)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.5rem',
                color: item.dim ? 'var(--text-muted)' : 'var(--accent-green)',
                marginBottom: 8,
              }}>{item.value}</div>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                margin: 0,
              }}>{item.label}</p>
              <p style={{
                marginTop: 10,
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="how-we-work-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  textAlign: 'left',
                  padding: '18px 20px',
                  borderRadius: 18,
                  border: activeStep === i ? '1px solid rgba(10, 124, 92, 0.3)' : '1px solid transparent',
                  background: activeStep === i ? 'rgba(10, 124, 92, 0.08)' : 'rgba(255,255,255,0.7)',
                  boxShadow: activeStep === i ? '0 18px 32px rgba(10,124,92,0.12)' : '0 8px 20px rgba(15, 23, 42, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { if (activeStep !== i) e.currentTarget.style.transform = 'translateX(2px)'; }}
                onMouseLeave={e => { if (activeStep !== i) e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 12,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: activeStep === i ? 'var(--accent-green)' : 'var(--text-muted)',
                  }}>{s.number}</span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: activeStep === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: 700,
                  }}>{s.title}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: activeStep === i ? 'var(--accent-green)' : 'var(--text-muted)',
                  }}>{s.duration}</span>
                </div>
              </button>
            ))}
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 28,
            padding: '38px',
            minHeight: 420,
            boxShadow: '0 28px 70px rgba(17, 24, 39, 0.08)',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: 'rgba(10, 124, 92, 0.1)',
              borderRadius: 999,
              padding: '10px 16px',
              marginBottom: 22,
            }}>
              <span style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: 'var(--accent-green)',
                display: 'inline-block',
              }} />
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'var(--accent-green)',
                textTransform: 'uppercase',
              }}>Current phase</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: 18,
              lineHeight: 1.1,
            }}>{active.title}</h3>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: 28,
            }}>{active.description}</p>

            <div style={{ marginBottom: 26 }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 12,
              }}>Tools used</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {active.tools.map(tool => (
                  <span key={tool} className="tag tag-green">{tool}</span>
                ))}
              </div>
            </div>

            <div style={{
              padding: '22px 24px',
              borderRadius: 20,
              background: 'rgba(10, 124, 92, 0.08)',
              border: '1px solid rgba(10, 124, 92, 0.18)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-green)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}>Deliverable</p>
              <p style={{
                margin: 0,
                fontSize: '0.96rem',
                color: 'var(--text-primary)',
                lineHeight: 1.75,
              }}>{active.output}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
