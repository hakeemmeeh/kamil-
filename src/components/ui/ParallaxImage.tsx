'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { parallaxImage, prefersReducedMotion } from '@/lib/animations'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  amount?: number
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  priority = false,
  amount = 15,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imageEl = imageRef.current
    const containerEl = containerRef.current
    if (!imageEl || !containerEl || prefersReducedMotion()) return

    const id = `parallax-${Math.random().toString(36).slice(2, 9)}`
    imageEl.id = id
    parallaxImage(`#${id}`, amount)
  }, [amount])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="absolute inset-[-15%] h-[130%] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
