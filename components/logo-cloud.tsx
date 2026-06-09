const companies = [
  'eMushrif',
  'eCare21',
  'SwapLink',
  'Carigo',
  'Fotki',
]

export function LogoCloud() {
  return (
    <section
      aria-label="Past clients"
      className="border-b border-border/60 bg-muted/30 py-8"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-muted-foreground">
          Past clients include {companies.join(', ')}.
        </p>
      </div>
    </section>
  )
}
