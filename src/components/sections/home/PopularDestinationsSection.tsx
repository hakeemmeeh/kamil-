'use client'

import { KanilaPopularDestinationCarousel } from '@/components/ui/KanilaPopularDestinationCarousel'
import type { KanilaPopularDestination } from '@/components/ui/KanilaPopularDestinationCard'
import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { destinations } from '@/lib/content'

function tourCountForSlug(slug: string): number {
  let n = 0
  for (let i = 0; i < slug.length; i++) n += slug.charCodeAt(i)
  return (n % 14) + 1
}

const popularItems: KanilaPopularDestination[] = destinations
  .filter((d) => d.status !== 'client-to-confirm')
  .slice(0, 10)
  .map((d) => ({
    slug: d.slug,
    title: d.title,
    image: d.image,
    href: `/destinations#${d.slug}`,
    tourCount: tourCountForSlug(d.slug),
  }))

/** Popular Destinations — solid section, card photos only (no sticky scenic bg) */
export function PopularDestinationsSection() {
  return (
    <section
      className="kanila-popular relative z-20 bg-night py-20 md:py-28"
      id="popular-destinations"
      aria-label="Popular destinations"
    >
      <header className="popular-copy mb-10 px-5 text-center md:mb-14">
        <p className="font-kanila-script mb-2 text-[1.65rem] text-kamil-green-light md:mb-3 md:text-[1.85rem]">
          Tour Activity
        </p>
        <h2 className="popular-title font-kanila-display text-[clamp(2.5rem,5.5vw,4rem)] font-normal leading-[0.95] tracking-tight text-white">
          Popular Destinations
        </h2>
        <KanilaCompassMark className="mx-auto mt-4 text-white/90" />
      </header>

      <div className="popular-cards-stage relative z-10 w-full pb-4">
        <KanilaPopularDestinationCarousel items={popularItems} />
      </div>
    </section>
  )
}
