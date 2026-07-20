import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  ADDRESS_LINE,
  EMAIL,
  EMAIL_MAILTO,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/contact'
import { BrandLogo } from '@/components/brand-logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Car Rentals', href: '/packages' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms', href: '/terms' },
  ]

  return (
    <footer className="mt-auto border-t border-border bg-secondary text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <BrandLogo size={44} showText={false} />
              <div>
                <p className="font-serif text-xl font-bold">Deoghar Travels</p>
                <p className="font-accent text-xs tracking-widest text-accent uppercase">
                  Travel Agency
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Deoghar travel agency for taxi, car rental, transfers, and tours.
            </p>
          </div>

          <div>
            <p className="mb-4 font-accent text-sm font-semibold tracking-wide uppercase text-white/50">
              Links
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-accent text-sm font-semibold tracking-wide uppercase text-white/50">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-accent" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white">
                  +91 {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-accent" />
                <a href={EMAIL_MAILTO} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {ADDRESS_LINE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {currentYear} Deoghar Travels. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
