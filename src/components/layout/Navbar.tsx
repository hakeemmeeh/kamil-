'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav, site } from '@/lib/content'
import { MobileMenu } from './MobileMenu'
import { Plane } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5">
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? 'glass rounded-full px-6 py-3 shadow-premium'
                : 'px-2 py-2'
            }`}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label={`${site.name} - Home`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                scrolled ? 'bg-gold' : 'bg-white/20'
              }`}>
                <Plane className={`h-5 w-5 transition-colors ${scrolled ? 'text-night' : 'text-white'}`} />
              </div>
              <span className={`text-lg font-bold font-display tracking-tight transition-colors ${
                scrolled ? 'text-ink' : 'text-white'
              }`}>
                {site.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {nav.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold ${
                    pathname === item.href
                      ? scrolled ? 'text-gold' : 'text-gold'
                      : scrolled ? 'text-ink-muted' : 'text-white/80'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 bg-gold rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold ${
                  scrolled ? 'text-ink-muted' : 'text-white/80'
                }`}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-gold px-6 py-2.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-night transition-all hover:bg-gold-dark hover:shadow-glow"
              >
                Plan a Trip
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen
                    ? `rotate-45 translate-y-2 ${scrolled ? 'bg-ink' : 'bg-white'}`
                    : scrolled ? 'bg-ink' : 'bg-white'
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : scrolled ? 'bg-ink' : 'bg-white'
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen
                    ? `-rotate-45 -translate-y-2 ${scrolled ? 'bg-ink' : 'bg-white'}`
                    : scrolled ? 'bg-ink' : 'bg-white'
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
