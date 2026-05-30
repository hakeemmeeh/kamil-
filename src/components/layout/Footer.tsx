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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold/15 hover:text-gold"
    >
      {children}
    </a>
  )
}

export function Footer() {
  const mainNav = nav.filter((item) => item.href !== '/')
  const hasSocial = Object.values(social).some(Boolean)

  return (
    <footer className="bg-night text-white/75" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
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
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              Global travel management, airport support, and curated journeys — from Nairobi to
              Oslo, New York, Sydney, and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:border-gold hover:bg-gold/15 hover:text-gold"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:0202220011"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:border-gold hover:bg-gold/15 hover:text-gold"
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
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Explore</h4>
            <ul className="space-y-3">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#faq" className="text-sm text-white/70 transition-colors hover:text-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Tours</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tours" className="text-sm text-white/70 transition-colors hover:text-gold">
                  All packages
                </Link>
              </li>
              <li>
                <Link href="/#popular-tours" className="text-sm text-white/70 transition-colors hover:text-gold">
                  Popular tours
                </Link>
              </li>
              {footerDestinationLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Global Cities</h4>
            <ul className="space-y-3">
              {footerGlobalCityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{site.mobile}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {site.address}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-night transition-all hover:bg-gold-lt"
            >
              Plan a Trip
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-white">{newsletter.title}</p>
              <p className="text-xs text-white/50">{newsletter.subtitle}</p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterForm variant="footer" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about" className="text-xs text-white/45 transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-xs text-white/45 transition-colors hover:text-gold">
              Terms of Service
            </Link>
            <Link
              href="/car-rental-airport-transfers#become-a-guide"
              className="text-xs text-white/45 transition-colors hover:text-gold"
            >
              Become Our Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
