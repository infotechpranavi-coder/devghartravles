import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QuoteForm } from '@/components/quote-form'
import { fleetVehicles, travelServices } from '@/lib/catalog'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  Bus,
  Building2,
  Car,
  Heart,
  MessageCircle,
  Mountain,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react'

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

const vibes = [
  {
    icon: Users,
    title: 'Family',
    description:
      'At our Deoghar travel agency, we offer car, bus, and tempo traveler rental services to cover temple visits, nature parks, and local sightseeing. There’s a kind of charisma in this place that pulls in people of all ages.',
  },
  {
    icon: Sparkles,
    title: 'Pilgrimage',
    description:
      'Want a soul enriching spiritual journey? Deoghar opens up an exquisite window to multiple pilgrimage destinations, such as Baba Baidyanath Dham Temple and Parasnath Temple.',
  },
  {
    icon: Mountain,
    title: 'Adventure',
    description:
      'Beyond temples, Deoghar keeps it interesting with scenic trekking trails, calm nature walks, peaceful hills, and waterfalls, so you get the adventure you are after.',
  },
  {
    icon: Heart,
    title: 'Group Travels',
    description:
      'Travel with ease with our travel agents in Deoghar for your community tours, corporate outings, or institutional excursions. We offer reliable travel arrangements for a safe and hassle free journey.',
  },
]

const stats = [
  { value: '100+', label: 'Tours' },
  { value: '150+', label: 'Stunning places' },
  { value: '250+', label: 'Satisfied customers' },
]

const trustPoints = [
  {
    title: 'Wedding Car Rentals',
    description:
      'With our luxury travel and transport solutions, you can make your special day unforgettable. As part of our comprehensive tour and fleet services, we offer seamless Deoghar Wedding Car Hire options that bring an unmatched touch of elegance, comfort, and style to your wedding.',
  },
  {
    title: 'Support During Travel',
    description:
      'We help tourists adjust pick up and drop off times due to canceled flights or trains, missing luggage, or sudden changes in tour plans. We have a dedicated call or WhatsApp desk to handle last minute route adjustments or communication requirements with the driver.',
  },
  {
    title: 'Local Connections',
    description:
      'From Baba Baidyanath Dham Temple, Sultanganj Ghat, Tarapeeth Temple, Parasnath Temple, and Noulakha Temple to Trikuta Parvata, Nandan Pahar, Tapovan, Satsang, and Rikhia Ashram, we have local connections with vendors and suppliers in these places for your smooth sightseeing experience.',
  },
  {
    title: 'Corporate Rentals',
    description:
      'Now you can smoothly streamline your business travel and executive transport with a service that you can rely on. Our Deoghar travel agency offers seamless corporate logistics, ensuring that your team and clients experience efficient, professional, and timely transportation.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/innova.jpg"
          alt="Deoghar travel agency taxi and car rental"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/65 to-secondary/35" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-24">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-accent uppercase animate-fade-in">
            Deoghar Travel Agency
          </p>
          <h1 className="mb-4 max-w-4xl font-serif text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Call and Book Your Dream Trip Now
          </h1>
          <p className="mb-8 max-w-xl font-sans text-lg text-white/85 md:text-xl animate-fade-in-up">
            Taxi &amp; car rental service in Deoghar for sightseeing, transfers, and tours.
          </p>
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

      {/* Intro */}
      <section className="relative overflow-hidden bg-background px-4 py-16 md:py-24">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fleet/ertiga.jpg"
              alt="Deoghar Travel Agency car rental"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-accent text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                Deoghar Tour &amp; Travels
              </p>
              <p className="mt-1 font-serif text-2xl font-bold text-white">
                Your trip, planned with care
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Welcome
            </p>
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Ready to escape to your dream destination?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Our Deoghar Travel Agency is here to turn your dream into reality. Whether you are
              planning a relaxing family getaway, a long awaited pilgrimage, arranging group trips,
              or simply looking for adventure with your friends, Deoghar Tour &amp; Travels offers
              multi-amenity facilitated car rental services for all types of vacations to Deoghar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-accent text-sm font-semibold text-primary-foreground hover:bg-primary-light"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-accent text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Travel vibes */}
      <section className="bg-muted/40 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Pick Your Travel Vibe
          </h2>
          <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
            Whether you’re a thrill seeker, trying to spend leisure time with your family, or maybe
            you are just a culture explorer, your perfect trip to Deoghar is right here. Contact our
            Deoghar Tour and Travel agency for your next trip today.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {vibes.map((vibe) => {
              const Icon = vibe.icon
              return (
                <article key={vibe.title} className="border-l-2 border-primary pl-5">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Icon size={20} />
                    <h3 className="font-serif text-2xl font-bold text-foreground">{vibe.title}</h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{vibe.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary px-4 py-12 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-accent md:text-5xl">{stat.value}</p>
              <p className="mt-2 font-accent text-sm font-medium tracking-wide text-white/75 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/10" />

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

      {/* Trust */}
      <section className="bg-muted/40 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Deoghar Travel Agency You Can Count On
          </h2>
          <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
            Vacation planning not only brings enthusiasm but also overwhelming conditions. But
            with our Deoghar travel agency, you can now plan your trip smoothly.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {trustPoints.map((point) => (
              <article key={point.title} className="border-l-2 border-accent pl-5">
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet — vehicle cards open /fleet/[slug] detail pages */}
      <section id="fleet" className="scroll-mt-24 bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Our affordable car rental services in Deoghar for local sightseeing.
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            Choose the vehicle that fits your trip — tap to view details and book.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
            {fleetVehicles.map((vehicle) => (
              <Link
                key={vehicle.slug}
                href={`/fleet/${vehicle.slug}`}
                className="group block overflow-hidden rounded-2xl bg-card transition-transform duration-300 hover:-translate-y-0.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-3 sm:p-4">
                  <p className="font-accent text-sm font-semibold text-foreground sm:text-base">
                    {vehicle.name}
                  </p>
                  <p className="mt-1 text-xs text-primary sm:text-sm">View details →</p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/packages"
            className="mt-8 inline-block font-accent text-base font-semibold text-primary hover:text-primary-light"
          >
            See all car rentals →
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-24 bg-secondary px-4 py-12 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="mb-3 font-serif text-3xl font-bold text-white md:text-4xl">
              Fill Out the Quote
            </h2>
            <p className="mb-5 text-base text-white/80">
              Ready to Book Our Vehicle for Your Next Deoghar Trip? Call or WhatsApp Now{' '}
              {PHONE_DISPLAY}.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-accent text-sm font-semibold text-primary-foreground hover:bg-primary-light"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want a quote for my Deoghar trip.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-accent text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-xl bg-card p-4 sm:p-5">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
