'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { LineReveal } from '@/components/ui/LineReveal'
import { parallaxImage, prefersReducedMotion } from '@/lib/animations'

const CTA_BG =
  'https://images.unsplash.com/photo-1507812984078-917a274065be?w=1920&q=90&auto=format&fit=crop'

export function CinematicCTA() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el || prefersReducedMotion()) return
    el.id = 'cta-parallax-bg'
    parallaxImage('#cta-parallax-bg', 12)
  }, [])

  return (
    <section className="relative overflow-hidden py-32 md:py-40" id="cta">
      <div ref={bgRef} className="parallax-wrap absolute inset-[-20%] h-[140%]">
        <div
          className="parallax-img absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${CTA_BG}')` }}
          role="img"
          aria-label="Travel destination aerial view"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/72 to-white/88" />

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
          className="mb-6 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[56px]"
        >
          Ready to plan your next journey?
        </LineReveal>
        <p className="animate-fade-up mx-auto mb-10 max-w-xl text-lg leading-relaxed text-ink-muted">
          Send an inquiry and the Kamil Travel team will help you choose the right travel
          support for your needs.
        </p>
        <div className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton>
            <Button href="/contact" variant="primary" size="lg" arrow className="hover:-translate-y-0.5">
              Start an Inquiry
            </Button>
          </MagneticButton>
          <Button href="/contact" variant="secondary" size="lg" className="hover:-translate-y-0.5">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
