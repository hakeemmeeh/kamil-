'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'

/** Compact service pills — full bento grid on /services */
export function SignatureServicesStrip() {
  const featured = services.slice(0, 6)

  return (
    <section className="bg-white py-10 md:py-12" id="services-preview">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow mb-2">Our Services</p>
              <h2 className="font-kanila-display text-2xl font-normal text-ink md:text-3xl">
                Ticketing, airport support & more
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
        <div className="flex flex-wrap gap-3">
          {featured.map((s, i) => (
            <FadeUp key={s.slug} delay={i * 0.04}>
              <Link
                href="/services"
                className="inline-flex rounded-full border border-border bg-sand-light px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                {s.title}
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
