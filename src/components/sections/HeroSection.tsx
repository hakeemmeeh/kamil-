'use client'

import { useLayoutEffect, useRef } from 'react'
import { HeroArchCarousel } from '@/components/sections/HeroArchCarousel'
import { HeroBackgroundCarousel } from '@/components/sections/HeroBackgroundCarousel'
import { heroIntroHome3, initHeroCoverScroll, whenLenisReady } from '@/lib/animations'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Kanila Home 3 — §1.1 Hero
 * Pinned bg carousel · headline left · side arch carousel · next section covers image
 */
export function HeroSection() {
  const initRan = useRef(false)

  useLayoutEffect(() => {
    const setup = () => {
      if (initRan.current) return
      initRan.current = true
      heroIntroHome3()
      initHeroCoverScroll()
      ScrollTrigger.refresh()
    }

    whenLenisReady(setup)
  }, [])

  return (
    <section className="kanila-sticky-cover kanila-hero relative z-0 w-full" id="hero">
      {/* Pinned full-bleed background (GSAP pin on desktop) */}
      <div className="kanila-sticky-cover__pin hero-sticky-bg h-[100svh] w-full overflow-hidden bg-ink isolate">
        <div className="hero-parallax-layer relative h-full w-full">
          <HeroBackgroundCarousel />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-night/40 via-night/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-night/15 via-transparent to-night/35" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-night/45 via-transparent to-transparent" />
      </div>

      {/* Scroll layer — drives section height; content moves over pinned image */}
      <div className="kanila-sticky-cover__scroll relative z-10">
        <div className="relative min-h-[100svh]">
          <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pt-24 pb-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 lg:pt-28 lg:pb-12 xl:px-10">
            <div className="hero-foreground-copy flex flex-1 flex-col items-center justify-center text-center lg:max-w-[52%] lg:items-start lg:text-left xl:max-w-[48%]">
              <p className="hero-kicker mb-3 font-display text-lg italic text-gold-light md:mb-4 md:text-xl">
                It&apos;s time to
              </p>
              <h1 className="hero-headline max-w-[18ch] font-display text-[2.35rem] font-medium leading-[1.02] tracking-tight text-white sm:max-w-none sm:text-5xl md:text-[3.35rem] lg:text-[3.75rem]">
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
            </div>

            <div className="hero-arch-rail pointer-events-auto relative z-20 mt-10 w-full shrink-0 lg:mt-0 lg:w-auto lg:max-w-[min(46vw,440px)] xl:max-w-[480px]">
              <HeroArchCarousel />
            </div>
          </div>
        </div>

        {/* Extra runway — image stays pinned while user scrolls through hero */}
        <div className="kanila-sticky-cover__runway h-[55vh] md:h-[70vh]" aria-hidden />
      </div>
    </section>
  )
}
