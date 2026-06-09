export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <span className="flex size-5 items-center justify-center rounded-sm bg-brand">
        {/* 20x20px solid accent green square */}
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        TBox<span className="text-brand">AI</span>
      </span>
    </div>
  )
}
