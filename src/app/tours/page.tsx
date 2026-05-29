import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PageBanner } from '@/components/shared/PageBanner'
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
      />

      <section className="section-padding bg-sand-light">
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
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <span className="mb-3 block font-display text-3xl font-semibold text-gold">{item.step}</span>
                  <h3 className="mb-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <ToursCatalog />
        </div>
      </section>

      <section className="bg-night py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp instant>
            <h2 className="mb-4 font-display text-4xl font-semibold text-white md:text-5xl">
              Need a custom itinerary?
            </h2>
            <p className="mb-8 text-white/60">
              Corporate groups, multi-city Somalia routes, and international packages — tell us what you need and we will build it.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact?inquiry=Tour+Inquiry" variant="primary" size="lg">
                Send Tour Enquiry
              </Button>
              <Link href="/destinations" className="text-sm font-bold text-gold hover:underline">
                View destinations
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
