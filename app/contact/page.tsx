import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Deoghar Travels for taxi, car rental, temple tours, and transfers. Call or WhatsApp 9835875097.',
}

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      label: 'Call Us',
      value: `+91 ${PHONE_DISPLAY}`,
      detail: 'Fast booking & trip support',
      href: `tel:${PHONE_TEL}`,
      tone: 'bg-primary/10 text-primary',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: PHONE_DISPLAY,
      detail: 'Chat anytime for quotes',
      href: `${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to contact Deoghar Travels.')}`,
      tone: 'bg-[#25D366]/15 text-[#128C7E]',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@deoghar-travels.com',
      detail: 'For detailed trip requests',
      href: 'mailto:info@deoghar-travels.com',
      tone: 'bg-accent/20 text-accent',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Deoghar, Jharkhand',
      detail: 'Local taxi & rental service',
      href: 'https://maps.google.com/?q=Deoghar+Jharkhand',
      tone: 'bg-brand-green/15 text-brand-green',
      external: true,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[68vh] items-end overflow-hidden md:min-h-[74vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80"
          alt="Travel road journey"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-primary/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24">
          <Reveal direction="up">
            <p className="mb-3 font-accent text-lg font-semibold tracking-[0.14em] text-accent uppercase">
              Get in touch
            </p>
            <h1 className="mb-5 max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-white text-balance md:text-7xl">
              Contact Us
            </h1>
            <p className="mb-8 max-w-xl font-sans text-lg text-white/80 md:text-xl">
              Book a taxi, car rental, temple tour, or transfer in Deoghar — we&apos;re ready to help
              you plan the trip.
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
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to contact Deoghar Travels.')}`}
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

      {/* Contact cards */}
      <section className="bg-mist px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.label} delay={index * 80} direction="up">
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group block rounded-[1.5rem] border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_16px_40px_-18px_rgba(20,110,150,0.28)]"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}
                  >
                    <Icon size={22} />
                  </div>
                  <p className="mb-1 font-accent text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="mb-1 font-serif text-xl font-bold text-foreground group-hover:text-primary">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal direction="left">
            <p className="mb-3 font-accent text-base font-medium tracking-widest text-primary uppercase">
              Send a message
            </p>
            <h2 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Tell us about your trip
            </h2>
            <p className="mb-8 max-w-xl font-sans text-lg text-muted-foreground">
              Share your dates and requirements — we&apos;ll open WhatsApp with your details so you
              can message us in one tap.
            </p>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} direction="right">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] bg-secondary p-8 text-white md:p-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <Clock size={22} />
                </div>
                <h3 className="mb-3 font-serif text-3xl font-bold">We&apos;re here to help</h3>
                <p className="mb-6 font-sans text-base text-white/75">
                  Reach out for same-day taxi bookings, temple tour planning, airport transfers, or
                  group vehicle hire across Deoghar.
                </p>
                <ul className="space-y-3 text-sm text-white/85">
                  {[
                    'Quick response on call & WhatsApp',
                    'Sedan, SUV, tempo traveller & bus',
                    'Local sightseeing & pilgrimage support',
                    'Hotel booking assistance available',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-card">
                <div className="relative h-56 md:h-64">
                  <iframe
                    title="Deoghar map"
                    src="https://maps.google.com/maps?q=Deoghar%2C%20Jharkhand&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5">
                  <p className="font-accent text-xs font-semibold tracking-widest text-primary uppercase">
                    Service area
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold text-foreground">
                    Deoghar & nearby routes
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Local city rides, temple circuits, and outstation transfers on request.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#146E96] to-[#3F6B45]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_20%,rgba(240,160,80,0.28),transparent_45%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal direction="scale">
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Prefer a quick call?
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl text-balance">
              Talk to Deoghar Travels now
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-sans text-lg text-white/80">
              One call or WhatsApp message is enough to reserve your vehicle and plan the day.
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
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I need help booking a trip in Deoghar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 font-accent text-base font-semibold text-white hover:brightness-110 sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
