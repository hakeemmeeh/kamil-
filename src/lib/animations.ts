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
  cleanupSiteScroll()
}

const SITE_STICKY_SECTIONS = [
  '#hero',
  '#popular-destinations',
  '#travel-tips',
] as const

/** Revert all Kanila sticky-cover sections + scroll tweens */
export function cleanupSiteScroll() {
  SITE_STICKY_SECTIONS.forEach((sel) => revertSectionScroll(sel))
  revertSectionScroll('.page-banner[data-kanila-sticky]')
  cleanupHomeScrollAnimations()
  ScrollTrigger.refresh()
}

export function initTravelTipsStickyScroll() {
  initKanilaStickyCover({
    section: '#travel-tips',
    parallaxInner: '.travel-tips-parallax',
  })
}

export function initPageBannerStickyCovers() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return
  if (!document.querySelector('.page-banner[data-kanila-sticky]')) return

  initKanilaStickyCover({
    section: '.page-banner[data-kanila-sticky]',
    parallaxInner: '.page-banner-parallax',
  })
}

export function initCtaStickyScroll() {
  const cta = document.querySelector('#cta, #inner-cta, [data-kanila-sticky-cta]')
  if (!cta || !(cta instanceof HTMLElement)) return
  const id = cta.id ? `#${cta.id}` : '[data-kanila-sticky-cta]'
  initKanilaStickyCover({
    section: id,
    parallaxInner: '.cta-parallax-layer',
  })
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

/** Plan Your Trip — arch intros handled in PlanTripArchCard (Framer Motion) */
export function planTripCollageReveal() {
  /* no-op: avoids GSAP opacity:0 leaving cards hidden */
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
        gsap.set(parallaxInner, { transformOrigin: 'center top' })
        gsapToIfPresent(parallaxInner, {
          yPercent: 10,
          scale: 1.05,
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

    const scrollLayer = section.querySelector('.kanila-sticky-cover__scroll')

    mm.add('(min-width: 768px)', () => {
      const parallaxInner = section.querySelector('.popular-parallax-layer')
      if (parallaxInner && scrollLayer) {
        gsapToIfPresent(parallaxInner, {
          yPercent: 12,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: scrollLayer,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.85,
          },
        })
      }
    })

    if (scrollLayer) {
      gsapToIfPresent(section.querySelectorAll('.popular-copy'), {
        y: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollLayer,
          start: 'top top',
          end: '60% top',
          scrub: 0.75,
        },
      })

      gsapToIfPresent(section.querySelectorAll('.popular-cards-stage'), {
        y: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollLayer,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.75,
        },
      })
    }
  }, section)

  sectionContexts.set('#popular-destinations', ctx)
  ScrollTrigger.refresh()
}

let statsShowcaseCtx: gsap.Context | null = null

/** Stats band below Popular Destinations — intro, stamp cards, ticker */
export function initStatsShowcaseAnimations() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const section = document.querySelector('#stats')
  if (!section) return

  statsShowcaseCtx?.revert()
  statsShowcaseCtx = null

  statsShowcaseCtx = gsap.context(() => {
    const introItems = section.querySelectorAll('[data-stats-intro-item]')
    const cardsRoot = section.querySelector('[data-stagger="stats"]')
    const cards = cardsRoot?.querySelectorAll('[data-stagger-item]')
    const ticker = section.querySelector('[data-stats-ticker]')

    if (introItems.length) {
      gsap.set(introItems, { y: 36, opacity: 0 })
      gsap.to(introItems, {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
      })
    }

    if (cards?.length && cardsRoot) {
      gsap.set(cards, { y: 80, opacity: 0, scale: 0.9 })
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.16,
        duration: 0.95,
        ease: 'back.out(1.35)',
        scrollTrigger: {
          trigger: cardsRoot,
          start: 'top 80%',
          once: true,
        },
      })
    }

    if (ticker) {
      gsap.set(ticker, { y: 28, opacity: 0 })
      gsap.to(ticker, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ticker,
          start: 'top 94%',
          once: true,
        },
      })
    }
  }, section)

  ScrollTrigger.refresh()
}

export function cleanupStatsShowcaseAnimations() {
  statsShowcaseCtx?.revert()
  statsShowcaseCtx = null
}

/** Revert homepage scroll animations (call when leaving `/`) */
export function cleanupHomeScrollAnimations() {
  homeScrollCtx?.revert()
  homeScrollCtx = null
  cleanupStatsShowcaseAnimations()
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

/** Page-wide scroll animations — all routes */
export function initSiteScrollAnimations() {
  initHomeScrollAnimations()
}

/** @deprecated use initSiteScrollAnimations */
export function initHomeScrollAnimations() {
  if (typeof window === 'undefined' || prefersReducedMotion()) return

  const main = document.querySelector('main')
  if (!main) return

  cleanupHomeScrollAnimations()

  homeScrollCtx = gsap.context(() => {
    staggerFadeUp('[data-stagger="features"]', '[data-stagger-item]')
    staggerFadeUp('[data-stagger="activities"]', '[data-stagger-item]')
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
