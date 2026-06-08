'use client'

import { useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'

const STORAGE_KEY = 'kamil-theme'

const themeListeners = new Set<() => void>()

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  } catch {
    // ignore storage errors
  }
  themeListeners.forEach((listener) => listener())
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === 'dark'
}

function getServerSnapshot() {
  return false
}

function subscribe(onStoreChange: () => void) {
  themeListeners.add(onStoreChange)
  return () => themeListeners.delete(onStoreChange)
}

const emptySubscribe = () => () => {}

interface DarkModeToggleProps {
  overHero?: boolean
}

export function DarkModeToggle({ overHero = false }: DarkModeToggleProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleDark = () => {
    applyTheme(!isDark)
  }

  return (
    <button
      onClick={toggleDark}
      className={`rounded-full border p-2 transition-colors hover:bg-gold hover:text-night ${
        overHero
          ? 'border-white/25 text-white/80 hover:border-gold hover:text-night'
          : 'border-gold/30 text-gold'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
