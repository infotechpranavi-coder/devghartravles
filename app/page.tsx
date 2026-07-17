import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { HeroSlider } from '@/components/hero-slider'
import { Reveal } from '@/components/reveal'
import { Testimonials } from '@/components/testimonials'
import { CountUp } from '@/components/count-up'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  ArrowUpRight,
  Car,
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
  title: 'Trusted Deoghar Travel Agency | Taxi & Car Rental Service in Deoghar',
  description:
    'Looking for a reliable Deoghar travel agency? Book affordable car rentals for local sightseeing, airport or railway transfers, and trips. Call us at 9835875097.',
  keywords:
    'Deoghar Travel Agency, Taxi & Car Rental Service in Deoghar, Deoghar Tour and Travels, car hire Deoghar, local taxi Deoghar',
}

export default function Home() {
  const vibes = [
    {
      icon: Users,
      title: 'Family',
      meta: 'Car • Bus • Tempo Traveller',
      tagline: 'Temple visits, parks & local sightseeing',
      description:
        'At our Deoghar travel agency, we offer car, bus, and tempo traveler rental services to cover temple visits, nature parks, and local sightseeing. There is a kind of charisma in this place that pulls in people of all ages.',
      image:
        'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80',
      alt: 'Happy family traveling together',
    },
    {
      icon: Sparkles,
      title: 'Pilgrimage',
      meta: 'Spiritual • Temple Tours',
      tagline: 'Baidyanath Dham & Parasnath',
      description:
        'Want a soul enriching spiritual journey? Deoghar opens up an exquisite window to multiple pilgrimage destinations, such as Baba Baidyanath Dham Temple and Parasnath Temple.',
      image:
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      alt: 'Sacred temple pilgrimage in Deoghar',
    },
    {
      icon: Mountain,
      title: 'Adventure',
      meta: 'Trekking • Nature • Hills',
      tagline: 'Trails, walks, hills & waterfalls',
      description:
        'Beyond temples, Deoghar keeps it interesting with scenic trekking trails, calm nature walks, peaceful hills, and waterfalls, so you get the adventure you are after.',
      image:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
      alt: 'Adventure hiking on scenic trails',
    },
    {
      icon: Heart,
      title: 'Group Travels',
      meta: 'Community • Corporate • Excursions',
      tagline: 'Safe & hassle-free group journeys',
      description:
        'Travel with ease with our travel agents in Deoghar for your community tours, corporate outings, or institutional excursions. We offer reliable travel arrangements for a safe and hassle free journey.',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      alt: 'Group of friends traveling together',
    },
  ]

  const stats = [
    { value: 100, label: 'Tours' },
    { value: 150, label: 'Stunning Places' },
    { value: 250, label: 'Satisfied Customers' },
  ]

  const services = [
    {
      title: 'Car and Coach Rentals',
      subtitle: 'Local taxi • Airport & railway transfers',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Car rental service on scenic roads',
    },
    {
      title: 'Bus Booking',
      subtitle: 'Group travel • Pilgrimages & weddings',
      image:
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bus travel for group tours',
    },
    {
      title: 'Hotel Booking',
      subtitle: 'Luxury resorts • Budget stays',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      alt: 'Comfortable hotel accommodation',
    },
  ]

  const fleet = [
    { name: 'Sedan Car on Rent', seats: '4 Seater', type: 'Sedan' },
    { name: 'Dzire Car on Rent', seats: '4 Seater', type: 'Sedan' },
    { name: 'Ertiga Car on Rent', seats: '6–7 Seater', type: 'MUV' },
    { name: 'Scorpio Car on Rent', seats: '7 Seater', type: 'SUV' },
    { name: 'Crysta Innova Car on Rent', seats: '7 Seater', type: 'Premium' },
    { name: 'Tempo Traveller Rent', seats: '12–17 Seater', type: 'Group' },
    { name: 'Bus On Rent', seats: '20+ Seater', type: 'Bus' },
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
              About Us
            </p>
            <h2 className="mb-5 font-serif text-5xl font-bold leading-tight text-foreground text-balance md:text-6xl">
              Ready to escape to your dream destination?
            </h2>
            <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              Our Deoghar Travel Agency is here to turn your dream into reality. Whether you are
              planning a relaxing family getaway, a long awaited pilgrimage, arranging group trips,
              or simply looking for adventure with your friends, Deoghar Tour & Travels offers
              multi-amenity facilitated car rental services for all types of vacations to Deoghar.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-lg font-semibold text-foreground">
                    Built for Every Traveler
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Family trips, pilgrimages, and group tours with reliable car rental support.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-sans text-lg font-semibold text-foreground">
                    Comfort Without Compromise
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Clean vehicles, on-time pickups, and local expertise across Deoghar.
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
              Travel styles
            </p>
            <h2 className="mb-4 font-serif text-5xl font-bold text-foreground md:text-6xl">
              Pick Your Travel Vibe
            </h2>
            <p className="max-w-3xl font-sans text-lg text-muted-foreground">
              Whether you are a thrill seeker, trying to spend leisure time with your family, or maybe
              you are just a culture explorer, your perfect trip to Deoghar is right here. Contact
              our Deoghar Tour and Travel agency for your next trip today.
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
                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-card px-5 py-2.5 font-accent text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                        >
                          Enquire Now
                        </a>
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
              What we offer
            </p>
            <h2 className="mb-4 font-serif text-5xl font-bold text-foreground md:text-6xl">
              Explore Our Travel Services
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Our Deoghar Tour and Travel vehicle rental services cover several places across
              Deoghar. We also take responsibility for hotel booking, pick up, and drop off to your
              desired locations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 140} direction="up">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group relative block h-[420px] overflow-hidden rounded-[1.75rem] shadow-[0_12px_40px_-16px_rgba(15,39,64,0.35)] transition-transform duration-500 hover:-translate-y-2 sm:h-[460px]"
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
                        Explore Options
                      </p>
                    </div>

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0">
                      <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
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

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fleet.map((vehicle, index) => (
                <Reveal key={vehicle.name} delay={index * 70} direction="up">
                  <div className="card-modern group flex h-full items-center gap-4 p-5">
                    <div className="card-icon !h-12 !w-12 shrink-0 !rounded-xl">
                      <Car size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-accent text-base font-semibold text-foreground">
                        {vehicle.name}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {vehicle.type} · {vehicle.seats}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150} direction="right">
              <div className="overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white shadow-xl md:p-10">
                <p className="mb-2 font-accent text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                  Book now
                </p>
                <h3 className="mb-3 font-serif text-3xl font-bold md:text-4xl">
                  Ready for your next Deoghar trip?
                </h3>
                <p className="mb-8 font-sans text-base text-white/75">
                  Call or WhatsApp us to reserve Sedan, Dzire, Ertiga, Scorpio, Innova Crysta, Tempo
                  Traveller, or Bus — available for local sightseeing and transfers.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
                  >
                    <Phone size={18} />
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello! I'm interested in car rental services in Deoghar.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-accent text-base font-semibold text-white hover:brightness-110"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
