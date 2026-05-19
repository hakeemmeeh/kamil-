'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function fadeUp(selector: string) {
  if (typeof window === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  gsap.utils.toArray(selector).forEach((el: unknown) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      { y: 56, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 86%',
          once: true,
        },
      }
    )
  })
}

export function staggerFadeUp(containerSelector: string, childSelector: string) {
  if (typeof window === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  gsap.utils.toArray(containerSelector).forEach((container: unknown) => {
    const items = (container as Element).querySelectorAll(childSelector)
    gsap.fromTo(
      items,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container as Element,
          start: 'top 82%',
          once: true,
        },
      }
    )
  })
}

export function imageReveal(selector: string) {
  if (typeof window === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  gsap.utils.toArray(selector).forEach((el: unknown) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.25,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 82%',
          once: true,
        },
      }
    )
  })
}

export function parallaxImage(selector: string, amount = 18) {
  if (typeof window === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  gsap.utils.toArray(selector).forEach((el: unknown) => {
    gsap.to(el as gsap.TweenTarget, {
      yPercent: -amount,
      ease: 'none',
      scrollTrigger: {
        trigger: el as Element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}

export function heroIntro() {
  if (typeof window === 'undefined') return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  tl.fromTo('.hero-bg', { scale: 1.12 }, { scale: 1, duration: 2.2 })
    .fromTo('.hero-eyebrow', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=1.6')
    .fromTo('.hero-title-line', { y: 90, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.12 }, '-=1.3')
    .fromTo('.hero-copy', { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.7')
    .fromTo('.hero-cta', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.08 }, '-=0.55')
}
