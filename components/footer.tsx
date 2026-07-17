'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import { BrandLogo } from '@/components/brand-logo'
import { Reveal } from '@/components/reveal'

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Tour Packages', href: '/packages' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' },
  ]

  const services = [
    'Car & Coach Rentals',
    'Local Taxi Service',
    'Bus Booking',
    'Hotel Booking',
    'Wedding Car Hire',
    'Corporate Rentals',
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    const message = `Hello! Please add me to your travel updates.\nEmail: ${email.trim()}`
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank')
    setEmail('')
  }

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: YoutubeIcon, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: WHATSAPP_LINK, label: 'WhatsApp' },
  ]

  return (
    <footer className="relative mt-auto overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-primary/70 to-[#3F6B45]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/35 to-transparent opacity-90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 md:pt-20">
        <Reveal direction="up">
          <div className="rounded-[2rem] border border-primary/15 bg-white/92 p-8 shadow-xl shadow-primary/10 backdrop-blur-md md:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <BrandLogo size={52} showText={false} />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      Deoghar Travels
                    </h3>
                    <p className="font-accent text-xs font-medium tracking-widest text-primary uppercase">
                      Travel Guide
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Taxi, car rental, temple tours, transfers & curated trips across Deoghar — with
                  comfort and care.
                </p>
                <p className="mb-3 text-sm font-semibold text-foreground">Social Media:</p>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-5 font-accent text-base font-semibold text-foreground">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-5 font-accent text-base font-semibold text-foreground">Our Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-accent text-base font-semibold text-foreground">
                  Subscribe To Our Updates
                </h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  Sign up to receive trip ideas, offers, and Deoghar travel tips.
                </p>
                <form onSubmit={handleSubscribe} className="mb-6 flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address *"
                    className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary-light"
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </form>

                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Phone size={14} className="text-primary" />
                    <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                      +91 {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={14} className="text-primary" />
                    <a href="mailto:info@deoghar-travels.com" className="hover:text-primary">
                      info@deoghar-travels.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    Deoghar, Jharkhand
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} direction="fade">
          <div className="mt-8 text-center text-sm text-white/80">
            <p>Copyright © {currentYear} Deoghar Travels. All Rights Reserved.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
