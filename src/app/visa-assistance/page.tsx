import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { PhotoFeatureGrid } from '@/components/shared/PhotoFeatureGrid'
import { VisaGallerySection } from '@/components/sections/VisaGallerySection'
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
              <div className="mb-10 flex items-start gap-4 rounded-2xl border border-gold/20 bg-gold/10 p-6">
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
            <FadeUp delay={0.08}>
              <div className="rounded-2xl border border-border bg-white p-8 md:p-10">
                <p className="eyebrow mb-3">What we help with</p>
                <h2 className="mb-6 font-kanila-display text-3xl font-normal tracking-tight text-ink md:text-4xl">
                  Practical visa preparation
                </h2>
                <ul className="space-y-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  <li>Document checklists matched to your destination and travel type.</li>
                  <li>Embassy and entry-requirement pointers so you know what to prepare.</li>
                  <li>Timeline guidance for appointments, photos, and supporting letters.</li>
                  <li>Coordination with flights, transfers, and airport support once travel is confirmed.</li>
                </ul>
                <p className="mt-6 text-sm text-ink-muted">
                  We do not file visas on your behalf, guarantee approval, or give legal immigration advice.
                  For a specific route, send an inquiry with your destination and travel dates.
                </p>
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
