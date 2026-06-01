'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { visaGalleryImages } from '@/lib/content'
import { cn } from '@/lib/utils'

const FALLBACK = visaGalleryImages[0]?.src

export function VisaGallerySection() {
  const [active, setActive] = useState(0)
  const item = visaGalleryImages[active]

  return (
    <section className="section-padding bg-white" id="visa-gallery">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader
            eyebrow="Gallery"
            title="Destinations we help you prepare for"
            description="A glimpse of the journeys our clients plan — visas, flights, and on-ground support coordinated from Nairobi."
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-8 lg:aspect-auto lg:min-h-[420px]">
            <Image
              key={item.key}
              src={item.src}
              alt={item.alt}
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
            <p className="absolute bottom-5 left-5 font-kanila-display text-2xl text-white md:text-3xl">
              {item.label}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-2">
            {visaGalleryImages.map((img, i) => (
              <li key={img.key}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'arch-card-mask relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl transition ring-2 ring-offset-2',
                    i === active ? 'ring-gold' : 'ring-transparent hover:ring-gold/40'
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="160px"
                    onError={(e) => {
                      if (FALLBACK) (e.target as HTMLImageElement).src = FALLBACK
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <FadeUp delay={0.15}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-ink-muted"
          >
            Need help with documents for a specific route?{' '}
            <a href="/contact?inquiry=Visa+Assistance" className="font-bold text-gold hover:underline">
              Start a visa enquiry
            </a>
          </motion.p>
        </FadeUp>
      </div>
    </section>
  )
}
