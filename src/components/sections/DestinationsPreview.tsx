'use client'

import Link from 'next/link'
import { destinations } from '@/lib/content'
import { LineReveal } from '@/components/ui/LineReveal'
import {
  ArchDestinationsCarousel,
  type ArchDestinationItem,
} from '@/components/ui/ArchDestinationsCarousel'
import { ArrowUpRight } from 'lucide-react'

const placeItems: ArchDestinationItem[] = destinations
  .filter((d) => d.status !== 'client-to-confirm')
  .map((d) => ({
    slug: d.slug,
    title: d.title,
    country: d.country,
    image: d.image,
    href: `/destinations#${d.slug}`,
  }))

export function DestinationsPreview() {
  return (
    <section className="section-padding overflow-x-clip bg-night" id="destinations">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center md:mb-16">
          <p className="animate-eyebrow eyebrow mb-6 justify-center before:!bg-gold">Destinations</p>
          <LineReveal
            tag="h2"
            align="center"
            className="mb-6 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-5xl lg:text-[56px]"
          >
            Places To Go
          </LineReveal>
          <p className="animate-fade-up mx-auto max-w-2xl text-lg leading-relaxed text-white/55">
            From African hubs to global city breaks — explore destinations Kamil Travel arranges
            worldwide.
          </p>
        </div>

        <ArchDestinationsCarousel
          items={placeItems}
          size="md"
          autoPlayMs={4200}
          focusPop
          controlsTheme="light"
          cardClassName="places-arch-card arch-reveal-on-scroll"
          trackClassName="px-2 md:px-4"
        />

        <div className="animate-fade-up mt-12 text-center md:mt-14">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition-all hover:border-gold hover:text-gold"
          >
            View All Destinations <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
