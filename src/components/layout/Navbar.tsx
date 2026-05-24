'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { nav, site } from '@/lib/content'
import { MobileMenu } from './MobileMenu'
import { DarkModeToggle } from '@/components/ui/DarkModeToggle'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const overHero = isHome && !scrolled
  const linkColor = overHero ? 'text-white/85 hover:text-gold' : 'text-ink-muted hover:text-gold'
  const activeColor = 'text-gold'
  const hamburgerColor = overHero ? 'bg-white' : 'bg-ink'

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-[400ms] ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5">
          <nav
            className={`flex items-center justify-between transition-all duration-[400ms] ${
              scrolled
                ? 'glass rounded-full px-6 py-3 shadow-premium'
                : 'px-2 py-2'
            }`}
            role="navigation"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="group flex shrink-0 items-center px-1 transition-all duration-[400ms]"
              aria-label={`${site.name} - Home`}
            >
              <Image
                src="/logo/kamil-logo.png"
                alt={`${site.name} logo`}
                width={240}
                height={76}
                className="site-logo h-11 w-auto max-w-[min(52vw,220px)] object-contain md:h-12 lg:h-[52px]"
                priority
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {nav.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                    pathname === item.href ? activeColor : linkColor
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <DarkModeToggle overHero={overHero} />
              <Link
                href="/contact"
                className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${linkColor}`}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-gold px-7 py-3 text-[13px] font-extrabold uppercase tracking-[0.1em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark"
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? `rotate-45 translate-y-2 ${hamburgerColor}` : hamburgerColor
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : hamburgerColor
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? `-rotate-45 -translate-y-2 ${hamburgerColor}` : hamburgerColor
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
