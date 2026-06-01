'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { travelTipsBefore } from '@/lib/content'
import { TravelTipIconArt } from '@/components/sections/TravelTipIconArt'
import { KanilaStickyPhotoSection } from '@/components/ui/KanilaStickyPhotoSection'
import { cityImage, cityImageAlts } from '@/lib/cityImages'

const BG = cityImage('travelTips', 1920)

const tipsHome = travelTipsBefore.slice(0, 4)

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function TravelTipsSection() {
  return (
    <KanilaStickyPhotoSection
      id="travel-tips"
      imageSrc={BG}
      imageAlt={cityImageAlts.travelTips}
      overlay="subtle"
      runway="48vh"
      className="travel-tips-kanila"
      parallaxClassName="travel-tips-parallax"
      pinClassName="travel-tips-kanila__pin"
    >
      <motion.div
        className="mx-auto max-w-4xl px-5 pb-8 pt-14 text-center md:pb-10 md:pt-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-8%' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.p
          variants={headerVariants}
          className="font-kanila-script mb-3 text-[1.75rem] text-kamil-green-light md:text-[2rem]"
        >
          Limited Only By Your Imagination
        </motion.p>
        <motion.h2
          variants={headerVariants}
          className="font-kanila-display text-[2.15rem] font-normal leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(7,17,31,0.35)] sm:text-[2.65rem] md:text-[3rem] lg:text-[3.25rem]"
        >
          Things To Know Before Travelling
        </motion.h2>
        <motion.div variants={headerVariants} className="mt-7 md:mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-kamil-green-dark px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_rgba(61,154,107,0.4)] transition hover:bg-kamil-green hover:-translate-y-0.5"
          >
            Contact Us
            <span className="text-base leading-none" aria-hidden>
              »
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-5 md:pb-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-4%' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
          }}
          className="travel-tips-kanila__grid -mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:-mt-4 lg:grid-cols-4"
        >
          {tipsHome.map((tip) => (
            <motion.div key={tip.title} variants={cardVariants} className="h-full">
              <Link
                href={tip.href}
                className="travel-tip-card group flex h-full flex-col rounded-2xl bg-white px-5 pb-5 pt-6 shadow-[0_16px_48px_rgba(7,17,31,0.14)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_52px_rgba(7,17,31,0.18)] sm:px-6 sm:pb-6 sm:pt-7"
              >
                <h3 className="font-kanila-display text-[1.2rem] font-normal leading-snug text-ink md:text-[1.3rem]">
                  {tip.title}
                </h3>
                <p className="mt-2.5 line-clamp-3 text-[0.8125rem] leading-relaxed text-ink-muted md:text-sm">
                  {tip.desc}
                </p>
                <div className="mt-auto flex justify-center pt-4 md:pt-5">
                  <TravelTipIconArt type={tip.illustration} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </KanilaStickyPhotoSection>
  )
}
