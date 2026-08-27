'use client'

import { KanilaPopularDestinationCarousel } from '@/components/ui/KanilaPopularDestinationCarousel'
import type { KanilaPopularDestination } from '@/components/ui/KanilaPopularDestinationCard'
import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { destinations } from '@/lib/content'

const POPULAR_SLUGS = [
  'santorini',
  'bali',
  'thailand',
  'seychelles',
  'london',
  'tokyo',
  'new-york',
  'portugal',
] as const

const destBySlug = new Map(destinations.map((d) => [d.slug, d]))

const popularItems: KanilaPopularDestination[] = POPULAR_SLUGS.flatMap((slug) => {
  const d = destBySlug.get(slug)
  if (!d || d.status === 'client-to-confirm') return []
  return [
    {
      slug: d.slug,
      title: d.title,
      image: d.image,
      href: `/destinations#${d.slug}`,
      caption: d.country,
    },
  ]
})

/** Leisure arch cards — Somalia network stays in Travel by Region */
export function PopularDestinationsSection() {
  return (
    <section
      className="relative z-20 bg-night py-16 md:py-24"
      id="popular-destinations"
      aria-label="Popular destinations"
    >
      <header className="mb-10 px-5 text-center md:mb-12">
        <p className="font-kanila-script mb-2 text-[1.5rem] text-kamil-green-light md:text-[1.75rem]">
          Tour Activity
        </p>
        <h2 className="font-kanila-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal leading-[0.95] tracking-tight text-white">
          Popular Destinations
        </h2>
        <KanilaCompassMark className="mx-auto mt-4 text-white/90" />
      </header>

      <div className="w-full">
        <KanilaPopularDestinationCarousel items={popularItems} />
      </div>
    </section>
  )
}
