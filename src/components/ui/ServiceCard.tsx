'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  eyebrow: string
  title: string
  desc: string
  image: string
  slug: string
  featured?: boolean
}

export function ServiceCard({ eyebrow, title, desc, image, featured = false }: ServiceCardProps) {
  return (
    <Link
      href="/services"
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-premium hover:border-gold/40 ${
        featured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2 aspect-[4/3] md:aspect-auto' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/30 to-transparent" />
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col justify-between p-6 ${featured ? 'md:p-8' : ''}`}>
        <div>
          <p className="eyebrow !text-[10px] !mb-3">{eyebrow}</p>
          <h3 className={`font-display font-semibold text-ink mb-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">{desc}</p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
