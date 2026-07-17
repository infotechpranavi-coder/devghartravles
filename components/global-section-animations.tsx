'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Adds scroll-in animations to every section and footer across the site.
 */
export function GlobalSectionAnimations() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('section, footer'))

    elements.forEach((el, index) => {
      el.classList.add('section-reveal')
      el.style.setProperty('--section-delay', `${Math.min(index % 4, 3) * 40}ms`)

      // Show anything already in (or near) the viewport immediately — avoids flash
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add('is-visible')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
      elements.forEach((el) => {
        el.classList.remove('section-reveal', 'is-visible')
        el.style.removeProperty('--section-delay')
      })
    }
  }, [pathname])

  return null
}
