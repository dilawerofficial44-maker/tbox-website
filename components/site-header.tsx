'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#work' },
  { label: 'How We Work', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#top" aria-label="TBox AI home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            render={<a href="#contact" />}
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            Sign in
          </Button>
          <Button render={<a href="#contact" />} className="bg-brand text-brand-foreground hover:bg-brand/90">
            Book a free AI audit
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={
                <a href="#contact" onClick={() => setOpen(false)}>
                  Book a free AI audit
                </a>
              }
              className="mt-2 bg-brand text-brand-foreground hover:bg-brand/90"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
