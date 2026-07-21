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
    image: '/Baba_Baidyanath_Jyotirlinga_Temple.jpg',
  },
  {
    name: 'Baba Basukinath Temple',
    vehicle: 'Deoghar Out Station Taxi',
    description:
      'It is a sacred shrine and a must-visit on a traditional pilgrimage tour in Deoghar. Locals believe that prayers made at Baidyanath Dham are only granted after paying homage to Lord Shiva’s court in Basukinath. Located in Dumka, about 50 km away from Deoghar, tourists must book a Deoghar Out Station Taxi for a smooth drive through the city routes.',
    image: 'https://tripxl.com/blog/wp-content/uploads/2024/09/Location-388.jpg',
  },
  {
    name: 'Sultanganj Ghat',
    vehicle: 'Tempo Traveller Rental',
    description:
      'This river bank on the Ganges is where the religious journey traditionally begins; devotees collect holy water before embarking on their long, dedicated march towards the Ajgaibinath Temple. If you are traveling with large groups of pilgrims, then our spacious Deoghar Tempo Traveler Rental would be viable for you, as it offers comfortable seating arrangements and luggage compartments.',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.cULXT7Jl0V53MLTlW8dfBAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Tarapeeth Temple',
    vehicle: 'Tempo Traveller Rental',
    description:
      'It is one of the famous Shakti Peeths dedicated to Goddess Tara, where devotees visit throughout the year. Known for its Tantric heritage, it has attracted tourists from all over India. So, for families or any large tourist groups undertaking this journey, our Deoghar Tempo Traveler Rental service ensures a smooth ride.',
    image: 'https://tfipost.com/wp-content/uploads/2022/12/Tarapith_Mandir_entrance.jpg',
  },
  {
    name: 'Noulakha Temple',
    vehicle: 'Local Sightseeing',
    description:
      'Around 1.5 km away from Baba Baidyanath Temple, Noulakha Temple is a mirror image of Belur Math in West Bengal. A flock of visitors comes to this spiritual sanctuary to admire its architectural carvings and offer prayers to Lord Krishna and Radha. At our Car Rental Company in Deoghar, we also include this place in your local sightseeing itinerary.',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.DNlHDNfU6d21g1Sl9Vg29gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Parasnath Temple',
    vehicle: 'Deoghar Bus Booking',
    description:
      'Primarily known for the Jain Pilgrimage, but people of all religions adore this place as a monument of immense historical and spiritual depth. If you are organizing multi-family or institutional excursions to this location, our specialized Deoghar bus booking service is always at your disposal, offering luxury seating spaces at affordable rates.',
    image:
      'https://thumbs.dreamstime.com/b/parasnath-hills-landscape-parasnath-hills-tempel-landscape-197940177.jpg',
  },
  {
    name: 'Tapovan',
    vehicle: 'Round Trip Taxi',
    description:
      'This religious site has the Taponath Mahadev Temple, a miraculously cracked rock, and ancient caves where sages used to do meditation (tapasya). Tourists mainly come here for trekking, exploration, and introspection in nature. From dropping you off at the Tapovan to picking you up on time, our Deoghar Round Trip Taxi services take care of everything.',
    image:
      'https://uttarakhandtriptrek.com/wp-content/uploads/2022/04/Gangotri-Tapovan-Trekking.jpg',
  },
  {
    name: 'Mandar Hills',
    vehicle: 'Outstation Taxi',
    description:
      'Located around 50 km south of Bhagalpur, this 700 ft tall hill holds importance in Hindu mythology. It is believed to be used by the Gods to churn the ocean and procure Amrit. It is equally revered by Jains, as they believe their 12th Tirthankara attained Nirvana on the summit of this hill. As this journey involves highway stretches and localized traffic outside the main city, our transport options will help you reach the foothills comfortably.',
    image:
      'https://3.bp.blogspot.com/-hQeSCynOUVw/WGJrSMFwN6I/AAAAAAAAKHk/Us4PqpBMwoQwHerCVYidqD5PucMmHJucACEw/s1600/Copy%2Bof%2BMANDAR%2B%25281%2529.jpg',
  },
  {
    name: 'Trikuta Parvata',
    vehicle: 'Tempo Traveller Rental',
    description:
      'A quaint religious hillock near Deoghar that we include on your way to Baba Basukinath Temple. A short climb to the hill will lead you to Trikutachal Mahadeva Temple, which has significance dating back to the Ramayana. It is the ideal spot for nature lovers and thrill seekers. With our Deoghar Tempo Traveler Rental, you can go for an exciting weekend trip out in the hills.',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.YeKPPcxF87KW5b2CJ8yS0wHaEj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Nandan Pahar',
    vehicle: 'Flexible Pickup & Drop',
    description:
      'Around 3 km away from Baba Baidyanath Dham Station, Nandan Pahar also has a deep connection to the Ramayana. Here you can visit the Shiva temple and offer your prayers. The hilltop also boasts the Nandan Hill Entertainment Park with swimming and boating facilities. Our transport options offer flexible pick-up and drop off windows so that you can enjoy your leisure time at the park.',
    image:
      'https://th.bing.com/th/id/OIP.w5v0qEDsFaq9__11LOhH5gHaD5?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  },
  {
    name: 'Satsang and Rikhia Ashram',
    vehicle: 'Local Transport',
    description:
      'These ashrams in Deoghar are ideal places for spiritual retreats. People all across Deoghar and the rest of India come here to experience mental rejuvenation and spiritual evolution. Our Car Rental Company in Deoghar offers local transport services for seamless access to these ashrams, ensuring easy arrivals even during peak congregation days.',
    image: 'https://media.tripinvites.com/places/deoghar/satsang-ashram/satsang-ashram-featured.jpg',
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
          <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm sm:text-sm">
            Travel guide
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            How to Reach
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            Popular corridors to Deoghar — we arrange pickup from stations and airports along these
            routes.
          </p>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howToReach.map((route, index) => (
              <article
                key={route.from}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_14px_32px_-16px_rgba(20,40,60,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-accent via-primary to-primary-light" />
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative p-6 pl-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary font-accent text-xs font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-lg bg-accent px-3 py-1.5 font-accent text-[11px] font-bold tracking-wide text-accent-foreground uppercase shadow-sm">
                      {route.schedule}
                    </span>
                  </div>

                  <p className="mb-1 font-accent text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    Departure
                  </p>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-foreground md:text-[1.7rem]">
                    From {route.from}
                  </h3>

                  <div className="rounded-xl bg-muted/70 px-3.5 py-3">
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                      <span>
                        {route.via} to <span className="font-semibold text-foreground">Deoghar</span>
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-secondary p-8 text-white md:p-9">
              <Train size={26} className="mb-4 text-accent" />
              <h3 className="mb-4 font-serif text-2xl font-bold text-white">
                Nearest Train Station
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainStations.map((station) => (
                  <span
                    key={station}
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white/90"
                  >
                    {station}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-linear-to-br from-primary to-primary-light p-8 text-white md:p-9">
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
          <p className="mb-3 inline-flex items-center rounded-lg bg-accent px-3.5 py-1.5 font-accent text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-sm sm:text-sm">
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place, index) => (
              <article
                key={place.name}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_14px_32px_-18px_rgba(20,40,60,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-lg bg-card/95 px-2.5 py-1 font-accent text-xs font-bold tracking-wide text-primary shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-md bg-accent/15 px-2.5 py-1 font-accent text-[11px] font-semibold tracking-wide text-accent uppercase">
                    <MapPin size={12} />
                    {place.vehicle}
                  </p>
                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground md:text-2xl">
                    {place.name}
                  </h3>
                  <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {place.description}
                  </p>
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello! I want to book a trip to ${place.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 font-accent text-sm font-semibold text-primary hover:text-primary-light"
                  >
                    Book this trip
                    <MessageCircle size={14} />
                  </a>
                </div>
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
