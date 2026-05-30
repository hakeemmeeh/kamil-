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

/** Kanila-style travel service — arched photo, script eyebrow, leisure not corporate */
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
        <div className="kanila-travel-service-card__arch relative aspect-[4/5] overflow-hidden shadow-[0_20px_50px_rgba(7,17,31,0.18)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 88vw, 280px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-night shadow-sm">
            {eyebrow}
          </span>
        </div>

        <div className="mt-5 px-1">
          <h3 className="font-kanila-display text-[1.35rem] font-normal leading-snug text-ink md:text-[1.5rem]">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-kanila-orange transition-all group-hover:gap-2.5">
            Discover
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
