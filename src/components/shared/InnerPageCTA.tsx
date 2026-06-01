'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { cityImage, type CityImageKey } from '@/lib/cityImages'

export interface InnerPageCTAProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  imageKey?: CityImageKey
  id?: string
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/** Full-width enquiry CTA — content always visible (no GSAP scroll trap) */
export function InnerPageCTA({
  title = 'Ready to plan your next journey?',
  description = 'Send an inquiry and the Kamil Travel team will help you choose the right travel support for your needs.',
  primaryLabel = 'Start an Inquiry',
  primaryHref = '/contact',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
  imageKey = 'bannerCta',
  id = 'inner-cta',
}: InnerPageCTAProps) {
  const reduced = useReducedMotion()
  const bgSrc = cityImage(imageKey, 1920)
  const viewport = { once: true, margin: '-8%' as const }

  return (
    <section className="inner-page-cta relative overflow-hidden py-24 md:py-32" id={id}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={bgSrc}
          alt=""
          fill
          quality={90}
          className="banner-photo object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/78 to-white/88" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden>
        <svg className="absolute h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="#1B4B8C"
            strokeWidth="1"
            fill="none"
            className="route-line animate"
          />
        </svg>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-5 text-center"
        initial={reduced ? 'show' : 'hidden'}
        whileInView="show"
        viewport={viewport}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
        }}
      >
        <motion.h2
          variants={fade}
          className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[56px]"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fade}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          {description}
        </motion.p>
        <motion.div
          variants={fade}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <Button href={primaryHref} variant="primary" size="lg" arrow className="hover:-translate-y-0.5">
              {primaryLabel}
            </Button>
          </MagneticButton>
          {secondaryLabel ? (
            <Button href={secondaryHref} variant="secondary" size="lg" className="hover:-translate-y-0.5">
              {secondaryLabel}
            </Button>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  )
}
