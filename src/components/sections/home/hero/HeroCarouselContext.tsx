'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  getHeroCarouselSlides,
  HERO_CAROUSEL_INTERVAL_MS,
  type HeroCarouselSlide,
} from '@/lib/heroSlides'

type HeroCarouselContextValue = {
  slides: HeroCarouselSlide[]
  index: number
  paused: boolean
  setPaused: (paused: boolean) => void
  advance: () => void
}

const HeroCarouselContext = createContext<HeroCarouselContextValue | null>(null)

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function HeroCarouselProvider({ children }: { children: ReactNode }) {
  const slides = useMemo(() => getHeroCarouselSlides(), [])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % Math.max(slides.length, 1))
  }, [slides.length])

  useEffect(() => {
    if (prefersReducedMotion() || paused || slides.length <= 1) return
    const timer = window.setInterval(advance, HERO_CAROUSEL_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [advance, paused, slides.length])

  const value = useMemo(
    () => ({ slides, index, paused, setPaused, advance }),
    [slides, index, paused, advance]
  )

  return <HeroCarouselContext.Provider value={value}>{children}</HeroCarouselContext.Provider>
}

export function useHeroCarousel() {
  const ctx = useContext(HeroCarouselContext)
  if (!ctx) {
    throw new Error('useHeroCarousel must be used within HeroCarouselProvider')
  }
  return ctx
}
