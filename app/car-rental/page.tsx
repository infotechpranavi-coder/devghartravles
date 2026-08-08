import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fleetVehicles } from '@/lib/catalog'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  Bus,
  Car,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Train,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute:
      'Deoghar Car on Rent Price | Cab Service Contact Number | Airport Taxi',
  },
  description:
    'Book reliable car rental in Deoghar with driver for outstation, airport & city trips. Affordable Deoghar car rental services. Call 9835875097.',
  keywords:
    'Deoghar car on rent price, Deoghar cab service contact number, Airport Taxis Deoghar, Deoghar Tour and Travel, Tour Operators in Deoghar Jharkhand, Best traveller hiring in deoghar, Travel Agents In Deoghar, Deoghar Tempo Traveller Rental, Ranchi Airport Taxi, Baba Baidyanath Dham Temple, Bus Hire in Deoghar, Dzire Car on Rent, Ertiga Car on Rent, Scorpio Car on Rent, Crysta innova Car on Rent',
}

const highlights = [
  'Rent a car with driver in Deoghar at best price',
  'Airport taxis at affordable rates for Deoghar Airport',
  'Outstation, city & temple trip bookings',
  'Tempo Traveller & bus hire for groups',
]

const serviceTags = [
  'Tour Operators in Deoghar Jharkhand',
  'Best traveller hiring in Deoghar',
  'Travel Agents In Deoghar',
  'Deoghar Tempo Traveller Rental',
  'Ranchi Airport Taxi',
  'Baba Baidyanath Dham Temple',
  'Bus Hire in Deoghar',
]

const featuredFleet = [
  'dzire',
  'ertiga',
  'scorpio',
  'innova',
  'tempo-traveller',
] as const

export default function CarRentalPage() {
  const vehicles = featuredFleet
    .map((slug) => fleetVehicles.find((v) => v.slug === slug))
    .filter(Boolean)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden md:min-h-[80svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/innova.jpg"
          alt="Deoghar car on rent with driver"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/60 to-secondary/25" />
        <div className="absolute inset-0 bg-linear-to-r from-secondary/80 via-secondary/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6 md:pb-20">
          <p className="mb-4 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm sm:text-sm">
            Deoghar car rental
          </p>
          <h1 className="mb-5 max-w-4xl font-serif text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl md:text-6xl">
            Deoghar Car on Rent &amp; Cab Service
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Airport taxis are available at affordable rates for Deoghar Airport. Book reliable car
            rental in Deoghar with driver for outstation, airport &amp; city trips.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-white hover:bg-primary-light"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book a car rental in Deoghar.')}`}
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
      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm">
                Affordable booking
              </p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Looking for the best car rental in Deoghar?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Book reliable car rental in Deoghar with driver for outstation, airport &amp; city
                trips. Affordable Deoghar car rental services with easy booking on Deoghar Tour and
                Travel. We are Deoghar, Jharkhand No.1 Car Rental Company.
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-secondary p-7 text-white md:p-8">
              <Car size={28} className="mb-4 text-accent" />
              <h3 className="mb-3 font-serif text-2xl font-bold text-white">
                Easy booking, fair rates
              </h3>
              <p className="mb-6 leading-relaxed text-white/85">
                From accommodation support to cars on rent, we provide the best services for your
                Deoghar trip. Call us at {PHONE_DISPLAY}.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-accent text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions sneak peek */}
      <section className="bg-muted/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm">
            Tourist attractions
          </p>
          <h2 className="mb-4 max-w-3xl font-serif text-3xl font-bold text-foreground md:text-4xl">
            Planning a trip to Deoghar?
          </h2>
          <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
            Here is a sneak peek of some tourist attractions of the city. From accommodation to cars
            on rent, we will provide you with the best services.
          </p>

          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_40px_-24px_rgba(20,40,60,0.35)]">
            <div className="grid md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://tripxl.com/blog/wp-content/uploads/2024/09/Location-388.jpg"
                  alt="Baba Basukinath Temple near Deoghar"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="mb-2 inline-flex items-center gap-2 font-accent text-xs font-semibold tracking-wide text-accent uppercase">
                  <MapPin size={14} />
                  Deoghar – Dumka highway
                </p>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Baba Basukinath Temple
                </h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  This unique temple is located on the outskirts of Deoghar. It can be located on the
                  Deoghar – Dumka state highway and is around 25 km northwest of Dumka. The place well
                  known for the Hindu pilgrimage is the main attraction amongst tourists.
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  You can easily catch the trains at the nearest railway stations that are, Jasidih
                  Dumka New Railway line and Basukinath Railway Station. You can also head up to the
                  nearest airport at Ranchi.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Tons of devotees from around the globe come here to worship Lord Shiva, believing
                  they can wash off their evil deeds and guilt. There is also a well and a Shivling —
                  a very important Shiv Stone. Some truths about the sacred shivling stone inside the
                  pond are still unrevealed.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Train size={22} className="mb-3 text-primary" />
              <h4 className="mb-1 font-serif text-lg font-bold text-foreground">Nearest stations</h4>
              <p className="text-sm text-muted-foreground">
                Jasidih, Dumka New Railway line &amp; Basukinath Railway Station
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Plane size={22} className="mb-3 text-primary" />
              <h4 className="mb-1 font-serif text-lg font-bold text-foreground">Airport taxi</h4>
              <p className="text-sm text-muted-foreground">
                Ranchi Airport Taxi &amp; affordable Deoghar Airport taxi bookings
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Bus size={22} className="mb-3 text-primary" />
              <h4 className="mb-1 font-serif text-lg font-bold text-foreground">Group travel</h4>
              <p className="text-sm text-muted-foreground">
                Tempo Traveller rental &amp; bus hire in Deoghar for pilgrim groups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / keywords */}
      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm">
            Our expertise
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Tour Operators &amp; Travel Agents in Deoghar
          </h2>
          <p className="mb-8 max-w-3xl text-lg text-muted-foreground">
            We are Deoghar, Jharkhand No.1 Car Rental Company — trusted for traveller hiring, temple
            tours, and airport transfers.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-border bg-card px-3.5 py-2 font-accent text-sm font-medium text-foreground shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-muted/40 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm">
            Fleet options
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Rent a car with driver in Deoghar at best price
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            Dzire, Ertiga, Scorpio, Crysta Innova, Tempo Traveller — choose the right vehicle for
            your trip.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) =>
              vehicle ? (
                <Link
                  key={vehicle.slug}
                  href={`/fleet/${vehicle.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_14px_32px_-18px_rgba(20,40,60,0.35)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-accent px-2.5 py-1 font-accent text-[10px] font-bold tracking-wide text-accent-foreground uppercase">
                      {vehicle.seats}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                      {vehicle.name}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {vehicle.summary}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-primary">
                      View details
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary px-4 py-14 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-white md:text-4xl">
              Looking for the best car rental in Deoghar?
            </h2>
            <p className="text-lg text-white/85">Call us at {PHONE_DISPLAY}.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-accent text-base font-semibold text-accent-foreground hover:brightness-110"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! Looking for the best car rental in Deoghar.')}`}
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

      <Footer />
    </div>
  )
}
