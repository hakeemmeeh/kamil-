'use client'

import { useState } from 'react'
import Image from 'next/image'
import { KanilaPopularDestinationCarousel } from '@/components/ui/KanilaPopularDestinationCarousel'
import type { KanilaPopularDestination } from '@/components/ui/KanilaPopularDestinationCard'
import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { cityImage, cityImageAlts } from '@/lib/cityImages'
import { destinations } from '@/lib/content'

const BG_PRIMARY = cityImage('kanilaPopular', 1920)
const BG_FALLBACK = cityImage('sydney', 1920)
const BG_ALT = cityImageAlts.kanilaPopular

function tourCountForSlug(slug: string): number {
  let n = 0
  for (let i = 0; i < slug.length; i++) n += slug.charCodeAt(i)
  return (n % 14) + 1
}

const popularItems: KanilaPopularDestination[] = destinations
  .filter((d) => d.status !== 'client-to-confirm')
  .map((d) => ({
    slug: d.slug,
    title: d.title,
    image: d.image,
    href: `/destinations#${d.slug}`,
    tourCount: tourCountForSlug(d.slug),
  }))

/**
 * Kanila — Popular Destinations
 * Sticky coastal bg · Tour Activity script · Marcellus title · arch cards + white footer
 */
export function PopularDestinationsSection() {
  const [bgSrc, setBgSrc] = useState(BG_PRIMARY)

  return (
    <section
      className="kanila-sticky-cover kanila-popular relative z-20 w-full"
      id="popular-destinations"
      aria-label="Popular destinations"
    >
      <div className="kanila-sticky-cover__pin popular-sticky-bg h-[100svh] w-full overflow-hidden bg-night/30">
        <div className="popular-parallax-layer relative h-full w-full">
          <Image
            src={bgSrc}
            alt={BG_ALT}
            fill
            priority
            quality={90}
            className="popular-bg kanila-fullbleed-bg"
            sizes="100vw"
            onError={() => setBgSrc(BG_FALLBACK)}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-night/8 via-transparent to-night/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-night/12 via-transparent to-transparent"
          aria-hidden
        />
        <div
          className="popular-cover-fade pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-28 bg-gradient-to-t from-night/40 to-transparent md:h-36"
          aria-hidden
        />
      </div>

      <div className="kanila-sticky-cover__scroll relative z-10">
        <div className="relative flex min-h-[100svh] flex-col justify-center py-16 md:py-20">
          <header className="popular-copy mb-10 px-5 text-center md:mb-14">
            <p className="font-kanila-script mb-2 text-[1.65rem] text-kamil-green-light md:mb-3 md:text-[1.85rem]">
              Tour Activity
            </p>
            <h2 className="popular-title font-kanila-display text-[clamp(2.75rem,6.5vw,4.75rem)] font-normal leading-[0.95] tracking-tight text-white">
              Popular Destinations
            </h2>
            <KanilaCompassMark className="mx-auto mt-4 text-white/90" />
          </header>

          <div className="popular-cards-stage relative z-10 w-full pb-4">
            <KanilaPopularDestinationCarousel items={popularItems} />
          </div>
        </div>

        <div className="kanila-sticky-cover__runway h-[14vh] md:h-[18vh]" aria-hidden />
      </div>
    </section>
  )
}
