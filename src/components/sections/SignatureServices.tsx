'use client'

import { services } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { FadeUp } from '@/components/ui/FadeUp'
import { SlideIn } from '@/components/ui/SlideIn'

export function SignatureServices() {
  return (
    <section className="section-padding bg-surface" id="signature-services">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader eyebrow="Our Services" title="Your kind of travel, managed with care." description="From air ticketing to airport transfers, every service is designed around professional delivery and client convenience." />
        </FadeUp>

        <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          {services.map((service, i) => {
            // Bento Grid logic
            let spanClass = 'col-span-1 row-span-1'
            if (i === 0) spanClass = 'md:col-span-2 md:row-span-2'
            else if (i === 1) spanClass = 'md:col-span-1 md:row-span-2'
            else if (i === 2) spanClass = 'md:col-span-1 md:row-span-1'
            else if (i === 3) spanClass = 'md:col-span-2 md:row-span-1'
            else if (i === 4) spanClass = 'md:col-span-1 md:row-span-1'
            else if (i === 5) spanClass = 'md:col-span-1 md:row-span-1'
            
            return (
              <SlideIn
                key={service.slug}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 0.1}
                className={spanClass}
              >
                <ServiceCard {...service} featured={i === 0 || i === 3} />
              </SlideIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
