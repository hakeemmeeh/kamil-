import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
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
      <section className="relative overflow-hidden bg-night pt-40 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-surface/40">Explore</p>
          <h1 className="mb-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            Tours & Travel Packages
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Curated travel packages for Somalia, Kenya, and beyond — coordinated with full airport support and professional service.
          </p>
        </div>
      </section>

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
          <FadeUp>
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
