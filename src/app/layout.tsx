import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/layout/SmoothScroll'

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

export const metadata: Metadata = {
  title: {
    template: '%s | Kamil Travel',
    default: 'Kamil Travel — Premium Travel Management',
  },
  description:
    'Kamil Travel provides customized travel management, airport support, corporate travel services, flight booking, transfers, and regional travel assistance for Kenya, Somalia, and beyond.',
  metadataBase: new URL('https://www.kamiltravel.com'),
  openGraph: {
    title: 'Kamil Travel — Premium Travel Management',
    description:
      'Corporate travel, airport support, flight booking, transfers, and regional travel assistance for Kenya, Somalia, and beyond.',
    url: 'https://www.kamiltravel.com',
    siteName: 'Kamil Travel',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
