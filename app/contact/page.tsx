import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import {
  ADDRESS_LINE,
  ADDRESS_SHORT,
  EMAIL,
  EMAIL_MAILTO,
  MAPS_EMBED,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from '@/lib/contact'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Deoghar Travels for car rental, taxi, Tempo Traveller & bus hire in Deoghar. Call or WhatsApp 9835875097.',
}

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
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
    value: EMAIL,
    detail: 'For detailed trip requests',
    href: EMAIL_MAILTO,
    tone: 'bg-accent/20 text-accent',
    breakValue: true,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden md:min-h-[75svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fleet/dzire.jpg"
          alt="Contact Deoghar Travels"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,160,80,0.2),transparent_50%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6 md:pb-20">
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.2em] text-accent uppercase animate-fade-in">
            Get in touch
          </p>
          <h1 className="mb-4 max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-white text-balance md:text-6xl lg:text-7xl animate-fade-in-up">
            Contact Us
          </h1>
          <p className="mb-8 max-w-xl text-lg text-white/85 md:text-xl animate-fade-in-up delay-100">
            Book a car on rent, local taxi, or outstation transfer in Deoghar — we&apos;re ready to
            help you get moving.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up delay-200">
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
              className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 font-accent text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Reach us
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Choose how you want to connect
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactMethods.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group rounded-[1.35rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${item.tone}`}
                  >
                    <Icon size={20} />
                  </div>
                  <p className="mb-1 font-accent text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p
                    className={`mb-1 font-serif text-xl font-bold text-foreground group-hover:text-primary ${
                      item.breakValue ? 'break-all text-lg' : ''
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </a>
              )
            })}
          </div>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex flex-col gap-4 rounded-[1.35rem] border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                <MapPin size={20} />
              </div>
              <div>
                <p className="mb-1 font-accent text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Location
                </p>
                <p className="mb-1 font-serif text-xl font-bold text-foreground">{ADDRESS_SHORT}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {ADDRESS_LINE}
                </p>
              </div>
            </div>
            <span className="shrink-0 font-accent text-sm font-semibold text-primary sm:self-center">
              Open in Google Maps →
            </span>
          </a>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="rounded-[1.5rem] bg-secondary p-8 text-white md:p-10">
            <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Why message us
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              We reply quickly on call &amp; WhatsApp
            </h2>
            <p className="mb-8 leading-relaxed text-white/75">
              Share your travel date, vehicle preference, and pickup point. Our travel agents in
              Deoghar will confirm availability and guide you on the fare.
            </p>

            <div className="space-y-5 border-t border-white/15 pt-6">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-accent text-sm font-semibold text-white">Office hours</p>
                  <p className="text-sm text-white/70">8:00 AM – 8:00 PM IST, every day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-accent text-sm font-semibold text-white">Office address</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {ADDRESS_LINE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-accent text-sm font-semibold text-white">Direct line</p>
                  <a href={`tel:${PHONE_TEL}`} className="text-sm text-white/70 hover:text-white">
                    +91 {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">Send a message</h2>
            <p className="mb-8 text-muted-foreground">
              Fill the form and we&apos;ll open WhatsApp with your details ready to send.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map strip */}
      <section className="bg-background px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">Find us on the map</h2>
              <p className="text-sm text-muted-foreground">{ADDRESS_LINE}</p>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent text-sm font-semibold text-primary hover:text-primary-light"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-border">
            <iframe
              title="Deoghar Travels office location"
              src={MAPS_EMBED}
              className="h-64 w-full border-0 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
