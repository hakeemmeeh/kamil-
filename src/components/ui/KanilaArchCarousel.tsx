'use client'

import { useCallback, useEffect, useState } from 'react'
import { ArchedDestinationCard } from '@/components/ui/ArchedDestinationCard'
import { cn } from '@/lib/utils'
import type { ArchDestinationItem } from '@/components/ui/ArchDestinationsCarousel'

/** Kanila Home 3 — center arch tallest, symmetrical stagger */
const ARCH_OFFSETS = ['mb-14', 'mb-6', 'mb-0', 'mb-8', 'mb-16']

function useVisibleCount(variant: 'hero' | 'popular') {
  const [n, setN] = useState(variant === 'hero' ? 3 : 5)
  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(max-width: 639px)').matches) setN(3)
      else if (window.matchMedia('(max-width: 1023px)').matches) setN(4)
      else setN(5)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [variant])
  return n
}

export type KanilaArchCarouselVariant = 'hero' | 'popular'

interface KanilaArchCarouselProps {
  items: ArchDestinationItem[]
  variant?: KanilaArchCarouselVariant
  className?: string
  /** Wait for hero intro before autoplay */
  introDelayMs?: number
}

/**
 * Kanila Home 3 arch carousel — shared by hero (bottom row) and Popular Destinations.
 * 3–5 visible arches · center pops · index rotates one-by-one · no arrows.
 */
export function KanilaArchCarousel({
  items,
  variant = 'popular',
  className,
  introDelayMs = 0,
}: KanilaArchCarouselProps) {
  const visibleCount = useVisibleCount(variant)
  const centerSlot = Math.floor(visibleCount / 2)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [autoplayReady, setAutoplayReady] = useState(introDelayMs === 0)
  const count = items.length
  const isHero = variant === 'hero'

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % count)
  }, [count])

  useEffect(() => {
    if (introDelayMs <= 0) return
    const t = window.setTimeout(() => setAutoplayReady(true), introDelayMs)
    return () => window.clearTimeout(t)
  }, [introDelayMs])

  useEffect(() => {
    if (!autoplayReady || paused || count <= 1) return
    const timer = window.setInterval(advance, 3800)
    return () => window.clearInterval(timer)
  }, [advance, autoplayReady, paused, count])

  const visible = Array.from({ length: visibleCount }, (_, i) => {
    const dest = items[(index + i) % count]
    return { ...dest, slot: i, isCenter: i === centerSlot }
  })

  return (
    <div
      className={cn(
        'kanila-arch-carousel mx-auto w-full',
        isHero ? 'max-w-[min(100%,1440px)]' : 'max-w-[min(100%,1440px)]',
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={isHero ? 'Featured destinations' : 'Popular destinations'}
    >
      <div
        {...(!isHero ? { 'data-lenis-prevent': '' } : {})}
        className={cn(
          'kanila-arch-track flex items-end justify-center overflow-x-auto overflow-y-visible pb-3 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'gap-3 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-10',
          isHero && 'px-3 sm:px-5',
          !isHero && 'px-3'
        )}
      >
        {visible.map(({ slug, title, image, href, slot, isCenter }) => (
          <div
            key={`${index}-${slug}-${slot}`}
            className={cn(
              'kanila-arch-slot shrink-0',
              isHero && 'kanila-arch-slot--hero'
            )}
          >
            <ArchedDestinationCard
              title={title}
              image={image}
              href={href}
              variant={isHero ? 'hero' : 'popular'}
              size={isHero ? 'xl' : '2xl'}
              className={cn(
                'kanila-arch-card origin-bottom transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isHero && 'kanila-arch-card--hero hero-arch-card',
                !isHero && 'popular-arch-card',
                ARCH_OFFSETS[slot] ?? 'mb-0',
                isCenter && (isHero ? 'hero-arch-card--active' : 'popular-arch-card--center'),
                isCenter
                  ? 'z-30 scale-100 opacity-100 shadow-[0_24px_50px_rgba(7,17,31,0.4)]'
                  : 'z-10 scale-[0.88] opacity-100 sm:scale-[0.9]'
              )}
            />
          </div>
        ))}
      </div>

      {!isHero && count > 1 && (
        <div className="popular-dots mt-6 flex justify-center gap-2" aria-hidden>
          {Array.from({ length: Math.min(count, 8) }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1.5 rounded-full bg-white/35 transition-all duration-500',
                i === index % Math.min(count, 8) ? 'w-7 bg-gold' : 'w-1.5'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
