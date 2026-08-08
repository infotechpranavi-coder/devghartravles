'use client'

import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { BrandLogo } from '@/components/brand-logo'
import { PHONE_TEL } from '@/lib/contact'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent: _transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Car Rental', href: '/car-rental' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <BrandLogo size={52} />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-accent text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-accent text-base font-semibold text-white hover:bg-primary-light sm:flex"
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 space-y-1 border-t border-border pt-4 pb-2 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
