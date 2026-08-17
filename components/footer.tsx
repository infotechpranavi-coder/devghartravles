import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import {
  ADDRESS_LINE,
  EMAIL,
  EMAIL_MAILTO,
  FACEBOOK_LINK,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from '@/lib/contact'
import { BrandLogo } from '@/components/brand-logo'
import { FacebookIcon } from '@/components/facebook-icon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Car Rental', href: '/car-rental' },
    { label: 'Terms', href: '/terms' },
  ]

  const services = [
    'Local Taxi',
    'Outstation Hire',
    'Airport Transfer',
    'Tempo Traveller',
    'Bus Booking',
    'Hotel Booking',
  ]

  return (
    <footer className="relative mt-auto overflow-hidden bg-linear-to-br from-[#0E5A7A] via-primary to-[#1A8BB0] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,160,80,0.28),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent via-white/60 to-accent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-14 sm:px-6 md:pt-16">
        {/* Top CTA band */}
        <div className="mb-12 flex flex-col gap-5 rounded-2xl border border-white/25 bg-white/15 p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mb-2 inline-flex items-center rounded-lg bg-accent px-3 py-1 font-accent text-[11px] font-bold tracking-[0.18em] text-accent-foreground uppercase">
              Book your ride
            </p>
            <p className="font-serif text-2xl font-bold text-white md:text-3xl">
              Need a car or bus in Deoghar?
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-accent text-sm font-semibold text-primary shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              <Phone size={16} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent('Hello! I want to book with Deoghar Travels.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-accent text-sm font-semibold text-white hover:brightness-110"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-md ring-2 ring-accent/60">
                <BrandLogo size={48} showText={false} />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">Deoghar Travels</p>
                <p className="font-accent text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Travel Agency
                </p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white">
              Trusted Deoghar travel agency for taxi, car rental, transfers, and tours across
              Jharkhand.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 font-accent text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                View on map
                <ArrowUpRight size={14} />
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deoghar Travels on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1877F2] text-white shadow-sm transition-transform hover:scale-105 hover:brightness-110"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 inline-flex items-center rounded-md bg-white/15 px-2.5 py-1 font-accent text-xs font-bold tracking-[0.16em] text-white uppercase">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 inline-flex items-center rounded-md bg-white/15 px-2.5 py-1 font-accent text-xs font-bold tracking-[0.16em] text-white uppercase">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 inline-flex items-center rounded-md bg-white/15 px-2.5 py-1 font-accent text-xs font-bold tracking-[0.16em] text-white uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Phone size={14} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-accent uppercase">
                      Phone
                    </span>
                    +91 {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_MAILTO}
                  className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Mail size={14} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-accent uppercase">
                      Email
                    </span>
                    <span className="break-all">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <MapPin size={14} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-accent uppercase">
                      Office
                    </span>
                    {ADDRESS_LINE}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1877F2] text-white">
                    <FacebookIcon size={14} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-accent uppercase">
                      Facebook
                    </span>
                    traveldeoghar
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/25 py-6 text-sm font-medium text-white sm:flex-row">
          <p>© {currentYear} Deoghar Travels. All rights reserved.</p>
          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Deoghar Travels on Facebook"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white transition-colors hover:bg-[#1877F2]"
          >
            <FacebookIcon size={16} />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
