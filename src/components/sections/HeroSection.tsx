'use client'

import { useEffect } from 'react'
import { heroIntro } from '@/lib/animations'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  useEffect(() => {
    heroIntro()
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="hero-bg absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/50 to-night/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <p className="hero-eyebrow eyebrow !text-white/60 justify-center before:!bg-white/40 mb-6" style={{ opacity: 0 }}>
          Corporate Travel · Somalia · Global Journeys
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-[88px] font-semibold text-white leading-[0.95] tracking-tight mb-8">
          <span className="hero-title-line block" style={{ opacity: 0 }}>Travel</span>
          <span className="hero-title-line block" style={{ opacity: 0 }}>
            Beyond <em className="text-gradient-gold not-italic">Words</em>
          </span>
        </h1>

        <p className="hero-copy mx-auto max-w-[680px] text-lg md:text-xl text-white/70 leading-relaxed mb-10" style={{ opacity: 0 }}>
          Premium travel management, airport support, and regional journey planning for corporate and individual travelers across Kenya, Somalia, and beyond.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <MagneticButton>
            <Button href="/contact" variant="primary" size="lg">Plan a Trip</Button>
          </MagneticButton>
          <Button href="/services" variant="outline" size="lg">Explore Services</Button>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 mx-auto max-w-7xl px-5 flex items-end justify-between">
        <div className="hidden md:flex items-center gap-2 text-xs text-white/40 font-medium">
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll to explore
        </div>
        <div className="hidden md:block text-xs text-white/40 font-medium tracking-wider">
          Kenya ↔ Somalia ↔ Global
        </div>
      </div>
    </section>
  )
}
