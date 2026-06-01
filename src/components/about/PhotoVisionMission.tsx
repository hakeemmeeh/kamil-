'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cityImage, type CityImageKey } from '@/lib/cityImages'
import { vision, mission } from '@/lib/content'
import { Eye, Target } from 'lucide-react'

const FALLBACK: CityImageKey = 'santorini'

function PhotoPanel({
  imageKey,
  icon: Icon,
  label,
  quote,
  variant,
  delay,
}: {
  imageKey: CityImageKey
  icon: typeof Eye
  label: string
  quote: string
  variant: 'dark' | 'light'
  delay: number
}) {
  const [src, setSrc] = useState(() => cityImage(imageKey, 1400))
  const isDark = variant === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="arch-card-mask relative min-h-[320px] overflow-hidden rounded-t-[2.75rem] rounded-b-3xl md:min-h-[380px]"
    >
      <Image
        src={src}
        alt=""
        fill
        quality={90}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setSrc(cityImage(FALLBACK, 1400))}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-t from-night/95 via-night/70 to-night/40'
            : 'bg-gradient-to-t from-white/95 via-white/75 to-white/35'
        }`}
      />
      <div className="relative flex h-full min-h-[320px] flex-col justify-end p-8 md:min-h-[380px] md:p-10">
        <Icon className={`mb-5 h-8 w-8 ${isDark ? 'text-kamil-green-light' : 'text-gold'}`} />
        <h3
          className={`mb-4 font-kanila-display text-3xl font-normal leading-tight ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {label}
        </h3>
        <p
          className={`text-lg leading-relaxed italic ${
            isDark ? 'text-white/75' : 'text-ink-muted'
          }`}
        >
          {quote}
        </p>
      </div>
    </motion.div>
  )
}

export function PhotoVisionMission() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-5xl px-5">
        <FadeUp>
          <SectionHeader eyebrow="Purpose" title="Our Vision & Mission" />
        </FadeUp>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PhotoPanel
            imageKey="greece"
            icon={Eye}
            label="Vision"
            quote={vision}
            variant="dark"
            delay={0}
          />
          <PhotoPanel
            imageKey="bali"
            icon={Target}
            label="Mission"
            quote={mission}
            variant="light"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  )
}
