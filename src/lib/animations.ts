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

/** Only run tweens when targets exist — avoids GSAP "target not found" console errors */
function gsapToIfPresent(targets: gsap.TweenTarget, vars: gsap.TweenVars) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return
  return gsap.to(els, vars)
}

const sectionContexts = new Map<string, gsap.Context>()
let homeScrollCtx: gsap.Context | null = null

function scrollTriggerBelongsToSection(st: ScrollTrigger, root: Element, sectionKey: string) {
  const trigger = st.trigger as Element | undefined
  const pin = st.pin as Element | undefined

  if (trigger && (root === trigger || root.contains(trigger))) return true
  if (pin && (root === pin || root.contains(pin))) return true
  if (trigger?.closest?.(sectionKey) === root) return true
  if (pin?.closest?.(sectionKey) === root) return true

  return false
}

/** Revert GSAP pins/tweens for a sticky section — must run before React unmounts */
export function revertSectionScroll(section: string) {
  if (typeof window === 'undefined') return

  sectionContexts.get(section)?.revert()
  sectionContexts.delete(section)

  const root = document.querySelector(section)
  if (!root) return

  ScrollTrigger.getAll().forEach((st) => {
    if (scrollTriggerBelongsToSection(st, root, section)) {
      st.kill(true)
    }
  })

  ScrollTrigger.refresh()
}

/** Tear down all homepage pinned sections (hero + popular) */
export function cleanupHomePinnedSections() {
  revertSectionScroll('#hero')
  revertSectionScroll('#popular-destinations')
  cleanupHomeScrollAnimations()

  ScrollTrigger.getAll().forEach((st) => {
    if (st.pin) st.kill(true)
  })
  ScrollTrigger.refresh()
}

/** @deprecated use revertSectionScroll */
export function killScrollTriggersWithin(section: string | Element) {
  const key = typeof section === 'string' ? section : `#${(section as Element).id}`
  revertSectionScroll(key)
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

/** Plan Your Trip — stacked pair + lead arch slide in from the right with fade */
export function planTripCollageReveal() {
  if (typeof window === 'undefined') return

  const section = document.querySelector('#plan-your-trip')
  if (!section) return

  const pair = section.querySelectorAll('.plan-trip-arch--from-right')
  const lead = section.querySelector('.plan-trip-arch--lead')
  const frame = section.querySelector('.plan-trip-arch-frame')

  if (!pair.length && !lead) return

  const scroll = { trigger: section, start: 'top 80%', once: true }
  const slideDuration = 1.1
  const slideEase = 'power3.out'
  const fromRight = { x: 88, opacity: 0 }
  const toRest = { x: 0, opacity: 1, duration: slideDuration, ease: slideEase, scrollTrigger: scroll }

  if (prefersReducedMotion()) {
    gsap.set([...pair, lead].filter(Boolean), { x: 0, opacity: 1 })
    if (frame) gsap.set(frame, { opacity: 1, x: 0 })
    return
  }

  if (pair.length) {
    gsap.fromTo(pair, fromRight, { ...toRest, stagger: 0.2 })
  }

  if (lead) {
    gsap.fromTo(lead, fromRight, { ...toRest, delay: 0.38 })
  }

  if (frame) {
    gsap.fromTo(
      frame,
      { opacity: 0, x: 56 },
      { opacity: 1, x: 0, duration: 0.95, delay: 0.28, ease: slideEase, scrollTrigger: scroll }
    )
  }
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

  const targets = '.line-reveal-inner, .heading-line, .hero-kicker, .hero-social, .hero-desc, .hero-cta'

  if (prefersReducedMotion()) {
    revealAll(targets)
    gsap.set('.hero-parallax-layer .hero-bg', { scale: 1, clearProps: 'transform' })
    gsap.set('.hero-kanila-arch-item', { opacity: 1, clearProps: 'all' })
    return
  }

  gsap.set('.hero-parallax-layer .hero-bg', { scale: 1.08, transformOrigin: 'center center' })
  gsap.set('.hero-kicker', { opacity: 0, y: 16 })
  gsap.set('.hero-social, .hero-desc, .hero-cta', { opacity: 0, y: 20 })
  gsap.set('.hero-headline .heading-line, .hero-headline .line-reveal-inner', {
    opacity: 0,
    yPercent: 110,
  })

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  tl.fromTo('.hero-parallax-layer .hero-bg', { scale: 1.12 }, { scale: 1, duration: 2.2 })
    .fromTo(
      '.hero-kicker',
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=1.65'
    )
    .fromTo(
      '.hero-headline .heading-line, .hero-headline .line-reveal-inner',
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out' },
      '-=1.15'
    )
    .fromTo(
      '.hero-social',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' },
      '-=0.75'
    )
    .fromTo(
      '.hero-desc',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      '.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' },
      '-=0.5'
    )
}

export type KanilaStickyCoverOptions = {
  /** Section wrapper, e.g. `#hero` */
  section: string
  /** @deprecated CSS sticky handles the bg; kept for API compat */
  pin?: string
  /** Inner layer for parallax zoom while scrolling the section */
  parallaxInner?: string
}

/**
 * Kanila Home 3 — parallax on sticky-cover bg (CSS sticky, no GSAP pin).
 */
export function initKanilaStickyCover({
  section: sectionSel,
  parallaxInner,
}: KanilaStickyCoverOptions) {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const section = document.querySelector(sectionSel)
  if (!section) return

  revertSectionScroll(sectionSel)

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      if (parallaxInner) {
        gsapToIfPresent(parallaxInner, {
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
  }, section)

  sectionContexts.set(sectionSel, ctx)
}

/** Sticky hero bg + sections scroll up over it (Kanila cover effect) */
export function initHeroCoverScroll() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const hero = document.querySelector('#hero')
  if (!hero) return

  revertSectionScroll('#hero')

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const parallaxInner = hero.querySelector('.hero-parallax-layer')
      if (parallaxInner) {
        gsapToIfPresent(parallaxInner, {
          yPercent: 18,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.35,
          },
        })
      }
    })

    gsapToIfPresent(hero.querySelectorAll('.hero-foreground-copy'), {
      y: -48,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'center top',
        scrub: 1,
      },
    })

    gsapToIfPresent(hero.querySelectorAll('.hero-arch-rail'), {
      y: -28,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
  }, hero)

  sectionContexts.set('#hero', ctx)
  ScrollTrigger.refresh()
}

/** Kanila Home 3 — Popular Destinations sticky cover scroll */
export function initPopularDestinationsScroll() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const section = document.querySelector('#popular-destinations')
  if (!section) return

  revertSectionScroll('#popular-destinations')

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const parallaxInner = section.querySelector('.popular-parallax-layer')
      if (parallaxInner) {
        gsapToIfPresent(parallaxInner, {
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

    gsapToIfPresent(section.querySelectorAll('.popular-copy'), {
      y: -36,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '45% top',
        scrub: 1,
      },
    })

    gsapToIfPresent(section.querySelectorAll('.popular-cards-stage'), {
      y: -24,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.1,
      },
    })
  }, section)

  sectionContexts.set('#popular-destinations', ctx)
  ScrollTrigger.refresh()
}

/** Revert homepage scroll animations (call when leaving `/`) */
export function cleanupHomeScrollAnimations() {
  homeScrollCtx?.revert()
  homeScrollCtx = null
}

/** Run sticky-cover + scroll inits after Lenis is ready. Returns cancel fn. */
export function whenLenisReady(fn: () => void): () => void {
  if (typeof window === 'undefined') return () => {}

  if (window.__lenisReady) {
    requestAnimationFrame(fn)
    return () => {}
  }

  const handler = () => requestAnimationFrame(fn)
  window.addEventListener('lenis-ready', handler, { once: true })
  return () => window.removeEventListener('lenis-ready', handler)
}

/** @deprecated use initHeroCoverScroll */
export function initHeroParallax() {
  initHeroCoverScroll()
}

/** Page-wide scroll animations for Home 3 sections */
export function initHomeScrollAnimations() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const main = document.querySelector('main')
  if (!main) return

  cleanupHomeScrollAnimations()

  homeScrollCtx = gsap.context(() => {
    staggerFadeUp('[data-stagger="features"]', '[data-stagger-item]')
    staggerFadeUp('[data-stagger="stats"]', '[data-stagger-item]')
    staggerFadeUp('[data-stagger="process"]', '[data-stagger-item]')
    staggerFadeUp('[data-stagger="stories"]', '[data-stagger-item]')
    staggerFadeUp('[data-stagger="trust"]', '[data-stagger-item]')
    staggerFadeUp('[data-stagger="regions"]', '[data-stagger-item]')

    gsap.utils.toArray(main.querySelectorAll('.animate-eyebrow')).forEach((el: unknown) => {
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

    gsap.utils.toArray(main.querySelectorAll('.animate-fade-up')).forEach((el: unknown) => {
      const node = el as Element
      const inCelebrate = node.closest('#about')
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
            start: inCelebrate ? 'top 92%' : 'top 86%',
            once: true,
          },
        }
      )
    })

    archReveal('.arch-reveal-on-scroll')
    planTripCollageReveal()
    imageRevealScroll('.image-reveal-scroll')
    initHeadingLineReveals()
  }, main)
}

/** @deprecated use heroIntroHome3 */
export function heroIntro() {
  heroIntroHome3()
}
