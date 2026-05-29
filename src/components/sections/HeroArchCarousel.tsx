'use client'

import { HeroKanilaArchCarousel } from '@/components/sections/HeroKanilaArchCarousel'
import { cn } from '@/lib/utils'

interface HeroArchCarouselProps {
  className?: string
}

export function HeroArchCarousel({ className }: HeroArchCarouselProps) {
  return <HeroKanilaArchCarousel className={cn('hero-arch-carousel', className)} />
}
