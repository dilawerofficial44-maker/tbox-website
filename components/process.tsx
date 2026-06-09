'use client'

import { useState } from 'react'
import { Check, Circle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const phases = [
  {
    id: 'discovery',
    name: 'Discovery Sprint',
    duration: '1 week',
    detail:
      'We deep-dive into your business, users, and existing systems. AI-assisted research maps your problem fit and defines a fast, confident project roadmap.',
    deliverables: ['Tech audit', 'AI feasibility', 'Roadmap', 'Estimate'],
  },
  {
    id: 'prototyping',
    name: 'AI-Assisted Prototyping',
    duration: '1 week',
    detail:
      'We build a working prototype of the core experience, validating AI behavior and UX with your team before we scale.',
    deliverables: ['Clickable prototype', 'Model selection', 'Data plan'],
  },
  {
    id: 'engineering',
    name: 'AI-Augmented Engineering',
    duration: '2–3 weeks',
    detail:
      'Full-stack delivery with AI in the loop. We ship production-grade features with embedded intelligence and automated testing.',
    deliverables: ['Production build', 'CI/CD', 'Eval harness'],
  },
  {
    id: 'qa',
    name: 'Automated QA & Testing',
    duration: '0.5 week',
    detail:
      'Comprehensive automated testing, guardrails, and AI evaluation ensure your product is reliable and safe at scale.',
    deliverables: ['Test coverage', 'Guardrails', 'Load testing'],
  },
  {
    id: 'launch',
    name: 'Ship & Deploy',
    duration: '0.5 week',
    detail:
      'We deploy to production, hand over documentation, and set up monitoring so your team owns the system with confidence.',
    deliverables: ['Production deploy', 'Docs', 'Monitoring'],
  },
]

export function Process() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" className="border-b border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How we work"
          title="An AI-native delivery process"
          highlight="designed to ship in weeks"
          description="Six phases built for speed, quality, and production. Every step is powered by AI to reduce risk and accelerate launch."
        />

        <p className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          From first call to production-ready product — typically 4 to 6 weeks.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* steps */}
          <ol className="flex flex-col gap-2">
            {phases.map((phase, i) => {
              const isActive = i === active
              const isDone = i < active
              return (
                <li key={phase.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? 'step' : undefined}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                      isActive
                        ? 'border-brand/40 bg-brand-muted/50 shadow-sm'
                        : 'border-border bg-card hover:border-brand/30'
                    }`}
                  >
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        isActive || isDone
                          ? 'bg-brand text-brand-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isDone ? (
                        <Check className="size-4" aria-hidden="true" />
                      ) : (
                        i + 1
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-foreground">
                        {phase.name}
                      </span>
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {phase.duration}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          {/* detail panel */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-foreground">
              <Circle className="size-2 fill-brand text-brand" aria-hidden="true" />
              Current phase
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
              {phases[active].name}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {phases[active].detail}
            </p>

            <p className="mt-7 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Key deliverables
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {phases[active].deliverables.map((d) => (
                <span
                  key={d}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground"
                >
                  <Check className="size-3.5 text-brand" aria-hidden="true" />
                  {d}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-ink p-5 text-background">
              <p className="text-xs font-medium uppercase tracking-widest text-background/60">
                Timeline
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                {phases.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      i <= active ? 'bg-brand' : 'bg-background/20'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-background/80">
                Step {active + 1} of {phases.length} · Production-ready AI in
                weeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
