'use client'

import { KanilaArchCarousel } from '@/components/ui/KanilaArchCarousel'
import { cn } from '@/lib/utils'
import type { ArchDestinationItem } from '@/components/ui/ArchDestinationsCarousel'

interface KanilaPopularArchCarouselProps {
  items: ArchDestinationItem[]
  className?: string
}

/** Kanila Home 3 — Popular Destinations arch carousel */
export function KanilaPopularArchCarousel({ items, className }: KanilaPopularArchCarouselProps) {
  return (
    <KanilaArchCarousel
      variant="popular"
      items={items}
      className={cn('kanila-popular-carousel', className)}
    />
  )
}
