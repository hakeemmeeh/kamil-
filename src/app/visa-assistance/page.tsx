import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { PhotoFeatureGrid } from '@/components/shared/PhotoFeatureGrid'
import { VisaGallerySection } from '@/components/sections/VisaGallerySection'
import { TourSearchBar } from '@/components/tours/TourSearchBar'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visa Assistance',
  description: 'Kamil Travel can support travel preparation and guidance for visa-related travel needs.',
}

const steps = [
  {
    imageKey: 'bannerContact' as const,
    title: 'Share travel need',
    description: 'Tell us about your destination, dates, and travel plans.',
  },
  {
    imageKey: 'london' as const,
    title: 'Confirm requirements',
    description: 'We help identify relevant embassy and destination requirements.',
  },
  {
    imageKey: 'bannerVisa' as const,
    title: 'Preparation checklist',
    description: 'Receive a practical guide for documents and timelines.',
  },
  {
    imageKey: 'international' as const,
    title: 'Submit for support',
    description: 'Get in touch for further visa-related travel assistance.',
  },
]

export default function VisaAssistancePage() {
  return (
    <>
      <PageBanner
        eyebrow="Travel Support"
        title="Visa Assistance"
        subtitle="Travel preparation support and guidance for visa-related travel needs."
        imageKey="bannerVisa"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Visa Assistance' }]}
      />

      <InnerPageOverlap>
        <section className="section-padding pt-14 md:pt-16">
          <div className="mx-auto max-w-4xl px-5">
            <FadeUp>
              <div className="mb-12 flex items-start gap-4 rounded-2xl border border-gold/20 bg-gold/10 p-6">
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <h3 className="mb-1 font-kanila-display text-xl font-normal text-ink">Important Notice</h3>
                  <p className="text-sm text-ink-muted">
                    Kamil Travel provides guidance and preparation support. We do not guarantee visa approval
                    or provide legal immigration advice.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </InnerPageOverlap>

      <PhotoFeatureGrid
        eyebrow="How It Works"
        title="Visa Support Process"
        items={steps}
        bgClassName="section-padding bg-white"
      />

      <VisaGallerySection />

      <TourSearchBar compact className="bg-sand-light pb-0" />

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-4xl px-5">
          <FadeUp>
            <div className="rounded-2xl border border-border bg-sand p-8 text-center">
              <p className="text-sm italic text-ink-muted">
                [CLIENT TO PROVIDE: exact visa services offered]
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <InnerPageCTA
        title="Need visa guidance?"
        description="Share your itinerary and we will help you prepare with clarity and professional support."
        primaryLabel="Start an Inquiry"
        secondaryLabel=""
        imageKey="bannerVisa"
      />
    </>
  )
}
