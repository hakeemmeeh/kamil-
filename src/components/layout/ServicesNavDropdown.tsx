'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { servicesSubnav } from '@/lib/content'
import { cn } from '@/lib/utils'

interface ServicesNavDropdownProps {
  linkColor: string
  activeColor: string
}

export function ServicesNavDropdown({ linkColor, activeColor }: ServicesNavDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const isActive =
    pathname === '/services' ||
    servicesSubnav.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={cn(
          'nav-link flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300',
          isActive ? activeColor : linkColor
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-300', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          'absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 pt-3 transition-all duration-200',
          open ? 'pointer-events-auto visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-1 opacity-0'
        )}
      >
        <ul
          className="overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-premium dark:bg-surface"
          role="menu"
        >
          {servicesSubnav.map((item) => {
            const itemActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className={cn(
                    'block px-4 py-2.5 text-[13px] font-semibold transition-colors',
                    itemActive
                      ? 'bg-gold/10 text-gold'
                      : 'text-ink-muted hover:bg-sand-light hover:text-gold'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
