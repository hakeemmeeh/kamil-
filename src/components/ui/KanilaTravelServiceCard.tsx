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

/** Service card — rounded photo, no arch mask */
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
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={cn('group', className)}
    >
      <Link
        href={href}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_12px_40px_rgba(7,17,31,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(7,17,31,0.1)]"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 88vw, 280px"
          />
        </div>
        <div className="flex flex-1 flex-col px-5 py-5">
          <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold">
            {eyebrow}
          </p>
          <h3 className="font-kanila-display text-lg font-normal leading-tight text-ink md:text-xl">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-muted">{desc}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-kamil-green">
            Discover
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
