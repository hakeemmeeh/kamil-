'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowUpRight } from 'lucide-react'
import { LineReveal } from '@/components/ui/LineReveal'
import { PlanTripArchCard, type PlanTripSlide } from '@/components/ui/PlanTripArchCard'
import { about } from '@/lib/content'

const planTripSlides: PlanTripSlide[] = [
  { key: 'santorini', label: 'Santorini', place: 'Greece' },
  { key: 'bali', label: 'Bali', place: 'Indonesia' },
  { key: 'thailand', label: 'Thailand', place: 'Southeast Asia' },
]

const highlights = [
  { title: 'Exclusive Trips', desc: 'Tailored itineraries for corporate and leisure travellers.' },
  { title: 'Professional Guides', desc: 'Dedicated support from Nairobi to your destination.' },
  { title: 'Airport Assistance', desc: 'Meet & assist at Mogadishu and across Somalia.' },
]

const frameVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/** Kanila About — Plan Your Trip With Us (images left, copy + checklist right) */
export function BrandStatement() {
  return (
    <section className="relative z-20 section-padding bg-white" id="plan-your-trip">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Kanila — arched photo collage (left on desktop) */}
          <div className="plan-trip-collage order-2 grid grid-cols-2 items-end gap-3 sm:gap-4 lg:order-1 lg:gap-5">
            <div className="plan-trip-slot relative w-full self-end">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={frameVariants}
                className="plan-trip-arch-frame pointer-events-none absolute -left-0.5 -top-0.5 z-20 aspect-[3/4] w-full rounded-t-full rounded-b-3xl border-2 border-gold/50"
                aria-hidden
              />
              <PlanTripArchCard
                slide={planTripSlides[0]}
                index={0}
                className="plan-trip-arch--lead z-10 shadow-2xl"
                captionClassName="pb-4 pt-10"
              />
            </div>

            <div className="flex w-full flex-col gap-3 sm:gap-4">
              <PlanTripArchCard
                slide={planTripSlides[1]}
                index={1}
                className="plan-trip-arch--stack-first"
                titleClassName="text-base"
              />
              <PlanTripArchCard
                slide={planTripSlides[2]}
                index={2}
                className="plan-trip-arch--stack-second"
                titleClassName="text-base"
                captionClassName="pb-3 pt-7"
              />
            </div>
          </div>

          {/* Copy — right on desktop */}
          <div className="order-1 lg:order-2">
            <p className="animate-eyebrow eyebrow mb-4">Plan Your Trip</p>
            <LineReveal
              tag="h2"
              className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]"
            >
              {`Plan Your Trip\nWith Us`}
            </LineReveal>
            <p className="animate-fade-up mb-8 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              {about.intro}
            </p>

            <ul className="animate-fade-up mb-10 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
                    <p className="text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-glow transition hover:bg-gold-dark hover:-translate-y-0.5"
            >
              Explore Now <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
