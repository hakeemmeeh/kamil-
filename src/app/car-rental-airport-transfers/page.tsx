import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactFormWrapper } from '@/components/ui/ContactFormWrapper'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
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
    </>
  )
}
