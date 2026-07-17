import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'

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
      title: '9. Communication and Complaints',
      content: [
        'All communications should be made through official channels: phone, email, or WhatsApp.',
        'Complaints should be reported immediately to the tour guide and documented.',
        'Formal complaints should be submitted within 7 days of tour completion for proper resolution.',
        'We are committed to resolving issues fairly and promptly.',
      ],
    },
    {
      title: '10. Privacy and Data Protection',
      content: [
        'Personal information collected during booking is used solely for tour administration and communication.',
        'We do not share traveler information with third parties without consent.',
        'Contact information may be used for post-tour follow-up and feedback collection.',
        'Travelers can request deletion of their data after the tour completion.',
      ],
    },
    {
      title: '11. Special Requests and Customizations',
      content: [
        'Special requests (dietary, religious, accessibility) should be communicated during booking.',
        'While we make every effort to accommodate requests, some may not be possible.',
        'Custom packages require separate discussion and quotation.',
        'Additional charges may apply for special arrangements.',
      ],
    },
    {
      title: '12. Force Majeure',
      content: [
        'Deoghar Travels is not liable for losses due to acts of God, natural disasters, pandemics, wars, or government actions.',
        'In such cases, customers will be offered alternative tour dates or full refund of payments.',
        'Insurance claims (if applicable) must be handled by the traveler directly.',
      ],
    },
    {
      title: '13. Governing Law and Jurisdiction',
      content: [
        'These terms and conditions are governed by the laws of India.',
        'Any disputes shall be resolved through mutual agreement and negotiation.',
        'If unresolved, disputes shall be subject to the jurisdiction of courts in Deoghar, Jharkhand.',
      ],
    },
    {
      title: '14. Contact Information',
      content: [
        'For inquiries, bookings, or complaints, contact us at:',
        'Phone: +91 9835875097',
        'Email: info@deoghar-travels.com',
        'WhatsApp: https://wa.me/919835875097',
        'Address: Deoghar, Jharkhand, India',
      ],
    },
  ]

  const faqs = [
    {
      q: 'What if I need to cancel my tour?',
      a: 'Please refer to Section 2 for our cancellation policy. Contact us immediately to process your cancellation.',
    },
    {
      q: 'Do you offer group discounts?',
      a: 'Yes! Groups of 10+ people are eligible for special discounts. Contact us for custom group pricing.',
    },
    {
      q: 'Can I customize my tour package?',
      a: 'Absolutely! We offer fully customizable packages. Discuss your requirements with our team to create your ideal tour.',
    },
    {
      q: 'Is travel insurance included?',
      a: 'No, but we recommend purchasing comprehensive travel insurance. We can help arrange it if needed.',
    },
    {
      q: 'What if the weather is bad during the tour?',
      a: 'We adapt the itinerary while maintaining the spiritual essence of the tour. Alternative activities of equal value are provided.',
    },
    {
      q: 'How can I reach you in an emergency?',
      a: 'Call our 24/7 hotline at +91 9835875097. We also have WhatsApp and email support available round the clock.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-mist pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Policies
          </p>
          <h1 className="mb-5 font-serif text-5xl font-semibold text-foreground md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Please read these terms carefully before booking your pilgrimage tour with Deoghar
            Travels
          </p>
        </div>
      </section>

      <section className="flex-1 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <article key={section.title} className="card-modern p-7 md:p-8">
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
          ))}

          <div className="card-modern card-modern-featured px-6 py-6 md:px-8">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Last Updated:</strong> January 2024
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Deoghar Travels reserves the right to update these terms and conditions at any time.
              Changes will be communicated to registered users via email.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-section-alt px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="card-modern p-6">
                <h3 className="mb-2 font-semibold text-foreground">{item.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
