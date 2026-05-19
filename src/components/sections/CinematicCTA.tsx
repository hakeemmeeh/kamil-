'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function CinematicCTA() {
  return (
    <section className="relative py-32 overflow-hidden" id="cta">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507812984078-917a274065be?w=1920&q=80')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/80 to-night/90" />

      {/* Animated route line SVG */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="#C8A45D" strokeWidth="1" fill="none" className="route-line animate" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <FadeUp>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[0.95] tracking-tight mb-6">
            Ready to plan your next journey?
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Send an inquiry and the Kamil Travel team will help you choose the right travel support for your needs.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Button href="/contact" variant="primary" size="lg">Start an Inquiry</Button>
            </MagneticButton>
            <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
