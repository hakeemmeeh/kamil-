'use client'

import { trustPartners } from '@/lib/content'

export function TrustPartnersStrip() {
  return (
    <section className="border-y border-border bg-sand py-10 md:py-12" id="trust">
      <div className="mx-auto max-w-7xl px-5">
        <p className="animate-fade-up mb-6 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-ink-muted">
          Trusted Worldwide
        </p>
        <div
          data-stagger="trust"
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {trustPartners.map((label) => (
            <span
              key={label}
              data-stagger-item
              className="rounded-full border border-border bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-ink-muted shadow-sm dark:bg-surface"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
