import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { Reveal } from '@/components/reveal'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  Bus,
  Car,
  CheckCircle,
  CreditCard,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Train,
  Route,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute:
      'Book our Car Rental Company in Deoghar at an affordable rate | Deoghar Travels',
  },
  description:
    'Explore scenic valleys, serene dams, sacred temples, and iconic tourist sites with Deoghar Travel Services, an affordable Car Rental Company in Deoghar. Book your car now.',
  keywords:
    'Car Rental Company in Deoghar, best Car Rental Company in Deoghar, Book Now Deoghar to Sultanganj, Swift Dzire, Scorpio, Innova, Tata Winger, Bus, Deoghar Tempo Traveler Rental, Deoghar Out Station Taxi, Deoghar Round Trip Taxi',
}

export default function Packages() {
  const howToReach = [
    { from: 'Mumbai', via: 'Delhi', schedule: 'Daily' },
    { from: 'Ahmedabad', via: 'Kolkata', schedule: 'Alternate Days' },
    { from: 'Bangalore', via: 'Patna', schedule: 'Regular' },
    { from: 'Jaipur', via: 'Delhi', schedule: 'Daily' },
    { from: 'Patna', via: 'Delhi / Mumbai / Ahmedabad', schedule: 'Daily' },
  ]

  const trainStations = [
    'Jasidih',
    'Dhanbad',
    'Asansol',
    'Bhagalpur',
    'Baidyanath Dham Junction',
  ]

  const places = [
    {
      name: 'Baba Baidyanath Dham Temple',
      vehicle: 'Local Taxi & Car Hire',
      description:
        'One of the twelve Jyotirlingas in India and a holy site for pilgrims, especially during Shravan Mela. Our drivers know the correct drop-off points nearest to the temple entrance so you can avoid parking stress and congestion in the busy lanes.',
      image:
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Baba Basukinath Temple',
      vehicle: 'Deoghar Out Station Taxi',
      description:
        'A must-visit on a traditional pilgrimage tour. Locals believe prayers at Baidyanath Dham are granted after homage at Basukinath. Located in Dumka, about 50 km from Deoghar — book an outstation taxi for a smooth drive.',
      image:
        'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Sultanganj Ghat',
      vehicle: 'Deoghar Tempo Traveler Rental',
      description:
        'This Ganges river bank is where the religious journey traditionally begins, as devotees collect holy water before marching toward Ajgaibinath Temple. Ideal for large pilgrim groups with comfortable seating and luggage space.',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Tarapeeth Temple',
      vehicle: 'Deoghar Tempo Traveler Rental',
      description:
        'A famous Shakti Peeth dedicated to Goddess Tara, known for its Tantric heritage. Families and large tourist groups can travel smoothly with our tempo traveller rental for this journey.',
      image:
        'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Noulakha Temple',
      vehicle: 'Local Sightseeing Car Rental',
      description:
        'Around 1.5 km from Baba Baidyanath Temple, this sanctuary mirrors Belur Math in West Bengal. Visitors admire its carvings and offer prayers to Lord Krishna and Radha — included in our local sightseeing itineraries.',
      image:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Parasnath Temple',
      vehicle: 'Deoghar Bus Booking',
      description:
        'A major Jain pilgrimage site with deep historical and spiritual significance for all faiths. For multi-family or institutional excursions, our bus booking service offers comfortable seating at affordable rates.',
      image:
        'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Tapovan',
      vehicle: 'Deoghar Round Trip Taxi',
      description:
        'Home to Taponath Mahadev Temple, a miraculously cracked rock, and ancient caves used for meditation. Ideal for trekking and nature exploration — our round trip taxi handles drop-off and timely pickup.',
      image:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Mandar Hills',
      vehicle: 'Highway & Outstation Transport',
      description:
        'Around 50 km south of Bhagalpur, this 700 ft hill is sacred in Hindu mythology and also revered by Jains. Our transport options help you reach the foothills comfortably through highway and local traffic.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Trikuta Parvata',
      vehicle: 'Deoghar Tempo Traveler Rental',
      description:
        'A religious hillock near Deoghar, often included on the way to Basukinath. A short climb leads to Trikutachal Mahadeva Temple — ideal for nature lovers and thrill seekers on a weekend hill trip.',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Nandan Pahar',
      vehicle: 'Flexible Local Taxi',
      description:
        'About 3 km from Baidyanath Dham Station, with a Shiva temple and Nandan Hill Entertainment Park for swimming and boating. Flexible pick-up and drop windows so you can enjoy leisure time at the park.',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Satsang and Rikhia Ashram',
      vehicle: 'Local Car Rental',
      description:
        'Ideal spiritual retreats for mental rejuvenation and spiritual evolution. Our Car Rental Company in Deoghar offers local transport for seamless access, even during peak congregation days.',
      image:
        'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=900&q=80',
    },
  ]

  const inclusions = [
    'Pickup from your location',
    'Clean AC vehicle with driver',
    'Local sightseeing & route guidance',
    'Drop at your preferred destination',
  ]

  const pickups = [
    'Deoghar Airport Pickup/Drop',
    'Jasidih Railway Station Pickup/Drop',
    'Deoghar Railway Station Pickup/Drop',
    'Deoghar to Basukinath Pickup/Drop',
    'Deoghar to Mandar Hill Pickup/Drop',
    'Deoghar to Tarapith Temple Pickup/Drop',
    'Deoghar to Rajrappa Temple Pickup/Drop',
    'Deoghar to Parasnath Hills Pickup/Drop',
    'Deoghar to Sultanganj Pickup/Drop',
    'Deoghar to Kolkata Pickup/Drop',
    'Deoghar to Patna Pickup/Drop',
    'Deoghar to Ranchi Pickup/Drop',
    'Deoghar to Godda Pickup/Drop',
    'Deoghar to Dumka Pickup/Drop',
    'Deoghar to Bhagalpur Pickup/Drop',
    'Bus Services Deoghar to Kolkata',
  ]

  const fleet = [
    'Swift Dzire',
    'Scorpio',
    'Innova',
    'Tata Winger',
    'Tempo Traveller',
    'Bus',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden md:min-h-[78vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80"
          alt="Car rental for Deoghar tour packages"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/55 via-transparent to-primary/15" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24">
          <Reveal direction="up">
            <p className="mb-3 font-accent text-lg font-semibold tracking-[0.14em] text-accent uppercase">
              Car Rental Company in Deoghar
            </p>
            <h1 className="mb-5 max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-white text-balance md:text-7xl">
              Car Rentals & Popular Routes
            </h1>
            <p className="mb-8 max-w-2xl font-sans text-lg text-white/80 md:text-xl">
              Explore scenic valleys, serene dams, sacred temples, and iconic tourist sites with
              Deoghar Travels — an affordable Car Rental Company in Deoghar. Book Now for Deoghar to
              Sultanganj in Swift Dzire, Scorpio, Innova, Tata Winger, Bus & more.
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
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book a Deoghar car rental / tour package.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-accent text-base font-semibold text-accent-foreground hover:brightness-110"
              >
                Book Now
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fleet strip */}
      <section className="border-b border-primary/10 bg-card px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 md:justify-between">
          <p className="font-accent text-sm font-semibold tracking-widest text-primary uppercase">
            Available fleet
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {fleet.map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary/10 px-3 py-1.5 font-accent text-xs font-semibold text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How to reach */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(20,110,150,0.45),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(240,160,80,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid items-end gap-8 md:mb-16 lg:grid-cols-[1fr_1.1fr]">
            <Reveal direction="left">
              <p className="mb-3 font-accent text-base font-medium tracking-widest text-accent uppercase">
                Travel guide
              </p>
              <h2 className="font-serif text-4xl font-bold text-white md:text-6xl text-balance">
                How to Reach
              </h2>
            </Reveal>
            <Reveal delay={80} direction="right">
              <p className="max-w-xl font-sans text-lg text-white/70 md:text-xl md:justify-self-end">
                Arrive by train or air, then book our Car Rental Company in Deoghar for seamless
                local and outstation transfers.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr] lg:gap-10">
            {/* Routes timeline */}
            <Reveal direction="up">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Route size={20} />
                  </div>
                  <div>
                    <p className="font-accent text-xs font-semibold tracking-widest text-accent uppercase">
                      Popular corridors
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-white">By Road / Train</h3>
                  </div>
                </div>

                <div className="relative space-y-0">
                  <div className="absolute top-3 bottom-3 left-[15px] w-px bg-gradient-to-b from-accent via-primary to-brand-green md:left-[19px]" />
                  {howToReach.map((route, index) => (
                    <div
                      key={route.from}
                      className="relative flex gap-4 py-3.5 md:gap-5"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-secondary md:h-10 md:w-10">
                        <span className="h-2 w-2 rounded-full bg-accent md:h-2.5 md:w-2.5" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1 border-b border-white/10 pb-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div>
                          <p className="font-serif text-xl font-bold text-white md:text-2xl">
                            {route.from}
                            <span className="mx-2 font-sans text-base font-normal text-white/40">
                              →
                            </span>
                            Deoghar
                          </p>
                          <p className="font-accent text-sm text-white/55">via {route.via}</p>
                        </div>
                        <span className="w-fit rounded-full bg-accent/20 px-3 py-1 font-accent text-xs font-semibold tracking-wide text-accent uppercase">
                          {route.schedule}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Stations + Airport */}
            <div className="flex flex-col gap-6">
              <Reveal delay={100} direction="right">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-primary to-primary-light p-6 text-white md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                      <Train size={20} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Nearest Train Station
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {trainStations.map((station) => (
                      <div
                        key={station}
                        className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-3 backdrop-blur-sm"
                      >
                        <MapPin size={14} className="shrink-0 text-accent" />
                        <span className="font-accent text-sm font-semibold text-white">
                          {station}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180} direction="right">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-card p-6 md:p-7">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-green/15" />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                        <Plane size={20} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        Nearest Airport
                      </h3>
                    </div>
                    <p className="mb-2 font-serif text-xl font-bold text-foreground md:text-2xl">
                      Deoghar Airport
                    </p>
                    <p className="mb-5 font-accent text-sm font-medium tracking-wide text-brand-green uppercase">
                      Baba Baidyanath Airport
                    </p>
                    <p className="mb-5 font-sans text-base leading-relaxed text-foreground/75">
                      We provide airport pickup and drop with our Car Rental Company in Deoghar —
                      Swift Dzire, Scorpio, Innova & more.
                    </p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 font-accent text-sm font-semibold text-white hover:bg-secondary/90"
                    >
                      <Phone size={16} />
                      Book Airport Transfer
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 md:mb-16 md:max-w-3xl">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Sacred & scenic stops
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Places You Can Explore with Our Car Rental Company in Deoghar
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              In Deoghar, enjoy a profound journey into spiritual landscapes and scenic hills. To
              travel seamlessly through sacred sites and mountainous terrains, rely on Deoghar
              Travels — we ensure you travel with comfort and peace of mind.
            </p>
          </Reveal>

          <div className="space-y-5">
            {places.map((place, index) => (
              <Reveal key={place.name} delay={(index % 3) * 60} direction="up">
                <article
                  className={`grid overflow-hidden rounded-[1.5rem] border border-primary/10 bg-card md:grid-cols-[0.75fr_1.25fr] ${
                    index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative min-h-[180px] md:min-h-[210px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={place.image}
                      alt={place.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 md:p-7">
                    <span className="mb-2 w-fit rounded-full bg-accent/15 px-3 py-1 font-accent text-[11px] font-semibold tracking-wide text-foreground uppercase">
                      {place.vehicle}
                    </span>
                    <h3 className="mb-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
                      {place.name}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                      {place.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="left">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Package details
            </p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Inclusions
            </h2>
            <ul className="mb-6 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4 font-sans text-base leading-relaxed text-muted-foreground">
              We are not responsible for meal arrangements.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Exact prices of Deoghar car and bus rental packages are not listed publicly, as they
              can be negotiated as per the amenities you want. Call us today at{' '}
              <a href={`tel:${PHONE_TEL}`} className="font-semibold text-primary hover:underline">
                {PHONE_DISPLAY}
              </a>
              ; our Travel Agents in Deoghar will guide you appropriately.
            </p>
          </Reveal>

          <Reveal delay={100} direction="right">
            <div className="rounded-[1.75rem] bg-secondary p-7 text-white md:p-9">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <CreditCard size={22} />
              </div>
              <h3 className="mb-3 font-serif text-3xl font-bold text-white">Payment Terms</h3>
              <p className="mb-5 font-sans text-base leading-relaxed text-white/75">
                To book our local taxi service in Deoghar, pay <strong className="text-white">10%</strong> of
                the total amount in advance. The remaining amount can be paid directly to the driver.
                All pricing regulations are pre-decided.
              </p>
              <ul className="space-y-2.5 text-sm text-white/85">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                  UPI: Google Pay, PhonePe & net banking
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                  Cash payments also available
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pickup / Drop */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 md:mb-12 md:max-w-2xl">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Transfers
            </p>
            <h2 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Pickup and Drop Services
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              We also provide reliable pickup and drop across Deoghar and popular routes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pickups.map((item, index) => (
              <Reveal key={item} delay={(index % 6) * 40} direction="up">
                <div className="flex items-center gap-3 rounded-xl border border-primary/10 bg-card px-4 py-3.5">
                  {item.toLowerCase().includes('bus') ? (
                    <Bus size={18} className="shrink-0 text-accent" />
                  ) : item.toLowerCase().includes('airport') ? (
                    <Plane size={18} className="shrink-0 text-primary" />
                  ) : item.toLowerCase().includes('railway') || item.toLowerCase().includes('station') ? (
                    <Train size={18} className="shrink-0 text-brand-green" />
                  ) : (
                    <Car size={18} className="shrink-0 text-primary" />
                  )}
                  <p className="font-accent text-sm font-semibold text-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#146E96] to-[#3F6B45]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(240,160,80,0.28),transparent_45%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="scale">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <MapPin size={26} />
            </div>
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Best Car Rental Company in Deoghar
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              Book your Deoghar car or bus rental now
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-sans text-lg text-white/80">
              Call our Travel Agents in Deoghar at {PHONE_DISPLAY} for customized packages,
              sightseeing, and transfers.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 font-accent text-base font-semibold text-accent-foreground hover:brightness-110 sm:w-auto"
              >
                <Phone size={18} />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book Deoghar car/bus rental and tour package.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-accent text-base font-semibold text-white hover:brightness-110 sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-4 font-accent text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                Contact Us
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
