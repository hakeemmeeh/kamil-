'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cityImage, cityImageAlts } from '@/lib/cityImages'
import { KanilaStampStatCard } from '@/components/ui/KanilaStampStatCard'
import { KanilaStatsStar } from '@/components/ui/KanilaStatsStar'
import { cleanupStatsShowcaseAnimations, initStatsShowcaseAnimations } from '@/lib/animations'

const STATS_BG = cityImage('bali', 1920)

const stats = [
  { value: '300+', label: 'Curated Travel Experiences', variant: 'green' as const },
  { value: '98%', label: 'Client Satisfaction', variant: 'night' as const },
  { value: '24h', label: 'Enquiry Response', variant: 'white' as const },
]

const tickerItems = [
  'Experience the World',
  'Inspiring Journeys',
  'Top Destinations',
  'Natural Freedom',
  'Kenya to the Globe',
]

/** Kanila — scenic stats with stamp cards + green ticker (reference Home 3) */
export function StatsStrip() {
  const tickerDoubled = [...tickerItems, ...tickerItems]

  useEffect(() => {
    const run = () => requestAnimationFrame(() => initStatsShowcaseAnimations())
    if (window.__lenisReady) run()
    else window.addEventListener('lenis-ready', run, { once: true })
    return () => {
      window.removeEventListener('lenis-ready', run)
      cleanupStatsShowcaseAnimations()
    }
  }, [])

  return (
    <section
      className="kanila-stats-showcase relative z-30 -mt-[min(12vh,100px)] overflow-hidden"
      id="stats"
    >
      <div className="relative min-h-[min(92vh,720px)] md:min-h-[min(88vh,780px)]">
        <Image
          src={STATS_BG}
          alt={cityImageAlts.bali}
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/70 to-night/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(27,75,140,0.35),transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[min(92vh,720px)] max-w-7xl flex-col justify-center px-5 py-16 md:min-h-[min(88vh,780px)] md:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <div className="lg:col-span-4 xl:col-span-4" data-stats-intro>
              <div className="mb-6 flex items-center gap-3" data-stats-intro-item>
                <div className="flex -space-x-2.5" aria-hidden>
                  {['KA', 'YM', 'TR'].map((initials, i) => (
                    <span
                      key={initials}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-white/20 text-[10px] font-bold text-white backdrop-blur-sm md:h-10 md:w-10"
                      style={{ zIndex: 3 - i }}
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-white/90">50+ People Joined</p>
              </div>

              <p
                className="max-w-md text-base leading-relaxed text-white/80 md:text-lg"
                data-stats-intro-item
              >
                Explore breathtaking destinations, seamless airport support, and expertly guided
                journeys — from Nairobi and Somalia to Europe, the GCC, and beyond.
              </p>

              <Link
                href="/contact"
                data-stats-intro-item
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-kamil-green-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_32px_rgba(61,154,107,0.45)] transition hover:-translate-y-0.5 hover:bg-kamil-green"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div
              data-stagger="stats"
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:col-span-8 lg:gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} data-stagger-item>
                  <KanilaStampStatCard
                    value={stat.value}
                    label={stat.label}
                    variant={stat.variant}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-kamil-green-dark py-4 md:py-5" data-stats-ticker>
        <div className="kanila-stats-ticker overflow-hidden" aria-hidden>
          <div className="kanila-stats-ticker__track flex items-center gap-10 whitespace-nowrap px-4">
            {tickerDoubled.map((item, i) => (
              <span key={`${item}-${i}`} className="inline-flex shrink-0 items-center gap-10">
                <span className="font-kanila-display text-lg font-normal uppercase tracking-[0.12em] text-white md:text-xl">
                  {item}
                </span>
                <KanilaStatsStar className="h-4 w-4 shrink-0 text-white/85 md:h-5 md:w-5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
