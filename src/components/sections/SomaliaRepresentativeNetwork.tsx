'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LineReveal } from '@/components/ui/LineReveal'
import { about } from '@/lib/content'
import { prefersReducedMotion } from '@/lib/animations'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const airports = [
  { name: 'Mogadishu', role: 'Airport branch office', featured: true, x: 52, y: 58 },
  { name: 'Hargeisa', role: 'Local representative', x: 18, y: 22 },
  { name: 'Garowe', role: 'Local representative', x: 72, y: 28 },
  { name: 'Bosaso', role: 'Local representative', x: 88, y: 18 },
  { name: 'Galkayo', role: 'Local representative', x: 58, y: 38 },
  { name: 'Kismayu', role: 'Local representative', x: 42, y: 78 },
  { name: 'Baidoa', role: 'Local representative', x: 28, y: 62 },
] as const

export function SomaliaRepresentativeNetwork() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const route = section.querySelector('.somalia-route-main')
      if (route) {
        const len = (route as SVGPathElement).getTotalLength?.() ?? 800
        gsap.set(route, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(route, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
        })
      }

      gsap.fromTo(
        '.somalia-network-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', once: true },
        }
      )

      gsap.fromTo(
        '.somalia-network-label',
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 68%', once: true },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="somalia-network"
      className="section-padding relative overflow-hidden bg-sand-light"
    >
      <div className="absolute left-0 right-0 top-0 h-1 bg-gold" aria-hidden />
      <div className="somalia-network-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center md:mb-16">
          <p className="animate-eyebrow eyebrow mb-6 justify-center before:!bg-gold">
            Regional Presence
          </p>
          <LineReveal
            tag="h2"
            align="center"
            className="font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl"
          >
            Somalia Airport Network
          </LineReveal>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {about.airportRepresentatives}
          </p>
        </div>

        {/* Mobile grid list to prevent coordinate overlapping on small screens */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
          {airports.map((airport) => {
            const isMogadishu = airport.name === 'Mogadishu'
            return (
              <div
                key={airport.name}
                className={cn(
                  'flex flex-col items-center justify-center rounded-2xl border p-5 text-center shadow-sm transition-all duration-300',
                  isMogadishu
                    ? 'border-gold bg-gold-light/45 dark:bg-gold/10'
                    : 'border-border/70 bg-white'
                )}
              >
                <span
                  className={cn(
                    'mb-2 block h-2.5 w-2.5 rounded-full ring-4',
                    isMogadishu ? 'bg-gold ring-gold/30' : 'bg-gold/70 ring-gold/15'
                  )}
                />
                <p className={cn('text-sm font-extrabold text-ink', isMogadishu && 'text-gold')}>
                  {airport.name}
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-ink-muted">
                  {airport.role}
                </p>
              </div>
            )
          })}
        </div>

        {/* Desktop map view */}
        <div className="hidden md:block relative mx-auto aspect-[16/10] max-w-4xl rounded-3xl border border-border bg-white p-6 shadow-premium md:p-10">
          <svg
            className="absolute inset-0 h-full w-full text-gold/25"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="somalia-route-main"
              d="M18 22 L52 58 L72 28 L88 18 M52 58 L58 38 L42 78 L28 62 L18 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M52 58 L28 62"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="2 2"
              opacity="0.5"
            />
          </svg>

          {airports.map((airport) => (
            <div
              key={airport.name}
              className="somalia-network-label absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${airport.x}%`, top: `${airport.y}%` }}
            >
              <span
                className={cn(
                  'somalia-network-dot mb-1.5 block h-3 w-3 rounded-full ring-4',
                  airport.name === 'Mogadishu'
                    ? 'bg-gold ring-gold/30'
                    : 'bg-gold/80 ring-gold/15'
                )}
              />
              <p
                className={cn(
                  'whitespace-nowrap rounded-full px-3 py-1 text-center text-xs font-bold backdrop-blur-sm',
                  airport.name === 'Mogadishu'
                    ? 'bg-gold text-white'
                    : 'border border-border bg-white/90 text-ink'
                )}
              >
                {airport.name}
              </p>
              {airport.name === 'Mogadishu' && (
                <p className="mt-0.5 text-center text-[10px] font-semibold uppercase tracking-wider text-gold/80">
                  {airport.role}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="animate-fade-up mx-auto mt-8 max-w-xl text-center text-sm text-ink-muted">
          {about.airportOffice}
        </p>
      </div>
    </section>
  )
}
