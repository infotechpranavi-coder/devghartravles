'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { PHONE_TEL } from '@/lib/contact'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80',
    alt: 'Sacred temple towers in Deoghar',
  },
  {
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80',
    alt: 'Car travel through scenic roads',
  },
  {
    image:
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=80',
    alt: 'Pilgrims visiting Deoghar temples',
  },
  {
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80',
    alt: 'Family road trip adventure',
  },
]

const SLIDE_DURATION = 6000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [progressKey, setProgressKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setProgressKey((k) => k + 1)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [current])

  const goTo = (index: number) => {
    setCurrent(index)
    setProgressKey((k) => k + 1)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== current}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.alt}
            className={`h-full w-full object-cover ${
              index === current ? 'animate-ken-burns' : ''
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/45 to-secondary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="animate-fade-in-up mb-3 font-accent text-lg font-semibold tracking-[0.14em] uppercase text-accent md:text-xl">
            Deoghar Travel Guide
          </p>
          <h1 className="animate-fade-in-up delay-100 mb-5 max-w-3xl font-serif text-5xl font-bold leading-[1.1] text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Call and Book Your Dream Trip Now
          </h1>
          <p className="animate-fade-in-up delay-200 mb-8 max-w-xl font-sans text-lg leading-relaxed text-white/85 md:text-xl">
            Trusted Deoghar travel agency for taxi, car rental, temple tours, airport transfers, and
            group trips — planned with comfort and care.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Phone size={18} />
              Call 9835875097
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 font-accent text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 overflow-hidden rounded-full transition-all ${
                  index === current ? 'w-12 bg-white/30' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              >
                {index === current && (
                  <span
                    key={progressKey}
                    className="animate-slide-progress block h-full w-full rounded-full bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
