'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

interface RegionCardVisualProps {
  imageKey: CityImageKey
  regionName: string
  className?: string
}

const FALLBACK_KEY: CityImageKey = 'greece'

/** Kanila Best Destinations — arched photo accent (replaces line-art sketches) */
export function RegionCardVisual({ imageKey, regionName, className }: RegionCardVisualProps) {
  const [src, setSrc] = useState(() => cityImage(imageKey, 800))

  return (
    <div
      className={cn(
        'pointer-events-none absolute bottom-5 right-5 top-5 flex w-[36%] min-w-[108px] max-w-[150px] items-end justify-center md:right-6 md:max-w-[165px]',
        className
      )}
      aria-hidden
    >
      <div className="relative h-full w-full">
        <div className="arch-card-mask relative aspect-[3/4] h-full w-full min-h-[120px] overflow-hidden bg-sand-deep shadow-[0_16px_40px_rgba(7,17,31,0.12)] ring-1 ring-black/[0.04]">
          <Image
            src={src}
            alt={cityImageAlts[imageKey] ?? regionName}
            fill
            quality={85}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 120px, 165px"
            onError={() => setSrc(cityImage(FALLBACK_KEY, 800))}
          />
        </div>
      </div>
    </div>
  )
}
