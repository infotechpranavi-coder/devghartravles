'use client'

import { useEffect, useState } from 'react'
import { ChevronUp, ChevronDown, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Himanshu',
    role: 'Traveler',
    quote:
      'Amazing experience with Deoghar Travels. The taxi was on time, the driver was polite, and our temple visits were perfectly planned.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Family Trip',
    quote:
      'We booked a family car for Baidyanath Dham. Comfortable ride, fair pricing, and very helpful support on WhatsApp throughout the journey.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Amit Kumar',
    role: 'Pilgrim',
    quote:
      'Best car rental service in Deoghar. Clean vehicle, fair pricing, and smooth local transfers for our temple visit.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Neha Verma',
    role: 'Group Tour',
    quote:
      'Arranged a tempo traveller for our group outing. Professional service and the team handled last-minute timing changes smoothly.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [current])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const active = testimonials[current]

  return (
    <section className="bg-brand-wash px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
            Testimonials
          </p>
          <h2 className="mb-12 font-accent text-4xl font-bold tracking-tight text-foreground uppercase md:mb-16 md:text-5xl">
            Client Feedback
          </h2>
        </Reveal>

        <Reveal delay={120} direction="up">
          <div className="relative flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="overflow-hidden rounded-full border-4 border-white shadow-[0_12px_40px_-12px_rgba(15,39,64,0.35)] ring-1 ring-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={active.image}
                  src={active.image}
                  alt={active.name}
                  className="h-44 w-44 object-cover animate-fade-in sm:h-52 sm:w-52 md:h-56 md:w-56"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-40 w-px bg-border md:block" />

            {/* Quote content */}
            <div className="min-w-0 flex-1 text-center md:text-left">
              <Quote
                size={48}
                className="mx-auto mb-4 text-accent md:mx-0"
                fill="currentColor"
              />
              <p
                key={active.quote}
                className="mb-6 animate-fade-in font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl lg:text-4xl"
              >
                {active.quote}
              </p>
              <p className="font-accent text-lg font-bold tracking-wide text-foreground uppercase">
                {active.name}
              </p>
              <p className="mt-1 font-accent text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {active.role}
              </p>
            </div>

            {/* Side avatars / controls */}
            <div className="flex shrink-0 items-center gap-3 md:ml-auto md:flex-col">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:border-primary hover:text-primary"
              >
                <ChevronUp size={18} />
              </button>

              <div className="flex gap-2 md:flex-col">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Show feedback from ${item.name}`}
                    className={`overflow-hidden rounded-full border-2 transition-all ${
                      index === current
                        ? 'scale-110 border-accent shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" className="h-11 w-11 object-cover" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:border-primary hover:text-primary"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
