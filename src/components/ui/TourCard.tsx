import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, MapPin } from 'lucide-react'
import type { Tour } from '@/types'

interface TourCardProps extends Tour {}

export function TourCard({ slug, title, destination, country, duration, desc, image, highlights }: TourCardProps) {
  const enquiryHref = `/contact?inquiry=Tour+Inquiry&message=${encodeURIComponent(`I am interested in: ${title}`)}`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-night">
            {country}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-ink-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {destination}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-gold" />
            {duration}
          </span>
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-muted">{desc}</p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {highlights.slice(0, 3).map((item) => (
            <li
              key={item}
              className="rounded-full bg-sand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-muted"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <Link
            href={enquiryHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.08em] text-night transition hover:bg-gold-dark"
          >
            Enquire
          </Link>
          <Link
            href={`/tours/${slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-gold transition hover:gap-2"
          >
            Details <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
