import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const cases = [
  {
    name: 'eMushrif',
    category: 'EdTech · AI Platform',
    summary:
      'AI-powered school management platform serving 50,000+ students with automated insights and reporting.',
    metrics: [
      { value: '56k+', label: 'Active students' },
      { value: '4×', label: 'Faster reporting' },
      { value: '18 wks', label: 'To full launch' },
    ],
    accent: 'from-brand/15 to-transparent',
  },
  {
    name: 'eCare21',
    category: 'HealthTech · Predictive AI',
    summary:
      'Remote patient monitoring with AI risk prediction, surfacing critical events before they escalate.',
    metrics: [
      { value: '82%', label: 'Prediction accuracy' },
      { value: '60%', label: 'Fewer readmissions' },
      { value: '12 wks', label: 'To pilot' },
    ],
    accent: 'from-chart-2/15 to-transparent',
  },
  {
    name: 'SwapLink',
    category: 'FinTech · Marketplace',
    summary:
      'P2P exchange marketplace with AI-powered fraud detection and intelligent matching at scale.',
    metrics: [
      { value: '5×', label: 'GMV growth' },
      { value: '94%', label: 'Fraud caught' },
      { value: '3+', label: 'Markets live' },
    ],
    accent: 'from-chart-3/15 to-transparent',
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="border-b border-border/60 bg-muted/20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Real projects,"
          highlight="measurable outcomes"
          description="We've shipped AI-enabled products into production for real customers, with fast delivery and proven results."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {item.category}
                  </p>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>

              <dl className="relative mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="text-xl font-semibold tracking-tight text-foreground">
                      {m.value}
                    </dd>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {m.label}
                    </p>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand"
              >
                Read full case study
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
