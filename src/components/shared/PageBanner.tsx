import Image from 'next/image'
import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'

interface PageBannerProps {
  eyebrow?: string
  title: string
  subtitle?: string
  imageKey?: CityImageKey
  imageSrc?: string
  imageAlt?: string
}

/** Inner-page hero — sharp full-bleed photo + Kanila typography */
export function PageBanner({
  eyebrow,
  title,
  subtitle,
  imageKey = 'international',
  imageSrc,
  imageAlt,
}: PageBannerProps) {
  const src = imageSrc ?? cityImage(imageKey, 1920)
  const alt = imageAlt ?? cityImageAlts[imageKey] ?? title

  return (
    <section className="relative overflow-hidden bg-night pt-40 pb-20">
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
      <div className="banner-photo-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {eyebrow && (
          <p className="font-kanila-script mb-3 text-[1.35rem] text-kanila-orange md:text-[1.5rem]">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 font-kanila-display text-5xl font-normal leading-[0.95] tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-lg text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
