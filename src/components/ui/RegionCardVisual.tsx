import Image from 'next/image'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

interface RegionCardVisualProps {
  imageKey: CityImageKey
  regionName: string
  className?: string
}

/** Kanila Best Destinations — arched photo accent (replaces line-art sketches) */
export function RegionCardVisual({ imageKey, regionName, className }: RegionCardVisualProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute bottom-5 right-5 top-5 flex w-[36%] min-w-[108px] max-w-[150px] items-end justify-center md:right-6 md:max-w-[165px]',
        className
      )}
      aria-hidden
    >
      <div className="relative w-full">
        <div className="arch-card-mask relative aspect-[3/4] w-full overflow-hidden shadow-[0_16px_40px_rgba(7,17,31,0.12)] ring-1 ring-black/[0.04]">
          <Image
            src={cityImage(imageKey, 800)}
            alt={cityImageAlts[imageKey] ?? regionName}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 120px, 165px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/25 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  )
}
