'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function revealAll(selectors: string) {
  gsap.set(selectors, { opacity: 1, y: 0, scale: 1, clearProps: 'transform' })
}

export function fadeUp(selector: string) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

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
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  gsap.utils.toArray(containerSelector).forEach((container: unknown) => {
    const items = (container as Element).querySelectorAll(childSelector)
    gsap.fromTo(
      items,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  gsap.utils.toArray(selector).forEach((el: unknown) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
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

/** Masked heading lines — Kanila text system */
export function initHeadingLineReveals() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  gsap.utils.toArray('.heading-line').forEach((el: unknown) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })
}

/** Image reveal on scroll — wrapper with .image-reveal-scroll */
export function imageRevealScroll(selector: string) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  gsap.utils.toArray(selector).forEach((wrap: unknown) => {
    const el = wrap as Element
    const img = el.querySelector('img')
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      }
    )
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        }
      )
    }
  })
}

export function archReveal(selector: string) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  gsap.utils.toArray(selector).forEach((el: unknown) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      { clipPath: 'inset(100% 0 0 0)', y: 40, opacity: 0 },
      {
        clipPath: 'inset(0% 0 0 0)',
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })
}

export function parallaxImage(selector: string, amount = 15) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  gsap.utils.toArray(selector).forEach((el: unknown) => {
    gsap.to(el as gsap.TweenTarget, {
      yPercent: -amount,
      ease: 'none',
      scrollTrigger: {
        trigger: (el as Element).parentElement ?? (el as Element),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}

/** Kanila Home 3 — cinematic hero load sequence */
export function heroIntroHome3() {
  if (typeof window === 'undefined') return

  const targets = '.line-reveal-inner, .heading-line, .hero-kicker, .hero-arch-card'

  if (prefersReducedMotion()) {
    revealAll(targets)
    gsap.set('.hero-parallax-layer .hero-bg', { scale: 1, clearProps: 'transform' })
    return
  }

  gsap.set('.hero-parallax-layer .hero-bg', { scale: 1.08, transformOrigin: 'center center' })
  gsap.set('.hero-kicker', { opacity: 0, y: 20 })
  gsap.set('.hero-headline .heading-line, .hero-headline .line-reveal-inner', {
    opacity: 0,
    yPercent: 110,
  })

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  tl.fromTo('.hero-parallax-layer .hero-bg', { scale: 1.12 }, { scale: 1, duration: 2.2 })
    .fromTo(
      '.hero-kicker',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' },
      '-=1.6'
    )
    .fromTo(
      '.hero-headline .heading-line, .hero-headline .line-reveal-inner',
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out' },
      '-=1.2'
    )
    .fromTo(
      '.hero-arch-card',
      { y: 80, opacity: 0, scale: 0.85 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        stagger: 0.1,
        ease: 'power3.out',
      },
      '-=0.35'
    )
}

export type KanilaStickyCoverOptions = {
  /** Section wrapper, e.g. `#hero` */
  section: string
  /** Element to pin (full-viewport bg), e.g. `.hero-sticky-bg` */
  pin: string
  /** Inner layer for parallax zoom while pinned */
  parallaxInner?: string
}

/**
 * Kanila Home 3 — image stays fixed while user scrolls through the section;
 * the next solid panel (Celebrate / Stats) slides up over it.
 * Uses GSAP pin (reliable with Lenis). Section needs `.kanila-sticky-cover__scroll` + runway.
 */
export function initKanilaStickyCover({
  section: sectionSel,
  pin: pinSel,
  parallaxInner,
}: KanilaStickyCoverOptions) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const section = document.querySelector(sectionSel)
  const pinEl = document.querySelector(pinSel)
  if (!section || !pinEl) return

  const mm = gsap.matchMedia()

  mm.add('(min-width: 768px)', () => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      pin: pinEl,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    })

    if (parallaxInner) {
      gsap.to(parallaxInner, {
        yPercent: 18,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.35,
        },
      })
    }
  })
}

/** Sticky hero bg + sections scroll up over it (Kanila cover effect) */
export function initHeroCoverScroll() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const hero = document.querySelector('#hero')
  if (!hero) return

  initKanilaStickyCover({
    section: '#hero',
    pin: '.hero-sticky-bg',
    parallaxInner: '#hero .hero-parallax-layer',
  })

  gsap.to('.hero-foreground-copy', {
    y: -48,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'center top',
      scrub: 1,
    },
  })

  gsap.to('.hero-arch-rail', {
    y: -36,
    x: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
  })

  ScrollTrigger.refresh()
}

/** Kanila Home 3 — Popular Destinations sticky cover scroll */
export function initPopularDestinationsScroll() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const section = document.querySelector('#popular-destinations')
  if (!section) return

  initKanilaStickyCover({
    section: '#popular-destinations',
    pin: '.popular-sticky-bg',
    parallaxInner: '#popular-destinations .popular-parallax-layer',
  })

  gsap.to('.popular-foreground .popular-copy', {
    y: -36,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '45% top',
      scrub: 1,
    },
  })

  gsap.to('.popular-cards-stage', {
    y: -24,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.1,
    },
  })

  ScrollTrigger.refresh()
}

/** Run sticky-cover + scroll inits after Lenis is ready */
export function whenLenisReady(fn: () => void) {
  if (typeof window === 'undefined') return
  if (window.__lenisReady) {
    requestAnimationFrame(fn)
    return
  }
  window.addEventListener('lenis-ready', () => requestAnimationFrame(fn), { once: true })
}

/** @deprecated use initHeroCoverScroll */
export function initHeroParallax() {
  initHeroCoverScroll()
}

/** Page-wide scroll animations for Home 3 sections */
export function initHomeScrollAnimations() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  staggerFadeUp('[data-stagger="features"]', '[data-stagger-item]')
  staggerFadeUp('[data-stagger="stats"]', '[data-stagger-item]')
  staggerFadeUp('[data-stagger="process"]', '[data-stagger-item]')
  staggerFadeUp('[data-stagger="stories"]', '[data-stagger-item]')
  staggerFadeUp('[data-stagger="trust"]', '[data-stagger-item]')
  staggerFadeUp('[data-stagger="regions"]', '[data-stagger-item]')

  gsap.utils.toArray('.animate-eyebrow').forEach((el: unknown) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el as Element, start: 'top 88%', once: true },
      }
    )
  })

  gsap.utils.toArray('.animate-fade-up').forEach((el: unknown) => {
    const node = el as Element
    const inAbout = node.closest('#about')
    gsap.fromTo(
      el as gsap.TweenTarget,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: node,
          start: inAbout ? 'top 92%' : 'top 86%',
          once: true,
        },
      }
    )
  })

  archReveal('.arch-reveal-on-scroll')
  imageRevealScroll('.image-reveal-scroll')
  initHeadingLineReveals()
}

/** @deprecated use heroIntroHome3 */
export function heroIntro() {
  heroIntroHome3()
}
