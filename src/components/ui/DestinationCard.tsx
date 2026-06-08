'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { parallaxImage, prefersReducedMotion } from '@/lib/animations'

interface DestinationCardProps {
  title: string
  country: string
  desc: string
  image: string
  slug: string
  status: string
}

export function DestinationCard({ title, country, desc, image, status }: DestinationCardProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = imageRef.current
    if (!el || prefersReducedMotion()) return
    parallaxImage(`#${el.id}`, 12)
  }, [])

  const imageId = `dest-img-${title.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <Link
      href="/contact"
      className="card-premium group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-4xl aspect-[3/4] shadow-xl transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
    >
      <div ref={imageRef} id={imageId} className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="card-premium-img object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          sizes="(max-width: 768px) 100vw, 380px"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-night/50 via-night/15 to-transparent" />

      <div className="absolute top-5 left-5 z-20">
        <p className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-kamil-green-dark backdrop-blur-sm">
          {country}
        </p>
      </div>

      {status === 'client-to-confirm' && (
        <div className="absolute top-5 right-5 z-20 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
          Coming Soon
        </div>
      )}

      <div className="relative z-20 p-6 md:p-8">
        <h3 className="mb-2 font-display text-2xl font-semibold text-white md:text-3xl">{title}</h3>
        <p className="mb-5 line-clamp-2 text-sm text-white/60">{desc}</p>
        <span className="card-arrow inline-flex items-center gap-2 text-sm font-bold text-kamil-green">
          Enquire
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
