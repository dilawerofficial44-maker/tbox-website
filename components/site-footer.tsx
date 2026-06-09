import { AtSign, Globe, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

const columns = [
  {
    heading: 'Services',
    links: [
      'AI Agent Development',
      'AI-Augmented Engineering',
      'AI Strategy & Integration',
    ],
  },
  {
    heading: 'Company',
    links: ['Case Studies', 'How We Work', 'Team', 'Insights'],
  },
  {
    heading: 'Connect',
    links: ['LinkedIn', 'Twitter / X', 'GitHub', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              We are a small team that cares more about what ships than what's on the slide deck. Based in Pakistan. Working globally.
            </p>
            <Button
              render={<a href="#contact" />}
              className="mt-2 w-fit bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Book a free AI audit
            </Button>
            <div className="mt-2 flex items-center gap-2">
              {[Globe, AtSign, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  aria-label="Social link"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TBox AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
