'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface DestinationCardProps {
  title: string
  country: string
  desc: string
  image: string
  slug: string
  status: string
}

export function DestinationCard({ title, country, desc, image, status }: DestinationCardProps) {
  return (
    <Link href="/contact" className="group relative overflow-hidden rounded-3xl aspect-[3/4] flex flex-col justify-end">
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
      {status === 'client-to-confirm' && (
        <div className="absolute top-4 right-4 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">Coming Soon</div>
      )}
      <div className="relative z-10 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold mb-1">{country}</p>
        <h3 className="font-display text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 line-clamp-2 mb-4">{desc}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:gap-3 transition-all">
          Enquire <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
