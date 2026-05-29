import Link from 'next/link'
import Image from 'next/image'
import { site, nav, social, footerDestinationLinks, footerGlobalCityLinks, newsletter } from '@/lib/content'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { Mail, Phone, Smartphone, MapPin, ArrowUpRight, Share2 } from 'lucide-react'

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
    >
      {children}
    </a>
  )
}

export function Footer() {
  const quickLinks = nav.slice(0, 5)
  const moreLinks = nav.slice(5)
  const hasSocial = Object.values(social).some(Boolean)

  return (
    <footer className="bg-sand-light text-ink-muted" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-16 rounded-3xl border border-border bg-white p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h4 className="mb-2 font-display text-2xl font-semibold text-ink">{newsletter.title}</h4>
              <p className="text-sm leading-relaxed text-ink-muted">{newsletter.subtitle}</p>
            </div>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex">
              <Image
                src="/logo/kamil-logo.png"
                alt={`${site.name} logo`}
                width={200}
                height={64}
                className="footer-logo h-12 w-auto max-w-[200px] object-contain md:h-14"
              />
            </Link>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">{site.tagline}</p>
            <p className="mb-6 text-sm leading-relaxed text-ink-muted">
              Global travel management, airport support, and curated journeys — from Nairobi to
              Oslo, New York, Sydney, and beyond. Beyond Words.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:0202220011"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <SocialIcon href={social.facebook} label="Facebook">
                <Share2 className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={social.instagram} label="Instagram">
                <Share2 className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={social.linkedin} label="LinkedIn">
                <Share2 className="h-4 w-4" />
              </SocialIcon>
            </div>
            {!hasSocial && (
              <p className="mt-3 text-xs text-ink-muted/50">Social profile links — add URLs in content.ts when confirmed.</p>
            )}
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[...quickLinks, ...moreLinks].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Destinations</h4>
            <ul className="space-y-3">
              {footerDestinationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Global Cities</h4>
            <ul className="space-y-3">
              {footerGlobalCityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="text-sm hover:text-gold transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm">{site.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm">{site.mobile}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold transition-colors">
                  {site.address}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-gold transition-all hover:bg-gold hover:text-night"
            >
              Plan a Trip
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="footer-link text-xs text-ink-muted">
              Privacy Policy
            </Link>
            <Link href="/about" className="footer-link text-xs text-ink-muted">
              Terms of Service
            </Link>
            <Link href="/car-rental-airport-transfers#become-a-guide" className="footer-link text-xs text-ink-muted">
              Become Our Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
