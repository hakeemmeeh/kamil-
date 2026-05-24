'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ArchedDestinationCard } from '@/components/ui/ArchedDestinationCard'
import { cn } from '@/lib/utils'

export interface ArchDestinationItem {
  slug: string
  title: string
  country?: string
  image: string
  href?: string
}

interface ArchDestinationsCarouselProps {
  items: ArchDestinationItem[]
  size?: 'md' | 'lg'
  variant?: 'default' | 'hero'
  /** Auto-advance interval in ms — 0 disables */
  autoPlayMs?: number
  className?: string
  trackClassName?: string
  cardClassName?: string
  /** Light controls for dark/sticky backgrounds */
  controlsTheme?: 'light' | 'dark'
  showDots?: boolean
  /** Kanila — center card pops larger on autoplay */
  focusPop?: boolean
}

function focusClasses(
  index: number,
  activeIndex: number,
  size: 'md' | 'lg',
  focusPop: boolean
) {
  if (!focusPop) {
    return index === activeIndex ? 'scale-[1.02]' : 'scale-100 opacity-100'
  }

  const dist = Math.abs(index - activeIndex)
  const activeScale = size === 'lg' ? 'scale-[1.18]' : 'scale-[1.14]'
  const activeLift = size === 'lg' ? '-translate-y-6' : '-translate-y-4'

  if (dist === 0) {
    return cn(
      'z-20 opacity-100',
      activeScale,
      activeLift,
      'shadow-[0_28px_60px_rgba(7,17,31,0.38)]'
    )
  }
  if (dist === 1) {
    return 'z-10 scale-[0.9] translate-y-1 opacity-100'
  }
  return 'z-0 scale-[0.8] translate-y-2 opacity-95'
}

export function ArchDestinationsCarousel({
  items,
  size = 'md',
  variant = 'default',
  autoPlayMs = 0,
  className,
  trackClassName,
  cardClassName,
  controlsTheme = 'dark',
  showDots = false,
  focusPop = true,
}: ArchDestinationsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const activeIndexRef = useRef(0)

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const cards = track.querySelectorAll<HTMLElement>('.arch-carousel-card')
    const target = cards[index]
    if (!target) return

    const offset =
      target.offsetLeft - track.clientWidth / 2 + target.clientWidth / 2

    track.scrollTo({ left: offset, behavior: 'smooth' })
    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  const advance = useCallback(
    (step: number) => {
      if (items.length <= 1) return
      const next = (activeIndexRef.current + step + items.length) % items.length
      scrollToIndex(next)
    },
    [items.length, scrollToIndex]
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const cards = track.querySelectorAll<HTMLElement>('.arch-carousel-card')
      if (!cards.length) return

      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let minDist = Infinity

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2
        const dist = Math.abs(center - cardCenter)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })

      activeIndexRef.current = closest
      setActiveIndex(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [items.length])

  useEffect(() => {
    const id = requestAnimationFrame(() => scrollToIndex(0))
    return () => cancelAnimationFrame(id)
  }, [scrollToIndex, items.length])

  useEffect(() => {
    if (!autoPlayMs || paused || items.length <= 1) return
    const timer = window.setInterval(() => advance(1), autoPlayMs)
    return () => window.clearInterval(timer)
  }, [advance, autoPlayMs, paused, items.length])

  const controlBtn =
    controlsTheme === 'light'
      ? 'border-white/25 bg-night/35 text-white hover:border-gold/50 hover:bg-night/55'
      : 'border-border bg-white text-ink hover:border-gold/40 hover:text-gold dark:bg-surface'

  return (
    <div
      className={cn('arch-destinations-carousel', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Destination carousel"
    >
      <div className="relative overflow-visible py-4 md:py-6">
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => advance(-1)}
              className={cn(
                'arch-carousel-prev absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-colors md:-left-2 lg:-left-4',
                controlBtn
              )}
              aria-label="Previous destination"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              className={cn(
                'arch-carousel-next absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-colors md:-right-2 lg:-right-4',
                controlBtn
              )}
              aria-label="Next destination"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <div
          ref={trackRef}
          data-lenis-prevent
          className={cn(
            'arch-carousel-track flex items-end snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible px-10 pb-2 pt-8 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 md:px-12 lg:gap-8 lg:px-14 [&::-webkit-scrollbar]:hidden',
            trackClassName
          )}
        >
          {items.map((dest, i) => (
            <ArchedDestinationCard
              key={dest.slug}
              title={dest.title}
              country={dest.country}
              image={dest.image}
              href={dest.href ?? `/destinations#${dest.slug}`}
              size={size}
              variant={variant}
              className={cn(
                'arch-carousel-card origin-bottom shrink-0 snap-center transition-[transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                focusClasses(i, activeIndex, size, focusPop),
                cardClassName
              )}
            />
          ))}
        </div>

        {showDots && items.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {items.map((dest, i) => (
              <button
                key={dest.slug}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === activeIndex
                    ? 'w-6 bg-gold'
                    : controlsTheme === 'light'
                      ? 'w-1.5 bg-white/35'
                      : 'w-1.5 bg-ink/20 dark:bg-white/25'
                )}
                aria-label={`Go to ${dest.title}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
