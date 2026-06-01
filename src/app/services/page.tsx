import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { ServicesPageGrid } from '@/components/services/ServicesPageGrid'
import { AirportExperience } from '@/components/sections/AirportExperience'
import { TrustPartnersStrip } from '@/components/sections/TrustPartnersStrip'
import { TravelTipsSection } from '@/components/sections/TravelTipsSection'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { KanilaSectionHeading } from '@/components/ui/KanilaSectionHeading'
import { services } from '@/lib/content'

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

      <InnerPageOverlap bg="white">
        <section className="section-padding pt-14 md:pt-16" id="all-services">
          <div className="mx-auto max-w-7xl px-5">
            <FadeUp>
              <KanilaSectionHeading
                eyebrow="Full Catalogue"
                title="Everything you need for your journey"
                subtitle="Nine core services — from ticketing and insurance to Mogadishu meet & assist. Select a service below or send an enquiry for a tailored quote."
                align="left"
                showCompass
                className="mb-10 max-w-3xl md:mb-12"
              />
            </FadeUp>

            <FadeUp delay={0.06}>
              <nav
                aria-label="Jump to service"
                className="mb-10 flex flex-wrap gap-2 md:mb-12"
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`#${service.slug}`}
                    className="rounded-full border border-border bg-sand-light px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-soft transition hover:border-gold hover:bg-gold/10 hover:text-gold"
                  >
                    {service.title}
                  </Link>
                ))}
              </nav>
            </FadeUp>

            <ServicesPageGrid />
          </div>
        </section>
      </InnerPageOverlap>

      <AirportExperience />
      <TravelTipsSection />
      <TrustPartnersStrip />

      <InnerPageCTA
        title="Need travel support?"
        description="From ticketing to meet & assist — tell us what you need and we will respond within 24 hours."
        primaryLabel="Start an Inquiry"
        secondaryLabel=""
        imageKey="bannerCta"
      />
    </>
  )
}
