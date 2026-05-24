'use client'

import { InquiryForm } from '@/components/ui/InquiryForm'
import { cn } from '@/lib/utils'

interface BookingSearchProps {
  /** Pull up over hero image (Home 2 style). Default: sits below about on homepage. */
  overlapHero?: boolean
}

export function BookingSearch({ overlapHero = false }: BookingSearchProps) {
  return (
    <section
      className={cn(
        'relative z-30 bg-sand-light pb-16 md:pb-20',
        overlapHero ? '-mt-16 bg-transparent md:-mt-24' : 'pt-4 md:pt-6'
      )}
      id="booking"
    >
      <div className="booking-card hero-booking-card mx-auto max-w-6xl px-5">
        <div className="rounded-4xl border border-border bg-white p-6 shadow-premium md:p-10 dark:bg-surface">
          <div className="mb-6 md:mb-8">
            <p className="eyebrow">Start Your Journey</p>
            <p className="text-sm text-ink-muted">
              Share your travel details — this is an inquiry form, not a live booking engine.
            </p>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}
