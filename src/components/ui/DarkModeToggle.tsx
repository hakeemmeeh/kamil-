'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const STORAGE_KEY = 'kamil-theme'

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  } catch {
    // ignore storage errors
  }
}

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(STORAGE_KEY)
    const dark = saved === 'dark'
    applyTheme(dark)
    setIsDark(dark)
  }, [])

  const toggleDark = () => {
    const next = !isDark
    applyTheme(next)
    setIsDark(next)
  }

  return (
    <button
      onClick={toggleDark}
      className="rounded-full border border-gold/30 p-2 text-gold transition-colors hover:bg-gold hover:text-night"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
