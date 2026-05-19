import type { Metadata } from 'next'
import { services } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Travel Services',
  description: 'Explore Kamil Travel services — air ticketing, meet & assist, travel insurance, VIP lounge, airport transfers, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-night overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-surface/40">What We Offer</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Travel Services</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Comprehensive travel support designed around professional delivery and client convenience.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp><SectionHeader eyebrow="All Services" title="Everything you need for your journey" /></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 0.06}>
                <ServiceCard {...service} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Need travel support?</h2>
            <Button href="/contact" variant="primary" size="lg">Start an Inquiry</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
