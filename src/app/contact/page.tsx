import type { Metadata } from 'next'
import { site } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactFormWrapper } from '@/components/ui/ContactFormWrapper'
import { Mail, Phone, Smartphone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Kamil Travel for flight booking, corporate travel, airport transfers, visa assistance, and more.',
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
      <section className="relative pt-40 pb-20 bg-night overflow-hidden">
        <div className="banner-photo absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1920&q=90')] bg-cover bg-center" />
        <div className="banner-photo-overlay absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-surface/40">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Contact Kamil Travel</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">We are here to help with your travel needs.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <div>
              <FadeUp><SectionHeader eyebrow="Contact Info" title="Reach out directly" align="left" /></FadeUp>
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <FadeUp key={c.label} delay={i * 0.08}>
                    <div className="flex items-start gap-4 rounded-2xl bg-surface border border-border p-5 hover:border-gold/30 hover:shadow-lg transition-all">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-sm font-semibold text-ink hover:text-gold transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-sm text-ink-muted italic">{c.value}</p>
                        )}
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.4}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-border">
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

            {/* Contact Form */}
            <div>
              <FadeUp><SectionHeader eyebrow="Send Inquiry" title="Start a conversation" align="left" /></FadeUp>
              <FadeUp delay={0.1}>
                <div className="rounded-3xl bg-surface border border-border p-8 shadow-premium">
                  <ContactFormWrapper />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
