import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { LineReveal } from '@/components/ui/LineReveal'

/** Kanila Home 4 — light intro section below hero: heading left + 3 dark stat cards right */

const stats = [
  { value: '10+',    label: 'Years of Trust',        sub: 'Est. 2014' },
  { value: '98%',    label: 'Client Satisfaction',   sub: 'Verified reviews' },
  { value: '24h',    label: 'Emergency Support',     sub: 'Every time zone' },
]

export function Home4IntroSection() {
  return (
    <section className="bg-sand-light py-20 md:py-28 lg:py-32" id="intro">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — heading + copy + link */}
          <div>
            <p className="animate-eyebrow eyebrow mb-6">Global Travel</p>
            <LineReveal
              tag="h2"
              className="font-display text-[2.35rem] font-semibold leading-[0.96] tracking-tight text-ink sm:text-5xl md:text-[3rem] lg:text-[3.5rem]"
            >
              {`Travel Experiences\nThat Go Beyond\nWords`}
            </LineReveal>
            <p className="animate-fade-up mt-6 max-w-sm text-base leading-relaxed text-ink-muted md:text-lg">
              Kamil Travel has spent over a decade crafting seamless journeys
              for corporate and leisure clients — from Nairobi to every corner
              of the globe.
            </p>
            <Link
              href="#curated-journeys"
              className="animate-fade-up mt-8 inline-flex items-center gap-2 border-b border-ink/15 pb-1 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Our Featured Journeys <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — 3 dark stat cards */}
          <div
            data-stagger="stats"
            className="grid grid-cols-3 gap-3 md:gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-stagger-item
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-night px-3 py-8 text-center md:rounded-3xl md:py-12"
              >
                {/* Blue accent top bar — Kanila orange → Kamil blue */}
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gold" aria-hidden />

                <p className="font-display text-[2rem] font-semibold text-white md:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 md:text-[11px]">
                  {stat.label}
                </p>
                <p className="mt-1 text-[9px] text-white/30 md:text-[10px]">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
