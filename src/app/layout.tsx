import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope, Marcellus, Satisfy } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { HashScroll } from '@/components/layout/HashScroll'
import { RouteTransitionCleanup } from '@/components/layout/RouteTransitionCleanup'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

/** Kanila theme typography — Marcellus (headings) + Satisfy (script accent) */
const marcellus = Marcellus({
  subsets: ['latin'],
  variable: '--font-kanila-display',
  weight: ['400'],
  display: 'swap',
})

const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--font-kanila-script',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Kamil Travel',
    default: 'Kamil Travel — Premium Travel Management',
  },
  description:
    'Kamil Travel provides customized travel management, airport support, corporate travel, flight booking, and global destination packages — from Nairobi to Oslo, New York, Sydney, and beyond.',
  metadataBase: new URL('https://www.kamiltravel.com'),
  openGraph: {
    title: 'Kamil Travel — Premium Travel Management',
    description:
      'Global travel management, airport support, flight booking, and curated packages worldwide. Beyond Words.',
    url: 'https://www.kamiltravel.com',
    siteName: 'Kamil Travel',
    type: 'website',
  },
}

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem('kamil-theme');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${marcellus.variable} ${satisfy.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <SmoothScroll>
          <RouteTransitionCleanup />
          <HashScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
