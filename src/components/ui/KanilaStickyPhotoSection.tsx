'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type OverlayTone = 'none' | 'subtle' | 'dark' | 'warm' | 'light'

interface KanilaStickyPhotoSectionProps {
  id: string
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
  className?: string
  overlay?: OverlayTone
  /** Scroll runway below content (Kanila cover effect) */
  runway?: string | false
  pinClassName?: string
  /** GSAP parallax target inside the sticky pin */
  parallaxClassName?: string
}

const overlays: Record<Exclude<OverlayTone, 'none'>, string> = {
  subtle: 'from-night/20 via-night/8 to-night/25',
  dark: 'from-night/75 via-night/45 to-night/65',
  warm: 'from-night/60 via-night/25 to-night/50',
  light: 'from-white/88 via-white/72 to-white/88',
}

const subtleTopFade = 'from-night/15 via-transparent to-night/10'

/**
 * Kanila Home 3 — full-bleed sticky background, foreground scrolls over it.
 */
export function KanilaStickyPhotoSection({
  id,
  imageSrc,
  imageAlt,
  children,
  className,
  overlay = 'none',
  runway = '50vh',
  pinClassName,
  parallaxClassName,
}: KanilaStickyPhotoSectionProps) {
  return (
    <section id={id} className={cn('kanila-sticky-cover relative w-full', className)}>
      <div
        className={cn(
          'kanila-sticky-cover__pin h-[100svh] w-full overflow-hidden bg-ink',
          pinClassName
        )}
      >
        <div className={cn('absolute inset-0', parallaxClassName)}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {overlay !== 'none' && (
          <>
            <div
              className={cn('pointer-events-none absolute inset-0 bg-gradient-to-b', overlays[overlay])}
              aria-hidden
            />
            <div
              className={cn(
                'pointer-events-none absolute inset-0 bg-gradient-to-t',
                overlay === 'subtle' ? subtleTopFade : 'from-night/50 via-transparent to-night/20'
              )}
              aria-hidden
            />
          </>
        )}
      </div>

      <div className="kanila-sticky-cover__scroll relative z-10">
        {children}
        {runway !== false && (
          <div
            className="kanila-sticky-cover__runway pointer-events-none w-full"
            style={{ height: runway }}
            aria-hidden
          />
        )}
      </div>
    </section>
  )
}
