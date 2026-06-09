import React from 'react';

// ============================================================
// HERO — Updated for stronger AI-native positioning and visuals
// ============================================================
const stats = [
  { value: '43+',   label: 'Projects Delivered' },
  { value: '6 Wks', label: 'Average Launch' },
  { value: '12+',   label: 'AI Agents Built' },
  { value: '98%',   label: 'Client Retention' },
];

const trustLogos = ['eMushrif', 'SwapLink', 'eCare21', 'Carigo', 'Fotki', 'Enfiny'];

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-badge">AI-native software agency · 2026</div>

        <h1 className="hero-title">
          We build production-ready AI software in <span className="gradient">4–6 weeks</span><br />
          and scale it with confidence.
        </h1>

        <p>
          AI-first product engineering for startups and high-growth teams. We deliver fast, reliable systems with embedded intelligence, automated delivery pipelines, and measurable business impact.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Book Free AI Audit →</a>
          <a href="#case-studies" className="btn-ghost">See Case Studies</a>
        </div>

        <div className="hero-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat">
              <span className="value">{s.value}</span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel-card">
          <div className="hero-panel-tag">Proven launch cadence</div>
          <h2 className="hero-panel-title">Launch AI products that ship fast and perform in production.</h2>
          <p className="hero-panel-text">
            We combine AI-assisted design, automated engineering, and production-first deployment so every project moves from prototype to live product quickly.
          </p>

          <div className="hero-panel-list">
            <div className="hero-panel-item">
              <span>01</span>
              <p>Live MVPs in 4–6 weeks with production-ready architecture.</p>
            </div>
            <div className="hero-panel-item">
              <span>02</span>
              <p>AI automation baked into workflows to reduce manual effort.</p>
            </div>
            <div className="hero-panel-item">
              <span>03</span>
              <p>Scalable cloud infrastructure and continuous improvement loops.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-trust">
      <span className="trust-caption">Trusted by product teams and AI-first startups</span>
      <div className="trust-logos">
        {trustLogos.map(name => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
