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

/** Inner-page hero — full-bleed photo + Kanila typography */
export function PageBanner({
  eyebrow,
  title,
  subtitle,
  imageKey = 'international',
  imageSrc,
  imageAlt,
  breadcrumbs,
}: PageBannerProps) {
  const src = imageSrc ?? cityImage(imageKey, 1920)
  const alt = imageAlt ?? cityImageAlts[imageKey] ?? title

  return (
    <section className="relative overflow-hidden bg-night pb-24 pt-12 md:pb-28 md:pt-16">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        loading="eager"
        fetchPriority="high"
        quality={90}
        className="banner-photo object-cover object-center"
        sizes="100vw"
      />
      <div className="page-banner-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center justify-center gap-1 text-sm text-white/60"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="inline-flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/40" aria-hidden />}
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
          <p className="font-kanila-script mb-3 text-[1.35rem] text-kamil-green-light md:text-[1.5rem]">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 font-kanila-display text-5xl font-normal leading-[0.95] tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-lg text-white/75 md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
