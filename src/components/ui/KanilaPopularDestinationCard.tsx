'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface KanilaPopularDestination {
  slug: string
  title: string
  image: string
  href?: string
  tourCount: number
}

interface KanilaPopularDestinationCardProps {
  destination: KanilaPopularDestination
  className?: string
}

/** Kanila Popular Destinations — arch image + white footer with tours + arrow */
export function KanilaPopularDestinationCard({
  destination,
  className,
}: KanilaPopularDestinationCardProps) {
  const { title, image, href = `/destinations#${destination.slug}`, tourCount } = destination
  const tourLabel = tourCount === 1 ? '1 Tour' : `${tourCount} Tours`

  return (
    <article
      className={cn(
        'kanila-popular-card group w-[min(78vw,280px)] shrink-0 sm:w-[260px] md:w-[280px] lg:w-[300px]',
        className
      )}
    >
      <Link href={href} className="block">
        <div className="kanila-popular-card__arch relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 78vw, 300px"
          />
        </div>

        <div className="kanila-popular-card__footer flex items-center justify-between gap-3 bg-white px-4 py-4 md:px-5 md:py-5">
          <div className="min-w-0">
            <h3 className="font-kanila-display truncate text-xl font-normal leading-tight text-ink md:text-2xl">
              {title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-muted md:text-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0 opacity-60" strokeWidth={2} />
              <span>{tourLabel}</span>
            </p>
          </div>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  )
}
