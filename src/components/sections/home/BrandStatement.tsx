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

/** Plan Your Trip — arched collage, scaled down from the original */
export function BrandStatement() {
  return (
    <section className="relative z-20 bg-white py-16 md:py-24" id="plan-your-trip">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="plan-trip-collage order-2 mx-auto grid w-full max-w-[22.5rem] grid-cols-2 items-end gap-2.5 sm:max-w-[26rem] sm:gap-3 lg:order-1 lg:mx-0 lg:max-w-[28rem]">
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
                captionClassName="pb-3 pt-8"
                titleClassName="text-base md:text-lg"
              />
            </div>

            <div className="flex w-full flex-col gap-2.5 sm:gap-3">
              <PlanTripArchCard
                slide={planTripSlides[1]}
                index={1}
                className="plan-trip-arch--stack-first"
                titleClassName="text-sm md:text-base"
                captionClassName="pb-2.5 pt-6"
              />
              <PlanTripArchCard
                slide={planTripSlides[2]}
                index={2}
                className="plan-trip-arch--stack-second"
                titleClassName="text-sm md:text-base"
                captionClassName="pb-2.5 pt-6"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">Plan Your Trip</p>
            <LineReveal
              tag="h2"
              className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl"
            >
              {`Plan Your Trip\nWith Us`}
            </LineReveal>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              {about.intro}
            </p>

            <ul className="mb-10 space-y-5">
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
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Explore Now <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
