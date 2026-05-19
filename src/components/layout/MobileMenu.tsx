'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { nav, site } from '@/lib/content'
import { Mail, Phone, Smartphone } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-night/95 backdrop-blur-xl" onClick={onClose} />

          {/* Menu content */}
          <motion.nav
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative flex h-full flex-col justify-between px-8 pb-10 pt-28"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block py-3 font-display text-3xl font-semibold transition-colors ${
                      pathname === item.href
                        ? 'text-gold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
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
                className="block w-full rounded-full bg-gold py-4 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-night transition-colors hover:bg-gold-dark"
              >
                Plan a Trip
              </Link>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
                <a href="tel:0202220011" className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
                <a href="tel:0752800800" className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Smartphone className="h-4 w-4" />
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
