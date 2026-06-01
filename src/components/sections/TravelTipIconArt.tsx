'use client'

import Image from 'next/image'
import type { TravelTipIllustrationKey } from '@/lib/content'
import { cn } from '@/lib/utils'

const ILLUSTRATIONS: Record<
  TravelTipIllustrationKey,
  { src: string; alt: string; width: number; height: number }
> = {
  around: {
    src: '/illustrations/travel-tips/getting-around.svg',
    alt: 'Getting around — travel dome illustration',
    width: 220,
    height: 180,
  },
  visa: {
    src: '/illustrations/travel-tips/visa.svg',
    alt: 'Visa — globe and magnifying glass illustration',
    width: 220,
    height: 180,
  },
  arrival: {
    src: '/illustrations/travel-tips/getting-here.svg',
    alt: 'Getting here — flight and map illustration',
    width: 220,
    height: 180,
  },
  tip: {
    src: '/illustrations/travel-tips/travel-tip.svg',
    alt: 'Travel tip — phone notification illustration',
    width: 220,
    height: 180,
  },
}

interface TravelTipIconArtProps {
  type: TravelTipIllustrationKey
  className?: string
}

/** Kanila colourful 3D-style illustrations (reference parity) — hover lift via parent card */
export function TravelTipIconArt({ type, className }: TravelTipIconArtProps) {
  const art = ILLUSTRATIONS[type]

  return (
    <div
      className={cn(
        'travel-tip-icon-art flex h-[140px] w-full items-end justify-center transition-transform duration-500 md:h-[165px]',
        className
      )}
    >
      <Image
        src={art.src}
        alt={art.alt}
        width={art.width}
        height={art.height}
        className="h-full w-auto max-w-[min(100%,220px)] object-contain object-bottom"
        unoptimized
      />
    </div>
  )
}
