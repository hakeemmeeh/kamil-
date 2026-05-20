'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { InquiryForm } from '@/components/ui/InquiryForm'

export function BookingSearch() {
  return (
    <section className="relative z-20 mx-auto max-w-6xl px-5 -mt-4 mb-20 md:-mt-8" id="booking">
      <FadeUp>
        <div className="glass rounded-4xl p-6 md:p-10 shadow-premium border border-white/20">
          <div className="mb-6">
            <p className="eyebrow">Quick Inquiry</p>
            <p className="text-sm text-ink-muted">Start your travel inquiry — this is not a live booking system.</p>
          </div>
          <InquiryForm />
        </div>
      </FadeUp>
    </section>
  )
}
