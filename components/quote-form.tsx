'use client'

import { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/contact'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: 'Sedan Car on Rent',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hello! Quote request from Deoghar Travel Agency website.

Name: ${formData.name}
Phone: ${formData.phone}
Vehicle: ${formData.vehicle}
Message: ${formData.message}`

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        vehicle: 'Sedan Car on Rent',
        message: '',
      })
      setSubmitted(false)
    }, 3500)
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3.5 font-sans text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <CheckCircle size={32} className="mx-auto mb-3 text-brand-green" />
        <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">Quote ready</h3>
        <p className="text-muted-foreground">WhatsApp should open — send the message to reach us.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="quote-name" className="mb-2 block font-accent text-sm font-semibold text-foreground">
          Name *
        </label>
        <input
          id="quote-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="quote-phone" className="mb-2 block font-accent text-sm font-semibold text-foreground">
          Phone *
        </label>
        <input
          id="quote-phone"
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="quote-vehicle" className="mb-2 block font-accent text-sm font-semibold text-foreground">
          Vehicle *
        </label>
        <select
          id="quote-vehicle"
          name="vehicle"
          required
          value={formData.vehicle}
          onChange={handleChange}
          className={inputClass}
        >
          <option>Sedan Car on Rent</option>
          <option>Dzire Car on Rent</option>
          <option>Ertiga Car on Rent</option>
          <option>Scorpio Car on Rent</option>
          <option>Crysta Innova Car on Rent</option>
          <option>Tempo Traveller Rent</option>
          <option>Bus On Rent</option>
          <option>Hotel Booking</option>
          <option>Custom Trip</option>
        </select>
      </div>
      <div>
        <label htmlFor="quote-message" className="mb-2 block font-accent text-sm font-semibold text-foreground">
          Trip details *
        </label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Travel date, pickup location, destination..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light sm:w-auto"
      >
        <Send size={18} />
        Get Quote on WhatsApp
      </button>
    </form>
  )
}
