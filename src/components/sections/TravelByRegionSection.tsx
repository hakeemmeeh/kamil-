'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { travelRegions } from '@/lib/content'
import { RegionPremiumCard } from '@/components/ui/RegionPremiumCard'

export function TravelByRegionSection() {
  return (
    <section
      className="region-section relative overflow-hidden bg-[#F3EDE4] py-24 md:py-32 lg:py-36"
      id="travel-by-region"
    >
      <div className="region-blob pointer-events-none absolute -bottom-24 -left-20 h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-[44%] bg-gold/25 blur-[1px] md:-bottom-32 md:-left-28" aria-hidden />
      <div className="region-blob-soft pointer-events-none absolute -bottom-16 -left-12 h-[min(320px,50vw)] w-[min(320px,50vw)] rounded-[40%] bg-gold/35 md:-bottom-20 md:-left-16" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center md:mb-16">
          <p className="animate-eyebrow eyebrow mb-5 justify-center">Explore the World</p>
          <h2 className="animate-fade-up mx-auto font-display text-[2.15rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem] md:text-[3.15rem]">
            <span className="text-gold/70">‹</span> The Best Destinations{' '}
            <span className="text-gold/70">›</span>
          </h2>
          <p className="animate-fade-up mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:mt-6 md:text-lg">
            Browse routes by region — from East African hubs to global city breaks, coordinated
            from Nairobi.
          </p>
        </div>

        <div
          data-stagger="regions"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {travelRegions.map((region) => (
            <RegionPremiumCard key={region.slug} region={region} />
          ))}
        </div>

        <div className="animate-fade-up mt-12 flex justify-center md:mt-14">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-gold"
          >
            View All Destinations
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
