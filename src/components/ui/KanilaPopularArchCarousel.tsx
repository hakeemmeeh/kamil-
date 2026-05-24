'use client'

import { useCallback, useEffect, useState } from 'react'
import { ArchedDestinationCard } from '@/components/ui/ArchedDestinationCard'
import { cn } from '@/lib/utils'
import type { ArchDestinationItem } from '@/components/ui/ArchDestinationsCarousel'

/** Kanila Popular — stagger like hero arches (center tallest) */
const archOffsets = ['mb-14', 'mb-6', 'mb-0', 'mb-8', 'mb-16']

function useVisibleCount() {
  const [n, setN] = useState(5)
  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(max-width: 639px)').matches) setN(3)
      else if (window.matchMedia('(max-width: 1023px)').matches) setN(4)
      else setN(5)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return n
}

interface KanilaPopularArchCarouselProps {
  items: ArchDestinationItem[]
  className?: string
}

/**
 * Kanila Home 3 — Popular Destinations arch carousel
 * 5 large arches · center pops · autoplay · no arrows · edge fade mask
 */
export function KanilaPopularArchCarousel({ items, className }: KanilaPopularArchCarouselProps) {
  const visibleCount = useVisibleCount()
  const centerSlot = Math.floor(visibleCount / 2)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = items.length

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % count)
  }, [count])

  useEffect(() => {
    if (paused || count <= 1) return
    const timer = window.setInterval(advance, 3800)
    return () => window.clearInterval(timer)
  }, [advance, paused, count])

  const visible = Array.from({ length: visibleCount }, (_, i) => {
    const dest = items[(index + i) % count]
    return { ...dest, slot: i, isCenter: i === centerSlot }
  })

  return (
    <div
      className={cn('kanila-popular-carousel mx-auto w-full max-w-[min(100%,1440px)]', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Popular destinations"
    >
      <div
        data-lenis-prevent
        className="popular-arch-track flex items-end justify-center gap-3 overflow-x-auto overflow-y-visible px-3 pb-3 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 md:gap-7 lg:gap-9 xl:gap-10 [&::-webkit-scrollbar]:hidden"
      >
        {visible.map(({ slug, title, image, href, slot, isCenter }) => (
          <ArchedDestinationCard
            key={`${index}-${slug}`}
            title={title}
            image={image}
            href={href}
            variant="popular"
            size="2xl"
            className={cn(
              'popular-arch-card origin-bottom shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
              archOffsets[slot] ?? 'mb-0',
              isCenter && 'popular-arch-card--center',
              isCenter
                ? 'z-30 scale-100 opacity-100'
                : 'z-10 scale-[0.88] opacity-100 sm:scale-[0.9]'
            )}
          />
        ))}
      </div>

      {/* Kanila-style dot indicators (no arrow buttons) */}
      {count > 1 && (
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
