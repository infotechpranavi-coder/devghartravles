'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
  delay?: number
}

export function CountUp({
  end,
  suffix = '',
  duration = 1800,
  className = '',
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let frame = 0
    let startTime: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setValue(Math.round(easeOutCubic(progress) * end))
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    timeoutId = setTimeout(() => {
      frame = requestAnimationFrame(animate)
    }, delay)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      cancelAnimationFrame(frame)
    }
  }, [started, end, duration, delay])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
