import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getServiceBySlug, travelServices } from '@/lib/catalog'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import { ArrowLeft, Bus, Building2, Car, CheckCircle2, MessageCircle, Phone } from 'lucide-react'

type PageProps = {
  params: Promise<{ slug: string }>
}

const iconMap = {
  car: Car,
  bus: Bus,
  hotel: Building2,
}

export function generateStaticParams() {
  return travelServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: `${service.title} | Deoghar Travels`,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon]
  const related = travelServices.filter((item) => item.slug !== service.slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent />

      <section className="relative flex min-h-[70svh] items-end overflow-hidden md:min-h-[75svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 sm:px-6">
          <Link
            href="/#services"
            className="mb-5 inline-flex items-center gap-2 font-accent text-sm font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
            <Icon size={22} />
          </div>
          <h1 className="max-w-3xl font-serif text-4xl font-bold text-white text-balance md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{service.summary}</p>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">Service details</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">What’s included</h3>
            <ul className="space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[1.5rem] bg-secondary p-7 text-white md:sticky md:top-28">
            <p className="mb-2 font-accent text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Enquire now
            </p>
            <h2 className="mb-3 font-serif text-3xl font-bold text-white">{service.title}</h2>
            <p className="mb-6 text-sm text-white/65">
              Tell us your travel date and requirements — we reply on call or WhatsApp.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello! I want to enquire about ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-accent text-sm font-semibold text-white hover:brightness-110"
              >
                <MessageCircle size={16} />
                WhatsApp Enquiry
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
            <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">Other services</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group overflow-hidden rounded-2xl bg-card"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <p className="font-serif text-xl font-bold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>
                    <p className="mt-3 font-accent text-sm font-semibold text-primary">View details →</p>
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
