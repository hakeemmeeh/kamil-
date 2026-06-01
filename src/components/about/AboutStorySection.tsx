'use client'

import { motion } from 'framer-motion'
import { LineReveal } from '@/components/ui/LineReveal'
import { PlanTripArchCard, type PlanTripSlide } from '@/components/ui/PlanTripArchCard'
import { about } from '@/lib/content'

const storySlides: PlanTripSlide[] = [
  { key: 'nairobi', label: 'Nairobi', place: 'Headquarters' },
  { key: 'mogadishu', label: 'Mogadishu', place: 'Airport Office' },
  { key: 'international', label: 'Global', place: 'Destinations' },
]

const stats = [
  { value: '10+', label: 'Years of service' },
  { value: '6', label: 'Somalia airports' },
  { value: '24h', label: 'Emergency support' },
  { value: '2', label: 'Regional hubs' },
]

const frameVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function AboutStorySection() {
  return (
    <section className="section-padding pt-14 md:pt-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 grid grid-cols-2 gap-4 rounded-2xl border border-gold/15 bg-white/80 p-6 shadow-sm backdrop-blur-sm md:mb-16 md:grid-cols-4 md:gap-6 md:p-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-kanila-display text-3xl font-normal text-gold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
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
                slide={storySlides[0]}
                index={0}
                className="plan-trip-arch--lead z-10 shadow-2xl"
                captionClassName="pb-4 pt-10"
              />
            </div>
            <div className="flex w-full flex-col gap-3 sm:gap-4">
              <PlanTripArchCard
                slide={storySlides[1]}
                index={1}
                className="plan-trip-arch--stack-first"
                titleClassName="text-base"
              />
              <PlanTripArchCard
                slide={storySlides[2]}
                index={2}
                className="plan-trip-arch--stack-second"
                titleClassName="text-base"
                captionClassName="pb-3 pt-7"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-kanila-script mb-3 text-[1.35rem] text-kamil-green">Our Story</p>
            <LineReveal
              tag="h2"
              className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl"
            >
              A decade of professional travel management
            </LineReveal>
            <p className="mb-5 text-lg leading-relaxed text-ink-muted">{about.intro}</p>
            <p className="mb-5 leading-relaxed text-ink-muted">{about.airportOffice}</p>
            <p className="leading-relaxed text-ink-muted">{about.airportRepresentatives}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
