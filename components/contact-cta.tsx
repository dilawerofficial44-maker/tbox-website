'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trust = [
  'We only take on 4–5 new clients per quarter',
  'You will speak to the engineer, not an account manager',
  'If we cannot help you, we will tell you in the first call',
]

const services = [
  'AI Agent Development',
  'AI-Augmented Engineering',
  'AI Strategy & Integration',
  'Not sure yet — need guidance',
]

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand">
            <span className="h-px w-6 bg-brand" aria-hidden="true" />
            Let&apos;s build together
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to build with <span className="text-brand">AI?</span>
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether you have a clear brief or just an idea, book a free 30-minute
            AI audit. We&apos;ll show you the fastest path to launch, the most
            valuable AI features, and what we&apos;d build.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="size-5 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-3">
              <Mail className="size-4 text-brand" aria-hidden="true" />
              hello@tboxai.com
            </span>
            <span className="flex items-center gap-3">
              <Clock className="size-4 text-brand" aria-hidden="true" />
              We reply within 1 business day
            </span>
            <span className="flex items-center gap-3">
              <MapPin className="size-4 text-brand" aria-hidden="true" />
              Remote-first · Working worldwide
            </span>
          </div>
        </div>

        {/* form */}
        <div className="rounded-2xl border border-border bg-card p-7 shadow-xl shadow-brand/5 sm:p-8">
          {submitted ? (
            <div className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-brand-muted text-brand">
                <CheckCircle2 className="size-7" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                Thanks — we&apos;ve got it.
              </h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                A senior engineer will reach out within one business day to
                schedule your free AI audit.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Your name" placeholder="Jane Doe" />
                <Field
                  id="email"
                  label="Work email"
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>
              <Field
                id="company"
                label="Company"
                placeholder="Acme Inc."
                required={false}
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-foreground"
                >
                  What do you need help with?
                </label>
                <select
                  id="service"
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-brand"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What are you building? What's the timeline?"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-brand"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-1 w-full bg-brand text-brand-foreground hover:bg-brand/90"
              >
                Send message
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No spam, ever. Your details stay private.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  placeholder,
  type = 'text',
  required = true,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-brand"
      />
    </div>
  )
}
