'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import { PHONE_DISPLAY } from '@/lib/contact'
import { EnquiryButton } from '@/components/enquiry-popup'

const slides = [
  {
    image: '/fleet/sedan.jpg',
    alt: 'Sedan car rental in Deoghar',
    label: 'Car Rental in Deoghar',
    title: 'Book Cars on Rent in Deoghar',
    description:
      'Your trusted car rental company in Deoghar — Sedan, Dzire, Ertiga, Scorpio, Innova, Tempo Traveller & Bus for local and outstation trips.',
  },
  {
    image: '/fleet/dzire.jpg',
    alt: 'Maruti Suzuki Dzire for local taxi',
    label: 'Maruti Suzuki Dzire',
    title: 'Dzire on Rent for Local Taxi',
    description:
      'Book Dzire for airport, railway, and city transfers. Clean cars, fair pricing, and on-time pickups in Deoghar.',
  },
  {
    image: '/fleet/ertiga.jpg',
    alt: 'Maruti Suzuki Ertiga for family trips',
    label: 'Maruti Suzuki Ertiga',
    title: 'Ertiga Car Rental for Families',
    description:
      'Spacious 6–7 seater MUV on rent for family trips, sightseeing, and comfortable group travel across Deoghar.',
  },
  {
    image: '/fleet/scorpio.jpg',
    alt: 'Mahindra Scorpio N for outstation travel',
    label: 'Mahindra Scorpio N',
    title: 'Scorpio on Rent for Outstation',
    description:
      'SUV car rental for Deoghar to Sultanganj, Basukinath, Mandar Hills, and other highway routes.',
  },
  {
    image: '/fleet/innova.jpg',
    alt: 'Toyota Innova Crysta for Deoghar trips',
    label: 'Toyota Innova Crysta',
    title: 'Innova Crysta Car Rental',
    description:
      'Premium 7-seater car on rent for airport transfers, temple tours, and long-distance comfort.',
  },
  {
    image: '/fleet/tempo.jpg',
    alt: 'Tempo Traveller for groups',
    label: 'Force Tempo Traveller',
    title: 'Tempo Traveller on Rent',
    description:
      '12–17 seater Tempo Traveller rental for groups, weddings, corporate trips, and pilgrim travel.',
  },
  {
    image: '/fleet/bus.jpg',
    alt: 'Luxury tourist bus for group travel',
    label: 'Luxury Bus on Rent',
    title: 'Bus Rental for Large Groups',
    description:
      'Book a luxury bus on rent for weddings, institutions, and multi-city group travel from Deoghar.',
  },
]

const SLIDE_DURATION = 5500

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

  const active = slides[current]

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

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/75 via-secondary/50 to-secondary/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/30 to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-28 pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="mb-3 font-accent text-base font-semibold tracking-[0.16em] text-white/80 uppercase md:text-lg">
            Car Rental Company in Deoghar
          </p>
          <p
            key={`label-${current}`}
            className="animate-fade-in-up mb-3 font-accent text-lg font-semibold tracking-[0.14em] uppercase text-accent md:text-xl"
          >
            {active.label}
          </p>
          <h1
            key={`title-${current}`}
            className="animate-fade-in-up delay-100 mb-5 max-w-3xl font-serif text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {active.title}
          </h1>
          <p
            key={`desc-${current}`}
            className="animate-fade-in-up delay-200 mb-8 max-w-xl font-sans text-lg leading-relaxed text-white/85 md:text-xl"
          >
            {active.description}
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col gap-3 sm:flex-row sm:items-center">
            <EnquiryButton
              vehicle={active.label}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </EnquiryButton>
            <EnquiryButton
              vehicle={active.label}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 font-accent text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              Book Enquiry
              <ArrowRight size={18} />
            </EnquiryButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex max-w-[70%] flex-wrap items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${slide.label}`}
                className={`h-1.5 overflow-hidden rounded-full transition-all ${
                  index === current
                    ? 'w-10 bg-white/30 sm:w-12'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
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
