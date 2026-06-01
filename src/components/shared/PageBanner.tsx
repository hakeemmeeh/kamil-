import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageBannerProps {
  eyebrow?: string
  title: string
  subtitle?: string
  imageKey?: CityImageKey
  imageSrc?: string
  imageAlt?: string
  breadcrumbs?: BreadcrumbItem[]
}

/** Compact inner-page header — short photo strip, not a full hero */
export function PageBanner({
  eyebrow,
  title,
  subtitle,
  imageKey = 'international',
  imageSrc,
  imageAlt,
  breadcrumbs,
}: PageBannerProps) {
  const src = imageSrc ?? cityImage(imageKey, 1400)
  const alt = imageAlt ?? cityImageAlts[imageKey] ?? title

  return (
    <section className="page-banner relative w-full overflow-hidden bg-night" aria-label={title}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={80}
          className="banner-photo object-cover object-center"
          sizes="100vw"
        />
        <div className="page-banner-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[11.5rem] max-w-4xl flex-col justify-center px-5 py-8 text-center sm:min-h-[12.5rem] md:min-h-[13.75rem] md:py-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-3 flex flex-wrap items-center justify-center gap-1 text-xs text-white/60 md:text-sm"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="inline-flex items-center gap-1">
                {i > 0 && (
                  <ChevronRight className="h-3 w-3 shrink-0 text-white/40 md:h-3.5 md:w-3.5" aria-hidden />
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="font-kanila-script mb-1.5 text-[1.2rem] text-kamil-green-light md:mb-2 md:text-[1.35rem]">
            {eyebrow}
          </p>
        )}
        <h1 className="page-banner__title font-kanila-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-normal leading-[1] tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:mt-3.5 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
