'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ArchFeatureCard } from '@/components/ui/ArchFeatureCard'
import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import type { CityImageKey } from '@/lib/cityImages'
import { cn } from '@/lib/utils'

export interface PhotoFeatureItem {
  imageKey: CityImageKey
  title: string
  /** @deprecated Cards no longer show body copy — kept for data compatibility */
  description?: string
  href?: string
}

interface PhotoFeatureGridProps {
  eyebrow?: string
  title: string
  items: PhotoFeatureItem[]
  className?: string
  bgClassName?: string
  /** Kanila "Explore Activities" — script eyebrow + title left, arches right */
  layout?: 'grid' | 'split'
  ctaHref?: string
  ctaLabel?: string
}

export function PhotoFeatureGrid({
  eyebrow,
  title,
  items,
  className = '',
  bgClassName = 'bg-cream section-padding',
  layout = 'grid',
  ctaHref = '/tours',
  ctaLabel = 'View',
}: PhotoFeatureGridProps) {
  if (layout === 'split') {
    return (
      <section className={cn(bgClassName, className)}>
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <header className="lg:col-span-4 xl:col-span-4">
              {eyebrow && (
                <p className="font-kanila-script text-[1.65rem] leading-none text-kamil-green md:text-[1.85rem] lg:text-[2rem]">
                  {eyebrow}
                </p>
              )}
              <h2 className="mt-2 font-kanila-display text-[2.35rem] font-normal leading-[1.02] tracking-tight text-ink sm:text-[2.75rem] md:text-[3rem] lg:text-[3.15rem]">
                {title}
              </h2>
              <KanilaCompassMark className="mt-5 text-ink/80" />
              <Link
                href={ctaHref}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-kamil-green-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-green-glow transition hover:-translate-y-0.5 hover:bg-kamil-green"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </header>

            <div
              data-stagger="activities"
              className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:col-span-8 lg:gap-7"
            >
              {items.slice(0, 3).map((item, i) => (
                <div key={item.title} data-stagger-item className="min-w-0">
                  <ArchFeatureCard
                    imageKey={item.imageKey}
                    title={item.title}
                    href={item.href ?? ctaHref}
                    index={i}
                    size="large"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn(bgClassName, className)}>
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader eyebrow={eyebrow} title={title} align="center" />
        </FadeUp>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <ArchFeatureCard
              key={item.title}
              imageKey={item.imageKey}
              title={item.title}
              href={item.href}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
