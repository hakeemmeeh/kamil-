import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { PageBanner } from '@/components/shared/PageBanner'
import { AlertTriangle, FileText, CheckCircle, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visa Assistance',
  description: 'Kamil Travel can support travel preparation and guidance for visa-related travel needs.',
}

const steps = [
  { icon: FileText, title: 'Share travel need', desc: 'Tell us about your destination and travel plans.' },
  { icon: CheckCircle, title: 'Confirm destination requirements', desc: 'We help identify relevant requirements.' },
  { icon: FileText, title: 'Prepare guidance/checklist', desc: 'Receive a preparation guide for your journey.' },
  { icon: Send, title: 'Submit inquiry for support', desc: 'Get in touch for further visa-related assistance.' },
]

export default function VisaAssistancePage() {
  return (
    <>
      <PageBanner
        eyebrow="Travel Support"
        title="Visa Assistance"
        subtitle="Travel preparation support and guidance for visa-related travel needs."
        imageKey="bannerVisa"
      />

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-4xl px-5">
          <FadeUp>
            <div className="rounded-2xl bg-gold/10 border border-gold/20 p-6 mb-12 flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-ink mb-1">Important Notice</h3>
                <p className="text-sm text-ink-muted">Kamil Travel provides guidance and preparation support. We do not guarantee visa approval or provide legal immigration advice.</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <SectionHeader eyebrow="How It Works" title="Visa Support Process" />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-surface border border-border p-6 hover:border-gold/30 transition-all h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-4">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-muted">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-12 rounded-2xl bg-sand border border-border p-8 text-center">
              <p className="text-ink-muted mb-2 text-sm italic">[CLIENT TO PROVIDE: exact visa services offered]</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp instant>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Need visa guidance?</h2>
            <Button href="/contact" variant="primary" size="lg">Start an Inquiry</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
