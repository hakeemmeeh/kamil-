'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollRevealSetup() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Setup intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before entering the frame
        threshold: 0.05,
      }
    )

    // Function to find and observe reveal elements
    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-image-left, .reveal-image-right, .reveal-image-up, .reveal-image-down, .reveal-text-word'
      )
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    }

    // Run initially
    observeElements()

    // Failsafe for elements already in viewport
    const checkViewport = () => {
      const elements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-image-left, .reveal-image-right, .reveal-image-up, .reveal-image-down, .reveal-text-word'
      )
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          el.classList.add('is-visible')
        }
      })
    }
    const timer = setTimeout(checkViewport, 150)

    // Observe body for dynamically loaded content/transitions
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      clearTimeout(timer)
    }
  }, [pathname]) // Re-run when pathname changes to scan new pages

  return null
}
