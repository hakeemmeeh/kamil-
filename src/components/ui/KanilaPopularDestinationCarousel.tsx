'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { KanilaPopularDestinationCard } from '@/components/ui/KanilaPopularDestinationCard'
import type { KanilaPopularDestination } from '@/components/ui/KanilaPopularDestinationCard'
import { cn } from '@/lib/utils'

const AUTO_MS = 4500
const SLIDE_MS = 750

function useVisibleCount() {
  const [n, setN] = useState(4)
  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(max-width: 639px)').matches) setN(1)
      else if (window.matchMedia('(max-width: 1023px)').matches) setN(2)
      else setN(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return n
}

interface KanilaPopularDestinationCarouselProps {
  items: KanilaPopularDestination[]
  className?: string
}

/** Kanila — 4-up arch cards, horizontal slide autoplay */
export function KanilaPopularDestinationCarousel({
  items,
  className,
}: KanilaPopularDestinationCarouselProps) {
  const visibleCount = useVisibleCount()
  const [index, setIndex] = useState(0)
  const [stepPx, setStepPx] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const measureRef = useRef<HTMLDivElement>(null)
  const count = items.length

  const slides = count > 0 ? [...items, ...items] : []

  const measure = useCallback(() => {
    const el = measureRef.current
    if (!el?.parentElement) return
    const gap = parseFloat(getComputedStyle(el.parentElement).gap || '24') || 24
    setStepPx(el.offsetWidth + gap)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, visibleCount])

  const advance = useCallback(() => {
    setAnimate(true)
    setIndex((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (paused || count <= visibleCount) return
    const timer = window.setInterval(advance, AUTO_MS)
    return () => window.clearInterval(timer)
  }, [advance, paused, count, visibleCount])

  useEffect(() => {
    if (index < count) return
    const timeout = window.setTimeout(() => {
      setAnimate(false)
      setIndex(0)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true))
      })
    }, SLIDE_MS)
    return () => window.clearTimeout(timeout)
  }, [index, count])

  const viewportWidth =
    visibleCount === 1
      ? 'min(100%, 320px)'
      : visibleCount === 2
        ? 'min(100%, 560px)'
        : 'min(100%, 1280px)'

  return (
    <div
      className={cn('kanila-popular-dest-carousel mx-auto w-full px-4 md:px-6', className)}
      style={{ maxWidth: viewportWidth }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Popular destinations"
    >
      <div className="overflow-hidden">
        <div
          data-lenis-prevent
          className={cn(
            'flex gap-5 md:gap-6 will-change-transform',
            animate && 'transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]'
          )}
          style={{
            transform: stepPx ? `translate3d(-${index * stepPx}px, 0, 0)` : undefined,
          }}
        >
          {slides.map((dest, i) => (
            <div key={`${dest.slug}-${i}`} ref={i === 0 ? measureRef : undefined} className="shrink-0">
              <KanilaPopularDestinationCard destination={dest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
