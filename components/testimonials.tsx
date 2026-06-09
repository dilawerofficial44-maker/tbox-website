import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    stat: '5 weeks',
    statLabel: 'to launch',
    quote:
      'TBox AI delivered our full marketplace in 5 weeks — far faster than any other agency quoted us. The AI-assisted detection they embedded has been running with 94% precision since launch. Best partner we&apos;ve worked with.',
    name: 'Ahmad K.',
    role: 'CTO, SwapLink',
  },
  {
    stat: '4×',
    statLabel: 'faster reporting',
    quote:
      'The AI-powered attendance and reporting features transformed how our schools operate. What used to take our staff 2 hours now takes minutes. They didn&apos;t just build software — they changed how we work.',
    name: 'Dr. Khalid M.',
    role: 'Founder, eMushrif',
  },
  {
    stat: '60%',
    statLabel: 'fewer readmissions',
    quote:
      'We went from a rough product spec to a live monitored system in 12 weeks. The AI alert prioritization model has helped reduce critical events and given our patients real peace of mind.',
    name: 'Sarah T.',
    role: 'Head of Product, eCare21',
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-border/60 bg-muted/20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client testimonials"
          title="Don't take our word"
          highlight="for it"
          description="Here's what clients say after we've shipped — with the numbers to back it up."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-brand text-brand"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-brand">
                  {t.stat}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t.statLabel}
                </span>
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                <p dangerouslySetInnerHTML={{ __html: `“${t.quote}”` }} />
              </blockquote>

              <figcaption className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
