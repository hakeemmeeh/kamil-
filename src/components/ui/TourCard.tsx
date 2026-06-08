import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, MapPin } from 'lucide-react'
import type { Tour } from '@/types'
import { TourRating } from '@/components/ui/TourRating'

export function TourCard({
  slug,
  title,
  destination,
  country,
  duration,
  desc,
  image,
  highlights,
  interests = [],
  rating = 4.5,
  reviewCount = 2,
  promoLabel,
}: Tour) {
  const enquiryHref = `/contact?inquiry=Tour+Inquiry&message=${encodeURIComponent(`I am interested in: ${title}`)}`
  const tags = interests.length > 0 ? interests : highlights

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-lg transition-[transform,box-shadow,scale] duration-300 hover:-translate-y-1 hover:shadow-premium active:scale-[0.99]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {promoLabel && (
            <span className="rounded-full bg-kamil-green-dark px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
              {promoLabel}
            </span>
          )}
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-night">
            {country}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <TourRating rating={rating} reviewCount={reviewCount} className="mb-3" />
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
        <h3 className="mb-2 font-kanila-display text-xl font-normal text-ink">{title}</h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-muted">{desc}</p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((item) => (
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
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-gold-dark"
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
