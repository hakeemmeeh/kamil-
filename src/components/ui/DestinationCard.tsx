import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface DestinationCardProps {
  title: string
  country: string
  desc: string
  image: string
  slug: string
  status: string
}

export function DestinationCard({ title, country, desc, image, status }: DestinationCardProps) {
  return (
    <Link
      href="/contact"
      className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-3xl aspect-[3/4] shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 380px"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-night via-night/40 to-transparent" />
      {status === 'client-to-confirm' && (
        <div className="absolute top-4 right-4 z-20 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
          Coming Soon
        </div>
      )}
      <div className="relative z-20 p-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">{country}</p>
        <h3 className="mb-2 font-display text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-white/60">{desc}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3">
          Enquire <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
