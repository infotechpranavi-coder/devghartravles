import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope, Space_Grotesk } from 'next/font/google'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'
import { GlobalSectionAnimations } from '@/components/global-section-animations'
import { EnquiryProvider } from '@/components/enquiry-popup'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-serif',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-accent',
})

export const metadata: Metadata = {
  title: {
    default: 'Best Car Rental Company in Deoghar | Taxi & Car Hire Service',
    template: '%s | Deoghar Travels',
  },
  description:
    'Book affordable car rental in Deoghar — Sedan, Dzire, Ertiga, Scorpio, Innova, Tempo Traveller & Bus. Call 9835875097.',
  keywords:
    'Car Rental Company in Deoghar, taxi service Deoghar, car hire Deoghar, Tempo Traveller Deoghar',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1E6BA8',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground pb-24 md:pb-0">
        <EnquiryProvider>
          {children}
          <GlobalSectionAnimations />
          <MobileBottomBar />
        </EnquiryProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
