export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto flex max-w-2xl flex-col items-center gap-4 text-center'
          : 'flex max-w-2xl flex-col gap-4'
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand">
          <span className="h-px w-6 bg-brand" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}{' '}
        {highlight && <span className="text-brand">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
