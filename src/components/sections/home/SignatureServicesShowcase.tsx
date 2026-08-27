'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import { KanilaTravelServiceCard } from '@/components/ui/KanilaTravelServiceCard'
import { KanilaSectionHeading } from '@/components/ui/KanilaSectionHeading'

const FEATURED_SLUGS = ['air-ticketing', 'meet-assist', 'airport-transfers', 'vip-lounge'] as const

const featured = FEATURED_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean)

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

/** Home services preview — solid cream, rounded cards */
export function SignatureServicesShowcase() {
  return (
    <section className="bg-cream py-16 md:py-24" id="services-preview">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <KanilaSectionHeading
            eyebrow="What We Offer"
            title={<>Travel Services</>}
            subtitle="Ticketing, airport support, and VIP care — coordinated from Nairobi."
            align="left"
            showCompass={false}
            className="max-w-2xl"
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gold/40 bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-gold shadow-sm transition hover:bg-gold hover:text-night"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((service) =>
            service ? (
              <KanilaTravelServiceCard
                key={service.slug}
                eyebrow={service.eyebrow}
                title={service.title}
                desc={service.desc}
                image={service.image}
                href={`/services#${service.slug}`}
              />
            ) : null
          )}
        </motion.div>
      </div>
    </section>
  )
}
