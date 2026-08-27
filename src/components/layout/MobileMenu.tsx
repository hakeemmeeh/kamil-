'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { nav, servicesSubnav, officePhones, mobilePhones, site } from '@/lib/content'
import { Mail, Phone, Smartphone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(true)

  const servicesActive =
    pathname === '/services' ||
    servicesSubnav.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  useEffect(() => {
    setServicesOpen(true)
  }, [pathname])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[55] lg:hidden"
        >
          <div className="absolute inset-0 bg-night/96 backdrop-blur-xl" onClick={onClose} />

          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="relative flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-24 sm:px-8"
            aria-label="Mobile navigation"
          >
            <div className="space-y-0.5">
              {nav
                .filter((item) => item.href !== '/contact')
                .map((item, i) => {
                  if (item.children) {
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 + i * 0.04 }}
                      >
                        <button
                          type="button"
                          onClick={() => setServicesOpen((v) => !v)}
                          className={cn(
                            'flex w-full items-center justify-between py-2.5 font-display text-[1.65rem] font-semibold leading-tight transition-colors sm:text-3xl',
                            servicesActive ? 'text-gold' : 'text-white/85 hover:text-white'
                          )}
                          aria-expanded={servicesOpen}
                        >
                          <span className="flex items-center gap-3">
                            Services
                            {servicesActive && (
                              <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                            )}
                          </span>
                          <ChevronDown
                            className={cn('h-5 w-5 transition-transform', servicesOpen && 'rotate-180')}
                            aria-hidden
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pb-2 pl-1"
                            >
                              {servicesSubnav.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className={cn(
                                      'flex items-center gap-2 py-2 font-body text-base font-semibold transition-colors sm:text-lg',
                                      pathname === sub.href
                                        ? 'text-gold'
                                        : 'text-white/65 hover:text-white'
                                    )}
                                  >
                                    {sub.label}
                                    {pathname === sub.href && (
                                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  }

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.08 + i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'flex items-center gap-3 py-2.5 font-display text-[1.65rem] font-semibold leading-tight transition-colors sm:text-3xl',
                          pathname === item.href ? 'text-gold' : 'text-white/85 hover:text-white'
                        )}
                      >
                        {item.label}
                        {pathname === item.href && (
                          <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="space-y-4"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full rounded-full bg-gold py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-gold-dark"
              >
                Plan a Trip
              </Link>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-kamil-green-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-kamil-green-light" />
                  {site.email}
                </a>
                <a
                  href={officePhones[0].href}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-kamil-green-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-kamil-green-light" />
                  {site.phone}
                </a>
                <a
                  href={mobilePhones[0].href}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-kamil-green-light"
                >
                  <Smartphone className="h-4 w-4 shrink-0 text-kamil-green-light" />
                  {site.mobile}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-kamil-green-light"
                >
                  <Smartphone className="h-4 w-4 shrink-0 text-kamil-green-light" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
