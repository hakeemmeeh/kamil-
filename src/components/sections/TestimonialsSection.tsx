'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/lib/content'
import { KanilaStickyPhotoSection } from '@/components/ui/KanilaStickyPhotoSection'
import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { cityImage, cityImageAlts } from '@/lib/cityImages'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const BG = cityImage('vacationBeach', 1920)

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  const goPrev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const goNext = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <KanilaStickyPhotoSection
      id="testimonials"
      imageSrc={BG}
      imageAlt={cityImageAlts.vacationBeach}
      overlay="warm"
      runway="42vh"
    >
      <div className="relative flex min-h-[100svh] flex-col justify-center px-5 py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="font-kanila-script mb-3 text-[1.65rem] text-kanila-orange md:text-[1.85rem]">
            Testimonials
          </p>
          <h2 className="font-kanila-display text-[2.5rem] font-normal leading-[0.95] tracking-tight text-white md:text-[3.25rem]">
            Stories From the Journey
          </h2>
          <KanilaCompassMark className="mx-auto mt-4 text-white/80" />
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
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
                className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-white/95 px-8 py-10 shadow-[0_32px_80px_rgba(7,17,31,0.35)] backdrop-blur-sm md:px-14 md:py-14"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold/20"
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
                      i === current ? 'w-7 bg-kanila-orange' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:border-gold hover:bg-gold/20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </KanilaStickyPhotoSection>
  )
}
