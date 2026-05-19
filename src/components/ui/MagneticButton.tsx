'use client'

import { useRef, useState } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className = '', strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    
    // Direct DOM manipulation avoids React re-renders which cause lag
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = `translate(0px, 0px)`
  }

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}
