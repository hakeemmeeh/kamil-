import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { PhotoFeatureGrid } from '@/components/shared/PhotoFeatureGrid'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Travel',
  description:
    'Kamil Travel provides customized and comprehensive travel management services for corporate clientele in Kenya and Somalia.',
}

const features = [
  {
    imageKey: 'international' as const,
    title: 'Flight booking',
    description: 'Professional booking and reservation management for teams and executives.',
  },
  {
    imageKey: 'groupTravel' as const,
    title: 'Group travel',
    description: 'Coordinated logistics for team and organizational movements.',
  },
  {
    imageKey: 'london' as const,
    title: 'Travel consultancy',
    description: 'Strategic guidance for complex international travel needs.',
  },
  {
    imageKey: 'bannerCorporate' as const,
    title: 'Destination alerts',
    description: 'Timely updates on routes, restrictions, and destination changes.',
  },
  {
    imageKey: 'mogadishu' as const,
    title: '24-hour emergency support',
    description: 'Around-the-clock assistance when plans change unexpectedly.',
  },
  {
    imageKey: 'bannerCarRental' as const,
    title: 'Airport transfers',
    description: 'Coordinated pickup and drop-off at Nairobi and regional hubs.',
  },
]

const steps = [
  { num: '01', title: 'Understand travel need', desc: 'We listen to your specific requirements.' },
  { num: '02', title: 'Plan itinerary', desc: 'We create a tailored travel plan.' },
  { num: '03', title: 'Coordinate booking/support', desc: 'We handle all arrangements.' },
  { num: '04', title: 'Assist before/during travel', desc: 'We provide ongoing support.' },
  { num: '05', title: 'Follow up', desc: 'We ensure complete satisfaction.' },
]

export default function CorporateTravelPage() {
  return (
    <>
      <PageBanner
        eyebrow="For Organizations"
        title="Corporate Travel Management"
        subtitle="Customized and comprehensive travel management services for corporate clientele in Kenya and Somalia."
        imageKey="bannerCorporate"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Corporate Travel' }]}
      />

      <InnerPageOverlap>
        <PhotoFeatureGrid
          eyebrow="Services"
          title="Corporate Support Grid"
          items={features}
          bgClassName="section-padding pt-14 md:pt-16 bg-sand-light"
        />
      </InnerPageOverlap>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <FadeUp>
            <SectionHeader eyebrow="Process" title="How We Work" />
          </FadeUp>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.08}>
                <div className="flex items-start gap-6 rounded-2xl border border-border bg-sand-light p-6 transition-all hover:border-gold/30 hover:shadow-md">
                  <span className="font-kanila-display text-4xl font-normal text-gold/30">{step.num}</span>
                  <div className="flex-1">
                    <h3 className="mb-1 font-kanila-display text-xl font-normal text-ink">{step.title}</h3>
                    <p className="text-sm text-ink-muted">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="mt-2 hidden h-5 w-5 text-gold/30 md:block" aria-hidden />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <InnerPageCTA
        title="Make corporate travel easier"
        description="Dedicated account support for organizations operating across Kenya, Somalia, and international routes."
        primaryLabel="Start an Inquiry"
        secondaryLabel="View Services"
        secondaryHref="/services"
        imageKey="bannerCorporate"
      />
    </>
  )
}
