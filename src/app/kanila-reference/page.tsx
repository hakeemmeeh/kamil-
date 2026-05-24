import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kanila Reference Gallery | Kamil Travel (dev)',
  robots: { index: false, follow: false },
}

const previews = [
  {
    src: '/reference/kanila/1.jpg',
    title: 'All four homepages (start here)',
    desc: 'Home 1–4 thumbnails. Kamil targets Home 3 (lake + arches).',
  },
  {
    src: '/reference/kanila/2.jpg',
    title: 'Home 1 — Elementor hero',
    desc: 'Gradient + 3D plane window. Playful, not for Kamil.',
  },
  {
    src: '/reference/kanila/3.jpg',
    title: 'Home 1 — demo import',
    desc: 'TRAVEL EXPLORE layout reference.',
  },
  {
    src: '/reference/kanila/4.jpg',
    title: 'Blog layouts',
    desc: 'Listing grid + single post with sidebar.',
  },
  {
    src: '/reference/kanila/5.jpg',
    title: 'Destinations page variants',
    desc: 'Includes ‹ The Best Destinations › and arched cards.',
  },
  {
    src: '/reference/kanila/6.jpg',
    title: 'Tours layouts',
    desc: 'List with filters, grid with search, tour detail.',
  },
  {
    src: '/reference/kanila/7.jpg',
    title: 'Inner pages',
    desc: 'About (arched photos), Team, Contact + map.',
  },
  {
    src: '/reference/kanila/8.jpg',
    title: 'Marketing splash',
    desc: 'ThemeForest promo — not a homepage demo.',
  },
  {
    src: '/reference/kanila/envato-01-large.jpg',
    title: 'Envato large preview',
    desc: 'Item page screenshot (590×300).',
  },
] as const

export default function KanilaReferencePage() {
  return (
    <main className="min-h-screen bg-night px-5 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">
          Dev reference — not linked in nav
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Kanila theme preview gallery
        </h1>
        <p className="mt-4 max-w-2xl text-white/65">
          For humans and AI: local copies of ThemeLexus preview images. Agents should read{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-gold-light">
            docs/KANILA-REFERENCE.md
          </code>{' '}
          and open images under{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-gold-light">
            public/reference/kanila/
          </code>
          .
        </p>
        <p className="mt-6">
          <Link href="/" className="text-sm font-bold text-gold hover:underline">
            ← Back to site
          </Link>
        </p>

        <ul className="mt-12 space-y-16">
          {previews.map((item) => (
            <li key={item.src}>
              <h2 className="font-display text-2xl font-semibold text-gold-light">{item.title}</h2>
              <p className="mt-1 text-sm text-white/55">{item.desc}</p>
              <p className="mt-1 font-mono text-xs text-white/40">{item.src}</p>
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
