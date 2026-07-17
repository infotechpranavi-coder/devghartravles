'use client'

import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PHONE_TEL } from '@/lib/contact'
import { BrandLogo } from '@/components/brand-logo'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Tour Packages', href: '/packages' },
    { label: 'Terms', href: '/terms' },
  ]

  const isSolid = !transparent || scrolled || mobileMenuOpen

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSolid
          ? 'border-b border-border/80 bg-card/95 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <BrandLogo size={52} textLight={!isSolid} />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-accent text-base font-medium transition-colors ${
                  isSolid
                    ? 'text-foreground/80 hover:text-primary'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className={`hidden items-center gap-2 rounded-lg px-4 py-2.5 font-accent text-base font-semibold sm:flex ${
                isSolid
                  ? 'bg-primary text-primary-foreground hover:bg-primary-light'
                  : 'bg-accent text-accent-foreground hover:brightness-110'
              }`}
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-lg p-2 md:hidden ${isSolid ? 'text-foreground' : 'text-white'}`}
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
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
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
