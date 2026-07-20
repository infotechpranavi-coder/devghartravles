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
    image:
      'https://thumbs.dreamstime.com/b/parasnath-hills-landscape-parasnath-hills-tempel-landscape-197940177.jpg',
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
    image:
      'https://uttarakhandtriptrek.com/wp-content/uploads/2022/04/Gangotri-Tapovan-Trekking.jpg',
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
    return card ? card.offsetWidth + 20 : 300
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
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous packages"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next packages"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((pkg) => (
          <article
            key={pkg.title}
            data-package-card
            className="group relative h-[340px] w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl shadow-[0_18px_40px_-20px_rgba(20,40,60,0.45)] transition-transform duration-500 hover:-translate-y-1 sm:h-[360px] sm:w-[48%] md:w-[32%] lg:w-[30.5%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1a28]/95 via-[#0b1a28]/45 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-70" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:p-6">
              <div>
                <p className="mb-2 font-accent text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                  Deoghar package
                </p>
                <h3 className="font-serif text-2xl font-bold leading-tight text-white text-balance md:text-[1.7rem]">
                  {pkg.title}
                </h3>
              </div>

              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello! I want to book the ${pkg.title} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-accent text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
              >
                Book Now
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
