'use client'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: 'Global', label: 'Destinations & Routes' },
  { value: '24h', label: 'Emergency Support' },
  { value: '6+', label: 'Somalia Airport Network' },
]

/** Kanila — light stats band after sticky popular section */
export function StatsStrip() {
  return (
    <section
      className="popular-cover-panel overlap-panel relative z-30 -mt-[min(22vh,200px)] bg-sand-light py-16 shadow-[0_-40px_100px_rgba(7,17,31,0.12)] md:-mt-[min(28vh,240px)] md:py-20"
      id="stats"
    >
      <div className="absolute left-0 right-0 top-0 h-1 bg-gold" aria-hidden />

      <div className="mx-auto max-w-7xl px-5">
        <div
          data-stagger="stats"
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} data-stagger-item className="text-center">
              <p className="font-kanila-display text-4xl font-normal text-gold md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
