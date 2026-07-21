import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FleetCarousel } from '@/components/fleet-carousel'
import { PackagesCarousel } from '@/components/packages-carousel'
import { travelServices } from '@/lib/catalog'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  Bus,
  Building2,
  Car,
  MessageCircle,
  Phone,
} from 'lucide-react'
import {
  AwardCrownIcon,
  DualPinIcon,
  GlobePlaneIcon,
  GuidesIcon,
} from '@/components/stats-icons'

export const metadata: Metadata = {
  title: {
    absolute: 'Trusted Deoghar Travel Agency | Taxi & Car Rental Service in Deoghar',
  },
  description:
    'Looking for a reliable Deoghar travel agency? Book affordable car rentals for local sightseeing, airport or railway transfers, and trips. Call us at 9835875097.',
  keywords:
    'Deoghar Travel Agency, Taxi & Car Rental Service in Deoghar, Deoghar Tour and Travels, car hire Deoghar, taxi service Deoghar',
}

const serviceIcons = {
  car: Car,
  bus: Bus,
  hotel: Building2,
}

const stats = [
  {
    value: '100+',
    label: 'Awesome Tour',
    icon: GlobePlaneIcon,
    color: 'text-primary',
  },
  {
    value: '120+',
    label: 'Stunning Places',
    icon: DualPinIcon,
    color: 'text-accent',
  },
  {
    value: '150+',
    label: 'Satisfied Customer',
    icon: AwardCrownIcon,
    color: 'text-brand-green',
  },
  {
    value: '200+',
    label: 'Travel Guides',
    icon: GuidesIcon,
    color: 'text-[#2A8BB5]',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex h-[85vh] min-h-[520px] max-h-[900px] items-end overflow-hidden md:h-[90vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Baba_Baidyanath_Jyotirlinga_Temple.jpg"
          alt="Baba Baidyanath Jyotirlinga Temple, Deoghar"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-secondary/80 via-secondary/35 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-secondary/55 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-24 sm:px-6 md:pb-14">
          <p className="mb-4 inline-flex animate-fade-in items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm sm:text-sm">
            Deoghar Travel Agency
          </p>
          <h1 className="mb-6 max-w-4xl animate-fade-in-up font-serif text-3xl font-bold leading-[1.08] text-white text-balance sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_2px_8px_rgba(0,0,0,0.65),0_4px_24px_rgba(0,0,0,0.45)]">
            Call and Book Your <span className="text-accent">Dream Trip</span> Now
          </h1>
          <div className="flex flex-wrap gap-3 animate-fade-in-up">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book a trip with Deoghar Travel Agency.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-accent text-base font-semibold text-white hover:brightness-110"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fleet carousel */}
      <section id="fleet" className="scroll-mt-24 bg-muted/40 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.2em] text-accent-foreground uppercase shadow-sm sm:text-sm">
              Deoghar Travels
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-primary md:text-5xl">
              Enjoy Your Trip
            </h2>
            <div className="mx-auto mb-5 flex max-w-xs items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <Car size={18} className="text-brand-green" />
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our affordable car rental services in Deoghar for local sightseeing.
            </p>
          </div>

          <FleetCarousel />

          <div className="mt-8 text-center">
            <Link
              href="/packages"
              className="inline-block font-accent text-base font-semibold text-primary hover:text-primary-light"
            >
              Book a Car →
            </Link>
          </div>
        </div>
      </section>

      {/* Popular packages */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm sm:text-sm">
              Tour packages
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Popular Packages for Your Deoghar Trip
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From sacred temples and holy ghats to scenic hills — book your ride and explore.
            </p>
          </div>

          <PackagesCarousel />

          <div className="mt-4 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 font-accent text-sm font-semibold text-primary hover:text-primary-light"
            >
              See all packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card px-4 py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex flex-col items-center">
                <Icon size={42} className={`mb-3 ${stat.color}`} />
                <p className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Our services
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Explore Our Travel Services
          </h2>
          <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
            Our Deoghar Tour and Travel vehicle rental services cover several places across
            Deoghar. We also take responsibility for hotel booking, pick up, and drop off to your
            desired locations.
          </p>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {travelServices.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative block h-[420px] overflow-hidden rounded-[1.75rem] sm:h-[460px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/55 to-secondary/10" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                        <Icon size={18} />
                      </div>
                      <h3 className="mb-2 font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/85 md:text-base">
                        {service.description}
                      </p>
                      <p className="font-accent text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                        View Details
                      </p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
