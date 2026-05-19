import Link from 'next/link'
import { site, nav, services } from '@/lib/content'
import { Plane, Mail, Phone, Smartphone, MapPin, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const quickLinks = nav.slice(0, 5)
  const moreLinks = nav.slice(5)
  const serviceLinks = services.slice(0, 7)

  return (
    <footer className="bg-night text-white/70" role="contentinfo">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold">
                <Plane className="h-5 w-5 text-night" />
              </div>
              <span className="text-lg font-bold font-display text-white tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Premium travel management, airport support, and regional journey planning for Kenya, Somalia, and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href={`mailto:${site.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-gold hover:bg-gold/10"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:0202220011"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-gold hover:bg-gold/10"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Contact
            </h4>
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
                <span className="text-sm text-white/40 italic">{site.address}</span>
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

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-xs text-white/30 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-xs text-white/30 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
