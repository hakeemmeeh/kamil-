'use client'

import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '@/lib/content'

export function ContactPreview() {
  return (
    <section className="section-padding bg-sand" id="contact-preview">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <p className="font-kanila-script mb-3 text-[1.35rem] text-kamil-green">Contact us</p>
            <h2 className="mb-4 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl">
              Come and visit us
            </h2>
            <p className="mb-6 text-lg text-ink-muted">
              Visit our Nairobi office or send us an email anytime. We respond to all genuine travel
              enquiries within 24 hours.
            </p>
            <Button href="/contact" variant="primary" arrow>
              Plan a Trip
            </Button>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-kamil-green-dark" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-muted">Address</p>
                  <p className="text-sm font-medium text-ink">{site.address}</p>
                  <a
                    href={site.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-bold text-gold hover:underline"
                  >
                    View on map
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-kamil-green-dark" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-muted">Call us</p>
                  <p className="text-sm font-medium text-ink">{site.phone}</p>
                  <p className="text-sm font-medium text-ink">{site.mobile}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-kamil-green-dark" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-muted">Write us</p>
                  <a href={`mailto:${site.email}`} className="text-sm font-bold text-gold hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
