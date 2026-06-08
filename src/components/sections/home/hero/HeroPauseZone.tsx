'use client'

import type { ReactNode } from 'react'
import { useHeroCarousel } from '@/components/sections/home/hero/HeroCarouselContext'

/** Pauses synced hero carousel when the pointer is anywhere over the hero */
export function HeroPauseZone({ children }: { children: ReactNode }) {
  const { setPaused } = useHeroCarousel()

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {children}
    </div>
  )
}
