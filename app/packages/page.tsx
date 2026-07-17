import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { LeadQuoteForm } from '@/components/lead-quote-form'
import Link from 'next/link'
import { CheckCircle, Users, Calendar, ArrowRight } from 'lucide-react'
import { PHONE_TEL } from '@/lib/contact'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Tour Packages - Deoghar Travels',
  description:
    'Explore our curated pilgrimage tour packages to Deoghar. From budget-friendly to premium experiences, find the perfect spiritual journey.',
}

export default function Packages() {
  const packages = [
    {
      name: 'Express Pilgrim',
      duration: '3 Days / 2 Nights',
      price: '₹8,999',
      description: 'Perfect for those with limited time but deep spiritual intent',
      groupSize: '2-10 people',
      highlights: [
        'Mahakal Mandir temple visit and rituals',
        'Nandi Pahar temple exploration',
        'Evening Ganga Aarti ceremony',
        'Local vegetarian meals',
        'Basic hotel accommodation',
        'Local guide service',
      ],
      popular: false,
    },
    {
      name: 'Sacred Journey',
      duration: '5 Days / 4 Nights',
      price: '₹16,999',
      description: 'Our most comprehensive spiritual experience package',
      groupSize: '2-15 people',
      highlights: [
        'All Express Pilgrim inclusions',
        'Basukinath temple pilgrimage',
        'Rajarani temple visit',
        'Meditation sessions with local monks',
        'Traditional cooking class',
        'Private Ganga bathing ceremony',
        '3-star hotel accommodation',
        'Private tour guide',
        'Airport pickups & drops',
      ],
      popular: true,
    },
    {
      name: 'Divine Immersion',
      duration: '7 Days / 6 Nights',
      price: '₹28,999',
      description: "Ultimate deep-dive into Deoghar's spiritual heritage",
      groupSize: '2-8 people',
      highlights: [
        'All Sacred Journey inclusions',
        'Multi-day silent meditation retreat',
        'Personal spiritual counseling sessions',
        'Temple priest blessing ceremonies',
        'Wellness yoga program',
        'Ayurvedic body treatment',
        'Premium 4-star resort stay',
        'All-inclusive meals',
        'Exclusive small group experience',
        'Personalized spiritual itinerary',
      ],
      popular: false,
    },
  ]

  const inclusions = [
    'Accommodation in quality hotels',
    'All meals (vegetarian)',
    'Local expert guides',
    'Temple entrance fees',
    'Airport/station transfers',
    'Transportation within city',
    '24/7 support hotline',
    'Travel insurance',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80"
          alt="Temple towers"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Curated journeys
          </p>
          <h1 className="mb-5 font-serif text-5xl font-semibold text-white md:text-6xl">
            Tour Packages
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Choose the pilgrimage experience that resonates with your spiritual journey
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * 120} direction="up">
                <div
                  className={`card-modern flex h-full flex-col ${pkg.popular ? 'card-modern-featured' : ''}`}
                >
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-primary to-primary-light py-2.5 text-center text-xs font-semibold tracking-widest text-primary-foreground uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
                      {pkg.name}
                    </h3>
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        <Calendar size={13} />
                        {pkg.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        <Users size={13} />
                        {pkg.groupSize}
                      </span>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {pkg.description}
                    </p>

                    <div className="mb-8 rounded-xl bg-mist px-4 py-4">
                      <p className="font-serif text-4xl font-semibold text-primary">{pkg.price}</p>
                      <p className="text-xs text-muted-foreground">Per person</p>
                    </div>

                    <ul className="mb-8 flex-1 space-y-3">
                      {pkg.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm">
                          <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Link
                        href="/"
                        className={`flex-1 rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                          pkg.popular
                            ? 'bg-primary text-primary-foreground hover:bg-primary-light'
                            : 'bg-secondary text-white hover:bg-secondary/90'
                        }`}
                      >
                        Book Now
                      </Link>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="flex-1 rounded-xl border border-border bg-background/60 py-3 text-center text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
              Always included
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground">
              What&apos;s Included in Every Package
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((inclusion, index) => (
              <Reveal key={inclusion} delay={index * 80}>
                <div className="card-modern flex h-full items-start gap-3 p-5">
                  <div className="card-icon !h-9 !w-9 shrink-0 !rounded-lg">
                    <CheckCircle size={16} />
                  </div>
                  <p className="pt-1.5 text-sm font-medium text-foreground">{inclusion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl bg-secondary px-8 py-12 text-white md:px-14 md:py-16">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
                Custom Packages Available
              </h2>
              <p className="mb-8 text-white/75">
                Each spiritual journey is unique. Whether you need special dietary arrangements,
                extended stays, specific temple visits, or family-oriented experiences — we tailor
                every detail.
              </p>
              <ul className="mb-10 grid gap-3 sm:grid-cols-2">
                {[
                  'Flexible dates and durations',
                  'Group discounts for 10+ people',
                  'Special dietary requirements',
                  'Wellness and fitness activities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                Get Custom Quote
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Packages */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 text-center font-serif text-4xl font-semibold text-foreground">
              Why Our Packages?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                title: 'Best Value',
                text: 'Competitive pricing without compromising on quality. We work directly with hotels and guides to offer the best rates.',
              },
              {
                title: 'Expert Planning',
                text: 'Every itinerary is crafted by our team with 15+ years of pilgrimage tourism experience.',
              },
              {
                title: 'Local Access',
                text: "Direct relationships with temples, priests, and local communities ensure authentic experiences you won't find elsewhere.",
              },
              {
                title: '24/7 Support',
                text: 'Round-the-clock support throughout your journey with multilingual assistance available.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="card-modern h-full p-7">
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <LeadQuoteForm
              title="Find Your Perfect Package"
              subtitle="Tell us about your preferences and we'll create the ideal spiritual journey"
            />
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
