'use client'

import Link from 'next/link'
import { HeroBackgroundCarousel } from '@/components/sections/home/hero/HeroBackgroundCarousel'
import { HeroCarouselProvider } from '@/components/sections/home/hero/HeroCarouselContext'
import { HeroPauseZone } from '@/components/sections/home/hero/HeroPauseZone'
import { ChevronsRight } from 'lucide-react'

/**
 * Capped hero photo — no sticky cover / runway (full-bleed only here)
 */
export function HeroSection() {
  return (
    <HeroCarouselProvider>
      <HeroPauseZone>
        <section
          className="relative z-0 h-[min(76vh,760px)] min-h-[520px] w-full overflow-hidden bg-night"
          id="hero"
        >
          <div className="absolute inset-0" aria-hidden>
            <HeroBackgroundCarousel />
            <div className="absolute inset-0 bg-gradient-to-r from-night/72 via-night/38 to-night/12" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/30 via-transparent to-night/18" />
          </div>

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pb-16 pt-[calc(var(--site-header)+1rem)] md:px-8 md:pb-20 lg:px-10">
            <div className="max-w-xl drop-shadow-[0_2px_18px_rgba(7,17,31,0.45)] lg:max-w-[42%]">
              <p className="mb-3 font-kanila-script text-[1.35rem] text-white/90 md:mb-4 md:text-[1.6rem]">
                It&apos;s time to
              </p>
              <h1 className="mb-5 font-kanila-display text-[clamp(2rem,4.8vw,3.35rem)] font-normal leading-[1.05] tracking-tight text-white">
                Let&apos;s Design Your Next Luxury Travel Experience
              </h1>
              <p className="mb-8 max-w-md text-base font-medium leading-relaxed text-white/85 md:text-lg">
                Premium travel management from Nairobi — corporate journeys, Somalia airport
                support, and curated destinations worldwide.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-kamil-green-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-green-glow transition hover:-translate-y-0.5 hover:bg-kamil-green"
              >
                Book Now
                <ChevronsRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>
      </HeroPauseZone>
    </HeroCarouselProvider>
  )
}
