'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Car Rental',
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
    const whatsappMessage = `Hello! Contact request from Deoghar Travels website.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Service: ${formData.service}
Message: ${formData.message}`

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Car Rental',
        message: '',
      })
      setSubmitted(false)
    }, 3500)
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3.5 font-sans text-base text-foreground outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20'

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[1.75rem] bg-brand-wash px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
          <CheckCircle size={32} />
        </div>
        <h3 className="mb-2 font-serif text-3xl font-bold text-foreground">Message ready</h3>
        <p className="max-w-sm font-sans text-base text-muted-foreground">
          WhatsApp should open with your details. Send the message and we&apos;ll get back to you
          shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-accent text-sm font-semibold text-foreground">
            Full Name *
          </label>
          <input
            id="name"
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
          <label htmlFor="phone" className="mb-2 block font-accent text-sm font-semibold text-foreground">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block font-accent text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block font-accent text-sm font-semibold text-foreground">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option>Car Rental</option>
            <option>Local Taxi</option>
            <option>Outstation Taxi</option>
            <option>Airport / Railway Transfer</option>
            <option>Tempo Traveller / Bus</option>
            <option>Wedding / Corporate Hire</option>
            <option>Custom Booking</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-accent text-sm font-semibold text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us your travel dates, vehicle type, group size, and pickup location..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light sm:w-auto"
      >
        <Send size={18} />
        Send via WhatsApp
        <ArrowRight size={16} />
      </button>
    </form>
  )
}
