import type { Metadata } from 'next'
import Link from 'next/link'
import { destinations, travelRegions } from '@/lib/content'
import { PageBanner } from '@/components/shared/PageBanner'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { RegionPremiumCard } from '@/components/ui/RegionPremiumCard'
import { Button } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Explore global destinations with Kamil Travel — Africa, Europe, the Americas, and Asia-Pacific. Regional airport support in Somalia from our Nairobi headquarters.',
}

const somaliaDestinations = destinations.filter(
  (d) => d.country === 'Somalia' && d.status === 'confirmed-context'
)

const globalDestinations = destinations.filter(
  (d) => d.country !== 'Somalia' && d.status === 'confirmed-context'
)

export default function DestinationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Where We Go"
        title="Destinations Worldwide"
        subtitle="From Nairobi to Oslo, New York, and Sydney — Kamil Travel arranges global journeys with deep regional expertise in East Africa."
        imageKey="international"
      />

      <section className="region-section relative overflow-hidden py-24 md:py-28" id="travel-by-region">
        <div className="absolute inset-0 bg-[#F3EDE4]" aria-hidden />
        <div className="region-blob pointer-events-none absolute -bottom-24 -left-20 h-[min(480px,65vw)] w-[min(480px,65vw)] rounded-[44%] bg-gold/25 blur-[1px]" aria-hidden />
        <div className="region-blob-soft pointer-events-none absolute -bottom-14 -left-10 h-[min(280px,45vw)] w-[min(280px,45vw)] rounded-[40%] bg-gold/35" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-5 justify-center">Travel by Region</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
                <span className="text-gold/70">‹</span> The Best Destinations{' '}
                <span className="text-gold/70">›</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {travelRegions.map((region, i) => (
              <FadeUp key={region.slug} delay={i * 0.08}>
                <RegionPremiumCard region={region} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp>
            <SectionHeader
              eyebrow="Global Cities"
              title="International Destinations"
              description="City breaks, long-haul leisure, and corporate routes — as featured on kamiltravel.com."
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {globalDestinations.map((dest, i) => (
              <FadeUp key={dest.slug} delay={i * 0.08} className="scroll-mt-32">
                <div id={dest.slug}>
                  <DestinationCard {...dest} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp>
            <SectionHeader
              eyebrow="Regional Strength"
              title="Somalia Airport Network"
              description="Representatives across key Somalia airports, with a branch office at Mogadishu airport."
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {somaliaDestinations.map((dest, i) => (
              <FadeUp key={dest.slug} delay={i * 0.08} className="scroll-mt-32">
                <div id={dest.slug}>
                  <DestinationCard {...dest} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp instant>
            <h2 className="mb-4 font-display text-3xl font-semibold text-white md:text-4xl">
              Ready to plan your next journey?
            </h2>
            <p className="mb-8 text-white/60">
              Whether it&apos;s a weekend in Oslo, corporate travel to New York, or regional support
              across Somalia — we&apos;re here to help.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Start an Inquiry
            </Button>
            <Link
              href="/tours"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold hover:gap-3"
            >
              View tour packages <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
