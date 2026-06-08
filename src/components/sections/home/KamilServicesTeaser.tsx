'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cityImage, type CityImageKey } from '@/lib/cityImages'

const teasers = [
  {
    title: 'Corporate Travel',
    desc: 'Cost-effective planning, group coordination, and 24-hour support for organizations.',
    href: '/corporate-travel',
    imageKey: 'santorini' as CityImageKey,
  },
  {
    title: 'Airport Experience',
    desc: 'Meet & assist, VIP lounge, and transfers — including Mogadishu airport operations.',
    href: '/services#airport-experience',
    imageKey: 'bali' as CityImageKey,
  },
  {
    title: 'Somalia Network',
    desc: 'Representatives at six regional airports plus worldwide airline partnerships.',
    href: '/about#somalia-network',
    imageKey: 'thailand' as CityImageKey,
  },
]

export function KamilServicesTeaser() {
  return (
    <section className="relative z-20 overflow-hidden bg-white py-16 md:py-20" id="kamil-services">
      <div className="mx-auto max-w-7xl px-5">
        <p className="eyebrow mb-10 justify-center">Kamil Expertise</p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {teasers.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Link href={item.href} className="group block">
                <div className="kanila-arch-top relative aspect-[4/3] overflow-hidden shadow-lg">
                  <Image
                    src={cityImage(item.imageKey, 800)}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-night/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 font-kanila-display text-xl text-white drop-shadow-md">
                    {item.title}
                  </span>
                </div>
                <p className="mt-4 px-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 px-1 text-xs font-bold uppercase tracking-[0.1em] text-kamil-green">
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
