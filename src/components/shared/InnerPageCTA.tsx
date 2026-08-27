'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import type { CityImageKey } from '@/lib/cityImages'

export interface InnerPageCTAProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  /** Kept for API compat — scenic bg removed */
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

/** Full-width enquiry CTA — solid cream surface, no background photo */
export function InnerPageCTA({
  title = 'Ready to plan your next journey?',
  description = 'Send an inquiry and the Kamil Travel team will help you choose the right travel support for your needs.',
  primaryLabel = 'Start an Inquiry',
  primaryHref = '/contact',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
  id = 'inner-cta',
}: InnerPageCTAProps) {
  const reduced = useReducedMotion()
  const viewport = { once: true, margin: '-8%' as const }

  return (
    <section
      className="inner-page-cta relative overflow-hidden bg-cream py-16 md:py-20"
      id={id}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden />

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
