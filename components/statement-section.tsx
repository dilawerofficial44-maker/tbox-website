export function StatementSection() {
  return (
    <section className="border-b border-border/60 py-16 lg:py-24" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-2xl text-white font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Most agencies bill for time. We're accountable for outcomes.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Fixed-scope engagements. You know the cost before we write a line of code.
          </p>
        </div>
      </div>
    </section>
  )
}
