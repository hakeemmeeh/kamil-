'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if it's a touch device, if so, don't show custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over links, buttons, or inputs
      const shouldHover = !!(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic') ||
        target.closest('.group')
      )
      
      setIsHovered(prev => prev !== shouldHover ? shouldHover : prev)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-gold mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Follower ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-gold/50 bg-transparent hidden md:flex"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  )
}
