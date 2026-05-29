'use client'

import { Plane, Building2, MapPin } from 'lucide-react'
import { LineReveal } from '@/components/ui/LineReveal'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { about } from '@/lib/content'

const features = [
  {
    icon: Plane,
    title: 'Global Air Ticketing',
    desc: 'Professional flight booking for corporate and leisure travel to destinations worldwide.',
  },
  {
    icon: Building2,
    title: 'Corporate Travel Management',
    desc: 'Cost-effective, customized travel planning for organizations — from Nairobi to global hubs.',
  },
  {
    icon: MapPin,
    title: 'Regional & Airport Support',
    desc: 'Meet & assist at Mogadishu and representatives across six Somalia airports.',
  },
]

export function CelebrateSection() {
  return (
    <section
      className="hero-cover-panel relative z-40 isolate overlap-panel -mt-[min(22vh,200px)] rounded-t-[2.5rem] bg-sand-light pb-20 pt-16 shadow-[0_-48px_120px_rgba(7,17,31,0.35)] md:-mt-[min(28vh,240px)] md:pb-28 md:pt-20"
      id="about"
    >
      {/* Orange accent line — Kanila Home 3 */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gold" aria-hidden />

      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <p className="animate-eyebrow eyebrow mb-6 justify-center">About Us</p>
          <LineReveal
            tag="h2"
            align="center"
            className="mx-auto mb-6 max-w-3xl font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[52px]"
          >
            {`Celebrating 10+ Years of\nProfessional Travel`}
          </LineReveal>
          <p className="animate-fade-up mx-auto max-w-2xl text-lg leading-relaxed text-ink-muted">
            {about.intro}
          </p>
        </div>

        <div
          data-stagger="features"
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              data-stagger-item
              className="group rounded-3xl border border-border bg-white p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-premium dark:bg-surface"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-night">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-kanila-display text-xl font-normal text-ink">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up mt-12 text-center">
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
