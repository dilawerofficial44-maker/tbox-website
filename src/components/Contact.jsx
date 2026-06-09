import React, { useState } from 'react';

// ============================================================
// CONTACT — Update email and form fields as needed
// ============================================================
const CONTACT_EMAIL = 'hello@tboxsolutionz.com'; // ← change this

const services = [
  'AI Agent Development',
  'AI-Augmented Engineering',
  'AI Strategy & Integration',
  'Free AI Audit (30 min)',
  'Other / Not sure yet',
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const fieldStyle = (name) => ({
    width: '100%',
    background: focusedField === name ? '#fff' : 'var(--bg-card)',
    border: `1px solid ${focusedField === name ? 'var(--accent-green-border)' : 'var(--border-medium)'}`,
    borderRadius: 14,
    padding: '16px 18px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    resize: 'vertical',
  });

  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: 10,
    display: 'block',
  };

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 64,
          alignItems: 'start',
        }} className="grid-2">

          <div>
            <p className="section-label">// Let's Work Together</p>
            <h2 className="section-title">
              Ready to Build<br />
              <span style={{
                background: 'linear-gradient(125deg, var(--accent-green), #00C4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>With AI?</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 48 }}>
              Whether you have a clear brief or just an idea, book a free 30-minute AI audit.
              We’ll show you the fastest path to launch, the most valuable AI features, and what can ship first.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '✉️', label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: '💬', label: 'WhatsApp', value: '+92 — Available on request', href: '#' },
                { icon: '📍', label: 'Location', value: 'Pakistan · Remote-first globally', href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    flexShrink: 0,
                    background: 'var(--accent-green-dim)',
                    border: '1px solid var(--accent-green-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}>{item.icon}</div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      marginBottom: 6,
                    }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          transition: 'color 0.2s ease',
                        }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-green)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >{item.value}</a>
                      : <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                        }}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 40,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--accent-green-dim)',
              border: '1px solid var(--accent-green-border)',
              borderRadius: 999,
              padding: '12px 18px',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent-green)',
                animation: 'pulse 2s ease infinite',
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'var(--accent-green)',
                letterSpacing: '0.12em',
              }}>We respond within 4 hours</span>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 24,
            padding: '42px',
          }}>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                animation: 'fadeInUp 0.4s ease',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 20 }}>✅</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                  marginBottom: 12,
                }}>Message received!</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                }}>
                  We'll review your enquiry and get back to you within 4 hours.
                  In the meantime, feel free to explore our case studies.
                </p>
                <a href="#case-studies" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
                  View Case Studies →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldStyle('name')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldStyle('email')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...fieldStyle('service'), cursor: 'pointer' }}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell us about your project *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building? What's the core problem to solve? Any timeline in mind?"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldStyle('message')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  letterSpacing: '0.04em',
                }}>
                  No sales pitch. Honest advice. Free 30-min audit included.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
