import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServicesPageGrid } from '@/components/services/ServicesPageGrid'
import { SignatureServices } from '@/components/sections/SignatureServices'
import { AirportExperience } from '@/components/sections/AirportExperience'
import { TrustPartnersStrip } from '@/components/sections/TrustPartnersStrip'
import { TravelTipsSection } from '@/components/sections/TravelTipsSection'
import { PageBanner } from '@/components/shared/PageBanner'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Travel Services',
  description: 'Explore Kamil Travel services — air ticketing, meet & assist, travel insurance, VIP lounge, airport transfers, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="What We Offer"
        title="Travel Services"
        subtitle="Comprehensive travel support designed around professional delivery and client convenience."
        imageKey="bannerServices"
      />

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp><SectionHeader eyebrow="All Services" title="Everything you need for your journey" /></FadeUp>
          <ServicesPageGrid />
        </div>
      </section>

      <SignatureServices />
      <AirportExperience />
      <TravelTipsSection />
      <TrustPartnersStrip />

      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp instant>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Need travel support?</h2>
            <Button href="/contact" variant="primary" size="lg">Start an Inquiry</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
