import Link from 'next/link'
import Image from 'next/image'
import { site, nav, newsletter, officePhones, mobilePhones } from '@/lib/content'
import { cityImage, cityImageAlts } from '@/lib/cityImages'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { Mail, Phone, Smartphone, MapPin, ArrowUpRight } from 'lucide-react'

const FOOTER_BG = cityImage('desertDunes', 1920)

const exploreLinks = [
  ...nav.filter((item) => item.href !== '/' && item.href !== '/contact'),
  { label: 'Tours', href: '/tours' },
  { label: 'Car Rental', href: '/car-rental-airport-transfers' },
  { label: 'FAQ', href: '/#faq' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white" role="contentinfo">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={FOOTER_BG}
          alt={cityImageAlts.desertDunes}
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/62" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/88 via-night/58 to-night/42" />
      </div>

      <div className="relative z-10 [text-shadow:0_1px_14px_rgba(7,17,31,0.55)]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Link href="/" className="mb-4 inline-flex">
                <Image
                  src="/logo/kamil-logo.png"
                  alt={`${site.name} logo`}
                  width={320}
                  height={100}
                  className="footer-logo h-14 w-auto max-w-[min(100%,240px)] object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:h-16"
                />
              </Link>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-light">
                {site.tagline}
              </p>
              <p className="mb-6 max-w-sm text-sm font-medium leading-relaxed text-white/90">
                Travel management, airport support, and curated journeys from Nairobi.
              </p>
              <p className="mb-3 text-sm font-bold text-white">{newsletter.title}</p>
              <div className="max-w-md">
                <NewsletterForm variant="footer" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                Explore
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-white/90 transition-colors hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                Contact
              </h4>
              <ul className="space-y-3 text-sm font-semibold text-white/90">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-kamil-green-dark" />
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-kamil-green">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-kamil-green-dark" />
                  <span className="flex flex-wrap gap-x-1">
                    {officePhones.map((p, i) => (
                      <span key={p.href}>
                        {i > 0 && <span className="text-white/50"> | </span>}
                        <a href={p.href} className="transition-colors hover:text-kamil-green">
                          {p.label}
                        </a>
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-kamil-green-dark" />
                  <span className="flex flex-wrap gap-x-1">
                    {mobilePhones.map((p, i) => (
                      <span key={p.href}>
                        {i > 0 && <span className="text-white/50"> | </span>}
                        <a href={p.href} className="transition-colors hover:text-kamil-green">
                          {p.label}
                        </a>
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kamil-green-dark" />
                  <a
                    href={site.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-kamil-green"
                  >
                    Eco Bank Towers, Muindi Mbingu Street, Nairobi
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-night transition-all hover:bg-gold-light"
              >
                Plan a Trip
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 md:flex-row">
            <p className="text-xs font-semibold text-white/80">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/privacy" className="text-xs font-semibold text-white/80 transition-colors hover:text-gold-light">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs font-semibold text-white/80 transition-colors hover:text-gold-light">
                Terms
              </Link>
              <Link
                href="/contact?inquiry=Guide+Application&message=I+would+like+to+apply+as+a+guide+or+transport+partner."
                className="text-xs font-semibold text-white/80 transition-colors hover:text-gold-light"
              >
                Become a guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
