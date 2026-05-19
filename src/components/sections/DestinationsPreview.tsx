'use client'

import { destinations } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { FadeUp } from '@/components/ui/FadeUp'

export function DestinationsPreview() {
  return (
    <section className="section-padding bg-sand-light" id="destinations">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader eyebrow="Destinations" title="Destinations with purpose, planning, and support." description="Explore confirmed travel points across our Somalia airport network and beyond." />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <FadeUp key={dest.slug} delay={i * 0.08}>
              <DestinationCard {...dest} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
