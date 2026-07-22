import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import {
  ADDRESS_LINE,
  EMAIL,
  EMAIL_MAILTO,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from '@/lib/contact'
import { BrandLogo } from '@/components/brand-logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/contact' },
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
    <footer className="relative mt-auto overflow-hidden bg-secondary text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(20,110,150,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(240,160,80,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-14 sm:px-6 md:pt-16">
        {/* Top CTA band */}
        <div className="mb-12 flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mb-1 font-accent text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              Book your ride
            </p>
            <p className="font-serif text-2xl font-bold text-white md:text-3xl">
              Need a car or bus in Deoghar?
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-accent text-sm font-semibold text-white hover:bg-primary-light"
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
              <div className="flex shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
                <BrandLogo size={48} showText={false} />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">Deoghar Travels</p>
                <p className="font-accent text-xs font-medium tracking-[0.16em] text-accent uppercase">
                  Travel Agency
                </p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white">
              Trusted Deoghar travel agency for taxi, car rental, transfers, and tours across
              Jharkhand.
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-accent hover:brightness-110"
            >
              View on map
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 font-accent text-sm font-semibold tracking-[0.16em] text-white uppercase">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-accent"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent transition-transform group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 font-accent text-sm font-semibold tracking-[0.16em] text-white uppercase">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-white">
                  <span className="h-1 w-1 rounded-full bg-primary-light" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 font-accent text-sm font-semibold tracking-[0.16em] text-white uppercase">
              Contact
            </p>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-start gap-3 text-white transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
                    <Phone size={14} />
                  </span>
                  <span>
                    <span className="block text-xs text-white/80">Phone</span>
                    +91 {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_MAILTO}
                  className="flex items-start gap-3 text-white transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
                    <Mail size={14} />
                  </span>
                  <span>
                    <span className="block text-xs text-white/80">Email</span>
                    <span className="break-all">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent">
                    <MapPin size={14} />
                  </span>
                  <span>
                    <span className="block text-xs text-white/80">Office</span>
                    {ADDRESS_LINE}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white">
          <p>© {currentYear} Deoghar Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
