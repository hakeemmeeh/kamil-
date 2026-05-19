'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user prefers dark mode initially
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-night transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}
