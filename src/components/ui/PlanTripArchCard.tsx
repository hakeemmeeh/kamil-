'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

const slideVariants = {
  hidden: { opacity: 0, x: 64 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.05,
      delay: i * 0.18,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const captionVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.18 + 0.28,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const FALLBACK_KEY: CityImageKey = 'greece'

export interface PlanTripSlide {
  key: CityImageKey
  label: string
  place: string
}

interface PlanTripArchCardProps {
  slide: PlanTripSlide
  index: number
  className?: string
  captionClassName?: string
  titleClassName?: string
}

export function PlanTripArchCard({
  slide,
  index,
  className,
  captionClassName,
  titleClassName,
}: PlanTripArchCardProps) {
  const [src, setSrc] = useState(() => cityImage(slide.key, 1400))

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -8% 0px' }}
      variants={slideVariants}
      className={cn(
        'plan-trip-arch arch-card-mask relative aspect-[3/4] w-full overflow-hidden bg-sand-deep shadow-premium',
        className
      )}
    >
      <Image
        src={src}
        alt={cityImageAlts[slide.key] ?? slide.label}
        fill
        quality={90}
        className="object-cover object-center"
        sizes="(max-width: 1024px) 44vw, 320px"
        onError={() => setSrc(cityImage(FALLBACK_KEY, 1400))}
      />
      <motion.div
        custom={index}
        variants={captionVariants}
        className={cn(
          'plan-trip-arch-caption pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/75 via-night/40 to-transparent px-3 pb-3 pt-8 text-center',
          captionClassName
        )}
      >
        <p className={cn('font-kanila-display text-white', titleClassName ?? 'text-lg')}>
          {slide.label}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-xs">
          {slide.place}
        </p>
      </motion.div>
    </motion.article>
  )
}
