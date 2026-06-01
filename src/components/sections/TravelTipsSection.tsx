'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { travelTipsBefore } from '@/lib/content'
import { KanilaStickyPhotoSection } from '@/components/ui/KanilaStickyPhotoSection'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

const BG = cityImage('thailand', 1920)

const tipPhotos: CityImageKey[] = ['santorini', 'bali', 'thailandTemple', 'seychelles']

const tipsHome = travelTipsBefore.slice(0, 4)

export function TravelTipsSection() {
  return (
    <KanilaStickyPhotoSection
      id="travel-tips"
      imageSrc={BG}
      imageAlt={cityImageAlts.thailand}
      overlay="subtle"
      runway="38vh"
    >
      <div className="relative px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-14">
            <p className="font-kanila-script mb-3 text-[1.65rem] text-kamil-green-light md:text-[1.85rem]">
              Before You Go
            </p>
            <h2 className="font-kanila-display text-[2.35rem] font-normal leading-[0.95] tracking-tight text-white md:text-[3rem]">
              <span className="text-white/75" aria-hidden>
                ‹{' '}
              </span>
              Things to Know Before Travelling
              <span className="text-white/75" aria-hidden>
                {' '}
                ›
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
              Practical guidance from our team — visas, documents, airport support, and how to reach us
              when plans change.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-6%' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {tipsHome.map((tip, i) => (
              <motion.div
                key={tip.title}
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  href={tip.href}
                  className="group block overflow-hidden rounded-3xl bg-white/95 shadow-[0_20px_50px_rgba(7,17,31,0.25)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="kanila-arch-top relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={cityImage(tipPhotos[i], 800)}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-kanila-display text-lg font-normal leading-snug text-ink">
                      {tip.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">{tip.desc}</p>
                    <span
                      className={cn(
                        'mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-kamil-green'
                      )}
                    >
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-10 text-center">
            <Link
              href="/visa-assistance"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/90 transition hover:text-kamil-green"
            >
              Full visa & travel prep guide <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </div>
    </KanilaStickyPhotoSection>
  )
}
