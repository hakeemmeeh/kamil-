'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KanilaHeroArchCardProps {
  title: string
  subtitle?: string
  image: string
  href?: string
  /** Lead = large arch + title + arrow (active front card) */
  isLead?: boolean
  className?: string
}

/** Kanila Home 3 hero arch — grows when it becomes the lead slot */
export function KanilaHeroArchCard({
  title,
  subtitle = 'Travel',
  image,
  href = '/destinations',
  isLead = false,
  className,
}: KanilaHeroArchCardProps) {
  return (
    <article
      className={cn(
        'kanila-hero-arch-card flex flex-col',
        isLead ? 'kanila-hero-arch-card--lead' : 'kanila-hero-arch-card--compact',
        className
      )}
    >
      <Link href={href} className="group block">
        <div className="kanila-hero-arch__shape relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority={isLead}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={isLead ? '(max-width: 768px) 300px, 320px' : '148px'}
          />
        </div>
      </Link>

      <div
        className={cn(
          'kanila-hero-arch-card__caption flex items-end justify-between gap-3 pr-1',
          isLead ? 'kanila-hero-arch-card__caption--visible' : 'kanila-hero-arch-card__caption--hidden'
        )}
        aria-hidden={!isLead}
      >
        <div className="min-w-0">
          <h3 className="font-kanila-display text-[1.15rem] font-normal leading-snug text-white sm:text-xl lg:text-[1.35rem]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/65">{subtitle}</p>
        </div>
        <Link
          href={href}
          tabIndex={isLead ? 0 : -1}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night text-white shadow-lg transition-transform hover:scale-105 hover:bg-night-light sm:h-12 sm:w-12"
          aria-label={`Explore ${title}`}
        >
          <ArrowRight className="h-5 w-5" strokeWidth={2} />
        </Link>
      </div>
    </article>
  )
}
