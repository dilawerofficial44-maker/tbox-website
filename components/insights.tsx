import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const posts = [
  {
    tag: 'Engineering',
    title: 'How we cut development time 40% using AI pair programming',
    excerpt:
      'A practical look at the AI-assisted workflow that lets our small team ship like a large one.',
    date: 'Jan 12, 2026',
    read: '6 min read',
  },
  {
    tag: 'AI Strategy',
    title: 'The 5 AI agents every SaaS product needs in 2026',
    excerpt:
      'From support to analytics, the agent patterns that consistently move product metrics.',
    date: 'Jan 4, 2026',
    read: '8 min read',
  },
  {
    tag: 'Culture',
    title: 'From staff aug to AI-native: why we rebuilt our delivery model',
    excerpt:
      'Why we re-architected the way we work — and what it means for the products we ship.',
    date: 'Dec 18, 2025',
    read: '5 min read',
  },
]

export function Insights() {
  return (
    <section id="insights" className="border-b border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="We write about"
            highlight="what we build"
          />
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand"
          >
            All articles
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-brand-muted px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-foreground">
                {post.tag}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.read}</span>
              </div>
            </a>
          ))}
        </div>

        {/* newsletter */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-ink p-8 text-background sm:p-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <h3 className="text-2xl font-semibold tracking-tight">
              AI in Software Engineering — Weekly
            </h3>
            <p className="text-background/70">
              Practical insights on AI tools, agent design, and shipping
              software faster for TBox.
            </p>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-11 flex-1 rounded-lg border border-background/20 bg-background/10 px-4 text-sm text-background placeholder:text-background/50 outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-lg bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
