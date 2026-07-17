'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  once?: boolean
}

const directionClass: Record<Direction, string> = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
  scale: 'reveal-scale',
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass[direction]} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
