import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ADDRESS_LINE, EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import { MessageCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    absolute:
      'Jharkhand Travel Agents Terms & Conditions | Car Rental Services in Sultanganj',
  },
  description:
    'Car Hire in Babadham, Deoghar, Car Rental in Deoghar, Cabs in Deoghar Jharkhand Travel Agents ensure transparent, hassle-free vehicle bookings.',
  keywords:
    'Best travel agency in Deoghar, Car rental in Deoghar, Taxi service in Deoghar, Traveller in Deoghar, Taxi & Car Rental Service Banka Bihar, Car rent on Banka Mandar Hill, banka car services',
}

const cancellationCharges = [
  '60 days or more before arrival: 10% of the total tour/service cost',
  '45 days before arrival: 10% of the total tour/service cost',
  '15 days before arrival: 10% of the total tour/service cost',
  '10 days before arrival: 10% of the total tour/service cost',
  '7 days or less before arrival: Non-refundable',
]

const refundPolicies = [
  'Hotel booking cancellations and refunds are governed directly by the hotel providers and are not controlled by us. So, it will get processed in accordance with the respective hotel’s cancellation policy.',
  'If the driver arrives at your pickup location and you do not show up within the grace period (typically 30–45 minutes), the trip is canceled, and no refund will be issued to cover the driver’s time and fuel costs.',
  'Canceling 24 hours before the trip frequently results in a strict no-refund policy.',
  'Our local tour operators typically require a 10% to 20% advance payment to secure the vehicle, especially during peak seasons like the Shravani Mela (July–August). If you cancel at least 48 hours in advance, this token money is usually fully refundable or can be adjusted to a future date.',
  'Once a refund is initiated by a registered platform, the settlement takes 3 to 5 business days to reflect in your bank account.',
]

const liabilities = [
  'Once the tour or service cost has been finalized, entry fees for any museums, monuments, government taxes, fuel prices, and guide charges will be charged additionally.',
  'As per government regulations, all guests must present a valid photo ID (Driving License, Voter ID, Passport, Ration Card, or any other government-issued ID) before the start of the trip.',
  'In the event of any unavoidable incident during the tour, Deoghar Tour & Travel Guide Travels shall not be held responsible for any resulting loss, delay, inconvenience, or physical damage.',
  'Private transfers can be arranged at an additional cost upon request.',
  'Personal expenses, consumable damage, or traffic violations must be paid directly by the traveler to the respective service provider. Deoghar Tour & Travel Guide will not be responsible for these charges.',
]

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      <section className="relative flex min-h-[55vh] items-end overflow-hidden md:min-h-[60vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/sedan.jpg"
          alt="Jharkhand Travel Agents terms and conditions"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/25" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Jharkhand Travel Agents
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl md:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Car Hire in Babadham, Deoghar · Car Rental in Deoghar · Cabs in Deoghar — transparent,
            hassle-free vehicle bookings.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Best travel agency in Deoghar for car rental, taxi service, and traveller support —
            including Taxi &amp; Car Rental Service for Banka Bihar, Mandar Hill, and Banka car
            services. Jharkhand Travel Agents ensure transparent, hassle-free vehicle bookings.
          </p>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="bg-muted/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Cancellation Policy
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            If you wish to cancel any tour or travel service due to avoidable or unavoidable
            circumstances, you must notify us in writing. Our Deoghar Local Travel Agency processes
            cancellation requests based on the date your written request is received.
          </p>
          <p className="mb-6 font-accent text-sm font-semibold tracking-wide text-foreground uppercase">
            Cancellation charges will be applied as follows:
          </p>
          <ul className="space-y-3">
            {cancellationCharges.map((item) => (
              <li key={item} className="border-l-2 border-primary pl-4 text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Refund Policies */}
      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Cancellation &amp; Refund Policies
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Here is how the refund process works for cancellations:
          </p>
          <ul className="mb-8 space-y-4">
            {refundPolicies.map((item) => (
              <li key={item} className="border-l-2 border-accent pl-4 leading-relaxed text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-muted-foreground">
            We do not bear the responsibility to give refunds for unused hotel accommodations,
            chartered transportation, meals, or any other unutilized services. Our experienced
            Jharkhand Travel Agents will assist you throughout the process to avoid such hassles
            later.
          </p>
        </div>
      </section>

      {/* Liabilities */}
      <section className="bg-muted/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Liabilities &amp; Limitations
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Deoghar Tour &amp; Travel Guide is committed to maintaining transparency in every
            booking while ensuring travelers receive dependable assistance from our dedicated
            Jharkhand Travel Agents before, during, and after the journey.
          </p>
          <ul className="space-y-4">
            {liabilities.map((item) => (
              <li key={item} className="border-l-2 border-primary pl-4 leading-relaxed text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-secondary px-4 py-14 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-white md:text-4xl">
              Questions about these terms?
            </h2>
            <p className="text-white/75">
              Call or WhatsApp {PHONE_DISPLAY} · {EMAIL}
            </p>
            <p className="mt-2 text-sm text-white/55">{ADDRESS_LINE}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I have a question about your terms and conditions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-accent text-base font-semibold text-accent-foreground hover:brightness-110"
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
