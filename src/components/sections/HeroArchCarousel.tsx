'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArchedDestinationCard } from '@/components/ui/ArchedDestinationCard'
import { cn } from '@/lib/utils'
import { destinations } from '@/lib/content'

const carouselDestinations = destinations
  .filter((d) => d.status !== 'client-to-confirm')
  .slice(0, 8)
  .map((d) => ({
    slug: d.slug,
    title: d.title,
    image: d.image,
    href: `/destinations#${d.slug}`,
  }))

const COUNT = carouselDestinations.length

/** Kanila Home 3 — vertical stagger on side arch row */
const archOffsets = ['mb-12', 'mb-4', 'mb-0', 'mb-6']

const SLIDE_MS = 700
const AUTO_MS = 3200

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

interface HeroArchCarouselProps {
  className?: string
}

/**
 * Kanila Home 3 — hero arches on the right, horizontal track slides one card at a time
 */
export function HeroArchCarousel({ className }: HeroArchCarouselProps) {
  const [index, setIndex] = useState(0)
  const [stepPx, setStepPx] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const measureRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const slides = [...carouselDestinations, ...carouselDestinations]

  const measure = useCallback(() => {
    const el = measureRef.current
    if (!el) return
    const gap = parseFloat(getComputedStyle(el.parentElement ?? el).gap || '16') || 16
    setStepPx(el.offsetWidth + gap)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const advance = useCallback(() => {
    setAnimate(true)
    setIndex((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion() || paused || COUNT <= 1) return
    const timer = window.setInterval(advance, AUTO_MS)
    return () => window.clearInterval(timer)
  }, [advance, paused])

  useEffect(() => {
    if (index < COUNT) return
    const timeout = window.setTimeout(() => {
      setAnimate(false)
      setIndex(0)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true))
      })
    }, SLIDE_MS)
    return () => window.clearTimeout(timeout)
  }, [index])

  return (
    <div
      className={cn('hero-arch-carousel w-full', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured destinations"
    >
      <div className="hero-arch-viewport overflow-hidden">
        <div
          ref={trackRef}
          className={cn(
            'hero-arch-track flex items-end gap-4 will-change-transform',
            animate && 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
          )}
          style={{ transform: stepPx ? `translate3d(-${index * stepPx}px, 0, 0)` : undefined }}
        >
          {slides.map((dest, i) => {
            const logical = i % COUNT
            const isActive = i === index
            return (
              <div
                key={`${dest.slug}-${i}`}
                ref={i === 0 ? measureRef : undefined}
                className="shrink-0"
              >
                <ArchedDestinationCard
                  title={dest.title}
                  image={dest.image}
                  href={dest.href}
                  variant="hero"
                  size="hero"
                  className={cn(
                    'hero-arch-card origin-bottom',
                    archOffsets[logical % archOffsets.length],
                    isActive
                      ? 'z-20 scale-100 opacity-100 shadow-[0_24px_50px_rgba(7,17,31,0.5)]'
                      : 'z-10 scale-[0.9] opacity-100'
                  )}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
