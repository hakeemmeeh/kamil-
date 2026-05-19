'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/content'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="section-padding bg-night" id="testimonials">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <FadeUp>
          <SectionHeader eyebrow="Testimonials" title="Travel experiences clients remember." dark />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative">
            <Quote className="mx-auto h-10 w-10 text-gold/30 mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium text-white/80 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="mb-2 text-sm font-bold text-gold">{testimonials[current].name}</div>
            <div className="text-xs text-white/40">{testimonials[current].route}</div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button onClick={() => setCurrent(Math.max(0, current - 1))} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-gold hover:text-gold transition-all" aria-label="Previous">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs text-white/40">{current + 1} / {testimonials.length}</span>
              <button onClick={() => setCurrent(Math.min(testimonials.length - 1, current + 1))} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-gold hover:text-gold transition-all" aria-label="Next">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
