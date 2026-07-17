import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { Reveal } from '@/components/reveal'
import { PHONE_DISPLAY } from '@/lib/contact'

export const metadata = {
  title: 'Terms & Conditions - Deoghar Travels',
  description: 'Read our terms and conditions for tour packages and services at Deoghar Travels.',
}

export default function Terms() {
  const sections = [
    {
      title: '1. Booking and Payment',
      content: [
        'All bookings are subject to availability and confirmation from our team. A non-refundable advance of 30% is required to confirm your booking.',
        'Final payment must be made 15 days before the tour departure date. Failure to do so may result in automatic cancellation.',
        'Payments can be made via bank transfer, credit/debit cards, or online payment gateways. All payments are in Indian Rupees unless otherwise agreed.',
        'Once a booking is confirmed, changes to dates or package components may incur additional charges.',
      ],
    },
    {
      title: '2. Cancellation Policy',
      content: [
        'Cancellations made 30 days or more before the tour date will be refunded minus a 10% administrative fee.',
        'Cancellations made between 15-29 days before the tour date will be refunded minus 25% of the booking amount.',
        'Cancellations made less than 15 days before the tour date are non-refundable.',
        'Deoghar Travels reserves the right to cancel tours due to unforeseen circumstances, natural disasters, or government restrictions, with full refund of payments made.',
      ],
    },
    {
      title: '3. Inclusions and Exclusions',
      content: [
        'Tour packages include accommodation, meals, local transportation, guide services, and entrance fees as listed in the package description.',
        'Excluded: International/domestic flights, personal expenses, medical facilities, tips, souvenirs, and activities not mentioned in the itinerary.',
        'Travel insurance is not included but is highly recommended and can be arranged on request.',
        'Any activities or services added during the tour will be charged separately as per actual costs.',
      ],
    },
    {
      title: '4. Traveler Responsibilities',
      content: [
        'Travelers must carry valid identification documents and any required travel permits.',
        'Deoghar Travels is not responsible for lost, stolen, or damaged personal belongings.',
        'Travelers should notify us of any medical conditions, dietary restrictions, or special requirements before booking.',
        'Respect for local customs, temples, and religious practices is mandatory. Disruptive behavior may result in expulsion without refund.',
      ],
    },
    {
      title: '5. Age and Health Requirements',
      content: [
        'There are no age restrictions, but children under 12 should be accompanied by adults.',
        'Travelers with serious health conditions should carry necessary medications and medical documentation.',
        'Certain activities may not be suitable for elderly or physically challenged travelers. Please consult with us before booking.',
        'Deoghar Travels recommends consulting your doctor before undertaking the pilgrimage, especially for extended packages.',
      ],
    },
    {
      title: '6. Liability and Insurance',
      content: [
        'Deoghar Travels is not liable for accidents, injuries, or illnesses that occur during the tour.',
        'We are not responsible for flight delays, missed connections, or travel disruptions beyond our control.',
        'Travelers are advised to purchase comprehensive travel and medical insurance.',
        'The company maintains emergency support insurance for critical situations during tours.',
      ],
    },
    {
      title: '7. Itinerary Changes',
      content: [
        'Itineraries may be modified due to weather, local festivals, temple closures, or other unforeseen circumstances.',
        'Alternative activities of equal or greater value will be provided whenever possible.',
        'Deoghar Travels will notify travelers of any significant changes as soon as possible.',
      ],
    },
    {
      title: '8. Photography and Media Rights',
      content: [
        'Tourists may take photographs for personal use. Commercial photography requires prior permission.',
        'Deoghar Travels may use photos of the tour in marketing materials unless travelers object in writing.',
        'Respect photography restrictions at temples and other religious sites.',
      ],
    },
    {
      title: '9. Dispute Resolution',
      content: [
        'Any disputes arising from these terms shall first be attempted to be resolved amicably through negotiation.',
        'If unresolved, disputes will be subject to the jurisdiction of courts in Deoghar, Jharkhand.',
        'These terms are governed by the laws of India.',
      ],
    },
    {
      title: '10. Contact Information',
      content: [
        `For questions about these terms, contact us at +91 ${PHONE_DISPLAY} or info@deoghar-travels.com.`,
        'Our office hours are 8:00 AM – 8:00 PM IST, seven days a week.',
      ],
    },
  ]

  const faqs = [
    {
      q: 'Can I modify my booking after confirmation?',
      a: 'Yes, modifications are possible subject to availability and may incur additional charges depending on the changes requested.',
    },
    {
      q: 'Is travel insurance mandatory?',
      a: 'While not mandatory, we strongly recommend purchasing travel and medical insurance for your pilgrimage journey.',
    },
    {
      q: 'What documents do I need to carry?',
      a: 'A valid government-issued photo ID is required. Additional permits may be needed for certain temple areas.',
    },
    {
      q: 'How can I contact support during my tour?',
      a: `Call our 24/7 hotline at +91 ${PHONE_DISPLAY}. We also have WhatsApp and email support available round the clock.`,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-mist pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
          <Reveal direction="up">
            <p className="mb-3 font-accent text-sm font-medium tracking-widest text-primary uppercase">
              Policies
            </p>
            <h1 className="mb-5 font-serif text-5xl font-semibold text-foreground md:text-6xl">
              Terms & Conditions
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Please read these terms carefully before booking your pilgrimage tour with Deoghar
              Travels
            </p>
          </Reveal>
        </div>
      </section>

      <section className="flex-1 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 60} direction="up">
              <article className="card-modern p-7 md:p-8">
                <h2 className="mb-5 font-serif text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.content.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="leading-relaxed text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120} direction="up">
            <div className="card-modern card-modern-featured px-6 py-6 md:px-8">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Last Updated:</strong> January 2024
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Deoghar Travels reserves the right to update these terms and conditions at any time.
                Changes will be communicated to registered users via email.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-10 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 80} direction="up">
                <div className="card-modern p-6">
                  <h3 className="mb-2 font-semibold text-foreground">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
