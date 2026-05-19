'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface DestinationCardProps {
  title: string
  country: string
  desc: string
  image: string
  slug: string
  status: string
}

export function DestinationCard({ title, country, desc, image, status }: DestinationCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="h-full w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full w-full"
      >
        <Link 
          href="/contact" 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative overflow-hidden rounded-3xl aspect-[3/4] flex flex-col justify-end h-full w-full block shadow-xl transition-shadow duration-300 hover:shadow-2xl"
        >
          <div 
            style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
            className="absolute inset-0 z-0"
          >
            <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" />
          </div>
          <div 
            style={{ transform: 'translateZ(30px)' }}
            className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent z-10" 
          />
          {status === 'client-to-confirm' && (
            <div 
              style={{ transform: 'translateZ(40px)' }}
              className="absolute top-4 right-4 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-sm z-20"
            >
              Coming Soon
            </div>
          )}
          <div 
            style={{ transform: 'translateZ(50px)' }}
            className="relative z-20 p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold mb-1">{country}</p>
            <h3 className="font-display text-2xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-white/60 line-clamp-2 mb-4">{desc}</p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:gap-3 transition-all">
              Enquire <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
