'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { LineReveal } from '@/components/ui/LineReveal'
import { parallaxImage, prefersReducedMotion } from '@/lib/animations'
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
  const bgRef = useRef<HTMLDivElement>(null)
  const bgSrc = cityImage(imageKey, 1920)

  useEffect(() => {
    const el = bgRef.current
    if (!el || prefersReducedMotion()) return
    el.id = `${id}-parallax-bg`
    parallaxImage(`#${id}-parallax-bg`, 12)
  }, [id])

  return (
    <section className="relative overflow-hidden py-28 md:py-36" id={id}>
      <div ref={bgRef} className="parallax-wrap absolute inset-[-20%] h-[140%]">
        <Image
          src={bgSrc}
          alt=""
          fill
          quality={90}
          className="parallax-img banner-photo object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
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

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <LineReveal
          tag="h2"
          align="center"
          className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[56px]"
        >
          {title}
        </LineReveal>
        <p className="animate-fade-up mx-auto mb-10 max-w-xl text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
        <div className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>
      </div>
    </section>
  )
}
