import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { HeroSlider } from '@/components/hero-slider'
import { Reveal } from '@/components/reveal'
import { Testimonials } from '@/components/testimonials'
import { CountUp } from '@/components/count-up'
import { PHONE_DISPLAY } from '@/lib/contact'
import { EnquiryButton } from '@/components/enquiry-popup'
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Mountain,
  Phone,
  MessageCircle,
  Sparkles,
  Users,
  Leaf,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Car Rental Company in Deoghar | Taxi & Car Hire Service',
  description:
    'Book affordable car rental in Deoghar — Sedan, Dzire, Ertiga, Scorpio, Innova, Tempo Traveller & Bus. Local taxi, airport transfers & outstation trips. Call 9835875097.',
  keywords:
    'Car Rental Company in Deoghar, taxi service Deoghar, car hire Deoghar, Dzire Scorpio Innova on rent, Tempo Traveller Deoghar, bus on rent Deoghar',
}

export default function Home() {
  const vibes = [
    {
      icon: Users,
      title: 'Family Car Rental',
      meta: 'Sedan • Ertiga • Innova',
      tagline: 'Comfortable cars for family trips',
      description:
        'Rent a family-friendly car in Deoghar for temple visits, parks, and local sightseeing. Choose Sedan, Ertiga, or Innova based on your group size.',
      image:
        'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80',
      alt: 'Family car rental in Deoghar',
    },
    {
      icon: Sparkles,
      title: 'Pilgrimage Taxi',
      meta: 'Local Taxi • Round Trip',
      tagline: 'Baidyanath Dham & temple routes',
      description:
        'Book a dedicated taxi for Baidyanath Dham, Basukinath, and other temple routes with drivers who know the best drop points.',
      image:
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      alt: 'Pilgrimage taxi service in Deoghar',
    },
    {
      icon: Mountain,
      title: 'Outstation Car Hire',
      meta: 'Scorpio • Innova • Highway',
      tagline: 'Sultanganj, Dumka & nearby cities',
      description:
        'Outstation car rental from Deoghar to Sultanganj, Tarapeeth, Parasnath, Mandar Hills, and other popular routes.',
      image:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
      alt: 'Outstation car hire from Deoghar',
    },
    {
      icon: Heart,
      title: 'Group Vehicle Rent',
      meta: 'Tempo Traveller • Bus',
      tagline: 'Weddings, corporate & large groups',
      description:
        'Rent Tempo Traveller or Bus for community tours, weddings, corporate outings, and institutional travel with spacious seating.',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      alt: 'Group vehicle rental in Deoghar',
    },
  ]

  const stats = [
    { value: 7, label: 'Vehicle Types' },
    { value: 150, label: 'Routes Covered' },
    { value: 250, label: 'Happy Customers' },
  ]

  const services = [
    {
      title: 'Car & Coach Rentals',
      subtitle: 'Sedan to SUV • Self-drive not needed',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Car rental service on scenic roads',
    },
    {
      title: 'Taxi & Transfers',
      subtitle: 'Airport • Railway • Local pickup/drop',
      image:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Taxi and transfer service',
    },
    {
      title: 'Bus & Tempo Hire',
      subtitle: 'Group travel • Weddings & tours',
      image:
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bus and tempo traveller hire',
    },
  ]

  const fleetMain = [
    {
      name: 'Sedan Car on Rent',
      seats: '4 Seater',
      type: 'Sedan',
      image: '/fleet/sedan.jpg',
      alt: 'White sedan car for rent in Deoghar',
    },
    {
      name: 'Dzire Car on Rent',
      seats: '4 Seater',
      type: 'Sedan',
      image: '/fleet/dzire.jpg',
      alt: 'Maruti Suzuki Dzire for rent in Deoghar',
    },
    {
      name: 'Ertiga Car on Rent',
      seats: '6–7 Seater',
      type: 'MUV',
      image: '/fleet/ertiga.jpg',
      alt: 'Maruti Suzuki Ertiga for rent in Deoghar',
    },
    {
      name: 'Scorpio Car on Rent',
      seats: '7 Seater',
      type: 'SUV',
      image: '/fleet/scorpio.jpg',
      alt: 'Mahindra Scorpio N for rent in Deoghar',
    },
    {
      name: 'Bus On Rent',
      seats: '20+ Seater',
      type: 'Bus',
      image: '/fleet/bus.jpg',
      alt: 'Luxury tourist bus for rent in Deoghar',
    },
    {
      name: 'Tempo Traveller Rent',
      seats: '12–17 Seater',
      type: 'Group',
      image: '/fleet/tempo.jpg',
      alt: 'Force Tempo Traveller for rent in Deoghar',
    },
  ]

  const fleetBelowBook = [
    {
      name: 'Crysta Innova Car on Rent',
      seats: '7 Seater',
      type: 'Premium',
      image: '/fleet/innova.jpg',
      alt: 'Toyota Innova Crysta for rent in Deoghar',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      <HeroSlider />

      {/* Intro / About */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <p className="mb-4 flex items-center gap-2 font-accent text-base font-semibold tracking-widest text-primary uppercase">
              <span className="text-lg leading-none">✦</span>
              Car Rental in Deoghar
            </p>
            <h2 className="mb-5 font-serif text-5xl font-bold leading-tight text-foreground text-balance md:text-6xl">
              Affordable cars on rent for every trip
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              Deoghar Travels is your local car rental company for Sedan, Dzire, Ertiga, Scorpio,
              Innova Crysta, Tempo Traveller, and Bus. Book for local sightseeing, airport or
              railway transfers, outstation taxi, and group travel — with clean vehicles and on-time
              drivers.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-lg font-semibold text-foreground">
                    Wide Vehicle Range
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    From 4-seater sedan to bus — pick the right car for your group and route.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-lg font-semibold text-foreground">
                    Local & Outstation
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    City taxi, one-way, round trip, and outstation car hire across Jharkhand.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              More About Us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
                  alt="Travel through scenic Deoghar roads"
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[280px]">
                <div className="rounded-2xl bg-secondary/95 px-5 py-4 text-white shadow-xl backdrop-blur-sm">
                  <div className="mb-2 flex items-center">
                    {[
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
                      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80',
                    ].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className={`h-9 w-9 rounded-full border-2 border-secondary object-cover ${
                          i > 0 ? '-ml-2.5' : ''
                        }`}
                      />
                    ))}
                    <span className="-ml-2.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-secondary bg-accent text-[10px] font-bold text-accent-foreground">
                      250+
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white/90">Over 250+ Satisfied Customers</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Travel Vibes */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 md:mb-14">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Hire by trip type
            </p>
            <h2 className="mb-4 font-serif text-5xl font-bold text-foreground md:text-6xl">
              Choose Your Rental Need
            </h2>
            <p className="max-w-3xl font-sans text-lg text-muted-foreground">
              Whether you need a local taxi, family car, outstation SUV, or group Tempo Traveller —
              book the right vehicle from our Deoghar car rental fleet.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {vibes.map((vibe, index) => {
              const Icon = vibe.icon
              return (
                <Reveal key={vibe.title} delay={index * 100} direction="up">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/10 bg-card p-4 shadow-[0_8px_30px_-12px_rgba(20,110,150,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_-16px_rgba(20,110,150,0.32)] sm:flex-row sm:gap-5 sm:p-5">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-brand-green"
                      aria-hidden
                    />
                    <div className="relative mb-4 w-full shrink-0 overflow-hidden rounded-2xl sm:mb-0 sm:w-[42%] sm:min-h-[220px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={vibe.image}
                        alt={vibe.alt}
                        className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
                      />
                      <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white shadow-sm">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-center px-1 pb-1 sm:px-0 sm:py-1">
                      <p className="mb-2 font-accent text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        {vibe.meta}
                      </p>
                      <h3 className="mb-2 font-serif text-3xl font-bold tracking-tight text-foreground uppercase sm:text-4xl">
                        {vibe.title}
                      </h3>

                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex items-center gap-0.5 text-accent">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">Verified Experience</span>
                      </div>

                      <p className="mb-2 text-base font-medium text-foreground">{vibe.tagline}</p>
                      <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {vibe.description}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-3">
                        <Link
                          href="/packages"
                          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-accent text-sm font-semibold text-accent-foreground hover:brightness-110"
                        >
                          View Details
                          <ArrowRight size={16} />
                        </Link>
                        <EnquiryButton
                          vehicle={vibe.title}
                          className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-card px-5 py-2.5 font-accent text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                        >
                          Enquire Now
                        </EnquiryButton>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden px-4 py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#146E96] to-[#3F6B45]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(240,160,80,0.28),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120} direction="scale">
              <p className="font-serif text-5xl font-semibold text-accent md:text-6xl">
                <CountUp end={stat.value} suffix="+" delay={index * 150} duration={2000} />
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/80 uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center" direction="up">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Our services
            </p>
            <h2 className="mb-4 font-serif text-5xl font-bold text-foreground md:text-6xl">
              Car Rental Services in Deoghar
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              From daily taxi hire to outstation cars and group buses — we provide reliable vehicle
              rental with pickup and drop across Deoghar and nearby cities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 140} direction="up">
                <EnquiryButton
                  vehicle={service.title}
                  className="group relative block h-[420px] w-full overflow-hidden rounded-[1.75rem] text-left shadow-[0_12px_40px_-16px_rgba(15,39,64,0.35)] transition-transform duration-500 hover:-translate-y-2 sm:h-[460px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/45 to-transparent" />
                  <div className="absolute inset-0 bg-secondary/10 transition-colors duration-500 group-hover:bg-secondary/5" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mb-4 font-sans text-sm text-white/85 md:text-base">
                        {service.subtitle}
                      </p>
                      <p className="font-accent text-xs font-semibold tracking-[0.18em] text-white/75 uppercase transition-colors group-hover:text-accent">
                        Enquire Now
                      </p>
                    </div>

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0">
                      <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </EnquiryButton>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="scroll-mt-24 bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 md:mb-14">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Our fleet
            </p>
            <h2 className="mb-4 font-serif text-5xl font-bold text-foreground md:text-6xl text-balance">
              Affordable Car Rental Services in Deoghar
            </h2>
            <p className="max-w-2xl font-sans text-lg text-muted-foreground">
              Our affordable car rental services in Deoghar for local sightseeing — choose the
              vehicle that fits your trip.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fleetMain.map((vehicle, index) => (
                <Reveal key={vehicle.name} delay={index * 70} direction="up">
                  <article className="group overflow-hidden rounded-[1.35rem] border border-primary/10 bg-card shadow-[0_10px_28px_-16px_rgba(20,110,150,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-18px_rgba(20,110,150,0.3)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={vehicle.image}
                        alt={vehicle.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-accent text-[10px] font-semibold tracking-wide text-primary uppercase backdrop-blur-sm">
                        {vehicle.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <div className="min-w-0">
                        <p className="font-accent text-base font-semibold text-foreground">
                          {vehicle.name}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{vehicle.seats}</p>
                      </div>
                      <EnquiryButton
                        vehicle={vehicle.name}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary-light"
                        aria-label={`Book ${vehicle.name}`}
                      >
                        <ArrowRight size={16} />
                      </EnquiryButton>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:sticky md:top-28">
              <Reveal delay={100} direction="right">
                <div className="overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white shadow-xl md:p-10">
                  <p className="mb-2 font-accent text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                    Book now
                  </p>
                  <h3 className="mb-3 font-serif text-3xl font-bold text-white md:text-4xl">
                    Need a car on rent today?
                  </h3>
                  <p className="mb-8 font-sans text-base text-white/75">
                    Enquire now to book Sedan, Dzire, Ertiga, Scorpio, Innova Crysta, Tempo
                    Traveller, or Bus for local and outstation travel.
                  </p>

                  <div className="flex flex-col gap-3">
                    <EnquiryButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light">
                      <Phone size={18} />
                      Call {PHONE_DISPLAY}
                    </EnquiryButton>
                    <EnquiryButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-accent text-base font-semibold text-white hover:brightness-110">
                      <MessageCircle size={18} />
                      WhatsApp Enquiry
                      <ArrowRight size={16} />
                    </EnquiryButton>
                  </div>
                </div>
              </Reveal>

              {fleetBelowBook.map((vehicle, index) => (
                <Reveal key={vehicle.name} delay={180 + index * 80} direction="right">
                  <article className="group overflow-hidden rounded-[1.35rem] border border-primary/10 bg-card shadow-[0_10px_28px_-16px_rgba(20,110,150,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-18px_rgba(20,110,150,0.3)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={vehicle.image}
                        alt={vehicle.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-accent text-[10px] font-semibold tracking-wide text-primary uppercase backdrop-blur-sm">
                        {vehicle.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <div className="min-w-0">
                        <p className="font-accent text-base font-semibold text-foreground">
                          {vehicle.name}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{vehicle.seats}</p>
                      </div>
                      <EnquiryButton
                        vehicle={vehicle.name}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary-light"
                        aria-label={`Book ${vehicle.name}`}
                      >
                        <ArrowRight size={16} />
                      </EnquiryButton>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
