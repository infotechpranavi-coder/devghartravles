import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ADDRESS_LINE, EMAIL, PHONE_DISPLAY } from '@/lib/contact'

export const metadata = {
  title: 'Terms & Conditions - Deoghar Travels',
  description: 'Terms and conditions for car rental and taxi services at Deoghar Travels.',
}

export default function Terms() {
  const sections = [
    {
      title: '1. Booking and payment',
      content: [
        'Bookings are confirmed after our team accepts your request and you pay the agreed advance (typically about 10%).',
        'The balance can be paid to the driver in cash or UPI, unless otherwise agreed.',
        'Rates depend on vehicle type, distance, waiting time, and trip type (local / one-way / round trip).',
      ],
    },
    {
      title: '2. Cancellation',
      content: [
        'Please cancel as early as possible so we can reassign the vehicle.',
        'Advance payment may be non-refundable for same-day cancellations or no-shows.',
        'If we cancel due to unavoidable reasons, we will offer an alternative vehicle or refund the advance.',
      ],
    },
    {
      title: '3. What is included',
      content: [
        'Vehicle hire with driver for the agreed route and duration.',
        'Excluded unless stated: tolls, parking, permits, interstate taxes, and extra waiting beyond the agreed plan.',
      ],
    },
    {
      title: '4. Traveler responsibilities',
      content: [
        'Carry a valid government photo ID.',
        'Treat the vehicle and driver respectfully; damage caused by passengers may be charged.',
        'Respect temple rules and local customs on pilgrimage routes.',
      ],
    },
    {
      title: '5. Liability',
      content: [
        'Deoghar Travels is not responsible for delays caused by traffic, weather, roadblocks, or temple crowds.',
        'Personal belongings are the traveler’s responsibility.',
      ],
    },
    {
      title: '6. Contact',
      content: [
        `Questions: +91 ${PHONE_DISPLAY} or ${EMAIL}.`,
        `Office: ${ADDRESS_LINE}. Hours 8:00 AM – 8:00 PM IST, seven days a week.`,
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-background px-4 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-3 font-serif text-5xl font-bold text-foreground md:text-6xl">
            Terms & conditions
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Simple rules for car rental and taxi bookings with Deoghar Travels.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-primary pl-4 leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
