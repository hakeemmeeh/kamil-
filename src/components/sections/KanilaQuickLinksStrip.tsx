'use client'

import Link from 'next/link'
import { CalendarDays, MapPinned, Palmtree } from 'lucide-react'
import { cn } from '@/lib/utils'

const quickLinks = [
  {
    label: 'Events',
    desc: 'Corporate & group travel',
    href: '/corporate-travel',
    icon: CalendarDays,
  },
  {
    label: 'Destinations',
    desc: 'Explore worldwide routes',
    href: '/destinations',
    icon: MapPinned,
  },
  {
    label: 'Activities',
    desc: 'Tours & airport services',
    href: '/services',
    icon: Palmtree,
  },
] as const

interface KanilaQuickLinksStripProps {
  className?: string
}

/** Kanila Home 3 — thin cream strip: Events · Destinations · Activities */
export function KanilaQuickLinksStrip({ className }: KanilaQuickLinksStripProps) {
  return (
    <nav
      className={cn(
        'kanila-quick-links border-b border-border/70 bg-sand-light/80',
        className
      )}
      aria-label="Quick explore"
    >
      <ul className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-border/80">
        {quickLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group flex flex-col items-center gap-2 px-3 py-5 text-center transition-colors hover:bg-white/60 sm:gap-2.5 sm:py-6 md:py-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-white text-kanila-orange shadow-sm transition group-hover:border-gold/50 group-hover:bg-gold/10 sm:h-12 sm:w-12">
                <item.icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.75} />
              </span>
              <span className="font-kanila-display text-base font-normal text-ink sm:text-lg">
                {item.label}
              </span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted sm:block">
                {item.desc}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
