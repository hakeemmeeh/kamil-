'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

const FALLBACK_KEY: CityImageKey = 'greece'

interface ArchFeatureCardProps {
  imageKey: CityImageKey
  title: string
  href?: string
  index?: number
  className?: string
  /** Slightly taller arches for split “Explore Activities” row */
  size?: 'default' | 'large'
}

/** Kanila Home 3 — arched photo with white label bar at bottom (Explore Activities style) */
export function ArchFeatureCard({
  imageKey,
  title,
  href,
  index = 0,
  className,
  size = 'default',
}: ArchFeatureCardProps) {
  const isLarge = size === 'large'
  const [src, setSrc] = useState(() => cityImage(imageKey, 800))

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'kanila-activity-arch group relative block w-full',
        href && 'cursor-pointer',
        className
      )}
    >
      <div
        className={cn(
          'kanila-arch-top relative w-full overflow-hidden shadow-[0_16px_48px_rgba(7,17,31,0.14)] transition-shadow duration-500 group-hover:shadow-[0_24px_56px_rgba(7,17,31,0.2)] reveal-image-up',
          isLarge
            ? 'aspect-[4/5] min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[380px]'
            : 'aspect-[3/4]'
        )}
      >
        <Image
          src={src}
          alt={cityImageAlts[imageKey] ?? title}
          fill
          quality={88}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 42vw, 280px"
          onError={() => setSrc(cityImage(FALLBACK_KEY, 800))}
        />
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-white',
            isLarge ? 'px-5 py-4 md:px-6 md:py-5' : 'px-4 py-3.5 md:px-5 md:py-4'
          )}
        >
          <h3
            className={cn(
              'font-kanila-display font-normal leading-tight text-ink',
              isLarge ? 'text-lg md:text-xl lg:text-2xl' : 'text-base md:text-lg lg:text-xl'
            )}
          >
            {title}
          </h3>
          <ArrowRight
            className="h-4 w-4 shrink-0 text-ink/55 transition-transform duration-300 group-hover:translate-x-0.5 md:h-[18px] md:w-[18px]"
            aria-hidden
          />
        </div>
      </div>
    </motion.article>
  )

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
        {card}
      </Link>
    )
  }

  return card
}
