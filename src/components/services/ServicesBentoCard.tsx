'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ServicesBentoVariant = 'hero' | 'portrait' | 'tile' | 'landscape'

interface ServicesBentoCardProps {
  eyebrow: string
  title: string
  desc: string
  image: string
  slug: string
  variant: ServicesBentoVariant
  index?: number
  className?: string
}

export function ServicesBentoCard({
  eyebrow,
  title,
  desc,
  image,
  slug,
  variant,
  index = 0,
  className,
}: ServicesBentoCardProps) {
  const isHero = variant === 'hero'
  const isPortrait = variant === 'portrait'
  const isLandscape = variant === 'landscape'
  const isTile = variant === 'tile'

  return (
    <article id={slug} className={cn('services-bento-card scroll-mt-32 h-full', className)}>
      <Link
        href={`/services#${slug}`}
        className={cn(
          'services-bento-card__link group relative flex h-full w-full overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface shadow-[0_12px_40px_rgba(7,17,31,0.06)] transition-all duration-500',
          'hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_24px_56px_rgba(7,17,31,0.14)]',
          isHero && 'services-bento-card__link--hero min-h-[360px] flex-col',
          isPortrait && 'min-h-[380px] flex-col lg:min-h-0',
          isLandscape && 'min-h-[220px] flex-col sm:flex-row',
          isTile && 'min-h-[300px] flex-col'
        )}
      >
        {/* Hero — full-bleed background image layer */}
        {isHero && (
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-night/92 via-night/45 to-night/20" />
          </div>
        )}

        {/* Image region — non-hero variants */}
        {!isHero && (
        <div
          className={cn(
            'relative overflow-hidden',
            isPortrait && 'arch-card-mask min-h-[58%] flex-1',
            isLandscape && 'arch-card-mask relative min-h-[200px] sm:min-h-0 sm:w-[42%] sm:shrink-0',
            isTile && 'arch-card-mask h-[52%] min-h-[150px] shrink-0'
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
            sizes={
              isPortrait
                  ? '(max-width: 1024px) 100vw, 40vw'
                  : isLandscape
                    ? '(max-width: 640px) 100vw, 28vw'
                    : '(max-width: 640px) 100vw, 25vw'
            }
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-night/5 to-transparent" />
          {isPortrait && (
            <span className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-white/95 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-night shadow-sm backdrop-blur-sm">
              {eyebrow}
            </span>
          )}
        </div>
        )}

        {isHero && (
          <span className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-white/95 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-night shadow-sm backdrop-blur-sm">
            {eyebrow}
          </span>
        )}

        {/* Content */}
        <div
          className={cn(
            'relative z-10 flex flex-1 flex-col justify-between',
            isHero && 'mt-auto p-6 md:p-8 lg:p-10',
            isPortrait && 'border-t border-border/60 bg-white p-6 md:p-7',
            isLandscape && 'p-6 sm:p-7 md:p-8',
            isTile && 'p-5 md:p-6'
          )}
        >
          <div>
            {!isHero && !isPortrait && (
              <p className="eyebrow mb-2 !text-[10px]">{eyebrow}</p>
            )}
            <h3
              className={cn(
                'font-kanila-display font-normal leading-[1.05] tracking-tight text-ink',
                isHero && 'text-white text-3xl md:text-4xl lg:text-[2.65rem]',
                isPortrait && 'text-2xl md:text-[1.75rem]',
                isLandscape && 'text-xl md:text-2xl',
                isTile && 'text-lg md:text-xl'
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                'mt-2 leading-relaxed',
                isHero && 'max-w-lg text-sm text-white/85 md:text-base line-clamp-3',
                isPortrait && 'text-sm text-ink-muted line-clamp-3',
                isLandscape && 'text-sm text-ink-muted line-clamp-2 md:line-clamp-3',
                isTile && 'text-xs text-ink-muted line-clamp-2 md:text-sm'
              )}
            >
              {desc}
            </p>
          </div>

          <span
            className={cn(
              'mt-4 inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.12em] transition-all group-hover:gap-2.5',
              isHero ? 'text-kamil-green-light text-xs md:text-sm' : 'text-gold text-[11px] md:text-xs'
            )}
          >
            {isHero ? 'Explore service' : 'Learn more'}
            <ArrowUpRight
              className={cn(
                'transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                isHero ? 'h-4 w-4' : 'h-3.5 w-3.5'
              )}
            />
          </span>
        </div>

        {/* Hero accent */}
        {isHero && (
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-kamil-green via-gold to-transparent opacity-90"
            aria-hidden
          />
        )}
      </Link>
    </article>
  )
}
