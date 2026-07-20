import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { fleetVehicles, getFleetBySlug } from '@/lib/catalog'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, Users } from 'lucide-react'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return fleetVehicles.map((vehicle) => ({ slug: vehicle.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const vehicle = getFleetBySlug(slug)
  if (!vehicle) return { title: 'Vehicle not found' }
  return {
    title: `${vehicle.name} | Deoghar Travels`,
    description: vehicle.summary,
  }
}

export default async function FleetDetailPage({ params }: PageProps) {
  const { slug } = await params
  const vehicle = getFleetBySlug(slug)
  if (!vehicle) notFound()

  const related = fleetVehicles.filter((item) => item.slug !== vehicle.slug).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      <section className="relative flex min-h-[70svh] items-end overflow-hidden md:min-h-[75svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6">
          <Link
            href="/#fleet"
            className="mb-5 inline-flex items-center gap-2 font-accent text-sm font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to fleet
          </Link>
          <p className="mb-3 font-accent text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            {vehicle.type} · {vehicle.seats}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold text-white text-balance md:text-6xl">
            {vehicle.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{vehicle.summary}</p>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">About this vehicle</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{vehicle.description}</p>

            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Features</h3>
            <ul className="mb-10 grid gap-3 sm:grid-cols-2">
              {vehicle.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Ideal for</h3>
            <ul className="space-y-3">
              {vehicle.idealFor.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-4 text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[1.5rem] bg-secondary p-7 text-white md:sticky md:top-28">
            <p className="mb-2 font-accent text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Book now
            </p>
            <h2 className="mb-3 font-serif text-3xl font-bold text-white">{vehicle.name}</h2>
            <p className="mb-2 flex items-center gap-2 text-white/75">
              <Users size={16} />
              {vehicle.seats}
            </p>
            <p className="mb-6 text-sm text-white/65">
              Share your date and pickup point — we confirm fare and availability quickly.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello! I want to book ${vehicle.name} with Deoghar Travels.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-accent text-sm font-semibold text-white hover:brightness-110"
              >
                <MessageCircle size={16} />
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-accent text-sm font-semibold text-primary-foreground hover:bg-primary-light"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">More vehicles</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/fleet/${item.slug}`}
                  className="group overflow-hidden rounded-2xl bg-card transition-transform hover:-translate-y-0.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <p className="font-accent font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.seats}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
