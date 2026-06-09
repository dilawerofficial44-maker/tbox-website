import { ArrowUpRight, Bot, Code2, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Bot,
    tag: 'AI Agents',
    title: 'AI Agent Development',
    description:
      'We design and deploy autonomous AI agents that think, decide, and act. From workflow automation to multi-agent systems — so your team can stay focused on what matters.',
    points: [
      'Custom LLM pipelines',
      'Multi-agent orchestration',
      'Retrieval & RAG systems',
      'Guardrails & evaluation',
    ],
  },
  {
    icon: Code2,
    tag: 'Engineering',
    title: 'AI-Augmented Engineering',
    description:
      'Full-stack teams that use AI at every stage of the SDLC, shipping production-ready products faster with embedded intelligence and automated delivery.',
    points: [
      'React / Next.js frontends',
      'Node & Python backends',
      'AI-assisted code generation',
      'Automated QA & testing',
    ],
  },
  {
    icon: Compass,
    tag: 'Strategy',
    title: 'AI Strategy & Integration',
    description:
      'We help product teams turn AI ambition into a roadmap. From intelligent search to predictive analytics, we de-risk and integrate AI into your business.',
    points: [
      'AI readiness audits',
      'Roadmap & prioritization',
      'Model fine-tuning',
      'Vendor-agnostic platform design',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we"
          highlight="build with AI"
          description="We design software around real-world impact, pairing AI-first architecture with automated delivery and measurable outcomes."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
            >
              {/* decorative background number */}
              <span
                aria-hidden="true"
                className="absolute -top-6 -right-4 text-9xl font-bold text-foreground/7"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-muted text-brand">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="relative mt-6 flex flex-col gap-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="relative mt-7 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors group-hover:gap-2"
              >
                Get started
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand/25 bg-brand-muted/40 p-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Not sure which service fits your needs?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Book a free AI audit and we&apos;ll map the fastest path to
              production-ready AI.
            </p>
          </div>
          <Button
            render={<a href="#contact" />}
            size="lg"
            className="shrink-0 bg-brand text-brand-foreground hover:bg-brand/90"
          >
            Schedule free audit
          </Button>
        </div>
      </div>
    </section>
  )
}
