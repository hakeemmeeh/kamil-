'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { nav, site } from '@/lib/content'
import { MobileMenu } from './MobileMenu'
import { ServicesNavDropdown } from './ServicesNavDropdown'
import { DarkModeToggle } from '@/components/ui/DarkModeToggle'

const desktopNav = nav.filter((item) => item.href !== '/' && item.href !== '/contact')

export function Navbar() {
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const mobileOpen = mobileOpenPath === pathname

  const linkColor = 'text-ink-soft hover:text-gold'
  const activeColor = 'text-gold font-bold'
  const hamburgerColor = 'bg-ink'

  return (
    <>
      <header
        className={`z-50 w-full bg-white/95 py-4 shadow-sm backdrop-blur-md transition-[box-shadow] duration-300 ${
          isHome ? 'fixed inset-x-0 top-0' : 'relative'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5">
          <nav
            className="glass flex items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-premium ring-1 ring-black/[0.04]"
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
                width={320}
                height={102}
                className="h-14 w-auto max-w-[min(62vw,280px)] object-contain sm:h-[3.75rem] md:h-16 lg:h-[4.5rem] lg:max-w-[320px]"
                priority
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {desktopNav.map((item) =>
                item.children ? (
                  <ServicesNavDropdown
                    key={item.href}
                    linkColor={linkColor}
                    activeColor={activeColor}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link relative px-3 py-2 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                      pathname === item.href ? activeColor : linkColor
                    }`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <DarkModeToggle />
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
              onClick={() => setMobileOpenPath(mobileOpen ? null : pathname)}
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

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpenPath(null)} />
    </>
  )
}
