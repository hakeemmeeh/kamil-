import Link from 'next/link'
import { HeroArchCarousel } from '@/components/sections/home/hero/HeroArchCarousel'
import { HeroBackgroundCarousel } from '@/components/sections/home/hero/HeroBackgroundCarousel'
import { HeroCarouselProvider } from '@/components/sections/home/hero/HeroCarouselContext'
import { HeroPauseZone } from '@/components/sections/home/hero/HeroPauseZone'
import { ChevronsRight } from 'lucide-react'

/**
 * Kanila Home 3 — full-viewport photo hero · copy left · arch carousel bottom-right
 */
export function HeroSection() {
  return (
    <HeroCarouselProvider>
    <HeroPauseZone>
    <section className="kanila-hero relative z-0 w-full" id="hero">
      <div className="kanila-hero__bg" aria-hidden>
        <div className="hero-parallax-layer absolute inset-0">
          <HeroBackgroundCarousel />
        </div>
      </div>

      <div className="kanila-hero__foreground">
        <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col gap-10 px-5 pt-[calc(var(--site-header)+0.75rem)] lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-8 lg:pt-[calc(var(--site-header)+1.25rem)] xl:gap-20 xl:px-10">
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
              <span className="text-sm font-semibold text-white">50+ People Joined</span>
            </div>

            <p className="hero-kicker mb-3 font-kanila-script text-[1.5rem] text-white md:mb-4 md:text-[1.75rem]">
              It&apos;s time to
            </p>
            <h1 className="hero-headline mb-6 font-kanila-display text-[2rem] leading-[1.06] tracking-tight text-white sm:text-[2.75rem] md:text-[3.1rem] lg:text-[3.35rem]">
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

            <p className="hero-desc mb-8 max-w-md text-base font-medium leading-relaxed text-white md:text-lg">
              Explore breathtaking volcanic landscapes, golden skies, and timeless beauty with
              expertly guided journeys worldwide.
            </p>

            <Link
              href="/contact"
              className="hero-cta inline-flex w-fit items-center gap-2 rounded-full bg-kamil-green-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-green-glow transition hover:-translate-y-0.5 hover:bg-kamil-green"
            >
              Book Now
              <ChevronsRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="hero-arch-rail pointer-events-auto relative z-20 flex w-full shrink-0 justify-end overflow-hidden pb-6 lg:w-auto lg:max-w-[56%] lg:pl-6 lg:pb-12 xl:pl-10">
            <HeroArchCarousel />
          </div>
        </div>

        <div className="kanila-hero__runway h-[55vh] md:h-[70vh]" aria-hidden />
      </div>
    </section>
    </HeroPauseZone>
    </HeroCarouselProvider>
  )
}
