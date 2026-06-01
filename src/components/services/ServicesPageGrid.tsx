'use client'

import { services } from '@/lib/content'
import { ServicesBentoCard, type ServicesBentoVariant } from '@/components/services/ServicesBentoCard'
import { SlideIn } from '@/components/ui/SlideIn'
import { cn } from '@/lib/utils'

/** Deliberate magazine bento — 9 services on a 12-column grid */
const BENTO_SLOTS: { span: string; variant: ServicesBentoVariant }[] = [
  { span: 'sm:col-span-2 lg:col-span-7 lg:row-span-2', variant: 'hero' },
  { span: 'sm:col-span-2 lg:col-span-5 lg:row-span-2', variant: 'portrait' },
  { span: 'lg:col-span-4', variant: 'tile' },
  { span: 'lg:col-span-4', variant: 'tile' },
  { span: 'lg:col-span-4', variant: 'tile' },
  { span: 'lg:col-span-6', variant: 'landscape' },
  { span: 'lg:col-span-6', variant: 'landscape' },
  { span: 'lg:col-span-4', variant: 'tile' },
  { span: 'lg:col-span-4', variant: 'tile' },
  { span: 'lg:col-span-4', variant: 'tile' },
]

export function ServicesPageGrid() {
  return (
    <div
      className={cn(
        'services-bento-grid',
        'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5',
        'lg:grid-cols-12 lg:grid-flow-dense lg:gap-5',
        'lg:auto-rows-[minmax(200px,1fr)]'
      )}
    >
      {services.map((service, i) => {
        const slot = BENTO_SLOTS[i] ?? { span: 'lg:col-span-4', variant: 'tile' as const }
        return (
          <SlideIn
            key={service.slug}
            direction={i % 3 === 0 ? 'left' : i % 3 === 1 ? 'right' : 'up'}
            delay={Math.min(i * 0.06, 0.42)}
            className={cn('h-full min-h-0', slot.span)}
          >
            <ServicesBentoCard {...service} variant={slot.variant} index={i} />
          </SlideIn>
        )
      })}
    </div>
  )
}
