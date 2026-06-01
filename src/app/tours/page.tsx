import type { Metadata } from 'next'
import { Suspense } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { ToursCatalog } from '@/components/tours/ToursCatalog'

export const metadata: Metadata = {
  title: 'Tours & Travel Packages',
  description:
    'Explore Kamil Travel packages for Somalia, Kenya, corporate travel, and international routes. All bookings handled by personalised enquiry.',
}

const steps = [
  {
    step: '01',
    title: 'Search & select',
    desc: 'Browse packages by destination, category, or keyword.',
  },
  {
    step: '02',
    title: 'Send an enquiry',
    desc: 'Tell us your dates, group size, and travel requirements.',
  },
  {
    step: '03',
    title: 'We coordinate',
    desc: 'Our team arranges flights, transfers, meet & assist, and documentation.',
  },
]

export default function ToursPage() {
  return (
    <>
      <PageBanner
        eyebrow="Explore"
        title="Tours & Travel Packages"
        subtitle="Curated travel packages for Somalia, Kenya, and beyond — coordinated with full airport support and professional service."
        imageKey="international"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tours' }]}
      />

      <InnerPageOverlap>
        <section className="section-padding pt-14 md:pt-16">
          <div className="mx-auto max-w-7xl px-5">
            <FadeUp>
              <SectionHeader
                eyebrow="How It Works"
                title="Inquiry-based booking"
                description="Kamil Travel does not offer instant online checkout. Every package starts with a conversation so we can tailor flights, transfers, and support to your needs."
              />
            </FadeUp>
            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((item, i) => (
                <FadeUp key={item.step} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-md">
                    <span className="mb-3 block font-kanila-display text-3xl font-normal text-gold">
                      {item.step}
                    </span>
                    <h3 className="mb-2 font-kanila-display text-xl font-normal text-ink">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <Suspense fallback={<p className="text-center text-ink-muted">Loading packages…</p>}>
              <ToursCatalog />
            </Suspense>
          </div>
        </section>
      </InnerPageOverlap>

      <InnerPageCTA
        title="Need a custom itinerary?"
        description="Corporate groups, multi-city Somalia routes, and international packages — tell us what you need and we will build it."
        primaryLabel="Send Tour Enquiry"
        primaryHref="/contact?inquiry=Tour+Inquiry"
        secondaryLabel="View destinations"
        secondaryHref="/destinations"
        imageKey="santorini"
      />
    </>
  )
}
