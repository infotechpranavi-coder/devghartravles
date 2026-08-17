'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/contact'

const packages = [
  {
    title: 'Baba Baidyanath Dham',
    image: '/Baba_Baidyanath_Jyotirlinga_Temple.jpg',
  },
  {
    title: 'Baba Basukinath Temple',
    image: 'https://tripxl.com/blog/wp-content/uploads/2024/09/Location-388.jpg',
  },
  {
    title: 'Sultanganj Ghat',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.cULXT7Jl0V53MLTlW8dfBAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Tarapeeth Temple',
    image: 'https://tfipost.com/wp-content/uploads/2022/12/Tarapith_Mandir_entrance.jpg',
  },
  {
    title: 'Noulakha Temple',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.DNlHDNfU6d21g1Sl9Vg29gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Parasnath Temple',
    image: '/sdfg.jpeg',
    imageClass: 'object-cover object-top',
  },
  {
    title: 'Trikuta Parvata',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.YeKPPcxF87KW5b2CJ8yS0wHaEj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Nandan Pahar',
    image:
      'https://th.bing.com/th/id/OIP.w5v0qEDsFaq9__11LOhH5gHaD5?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  },
  {
    title: 'Tapovan',
    image: '/tapovan.jpg',
  },
  {
    title: 'Mandar Hills',
    image:
      'https://3.bp.blogspot.com/-hQeSCynOUVw/WGJrSMFwN6I/AAAAAAAAKHk/Us4PqpBMwoQwHerCVYidqD5PucMmHJucACEw/s1600/Copy%2Bof%2BMANDAR%2B%25281%2529.jpg',
  },
  {
    title: 'Satsang and Rikhia Ashram',
    image: 'https://media.tripinvites.com/places/deoghar/satsang-ashram/satsang-ashram-featured.jpg',
  },
]

export function PackagesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)

  const getStep = () => {
    const el = scrollerRef.current
    if (!el) return 300
    const card = el.querySelector<HTMLElement>('[data-package-card]')
    return card ? card.offsetWidth + 24 : 300
  }

  const goTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const total = packages.length
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
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-accent text-sm text-muted-foreground">
          Swipe or use arrows to explore places
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous packages"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next packages"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((pkg, index) => (
          <article
            key={pkg.title}
            data-package-card
            className="group relative h-[380px] w-[82%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-24px_rgba(20,40,60,0.55)] sm:h-[400px] sm:w-[46%] md:w-[31%] lg:w-[29.5%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${'imageClass' in pkg ? pkg.imageClass : ''}`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#08131f] via-[#08131f]/55 to-[#08131f]/10" />
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-60" />

            <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 font-accent text-xs font-bold text-white backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="mb-3 inline-flex items-center rounded-md bg-accent px-2.5 py-1 font-accent text-[10px] font-bold tracking-[0.18em] text-accent-foreground uppercase">
                Deoghar package
              </p>
              <h3 className="mb-5 max-w-[95%] font-serif text-[1.65rem] font-bold leading-[1.15] text-white text-balance md:text-[1.85rem]">
                {pkg.title}
              </h3>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello! I want to book the ${pkg.title} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 font-accent text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-transparent hover:bg-primary"
              >
                Book Now
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
