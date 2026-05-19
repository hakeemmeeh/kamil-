'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { Mail, Phone } from 'lucide-react'
import { site } from '@/lib/content'

export function ContactPreview() {
  return (
    <section className="section-padding bg-sand" id="contact-preview">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <FadeUp>
          <p className="eyebrow justify-center">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[0.95] tracking-tight mb-6">
            Let&apos;s plan your journey together.
          </h2>
          <p className="text-lg text-ink-muted mb-10">Reach out for inquiries, bookings, or corporate travel support.</p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl bg-surface px-6 py-4 border border-border hover:border-gold/30 hover:shadow-lg transition-all">
              <Mail className="h-5 w-5 text-gold" />
              <span className="text-sm font-semibold text-ink">{site.email}</span>
            </a>
            <a href="tel:0202220011" className="flex items-center gap-3 rounded-2xl bg-surface px-6 py-4 border border-border hover:border-gold/30 hover:shadow-lg transition-all">
              <Phone className="h-5 w-5 text-gold" />
              <span className="text-sm font-semibold text-ink">{site.phone}</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
