import Link from 'next/link'
import { RegionCardVisual } from '@/components/ui/RegionCardVisual'
import type { CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

export interface RegionCardData {
  slug: string
  name: string
  image?: CityImageKey
  desc?: string
  places: { name: string; href: string }[]
}

interface RegionPremiumCardProps {
  region: RegionCardData
  className?: string
}

export function RegionPremiumCard({ region, className }: RegionPremiumCardProps) {
  const useTwoColumns = region.places.length > 4
  const imageKey = region.image ?? 'international'

  return (
    <article
      id={`region-${region.slug}`}
      data-stagger-item
      className={cn(
        'region-premium-card group relative min-h-[248px] overflow-hidden rounded-2xl border border-black/[0.04] bg-white p-7 shadow-[0_12px_40px_rgba(7,17,31,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/15 hover:shadow-[0_24px_56px_rgba(7,17,31,0.09)] md:min-h-[260px] md:p-8',
        className
      )}
    >
      <RegionCardVisual imageKey={imageKey} regionName={region.name} />

      <div className="relative z-10 max-w-[56%] pr-1">
        <h3 className="mb-4 font-display text-[1.5rem] font-semibold leading-none tracking-tight text-ink md:mb-5 md:text-[1.75rem]">
          {region.name}
        </h3>

        <ul
          className={cn(
            'gap-x-5 gap-y-2',
            useTwoColumns ? 'columns-2' : 'space-y-2'
          )}
        >
          {region.places.map((place) => (
            <li key={place.name} className={useTwoColumns ? 'break-inside-avoid' : undefined}>
              <Link
                href={place.href}
                className="text-[14px] font-medium leading-snug text-ink-soft transition-colors hover:text-gold md:text-[15px]"
              >
                {place.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
