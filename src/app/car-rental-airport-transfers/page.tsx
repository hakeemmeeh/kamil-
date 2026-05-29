import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { becomeAGuide } from '@/lib/content'
import { ContactFormWrapper } from '@/components/ui/ContactFormWrapper'
import { Button } from '@/components/ui/Button'
import { PageBanner } from '@/components/shared/PageBanner'
import { Car, PlaneLanding, PlaneTakeoff, Users, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Rental & Airport Transfers',
  description: 'Coordinated local movement and transfer support for travelers — airport pickup, drop-off, corporate movement, and car hire.',
}

const cards = [
  { icon: PlaneLanding, title: 'Airport Pickup', desc: 'Meet and greet at arrival with coordinated transport.' },
  { icon: PlaneTakeoff, title: 'Airport Drop-off', desc: 'Timely departure transfers to the airport.' },
  { icon: Briefcase, title: 'Corporate Movement', desc: 'Business travel transportation services.' },
  { icon: Users, title: 'Group Transfer', desc: 'Coordinated transport for groups and teams.' },
  { icon: Car, title: 'Car Hire', desc: 'Flexible vehicle rental for your travel needs.' },
]

export default function CarRentalPage() {
  return (
    <>
      <PageBanner
        eyebrow="Transport"
        title="Car Rental & Airport Transfers"
        subtitle="Coordinated local movement and transfer support for travelers."
        imageKey="bannerCarRental"
      />

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp><SectionHeader eyebrow="Services" title="Transfer & Hire Options" /></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-surface border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all h-full group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-night transition-colors">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{card.title}</h3>
                  <p className="text-sm text-ink-muted">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

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
            <Button href="/contact?inquiry=Guide+Application&message=I+would+like+to+apply+as+a+guide+or+transport+partner." variant="primary" size="lg">
              {becomeAGuide.cta}
            </Button>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-2xl px-5">
          <FadeUp><SectionHeader eyebrow="Inquiry" title="Request a Transfer or Car Hire" /></FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-3xl bg-sand-light border border-border p-8">
              <ContactFormWrapper />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
