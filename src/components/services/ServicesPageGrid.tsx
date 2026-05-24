'use client'

import { services } from '@/lib/content'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SlideIn } from '@/components/ui/SlideIn'

/** Services page — cards alternate slide from left / right */
export function ServicesPageGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <SlideIn
          key={service.slug}
          direction={i % 2 === 0 ? 'left' : 'right'}
          delay={(i % 3) * 0.08}
        >
          <ServiceCard {...service} />
        </SlideIn>
      ))}
    </div>
  )
}
