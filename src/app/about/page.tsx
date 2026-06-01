import type { Metadata } from 'next'
import { coreValues } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { PhotoFeatureGrid } from '@/components/shared/PhotoFeatureGrid'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AboutStorySection } from '@/components/about/AboutStorySection'
import { PhotoVisionMission } from '@/components/about/PhotoVisionMission'
import { WhyKamil } from '@/components/sections/WhyKamil'
import { SomaliaRepresentativeNetwork } from '@/components/sections/SomaliaRepresentativeNetwork'
import { TrustPartnersStrip } from '@/components/sections/TrustPartnersStrip'
import { CorporateTravelSection } from '@/components/sections/CorporateTravelSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Kamil Travel — professional travel management for corporate and regional travelers in Kenya and Somalia.',
}

const differentiators = [
  {
    imageKey: 'nairobi' as const,
    title: 'Kenya & Somalia Focus',
    href: '/about',
    description: 'Deep regional expertise across East Africa with headquarters in Nairobi.',
  },
  {
    imageKey: 'mogadishu' as const,
    title: 'Mogadishu Airport Office',
    href: '/contact',
    description: 'Branch office providing direct airport support and on-ground assistance.',
  },
  {
    imageKey: 'international' as const,
    title: 'Airport Representatives',
    href: '/services#meet-assist',
    description: 'Presence across six local Somalia airports for meet & assist services.',
  },
  {
    imageKey: 'bannerCorporate' as const,
    title: 'Corporate Expertise',
    href: '/corporate-travel',
    description: 'Tailored travel management for organizations and group movements.',
  },
  {
    imageKey: 'groupTravel' as const,
    title: 'Professional Staff',
    description: 'Qualified travel professionals dedicated to responsive client service.',
  },
  {
    imageKey: 'santorini' as const,
    title: 'Airline Relationships',
    description: 'Strong partnerships with major airlines for competitive routing.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="About Kamil Travel"
        subtitle="Professional travel management for corporate and regional travelers."
        imageKey="nairobi"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <InnerPageOverlap>
        <AboutStorySection />
      </InnerPageOverlap>

      <PhotoVisionMission />

      <PhotoFeatureGrid
        eyebrow="Our Edge"
        title="What Makes Us Different"
        items={differentiators}
        bgClassName="section-padding bg-sand"
      />

      <WhyKamil />

      <div id="somalia-network">
        <SomaliaRepresentativeNetwork />
      </div>

      <CorporateTravelSection />

      <TrustPartnersStrip />

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp>
            <SectionHeader eyebrow="Core Values" title="What Guides Us" />
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg">
                  <span className="mb-4 block font-kanila-display text-5xl font-normal text-gold/25 transition-transform group-hover:-translate-y-1">
                    0{i + 1}
                  </span>
                  <div className="mb-4 h-0.5 w-8 bg-gold" />
                  <h3 className="mb-2 font-kanila-display text-xl font-normal text-ink">{value.title}</h3>
                  <p className="text-sm text-ink-muted">{value.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Ready to travel with confidence?"
        description="Plan your next corporate or regional journey with a team that knows Kenya, Somalia, and the world."
        primaryLabel="Plan a Trip"
        secondaryLabel="Contact Us"
        imageKey="greece"
      />
    </>
  )
}
