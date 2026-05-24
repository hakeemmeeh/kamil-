'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/content'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  const goPrev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const goNext = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <FadeUp>
          <SectionHeader
            eyebrow="Testimonials"
            title="What our clients say"
            description="Trusted by travelers worldwide — from Mogadishu and Nairobi to Oslo, New York, and Sydney."
          />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative rounded-4xl border border-border bg-sand-light px-8 py-12 shadow-premium md:px-14 md:py-16">
            <Quote className="mx-auto mb-6 h-10 w-10 text-gold/40" />
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gold">{t.title}</p>
            <blockquote className="mb-8 font-display text-2xl font-medium italic leading-relaxed text-ink md:text-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mb-1 text-sm font-bold text-ink">{t.name}</div>
            <div className="text-xs text-ink-muted">{t.route}</div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink-muted transition-all hover:border-gold hover:text-gold"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? 'w-6 bg-gold' : 'w-2 bg-border hover:bg-gold/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink-muted transition-all hover:border-gold hover:text-gold"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
