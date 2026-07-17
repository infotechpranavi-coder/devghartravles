import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  Building2,
  Bus,
  Car,
  CheckCircle,
  HeartHandshake,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute: 'Best Deoghar Tour & Travels Company in India for Safe & Comfortable Rides',
  },
  description:
    'Looking for Deoghar Tour & Travels Company in India? With 5+ years of expertise and multiple 5-star reviews, Deoghar Travels is your go-to choice. Book us now.',
  keywords:
    'Deoghar Tour & Travels Company, Book Car and Bus on rent Sultanganj to Deoghar, Deoghar Tour and Travels, Car Rental Company in Deoghar, Deoghar one way taxi, Deoghar round trip taxi',
}

export default function About() {
  const apartPoints = [
    {
      icon: Sparkles,
      title: 'Soulful Travel Planning',
      description:
        'At Deoghar Tour & Travel Guide, we craft each travel to resonate with the soul of our tourists.',
    },
    {
      icon: HeartHandshake,
      title: 'Detail-Focused Service',
      description:
        'We attend to every minor and major request so our vehicle rental services are worth remembering.',
    },
    {
      icon: Car,
      title: 'Reliable Car Rentals',
      description:
        'As a reliable Car Rental Company in Deoghar, we offer pickup and drop across several places in Jharkhand.',
    },
    {
      icon: Bus,
      title: 'One Way & Round Trip',
      description:
        'For local sightseeing or trips, book our Deoghar one way taxi or Deoghar round trip taxi services.',
    },
  ]

  const b2bServices = [
    'Exclusive deals in hotel bookings',
    'Marketing support',
    'Smooth tourism industry collaboration',
    'Incomparable value for your customer base',
  ]

  const b2cServices = [
    'Customized car rental packages for families and tourist groups',
    'Deoghar outstation taxi for weddings and other festivities',
    '24/7 customer assistance — Call or WhatsApp 9835875097',
    'Multiple religious tours across Deoghar',
  ]

  const stats = [
    { value: 5, suffix: '+', label: 'Years Expertise' },
    { value: 5, suffix: '★', label: 'Star Reviews' },
    { value: 250, suffix: '+', label: 'Happy Travelers' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden md:min-h-[78vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=80"
          alt="Deoghar Tour and Travels journey"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-primary/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24">
          <Reveal direction="up">
            <p className="mb-3 font-accent text-lg font-semibold tracking-[0.14em] text-accent uppercase">
              Deoghar Tour & Travels Company
            </p>
            <h1 className="mb-5 max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-white text-balance md:text-7xl">
              Your Journey Begins with Deoghar Travels
            </h1>
            <p className="mb-8 max-w-2xl font-sans text-lg text-white/80 md:text-xl">
              Book car and bus on rent — including Sultanganj to Deoghar — for safe, comfortable, and
              affordable rides across Jharkhand.
            </p>
            <div className="flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-accent text-base font-semibold text-accent-foreground hover:brightness-110"
              >
                WhatsApp Now
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <p className="mb-4 flex items-center gap-2 font-accent text-base font-semibold tracking-widest text-primary uppercase">
              <span className="text-lg leading-none">✦</span>
              About our company
            </p>
            <h2 className="mb-5 font-serif text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
              Finest travel experiences in Deoghar
            </h2>
            <div className="space-y-4 font-sans text-lg leading-relaxed text-muted-foreground">
              <p>
                Deoghar Tour & Travel Guide offers our tourists one of the finest travel experiences
                in Deoghar. Our Deoghar Tour & Travels Company provides tourists with properly
                organized and executed tours in our rental cars, buses and tempo travelers at the
                most affordable rates.
              </p>
              <p>
                To make our clients feel valued and important, our tour agents are deeply dedicated
                to providing them with incredible experiences in Deoghar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
                  alt="Tourists traveling with Deoghar Travels"
                  className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-secondary px-5 py-4 shadow-xl md:-left-6 md:px-6 md:py-5">
                <p className="font-accent text-xs font-semibold tracking-widest text-accent uppercase">
                  Trusted choice
                </p>
                <p className="mt-1 font-serif text-2xl font-bold text-white md:text-3xl">
                  5+ Years · 5★ Reviews
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden px-4 py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#146E96] to-[#3F6B45]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(240,160,80,0.28),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120} direction="scale">
              <p className="font-serif text-5xl font-semibold text-accent md:text-6xl">
                <CountUp end={stat.value} suffix={stat.suffix} delay={index * 150} duration={2000} />
              </p>
              <p className="mt-2 font-accent text-sm font-medium tracking-wide text-white/80 uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <Reveal direction="left">
              <div className="overflow-hidden rounded-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
                  alt="Spiritual beauty of Deoghar"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} direction="right">
              <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
                Our Story
              </p>
              <h2 className="mb-5 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                Almost 5 years of bringing Deoghar closer to travelers
              </h2>
              <div className="space-y-4 font-sans text-lg leading-relaxed text-muted-foreground">
                <p>
                  Almost 5 years have passed since we started our Deoghar Tour & Travels Company,
                  which has brought out the unparalleled beauty of Deoghar.
                </p>
                <p>
                  We started with the aim of creating personalized and memorable travel experiences
                  for tourists, tapping into Deoghar&apos;s spirituality, natural and cultural beauty.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 md:mb-16 md:max-w-3xl">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Why choose us
            </p>
            <h2 className="mb-4 font-serif text-5xl font-bold text-foreground md:text-6xl">
              What Sets Us Apart
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Looking for Deoghar Tour & Travels Company in India? With 5+ years of expertise and
              multiple 5-star reviews, Deoghar Travels is your go-to choice.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {apartPoints.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 80} direction="up">
                  <div className="group flex gap-5 border-b border-primary/10 pb-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-brand-green/15 text-primary transition-transform duration-500 group-hover:scale-105">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* B2B + B2C */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <article className="h-full overflow-hidden rounded-[2rem] border border-primary/10 bg-card p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2 size={26} />
              </div>
              <p className="mb-2 font-accent text-sm font-semibold tracking-widest text-primary uppercase">
                For partners
              </p>
              <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">B2B Services</h2>
              <p className="mb-7 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                The B2B services of our Deoghar Tour & Travels Company are customized to enhance
                your hotel business in the tourism industry, ensuring smooth collaboration and
                incomparable value to you and your customer base.
              </p>
              <ul className="space-y-3">
                {b2bServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-foreground">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100} direction="right">
            <article className="h-full overflow-hidden rounded-[2rem] border border-accent/25 bg-card p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                <Users size={26} />
              </div>
              <p className="mb-2 font-accent text-sm font-semibold tracking-widest text-accent uppercase">
                For travelers
              </p>
              <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">B2C Services</h2>
              <p className="mb-7 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                Want to experience the extraordinary places in Deoghar? Deoghar Travels designs every
                car and bus rental service to leave a lasting impression on your mind. All of our
                B2C services are designed to fulfill your travel dreams in Deoghar.
              </p>
              <ul className="space-y-3">
                {b2cServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-foreground">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Route highlight */}
      <section className="bg-mist px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-secondary px-8 py-10 md:flex-row md:items-center md:px-12 md:py-12">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-accent text-xs font-semibold tracking-widest text-accent uppercase">
                  <Star size={12} fill="currentColor" />
                  Popular route
                </div>
                <h2 className="mb-3 font-serif text-3xl font-bold text-white md:text-4xl">
                  Book Car and Bus on Rent — Sultanganj to Deoghar
                </h2>
                <p className="font-sans text-base text-white/75 md:text-lg">
                  Safe and comfortable rides with our Deoghar Tour & Travels Company for
                  pilgrimages, family trips, and group travel.
                </p>
              </div>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book car/bus on rent from Sultanganj to Deoghar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-accent text-base font-semibold text-accent-foreground hover:brightness-110"
              >
                Book This Route
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(20,110,150,0.45),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(240,160,80,0.22),transparent_40%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal direction="scale">
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Book us now
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              Ready for a safe & comfortable ride?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-sans text-lg text-white/75">
              Call or WhatsApp Now {PHONE_DISPLAY} for car rental, bus hire, tempo traveller, one
              way taxi, round trip taxi, and religious tours across Deoghar.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light sm:w-auto"
              >
                <Phone size={18} />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello! I'd like to book with Deoghar Travels.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-accent text-base font-semibold text-white hover:brightness-110 sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
              <Link
                href="/packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-4 font-accent text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                View Packages
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
