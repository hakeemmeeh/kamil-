import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServicesPageGrid } from '@/components/services/ServicesPageGrid'
import { SignatureServices } from '@/components/sections/SignatureServices'
import { AirportExperience } from '@/components/sections/AirportExperience'
import { TrustPartnersStrip } from '@/components/sections/TrustPartnersStrip'
import { TravelTipsSection } from '@/components/sections/TravelTipsSection'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'

export const metadata: Metadata = {
  title: 'Travel Services',
  description:
    'Explore Kamil Travel services — air ticketing, meet & assist, travel insurance, VIP lounge, airport transfers, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="What We Offer"
        title="Travel Services"
        subtitle="Comprehensive travel support designed around professional delivery and client convenience."
        imageKey="bannerServices"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <InnerPageOverlap>
        <section className="section-padding pt-14 md:pt-16">
          <div className="mx-auto max-w-7xl px-5">
            <FadeUp>
              <SectionHeader eyebrow="All Services" title="Everything you need for your journey" />
            </FadeUp>
            <ServicesPageGrid />
          </div>
        </section>
      </InnerPageOverlap>

      <SignatureServices />
      <AirportExperience />
      <TravelTipsSection />
      <TrustPartnersStrip />

      <InnerPageCTA
        title="Need travel support?"
        description="From ticketing to meet & assist — tell us what you need and we will respond within 24 hours."
        primaryLabel="Start an Inquiry"
        secondaryLabel=""
        imageKey="bannerServices"
      />
    </>
  )
}
