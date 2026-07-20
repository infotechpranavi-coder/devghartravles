'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { fleetVehicles } from '@/lib/catalog'

export function FleetCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)

  const getStep = () => {
    const el = scrollerRef.current
    if (!el) return 300
    const card = el.querySelector<HTMLElement>('[data-fleet-card]')
    return card ? card.offsetWidth + 12 : 300
  }

  const goTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const total = fleetVehicles.length
    const next = ((index % total) + total) % total
    indexRef.current = next
    el.scrollTo({ left: next * getStep(), behavior: 'smooth' })
  }

  const scrollByCard = (direction: -1 | 1) => {
    goTo(indexRef.current + direction)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(indexRef.current + 1)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous vehicles"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next vehicles"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fleetVehicles.map((vehicle) => (
          <article
            key={vehicle.slug}
            data-fleet-card
            className="group relative h-[280px] w-[78%] shrink-0 snap-start overflow-hidden rounded-xl sm:h-[300px] sm:w-[48%] md:h-[320px] md:w-[32%] lg:w-[31.5%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/25 to-transparent" />

            <span className="absolute right-0 top-0 bg-accent px-3 py-1.5 font-accent text-[11px] font-bold tracking-wide text-accent-foreground uppercase shadow-sm">
              Book Now
            </span>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-4 sm:p-5">
              <h3 className="max-w-[90%] font-accent text-xl font-bold leading-tight text-white drop-shadow sm:text-2xl">
                {vehicle.name.replace(' on Rent', '').replace(' Rent', '')}
              </h3>
              <Link
                href={`/fleet/${vehicle.slug}`}
                className="inline-flex items-center bg-primary px-4 py-2 font-accent text-sm font-semibold text-primary-foreground hover:bg-primary-light"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
