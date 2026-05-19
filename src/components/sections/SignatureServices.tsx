'use client'

import { services } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { FadeUp } from '@/components/ui/FadeUp'

export function SignatureServices() {
  return (
    <section className="section-padding bg-white" id="signature-services">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader eyebrow="Our Services" title="Your kind of travel, managed with care." description="From air ticketing to airport transfers, every service is designed around professional delivery and client convenience." />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.1}>
              <ServiceCard {...service} featured={i === 0} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(3).map((service, i) => (
            <FadeUp key={service.slug} delay={i * 0.08}>
              <ServiceCard {...service} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
