'use client'

import { LineReveal } from '@/components/ui/LineReveal'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { KanilaQuickLinksStrip } from '@/components/sections/KanilaQuickLinksStrip'
import { ArchFeatureCard } from '@/components/ui/ArchFeatureCard'
import { about } from '@/lib/content'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Global Air Ticketing',
    imageKey: 'santorini' as const,
    href: '/services#air-ticketing',
  },
  {
    title: 'Corporate Travel',
    imageKey: 'bali' as const,
    href: '/corporate-travel',
  },
  {
    title: 'Airport Support',
    imageKey: 'thailand' as const,
    href: '/services#meet-assist',
  },
]

interface CelebrateSectionProps {
  /** Tighter band on homepage — full story on /about */
  compact?: boolean
}

export function CelebrateSection({ compact = false }: CelebrateSectionProps) {
  return (
    <section
      className={
        compact
          ? 'hero-cover-panel relative z-40 isolate overlap-panel -mt-[min(14vh,120px)] rounded-t-[2.5rem] bg-sand-light pb-12 pt-8 shadow-[0_-48px_120px_rgba(7,17,31,0.35)] md:-mt-[min(18vh,160px)] md:pb-16 md:pt-10'
          : 'hero-cover-panel relative z-40 isolate overlap-panel -mt-[min(22vh,200px)] rounded-t-[2.5rem] bg-sand-light pb-20 pt-16 shadow-[0_-48px_120px_rgba(7,17,31,0.35)] md:-mt-[min(28vh,240px)] md:pb-28 md:pt-20'
      }
      id="about"
    >
      {/* Orange accent line — Kanila Home 3 */}
      <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gold" aria-hidden />

      {compact && <KanilaQuickLinksStrip className="relative z-10 -mx-0 rounded-t-[2.5rem]" />}

      <div className="mx-auto max-w-7xl px-5">
        <div className={cn('text-center', compact ? 'mb-8 pt-10' : 'mb-16 pt-0')}>
          <p className="animate-eyebrow eyebrow mb-6 justify-center">About Us</p>
          <LineReveal
            tag="h2"
            align="center"
            className="mx-auto mb-6 max-w-3xl font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[52px]"
          >
            {`Celebrating 10+ Years of\nProfessional Travel`}
          </LineReveal>
          <p className="animate-fade-up mx-auto max-w-2xl text-lg leading-relaxed text-ink-muted">
            {compact
              ? 'Cost-effective, customized travel management for corporate and leisure clients in Kenya, Somalia, and worldwide.'
              : about.intro}
          </p>
        </div>

        {!compact && (
          <div
            data-stagger="features"
            className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:gap-8"
          >
            {features.map((feature, i) => (
              <div key={feature.title} data-stagger-item>
                <ArchFeatureCard
                  imageKey={feature.imageKey}
                  title={feature.title}
                  href={feature.href}
                  index={i}
                />
              </div>
            ))}
          </div>
        )}

        <div className={cn('animate-fade-up text-center', compact ? 'mt-6' : 'mt-12')}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-all hover:gap-3"
          >
            Learn more about us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
