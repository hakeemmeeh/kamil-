'use client'

import Image from 'next/image'
import { useHeroCarousel } from '@/components/sections/home/hero/HeroCarouselContext'
import { HERO_BG_FADE_MS } from '@/lib/heroSlides'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Full-bleed hero background — synced to arch carousel index */
export function HeroBackgroundCarousel() {
  const { slides, index } = useHeroCarousel()

  return (
    <div className="hero-bg-carousel absolute inset-0" aria-hidden>
      {slides.map((slide, i) => {
        const active = i === index
        return (
          <div
            key={slide.slug}
            className={cn(
              'hero-bg-slide absolute inset-0 transition-opacity ease-in-out',
              active ? 'z-10 opacity-100' : 'z-0 opacity-0'
            )}
            style={{ transitionDuration: `${HERO_BG_FADE_MS}ms` }}
          >
            <Image
              src={slide.image}
              quality={90}
              alt={slide.imageAlt}
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
