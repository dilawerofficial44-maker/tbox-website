import { ArrowRight, CheckCircle2, Play, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroStats = [
  { value: '43+', label: 'AI products shipped' },
  { value: '4–6 wks', label: 'Avg. time to production' },
  { value: '98%', label: 'Client retention' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* soft brand gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-chart-2/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-3 py-1 text-xs font-medium text-accent-foreground">
            <Zap className="size-3.5 text-brand" aria-hidden="true" />
            AI-native software agency · 2026
          </span>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            The engineering partner{' '}
            <span className="text-brand font-bold">that actually ships.</span>
          </h1>

          <p className="max-w-2xl text-pretty text-sm font-medium leading-relaxed text-muted-foreground">
            Senior engineers only. No account managers. No outsourcing.
          </p>

          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            TBox AI works with startups and product teams who are done waiting.
            Senior engineers, AI-native process, production-ready code — in weeks, not quarters.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Book a free AI audit
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button render={<a href="#work" />} size="lg" variant="outline">
              <Play className="size-4" aria-hidden="true" />
              See case studies
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
            {[
              'No long-term contracts',
              'Senior AI engineers only',
              'Ship in weeks, not quarters',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="size-4 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
