import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { LeadQuoteForm } from '@/components/lead-quote-form'
import { Reveal } from '@/components/reveal'
import { Award, Users, Globe, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Us - Deoghar Travels',
  description:
    'Learn about our mission to provide authentic pilgrimage experiences to Deoghar with expert guides and personalized service.',
}

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Experience',
      description: 'We believe in genuine spiritual connections, not commercial tourism.',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Every traveler is unique. We customize each journey to match individual needs.',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International quality service with local, authentic experiences.',
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Our team brings decades of pilgrimage tourism expertise.',
    },
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      background:
        'With 20+ years in pilgrimage tourism, Rajesh founded Deoghar Travels to share the true spiritual essence of this holy city.',
    },
    {
      name: 'Priya Singh',
      role: 'Head of Operations',
      background:
        'Ensures every detail is perfect. Priya coordinates with local temples, guides, and accommodation partners.',
    },
    {
      name: 'Amit Sharma',
      role: 'Spiritual Guide Coordinator',
      background:
        'Connects travelers with the most knowledgeable local priests and spiritual guides in Deoghar.',
    },
  ]

  const reasons = [
    {
      title: 'Ancient Spirituality',
      description:
        "Deoghar is one of the 12 sacred Jyotirlings in India, representing Lord Shiva's divine presence. The city draws millions of spiritual seekers annually.",
    },
    {
      title: 'Authentic Traditions',
      description:
        'Experience centuries-old rituals, teachings, and practices performed by knowledgeable priests and spiritual guides in their natural sacred environment.',
    },
    {
      title: 'Natural Beauty',
      description:
        'Located along the sacred Ganges River, Deoghar offers a serene backdrop that complements spiritual reflection and meditation.',
    },
    {
      title: 'Transformative Experiences',
      description:
        'Beyond temple visits, engage with local communities, participate in rituals, and gain insights that create lasting spiritual impact.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=80"
          alt="Pilgrims at temple"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Who we are
          </p>
          <h1 className="mb-5 font-serif text-5xl font-semibold text-white md:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Founded with a mission to create authentic, transformative pilgrimage experiences that
            honor the spiritual significance of Deoghar.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            <Reveal direction="left">
              <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
                Our purpose
              </p>
              <h2 className="mb-6 font-serif text-4xl font-semibold text-foreground">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Deoghar Travels, we believe that pilgrimage is more than just tourism. It&apos;s
                  a spiritual journey that should be approached with reverence and authenticity.
                </p>
                <p>
                  Our mission is to facilitate meaningful connections between pilgrims and the sacred
                  sites of Deoghar, guided by experts who understand both the spiritual significance
                  and practical needs of travelers.
                </p>
                <p>
                  We&apos;re committed to sustainable tourism practices that respect local communities
                  and preserve the spiritual sanctity of these holy places.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
              {[
                { value: '10,000+', label: 'Happy Pilgrims Served' },
                { value: '15+', label: 'Years of Experience' },
                { value: '50+', label: 'Trusted Local Partners' },
              ].map((stat, index) => (
                <Reveal key={stat.label} delay={index * 100} direction="right">
                  <div className="card-modern p-6">
                    <p className="font-serif text-3xl font-semibold text-primary md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
              What guides us
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground">Our Core Values</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={index * 100}>
                  <div className="card-modern group h-full p-7">
                    <div className="card-icon mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
              The people behind it
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground">Meet Our Team</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 120}>
                <div className="card-modern h-full p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-sm">
                    <span className="font-serif text-lg font-bold">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.background}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Deoghar */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 font-serif text-4xl font-semibold text-foreground">Why Deoghar?</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="card-modern h-full p-7">
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <LeadQuoteForm compact />
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
