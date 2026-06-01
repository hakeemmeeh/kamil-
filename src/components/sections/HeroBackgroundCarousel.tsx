'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { cityImage, cityImageAlts, heroBackgroundSlides } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

const HERO_SLIDES = heroBackgroundSlides

const INTERVAL_MS = 5500
const FADE_MS = 1400

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Full-bleed hero background — auto crossfade between epic city / travel scenes */
export function HeroBackgroundCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion() || paused || HERO_SLIDES.length <= 1) return
    const timer = window.setInterval(advance, INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [advance, paused])

  return (
    <div
      className="hero-bg-carousel absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
    >
      {HERO_SLIDES.map((key, i) => {
        const active = i === index
        return (
          <div
            key={key}
            className={cn(
              'hero-bg-slide absolute inset-0 transition-opacity ease-in-out',
              active ? 'z-10 opacity-100' : 'z-0 opacity-0'
            )}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            <Image
              src={cityImage(key, 1920)}
              quality={90}
              alt={cityImageAlts[key]}
              fill
              priority={i === 0}
              className={cn(
                'hero-bg h-full w-full object-cover object-center',
                active && !prefersReducedMotion() && 'hero-bg-ken-burns'
              )}
              sizes="100vw"
            />
          </div>
        )
      })}
    </div>
  )
}
