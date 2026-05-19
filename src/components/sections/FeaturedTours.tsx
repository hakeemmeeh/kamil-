'use client'

import Link from 'next/link'
import { tours } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TourCard } from '@/components/ui/TourCard'
import { ArrowUpRight } from 'lucide-react'

export function FeaturedTours() {
  const featured = tours.filter((t) => t.featured)

  return (
    <section className="section-padding bg-sand" id="featured-tours">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader
            eyebrow="Travel Packages"
            title="Packages we arrange for you"
            description="Inquiry-based travel packages for Somalia, Kenya, and international routes — coordinated by the Kamil Travel team."
            align="left"
          />
        </FadeUp>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour, i) => (
            <FadeUp key={tour.slug} delay={i * 0.08}>
              <TourCard {...tour} />
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.25}>
          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
            >
              View all packages <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
