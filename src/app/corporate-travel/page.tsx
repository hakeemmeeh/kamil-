import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Briefcase, Users, Plane, HeadphonesIcon, Globe, Shield, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Travel',
  description: 'Kamil Travel provides customized and comprehensive travel management services for corporate clientele in Kenya and Somalia.',
}

const features = [
  { icon: Briefcase, title: 'Flight booking', desc: 'Professional booking and reservation management.' },
  { icon: Users, title: 'Group travel', desc: 'Coordinated logistics for team and group travel.' },
  { icon: Globe, title: 'Travel consultancy', desc: 'Strategic guidance for complex travel needs.' },
  { icon: Plane, title: 'Destination alerts', desc: 'Timely updates on travel destinations.' },
  { icon: HeadphonesIcon, title: '24-hour emergency support', desc: 'Around-the-clock assistance.' },
  { icon: Shield, title: 'Airport transfers', desc: 'Coordinated pickup and drop-off services.' },
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
      <section className="relative pt-40 pb-20 bg-night overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-white/40">For Organizations</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Corporate Travel Management</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Customized and comprehensive travel management services for corporate clientele in Kenya and Somalia.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp><SectionHeader eyebrow="Services" title="Corporate Support Grid" /></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all h-full group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-night transition-colors">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-muted">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <FadeUp><SectionHeader eyebrow="Process" title="How We Work" /></FadeUp>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.08}>
                <div className="flex items-start gap-6 rounded-2xl bg-sand-light border border-border p-6 hover:border-gold/30 transition-all">
                  <span className="font-display text-4xl font-bold text-gold/30">{step.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-1">{step.title}</h3>
                    <p className="text-sm text-ink-muted">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && <ArrowRight className="h-5 w-5 text-gold/30 mt-2 ml-auto hidden md:block" />}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Make Corporate Travel Easier</h2>
            <Button href="/contact" variant="primary" size="lg">Start an Inquiry</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
