import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { becomeAGuide } from '@/lib/content'
import { ContactFormWrapper } from '@/components/ui/ContactFormWrapper'
import { Button } from '@/components/ui/Button'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { PhotoFeatureGrid } from '@/components/shared/PhotoFeatureGrid'

export const metadata: Metadata = {
  title: 'Car Rental & Airport Transfers',
  description:
    'Coordinated local movement and transfer support for travelers — airport pickup, drop-off, corporate movement, and car hire.',
}

const transferOptions = [
  {
    imageKey: 'international' as const,
    title: 'Airport Pickup',
    description: 'Meet and greet at arrival with coordinated transport to your hotel or office.',
  },
  {
    imageKey: 'bannerCarRental' as const,
    title: 'Airport Drop-off',
    description: 'Timely departure transfers so you reach the terminal with confidence.',
  },
  {
    imageKey: 'bannerCorporate' as const,
    title: 'Corporate Movement',
    description: 'Business travel transportation across Nairobi and regional hubs.',
  },
  {
    imageKey: 'groupTravel' as const,
    title: 'Group Transfer',
    description: 'Coordinated transport for teams, delegations, and events.',
  },
  {
    imageKey: 'mogadishu' as const,
    title: 'Car Hire',
    description: 'Flexible vehicle rental for local and regional travel needs.',
  },
  {
    imageKey: 'nairobi' as const,
    title: 'Meet & Assist + Transfer',
    description: 'Combined airport assistance with ground transport in one booking.',
  },
]

export default function CarRentalPage() {
  return (
    <>
      <PageBanner
        eyebrow="Transport"
        title="Car Rental & Airport Transfers"
        subtitle="Coordinated local movement and transfer support for travelers."
        imageKey="bannerCarRental"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Transfers' }]}
      />

      <InnerPageOverlap>
        <PhotoFeatureGrid
          eyebrow="Services"
          title="Transfer & Hire Options"
          items={transferOptions}
          bgClassName="section-padding pt-14 md:pt-16 bg-sand-light"
        />
      </InnerPageOverlap>

      <section id="become-a-guide" className="section-padding bg-sand">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <FadeUp>
            <SectionHeader
              eyebrow="Partners"
              title={becomeAGuide.title}
              description={becomeAGuide.desc}
            />
          </FadeUp>
          <FadeUp delay={0.15}>
            <Button
              href="/contact?inquiry=Guide+Application&message=I+would+like+to+apply+as+a+guide+or+transport+partner."
              variant="primary"
              size="lg"
            >
              {becomeAGuide.cta}
            </Button>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl px-5">
          <FadeUp>
            <SectionHeader eyebrow="Inquiry" title="Request a Transfer or Car Hire" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-3xl border border-border bg-sand-light p-8">
              <ContactFormWrapper />
            </div>
          </FadeUp>
        </div>
      </section>

      <InnerPageCTA
        title="Book your transfer"
        description="Airport pickup, corporate movement, or car hire — share your route and schedule."
        primaryLabel="Request a Transfer"
        secondaryLabel=""
        imageKey="bannerCarRental"
      />
    </>
  )
}
