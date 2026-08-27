'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LineReveal } from '@/components/ui/LineReveal'
import { about } from '@/lib/content'
import { cityImage, cityImageAlts } from '@/lib/cityImages'

const stats = [
  { value: '10+', label: 'Years of service' },
  { value: '6', label: 'Somalia airports' },
  { value: '24h', label: 'Emergency support' },
  { value: '2', label: 'Regional hubs' },
]

/** About story — one photo, no arch collage */
export function AboutStorySection() {
  return (
    <section className="pb-16 pt-10 md:pb-20 md:pt-12">
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
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl bg-sand sm:aspect-[5/4] lg:order-1 lg:aspect-[4/5]">
            <Image
              src={cityImage('nairobi', 1400)}
              alt={cityImageAlts.nairobi}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
            <p className="leading-relaxed text-ink-muted">{about.airportOffice}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
