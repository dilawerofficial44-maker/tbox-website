import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

const team = [
  {
    initials: 'DK',
    name: 'Dilawer K.',
    role: 'Founder & AI Strategy Lead',
    skills: ['LLM Systems', 'Product', 'Strategy'],
  },
  {
    initials: 'AN',
    name: 'Ali N.',
    role: 'Lead AI Engineer',
    skills: ['LangChain', 'RAG', 'Python'],
  },
  {
    initials: 'MR',
    name: 'M. Raza',
    role: 'Senior Full-Stack Engineer',
    skills: ['Next.js', 'Node', 'TypeScript'],
  },
  {
    initials: 'SN',
    name: 'Sara N.',
    role: 'Product Designer',
    skills: ['UX', 'Design Systems', 'Figma'],
  },
  {
    initials: 'UH',
    name: 'Usman H.',
    role: 'ML Engineer',
    skills: ['Fine-tuning', 'Evals', 'PyTorch'],
  },
  {
    initials: 'ZA',
    name: 'Zain A.',
    role: 'DevOps & Infrastructure',
    skills: ['CI/CD', 'AWS', 'Observability'],
  },
]

export function Team() {
  return (
    <section id="team" className="border-b border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The team"
            title="AI engineers,"
            highlight="not just developers"
            description="Every team member works with AI tools daily — so we deliver the quality and speed our clients depend on."
          />
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/30 bg-brand-muted px-4 py-2 text-sm font-medium text-accent-foreground">
            <span className="size-2 animate-pulse rounded-full bg-brand" />
            We&apos;re hiring AI engineers
          </span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-lg font-semibold text-brand">
                {member.initials}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-muted/30 p-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            We&apos;re growing. Looking for AI engineers, LLM specialists, and
            full-stack devs who love working with AI tools.
          </p>
          <Button
            render={<a href="#contact" />}
            variant="outline"
            className="shrink-0"
          >
            Drop us a line
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
