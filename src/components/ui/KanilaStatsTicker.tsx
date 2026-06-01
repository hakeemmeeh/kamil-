'use client'

import { useEffect, useRef } from 'react'
import { KanilaStatsStar } from '@/components/ui/KanilaStatsStar'

const tickerItems = [
  'Experience the World',
  'Inspiring Journeys',
  'Top Destinations',
  'Natural Freedom',
  'Kenya to the Globe',
]

/** GPU-friendly marquee — pauses when off-screen to avoid jank with Lenis scroll */
export function KanilaStatsTicker() {
  const rootRef = useRef<HTMLDivElement>(null)
  const tickerDoubled = [...tickerItems, ...tickerItems]

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const track = root.querySelector('.kanila-stats-ticker__track')
    if (!track) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const io = new IntersectionObserver(
      ([entry]) => {
        root.classList.toggle('kanila-stats-ticker--paused', !entry.isIntersecting)
      },
      { rootMargin: '120px 0px', threshold: 0 }
    )

    io.observe(root)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={rootRef} className="kanila-stats-ticker overflow-hidden" aria-hidden>
      <div className="kanila-stats-ticker__track flex items-center gap-10 whitespace-nowrap px-4">
        {tickerDoubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex shrink-0 items-center gap-10">
            <span className="font-kanila-display text-lg font-normal uppercase tracking-[0.12em] text-white md:text-xl">
              {item}
            </span>
            <KanilaStatsStar className="h-4 w-4 shrink-0 text-white/85 md:h-5 md:w-5" />
          </span>
        ))}
      </div>
    </div>
  )
}
