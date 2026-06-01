'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { nav, servicesSubnav, site } from '@/lib/content'
import { Mail, Phone, Smartphone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)

  const servicesActive =
    pathname === '/services' ||
    servicesSubnav.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-night/95 backdrop-blur-xl" onClick={onClose} />

          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative flex h-full flex-col justify-between overflow-y-auto px-8 pb-10 pt-28"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {nav
                .filter((item) => item.href !== '/contact')
                .map((item, i) => {
                  if (item.children) {
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
                      >
                        <button
                          type="button"
                          onClick={() => setServicesOpen((v) => !v)}
                          className={cn(
                            'flex w-full items-center justify-between py-3 font-display text-3xl font-semibold transition-colors',
                            servicesActive ? 'text-gold' : 'text-white/80 hover:text-white'
                          )}
                          aria-expanded={servicesOpen}
                        >
                          Services
                          <ChevronDown
                            className={cn('h-6 w-6 transition-transform', servicesOpen && 'rotate-180')}
                            aria-hidden
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-2"
                            >
                              {servicesSubnav.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className={cn(
                                      'block py-2 font-body text-lg font-semibold transition-colors',
                                      pathname === sub.href ? 'text-gold' : 'text-white/65 hover:text-white'
                                    )}
                                  >
                                    {sub.label}
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
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block py-3 font-display text-3xl font-semibold transition-colors',
                          pathname === item.href ? 'text-gold' : 'text-white/80 hover:text-white'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="space-y-5"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full rounded-full bg-gold py-4 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-gold-dark"
              >
                Plan a Trip
              </Link>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-kamil-green-light"
                >
                  <Mail className="h-4 w-4 text-kamil-green-light" />
                  {site.email}
                </a>
                <a
                  href="tel:0202220011"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-kamil-green-light"
                >
                  <Phone className="h-4 w-4 text-kamil-green-light" />
                  {site.phone}
                </a>
                <a
                  href="tel:0752800800"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-kamil-green-light"
                >
                  <Smartphone className="h-4 w-4 text-kamil-green-light" />
                  {site.mobile}
                </a>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
