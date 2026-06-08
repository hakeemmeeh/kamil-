import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cityImage, cityImageAlts } from '@/lib/cityImages'
import { KanilaStampStatCard } from '@/components/ui/KanilaStampStatCard'
import { KanilaStatsTicker } from '@/components/ui/KanilaStatsTicker'

const STATS_BG = cityImage('bali', 1920)

const stats = [
  { value: '300+', label: 'Curated Travel Experiences', variant: 'green' as const },
  { value: '98%', label: 'Client Satisfaction', variant: 'night' as const },
  { value: '24h', label: 'Enquiry Response', variant: 'white' as const },
]

/** Kanila Home 3 — scenic stats band (static content + compositor-only ticker) */
export function StatsStrip() {
  return (
    <section
      className="kanila-stats-showcase relative z-[45] mt-0 w-full overflow-hidden shadow-[0_-24px_64px_rgba(7,17,31,0.16)]"
      id="stats"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gold" aria-hidden />

      <div className="relative min-h-[min(72vh,620px)] md:min-h-[min(68vh,680px)]">
        <Image
          src={STATS_BG}
          alt={cityImageAlts.bali}
          fill
          quality={90}
          className="kanila-fullbleed-bg"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto flex min-h-[min(72vh,620px)] max-w-7xl flex-col justify-center px-5 py-14 md:min-h-[min(68vh,680px)] md:py-16 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <div className="kanila-stats-copy lg:col-span-4 xl:col-span-4">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex -space-x-2.5" aria-hidden>
                  {['KA', 'YM', 'TR'].map((initials, i) => (
                    <span
                      key={initials}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-white/20 text-[10px] font-bold text-white md:h-10 md:w-10"
                      style={{ zIndex: 3 - i }}
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-white/90">50+ People Joined</p>
              </div>

              <p className="max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                Explore breathtaking destinations, seamless airport support, and expertly guided
                journeys — from Nairobi and Somalia to Europe, the GCC, and beyond.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-kamil-green-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_32px_rgba(61,154,107,0.45)] transition hover:-translate-y-0.5 hover:bg-kamil-green"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:col-span-8 lg:gap-6">
              {stats.map((stat) => (
                <KanilaStampStatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  variant={stat.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-kamil-green-dark py-4 md:py-5">
        <KanilaStatsTicker />
      </div>
    </section>
  )
}
