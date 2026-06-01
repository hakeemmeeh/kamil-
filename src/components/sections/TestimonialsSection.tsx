'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/lib/content'
import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  const goPrev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const goNext = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="relative z-20 bg-sand-light py-20 md:py-28" id="testimonials">
      <div className="mx-auto w-full max-w-4xl px-5 text-center">
        <p className="font-kanila-script mb-3 text-[1.65rem] text-kanila-orange md:text-[1.85rem]">
          Testimonials
        </p>
        <h2 className="font-kanila-display text-[2.5rem] font-normal leading-[0.95] tracking-tight text-ink md:text-[3.25rem]">
          Stories From the Journey
        </h2>
        <KanilaCompassMark className="mx-auto mt-4 text-gold/70" />
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-muted md:text-lg">
          Trusted by travelers worldwide — from Mogadishu and Nairobi to Oslo, New York, and Sydney.
        </p>

        <div className="relative mt-12 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-white px-8 py-10 shadow-premium md:px-14 md:py-14"
            >
              <Quote className="mx-auto mb-5 h-9 w-9 text-gold/50" />
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-kanila-orange">
                {t.title}
              </p>
              <blockquote className="mb-8 font-kanila-display text-2xl font-normal italic leading-relaxed text-ink md:text-[1.75rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="text-center">
                <div className="text-sm font-bold text-ink">{t.name}</div>
                <div className="text-xs text-ink-muted">{t.route}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:border-gold hover:text-gold"
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
                    i === current ? 'w-7 bg-kanila-orange' : 'w-2 bg-border hover:bg-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
