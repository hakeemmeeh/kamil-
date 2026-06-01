import type { Metadata } from 'next'
import { site } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactFormWrapper } from '@/components/ui/ContactFormWrapper'
import { BookingSearch } from '@/components/sections/BookingSearch'
import { HomeFAQSection } from '@/components/sections/HomeFAQSection'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { InnerPageCTA } from '@/components/shared/InnerPageCTA'
import { Mail, Phone, Smartphone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Kamil Travel for flight booking, corporate travel, airport transfers, visa assistance, and more.',
}

const contacts = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Telephone', value: site.phone, href: 'tel:0202220011' },
  { icon: Smartphone, label: 'Mobile', value: site.mobile, href: 'tel:0752800800' },
  { icon: MapPin, label: 'Address', value: site.address, href: site.mapLink },
]

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Kamil Travel"
        subtitle="We are here to help with your travel needs."
        imageKey="bannerContact"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <BookingSearch overlapHero />

      <InnerPageOverlap bg="white">
        <section className="section-padding pt-12 md:pt-14">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <FadeUp>
                  <SectionHeader eyebrow="Contact Info" title="Reach out directly" align="left" />
                </FadeUp>
                <div className="space-y-4">
                  {contacts.map((c, i) => (
                    <FadeUp key={c.label} delay={i * 0.08}>
                      <div className="flex items-start gap-4 rounded-2xl border border-border bg-sand-light p-5 transition-all hover:border-gold/30 hover:shadow-lg">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-muted">
                            {c.label}
                          </p>
                          {c.href ? (
                            <a
                              href={c.href}
                              className="text-sm font-semibold text-ink transition-colors hover:text-gold"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-sm italic text-ink-muted">{c.value}</p>
                          )}
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>

                <FadeUp delay={0.4}>
                  <div className="mt-8 overflow-hidden rounded-2xl border border-border arch-card-mask">
                    <iframe
                      title="Kamil Travel office location"
                      src={site.mapEmbedUrl}
                      className="h-64 w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </FadeUp>
              </div>

              <div>
                <FadeUp>
                  <SectionHeader eyebrow="Send Inquiry" title="Start a conversation" align="left" />
                </FadeUp>
                <FadeUp delay={0.1}>
                  <div className="rounded-3xl border border-border bg-surface p-8 shadow-premium">
                    <ContactFormWrapper />
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </InnerPageOverlap>

      <HomeFAQSection />

      <InnerPageCTA
        title="Prefer to talk now?"
        description="Call our Nairobi office or send a trade enquiry — we respond to all genuine requests within 24 hours."
        primaryLabel="Send an Inquiry"
        secondaryLabel=""
        imageKey="nairobi"
      />
    </>
  )
}
