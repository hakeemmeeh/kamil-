'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { HeroArchCarousel } from '@/components/sections/HeroArchCarousel'
import { HeroBackgroundCarousel } from '@/components/sections/HeroBackgroundCarousel'
import {
  heroIntroHome3,
  initHeroCoverScroll,
  revertSectionScroll,
  whenLenisReady,
} from '@/lib/animations'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronsRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Kanila Home 3 — pinned photo hero · copy left · arch carousel bottom-right
 */
export function HeroSection() {
  const initRan = useRef(false)

  useLayoutEffect(() => {
    let cancelled = false

    const setup = () => {
      if (cancelled || initRan.current) return
      initRan.current = true
      heroIntroHome3()
      initHeroCoverScroll()
      ScrollTrigger.refresh()
    }

    const cancelLenis = whenLenisReady(setup)

    return () => {
      cancelled = true
      cancelLenis()
      initRan.current = false
      revertSectionScroll('#hero')
    }
  }, [])

  return (
    <section className="kanila-sticky-cover kanila-hero relative z-0 w-full" id="hero">
      <div className="kanila-sticky-cover__pin hero-sticky-bg h-[100svh] w-full overflow-hidden bg-ink isolate">
        <div className="hero-parallax-layer relative h-full w-full">
          <HeroBackgroundCarousel />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-night/40 via-night/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-night/15 via-transparent to-night/35" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-night/45 via-transparent to-transparent" />
      </div>

      <div className="kanila-sticky-cover__scroll relative z-10">
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col gap-10 px-5 pt-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-8 lg:pt-28 xl:gap-20 xl:px-10">
          <div className="hero-foreground-copy flex flex-1 flex-col justify-center pb-4 lg:max-w-[44%] lg:pb-14 lg:pr-4 xl:max-w-[40%] xl:pr-8">
            <div className="hero-social mb-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <span
                    key={n}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 bg-gold/80 text-[10px] font-bold text-white"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-white/85">50+ People Joined</span>
            </div>

            <p className="hero-kicker mb-3 font-kanila-script text-[1.5rem] text-kanila-orange md:mb-4 md:text-[1.75rem]">
              It&apos;s time to
            </p>
            <h1 className="hero-headline mb-6 font-kanila-display text-[2rem] font-normal leading-[1.08] tracking-tight text-white sm:text-[2.75rem] md:text-[3.1rem] lg:text-[3.35rem]">
              <span className="block overflow-hidden">
                <span className="heading-line line-reveal-inner inline-block">
                  Let&apos;s Design Your Next
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="heading-line line-reveal-inner inline-block">
                  Luxury Travel Experience
                </span>
              </span>
            </h1>

            <p className="hero-desc mb-8 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
              Explore breathtaking volcanic landscapes, golden skies, and timeless beauty with
              expertly guided journeys worldwide.
            </p>

            <Link
              href="/contact"
              className="hero-cta inline-flex w-fit items-center gap-2 rounded-full bg-kanila-orange px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_12px_40px_rgba(232,117,36,0.35)] transition hover:-translate-y-0.5 hover:bg-[#d96818]"
            >
              Book Now
              <ChevronsRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="hero-arch-rail pointer-events-auto relative z-20 flex w-full shrink-0 justify-end overflow-hidden pb-6 lg:w-auto lg:max-w-[56%] lg:pl-6 lg:pb-12 xl:pl-10">
            <HeroArchCarousel />
          </div>
        </div>

        <div className="kanila-sticky-cover__runway h-[55vh] md:h-[70vh]" aria-hidden />
      </div>
    </section>
  )
}
