import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  Building2,
  CheckCircle2,
  MessageCircle,
  Phone,
  Route,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute:
      'Best Deoghar Tour & Travels Company in India for Safe & Comfortable Rides',
  },
  description:
    'Looking for Deoghar Tour & Travels Company in India? With 5+ years of expertise and multiple 5-star reviews, Deoghar Travels is your go-to choice. Book us now.',
  keywords:
    'Deoghar Tour & Travels Company, Book Car and Bus on rent Sultanganj to Deoghar, Deoghar one way taxi, Deoghar round trip taxi, Car Rental Company in Deoghar',
}

const b2bServices = [
  'Exclusive deals in hotel bookings',
  'Marketing support',
]

const b2cServices = [
  'Customized car rental packages for families and tourist groups',
  'Deoghar outstation taxi for weddings and other festivities',
  '24/7 customer assistance — Call or WhatsApp Now 9835875097',
  'Multiple religious tours across Deoghar',
]

const highlights = [
  { value: '5+', label: 'Years expertise' },
  { value: '5★', label: 'Customer reviews' },
  { value: '7', label: 'Vehicle types' },
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-[92svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/scorpio.jpg"
          alt="Deoghar Tour and Travels Company"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,160,80,0.22),transparent_50%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-24">
          <p className="mb-4 font-accent text-sm font-semibold tracking-[0.2em] text-accent uppercase animate-fade-in">
            Deoghar Tour &amp; Travels
          </p>
          <h1 className="mb-5 max-w-4xl font-serif text-4xl font-bold leading-[1.06] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Your Journey Begins with Deoghar Travels
          </h1>
          <p className="mb-8 max-w-xl text-lg text-white/85 md:text-xl animate-fade-in-up delay-100">
            Safe &amp; comfortable car and bus rentals — from Sultanganj to Deoghar and across
            Jharkhand.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up delay-200">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book with Deoghar Tour & Travels Company.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 font-accent text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro + highlights */}
      <section className="relative overflow-hidden bg-background px-4 py-16 md:py-24">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                About our company
              </p>
              <p className="max-w-2xl font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl">
                Deoghar Tour &amp; Travel Guide offers one of the finest travel experiences in
                Deoghar.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Our Deoghar Tour &amp; Travels Company provides tourists with properly organized and
                executed tours in our rental cars, buses and tempo travelers at the most affordable
                rates. To make our clients feel valued and important, our tour agents are deeply
                dedicated to providing them with incredible experiences in Deoghar.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fleet/innova.jpg"
              alt="Deoghar Travels fleet for comfortable rides"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-accent text-sm font-semibold tracking-wide text-white uppercase">
              Personalized trips since day one
            </p>
          </div>
          <div>
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Our Story
            </p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Almost 5 years of memorable journeys
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Almost 5 years have passed since we started our Deoghar Tour &amp; Travels Company,
              which has brought out the unparalleled beauty of Deoghar. We started with the aim of
              creating personalized and memorable travel experiences for tourists, tapping into
              Deoghar’s spirituality, natural and cultural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Why choose us
            </p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground md:text-5xl">
              What Sets us Apart
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Deoghar Tour &amp; Travel Guide, we craft each travel to resonate with the soul of
              our tourists. We are committed to providing you with excellent service, attending to
              all minor to major details as per your request, which makes our vehicle rental
              services worth remembering.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-secondary p-8 text-white md:p-10">
              <Route size={28} className="mb-4 text-accent" />
              <h3 className="mb-3 font-serif text-2xl font-bold">Pickup &amp; drop across Jharkhand</h3>
              <p className="leading-relaxed text-white/75">
                As a reliable Car Rental Company in Deoghar, we offer pickup and drop services in
                several places across Jharkhand. For local sightseeing or trips, you can even book
                our Deoghar one way taxi or Deoghar round trip taxi services.
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-[1.5rem] bg-gradient-to-br from-primary to-primary-light p-8 text-white md:p-10">
              <p className="mb-2 font-accent text-sm font-semibold tracking-[0.16em] uppercase text-white/80">
                Popular route
              </p>
              <h3 className="mb-3 font-serif text-3xl font-bold">Sultanganj to Deoghar</h3>
              <p className="mb-6 leading-relaxed text-white/85">
                Book car and bus on rent for this pilgrimage corridor — clean vehicles, on-time
                drivers, fair rates.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-5 py-3 font-accent text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                <Phone size={16} />
                Book this route
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* B2B & B2C */}
      <section className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Who we serve
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Partners &amp; travelers
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-border bg-card p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Building2 size={22} />
              </div>
              <h3 className="mb-3 font-serif text-3xl font-bold text-foreground">B2B Services</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                The B2B services of our Deoghar Tour &amp; Travels Company are customized to enhance
                your hotel business in the tourism industry, ensuring smooth collaboration and
                incomparable value to you and your customer base.
              </p>
              <ul className="space-y-3">
                {b2bServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.5rem] border border-border bg-card p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Users size={22} />
              </div>
              <h3 className="mb-3 font-serif text-3xl font-bold text-foreground">B2C Services</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Want to experience the extraordinary places in Deoghar? Deoghar Travels designs
                every car and bus rental service to leave a lasting impression on your mind. All of
                our B2C services are designed to fulfill your travel dreams in Deoghar.
              </p>
              <ul className="space-y-3">
                {b2cServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/tempo.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Deoghar Tour
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Ready for a safe &amp; comfortable ride?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Book car and bus on rent with Deoghar Tour &amp; Travels — Call or WhatsApp{' '}
            {PHONE_DISPLAY}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book with Deoghar Tour & Travels Company.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-accent text-base font-semibold text-white hover:brightness-110"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
