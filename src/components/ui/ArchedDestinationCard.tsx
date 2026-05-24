'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ArchedDestinationCardProps {
  title: string
  country?: string
  image: string
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'xl' | '2xl' | '3xl'
  /** Kanila hero / popular — compact or tall arch labels */
  variant?: 'default' | 'hero' | 'popular'
}

const sizes = {
  hero: 'w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]',
  sm: 'w-[140px] sm:w-[160px]',
  md: 'w-[180px] sm:w-[220px]',
  lg: 'w-[220px] sm:w-[280px]',
  xl: 'w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px]',
  '2xl': 'w-[240px] sm:w-[280px] md:w-[320px] lg:w-[min(22vw,380px)]',
  '3xl': 'w-[220px] sm:w-[260px] md:w-[300px] lg:w-[min(20vw,400px)] xl:w-[420px]',
}

export function ArchedDestinationCard({
  title,
  country,
  image,
  href = '/contact',
  className = '',
  size = 'md',
  variant = 'default',
}: ArchedDestinationCardProps) {
  const isHero = variant === 'hero' || size === 'hero'
  const isPopular = variant === 'popular'
  const resolvedSize =
    size === 'hero' || variant === 'hero'
      ? 'hero'
      : size === '3xl'
        ? '3xl'
        : size === '2xl'
          ? '2xl'
          : size === 'xl'
            ? 'xl'
            : size

  return (
    <Link
      href={href}
      className={cn(
        'arch-card group block shrink-0 transition-transform duration-500 ease-out hover:-translate-y-1.5',
        sizes[resolvedSize],
        className
      )}
    >
      <div
        className={cn(
          'arch-card-mask relative overflow-hidden shadow-xl',
          (isHero || isPopular) && 'aspect-[2/3]',
          !isHero && !isPopular && 'aspect-[3/4] shadow-premium'
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="arch-card-image object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes={
            isPopular
              ? '(max-width: 1024px) 300px, 420px'
              : isHero
                ? '(max-width: 1024px) 180px, 220px'
                : '(max-width: 640px) 140px, 280px'
          }
        />
        {!isHero && !isPopular && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/35 via-transparent to-transparent" />
        )}
        {isPopular && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/30 via-transparent to-transparent" />
        )}
      </div>
      <div
        className={cn(
          'arch-card-label relative z-10 mx-auto text-center shadow-md',
          isHero || isPopular
            ? '-mt-6 w-[92%] rounded-full bg-white px-4 py-3 shadow-lg'
            : '-mt-5 w-[88%] rounded-full border border-border bg-white px-4 py-2.5 shadow-lg'
        )}
      >
        {!isHero && !isPopular && country && (
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-gold">{country}</p>
        )}
        <p
          className={cn(
            'font-display font-semibold text-ink',
            isHero && 'text-xs leading-tight xl:text-sm',
            isPopular && 'text-sm leading-tight md:text-base',
            !isHero && !isPopular && 'text-sm sm:text-base'
          )}
        >
          {title}
        </p>
      </div>
    </Link>
  )
}
