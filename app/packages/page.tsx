import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  CheckCircle2,
  CreditCard,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Train,
} from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute:
      'Book our Car Rental Company in Deoghar at an affordable rate | Deoghar Travels',
  },
  description:
    'Explore scenic valleys, serene dams, sacred temples, and iconic tourist sites with Deoghar Travel Services, an affordable Car Rental Company in Deoghar. Book your car now.',
  keywords:
    'Car Rental Company in Deoghar, best Car Rental Company in Deoghar, Book Now Deoghar to Sultanganj, Swift Dzire, Scorpio, Innova, Tata Winger, Bus, Deoghar Tempo Traveler Rental, Deoghar Out Station Taxi',
}

const howToReach = [
  { from: 'Mumbai', via: 'via Delhi', schedule: 'Daily' },
  { from: 'Ahmedabad', via: 'via Kolkata', schedule: 'Alternate Days' },
  { from: 'Bangalore', via: 'via Patna', schedule: 'Regular' },
  { from: 'Jaipur', via: 'via Delhi', schedule: 'Daily' },
  { from: 'Patna', via: 'via Delhi / Mumbai / Ahmedabad', schedule: 'Daily' },
]

const trainStations = [
  'Jasidih',
  'Dhanbad',
  'Asansol',
  'Bhagalpur',
  'Baidyanath Dham Junction',
]

const fleet = [
  'Swift Dzire',
  'Scorpio',
  'Innova',
  'Tata Winger',
  'Tempo Traveller',
  'Bus',
]

const places = [
  {
    name: 'Baba Baidyanath Dham Temple',
    vehicle: 'Local Taxi & Car Hire',
    description:
      'It is one of the most revered twelve Jyotirlingas in India, representing a holy site for pilgrims, especially during the Shravan mela. For navigating the busy, narrow lanes surrounding the shrine smoothly, without worrying about parking and congestion, our Deoghar Local Travel Agency provides tourists with seasoned drivers who know the correct drop off points nearest to the temple entrance.',
  },
  {
    name: 'Baba Basukinath Temple',
    vehicle: 'Deoghar Out Station Taxi',
    description:
      'It is a sacred shrine and a must-visit on a traditional pilgrimage tour in Deoghar. Locals believe that prayers made at Baidyanath Dham are only granted after paying homage to Lord Shiva’s court in Basukinath. Located in Dumka, about 50 km away from Deoghar, tourists must book a Deoghar Out Station Taxi for a smooth drive through the city routes.',
  },
  {
    name: 'Sultanganj Ghat',
    vehicle: 'Tempo Traveller Rental',
    description:
      'This river bank on the Ganges is where the religious journey traditionally begins; devotees collect holy water before embarking on their long, dedicated march towards the Ajgaibinath Temple. If you are traveling with large groups of pilgrims, then our spacious Deoghar Tempo Traveler Rental would be viable for you, as it offers comfortable seating arrangements and luggage compartments.',
  },
  {
    name: 'Tarapeeth Temple',
    vehicle: 'Tempo Traveller Rental',
    description:
      'It is one of the famous Shakti Peeths dedicated to Goddess Tara, where devotees visit throughout the year. Known for its Tantric heritage, it has attracted tourists from all over India. So, for families or any large tourist groups undertaking this journey, our Deoghar Tempo Traveler Rental service ensures a smooth ride.',
  },
  {
    name: 'Noulakha Temple',
    vehicle: 'Local Sightseeing',
    description:
      'Around 1.5 km away from Baba Baidyanath Temple, Noulakha Temple is a mirror image of Belur Math in West Bengal. A flock of visitors comes to this spiritual sanctuary to admire its architectural carvings and offer prayers to Lord Krishna and Radha. At our Car Rental Company in Deoghar, we also include this place in your local sightseeing itinerary.',
  },
  {
    name: 'Parasnath Temple',
    vehicle: 'Deoghar Bus Booking',
    description:
      'Primarily known for the Jain Pilgrimage, but people of all religions adore this place as a monument of immense historical and spiritual depth. If you are organizing multi-family or institutional excursions to this location, our specialized Deoghar bus booking service is always at your disposal, offering luxury seating spaces at affordable rates.',
  },
  {
    name: 'Tapovan',
    vehicle: 'Round Trip Taxi',
    description:
      'This religious site has the Taponath Mahadev Temple, a miraculously cracked rock, and ancient caves where sages used to do meditation (tapasya). Tourists mainly come here for trekking, exploration, and introspection in nature. From dropping you off at the Tapovan to picking you up on time, our Deoghar Round Trip Taxi services take care of everything.',
  },
  {
    name: 'Mandar Hills',
    vehicle: 'Outstation Taxi',
    description:
      'Located around 50 km south of Bhagalpur, this 700 ft tall hill holds importance in Hindu mythology. It is believed to be used by the Gods to churn the ocean and procure Amrit. It is equally revered by Jains, as they believe their 12th Tirthankara attained Nirvana on the summit of this hill. As this journey involves highway stretches and localized traffic outside the main city, our transport options will help you reach the foothills comfortably.',
  },
  {
    name: 'Trikuta Parvata',
    vehicle: 'Tempo Traveller Rental',
    description:
      'A quaint religious hillock near Deoghar that we include on your way to Baba Basukinath Temple. A short climb to the hill will lead you to Trikutachal Mahadeva Temple, which has significance dating back to the Ramayana. It is the ideal spot for nature lovers and thrill seekers. With our Deoghar Tempo Traveler Rental, you can go for an exciting weekend trip out in the hills.',
  },
  {
    name: 'Nandan Pahar',
    vehicle: 'Flexible Pickup & Drop',
    description:
      'Around 3 km away from Baba Baidyanath Dham Station, Nandan Pahar also has a deep connection to the Ramayana. Here you can visit the Shiva temple and offer your prayers. The hilltop also boasts the Nandan Hill Entertainment Park with swimming and boating facilities. Our transport options offer flexible pick-up and drop off windows so that you can enjoy your leisure time at the park.',
  },
  {
    name: 'Satsang and Rikhia Ashram',
    vehicle: 'Local Transport',
    description:
      'These ashrams in Deoghar are ideal places for spiritual retreats. People all across Deoghar and the rest of India come here to experience mental rejuvenation and spiritual evolution. Our Car Rental Company in Deoghar offers local transport services for seamless access to these ashrams, ensuring easy arrivals even during peak congregation days.',
  },
]

const pickups = [
  'Deoghar Airport Pickup/Drop',
  'Jasidih Railway Station Pickup/Drop',
  'Deoghar Railway Station Pickup/Drop',
  'Deoghar to Basukinath Pickup/Drop',
  'Deoghar to Mandar Hill Pickup/Drop',
  'Deoghar To Tarapith Temple Pickup/Drop',
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

const inclusions = [
  'Pick up from the location',
  'Hotel accommodations (3 to 5-star hotels at good prices)',
  'Sightseeing arrangements',
  'Drop-off activities',
]

export default function Packages() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-[92svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/tempo.jpg"
          alt="Car rental company in Deoghar"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,160,80,0.2),transparent_50%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-24">
          <p className="mb-4 font-accent text-sm font-semibold tracking-[0.2em] text-accent uppercase animate-fade-in">
            Car Rental Company in Deoghar
          </p>
          <h1 className="mb-5 max-w-4xl font-serif text-4xl font-bold leading-[1.06] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Tour packages at an affordable rate
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-white/85 md:text-xl animate-fade-in-up delay-100">
            Explore scenic valleys, serene dams, sacred temples, and iconic tourist sites with
            Deoghar Travel Services. Book Dzire, Scorpio, Innova, Winger, Tempo Traveller &amp; Bus.
          </p>
          <div className="mb-8 flex flex-wrap gap-2 animate-fade-in-up delay-100">
            {fleet.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-accent text-xs font-medium text-white backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 animate-fade-in-up delay-200">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Phone size={18} />
              Book Now — {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book a car rental package in Deoghar.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 font-accent text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Travel guide
          </p>
          <h2 className="mb-10 font-serif text-4xl font-bold text-foreground md:text-5xl">
            How to Reach
          </h2>

          <div className="mb-12 divide-y divide-border border-y border-border">
            {howToReach.map((route) => (
              <div
                key={route.from}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-accent text-lg font-semibold text-foreground">
                    From {route.from}
                  </p>
                  <p className="text-muted-foreground">{route.via} to Deoghar</p>
                </div>
                <p className="text-sm font-semibold text-primary sm:shrink-0">{route.schedule}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-secondary p-8 text-white md:p-9">
              <Train size={26} className="mb-4 text-accent" />
              <h3 className="mb-4 font-serif text-2xl font-bold text-white">
                Nearest Train Station
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainStations.map((station) => (
                  <span
                    key={station}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90"
                  >
                    {station}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-gradient-to-br from-primary to-primary-light p-8 text-white md:p-9">
              <Plane size={26} className="mb-4 text-white/90" />
              <h3 className="mb-4 font-serif text-2xl font-bold text-white">Nearest Airport</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Deoghar Airport or Baba Baidyanath Airport — we offer airport pickup and drop for
                all major vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Destinations
          </p>
          <h2 className="mb-5 max-w-4xl font-serif text-4xl font-bold text-foreground md:text-5xl">
            Places You Can Explore in Deoghar with Our Car Rental Company
          </h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            In Deoghar, you can enjoy a profound journey into the spiritual landscapes and scenic
            hills. This destination attracts millions of devotees and tourists across India. To
            travel seamlessly through the varied sacred sites and mountainous terrains, rely on our
            Car Rental Company in Deoghar. At Deoghar Travels, we ensure you travel with comfort
            and peace of mind.
          </p>

          <div className="space-y-6">
            {places.map((place, index) => (
              <article
                key={place.name}
                className="rounded-[1.5rem] border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="font-accent text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {place.name}
                  </h3>
                </div>
                <p className="mb-3 inline-flex items-center gap-2 font-accent text-sm font-semibold tracking-wide text-accent uppercase">
                  <MapPin size={14} />
                  {place.vehicle}
                </p>
                <p className="leading-relaxed text-muted-foreground">{place.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions + Payments */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Package details
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Inclusions
            </h2>
            <ul className="mb-6 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We are not responsible for meal arrangements.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We have not listed the exact prices of Deoghar car and bus rental packages publicly,
              as they can be negotiated as per the amenities you want us to provide. Call us today
              at {PHONE_DISPLAY}; our Travel Agents In Deoghar will guide you appropriately.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-secondary p-8 text-white md:p-10">
            <CreditCard size={26} className="mb-4 text-accent" />
            <h2 className="mb-4 font-serif text-3xl font-bold text-white">Payments Terms</h2>
            <p className="mb-4 leading-relaxed text-white/80">
              To book our local taxi service in Deoghar, you need to pay{' '}
              <strong className="text-accent">10% of the total amount</strong> in advance. The
              remaining amount you can pay directly to the driver. All these pricing regulations are
              pre-decided.
            </p>
            <p className="leading-relaxed text-white/80">
              We accept all UPI payment gateways, including Google Pay, PhonePe, and net banking.
              For tourists who prefer cash payments, we have that option available, too.
            </p>
          </div>
        </div>
      </section>

      {/* Pickup & Drop */}
      <section className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Transfers
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            We also provide Pickup and Drop Services
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            Airport, railway, temple routes, and outstation drops — book Deoghar to Sultanganj and
            more.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pickups.map((item) => (
              <a
                key={item}
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello! I want to book: ${item}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MapPin size={16} className="shrink-0 text-primary" />
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/scorpio.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Best Car Rental Company in Deoghar
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Book Now — Deoghar to Sultanganj &amp; more
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Swift Dzire, Scorpio, Innova, Tata Winger, Bus and more at affordable rates. Call{' '}
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
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book a Deoghar tour package.')}`}
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
