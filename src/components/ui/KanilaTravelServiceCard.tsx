'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface KanilaTravelServiceCardProps {
  eyebrow: string
  title: string
  desc: string
  image: string
  href: string
  className?: string
}

/** Kanila-style travel service — arched photo, all copy in bottom white panel */
export function KanilaTravelServiceCard({
  eyebrow,
  title,
  desc,
  image,
  href,
  className,
}: KanilaTravelServiceCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={cn('kanila-travel-service-card group', className)}
    >
      <Link href={href} className="block">
        <div className="kanila-travel-service-card__arch relative aspect-[4/5] overflow-hidden shadow-[0_20px_50px_rgba(7,17,31,0.18)] transition-shadow duration-500 group-hover:shadow-[0_24px_56px_rgba(7,17,31,0.22)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 88vw, 280px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-night/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 border-t border-border/60 bg-white">
            <div className="px-4 py-4 md:px-5 md:py-5">
              <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold">
                {eyebrow}
              </p>
              <h3 className="font-kanila-display text-lg font-normal leading-tight text-ink md:text-xl">
                {title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border/50 bg-sand-light/80 px-4 py-2.5 md:px-5 md:py-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-kamil-green transition-all group-hover:tracking-[0.14em]">
                Discover
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-kamil-green transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-[18px] md:w-[18px]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
