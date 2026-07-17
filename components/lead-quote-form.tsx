'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/contact'

interface LeadQuoteFormProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

export function LeadQuoteForm({ title, subtitle, compact = false }: LeadQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Form submitted:', formData)
    setSubmitted(true)

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)

    const whatsappMessage = `Hello! I'm interested in booking a car on rent.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank')
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20'

  if (compact) {
    return (
      <div className="card-modern card-modern-static mx-auto max-w-md p-7">
        <h3 className="mb-1 font-serif text-2xl font-semibold text-foreground">Get Your Quote</h3>
        <p className="mb-5 text-base text-muted-foreground">
          Request a custom tour package tailored to your needs
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <button
            type="submit"
            disabled={submitted}
            className="w-full rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-light disabled:opacity-50"
          >
            {submitted ? 'Sent!' : 'Get Quote'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="card-modern card-modern-static mx-auto max-w-2xl">
      <div className="border-b border-border/80 bg-mist/80 px-8 py-8 md:px-10">
        {title && (
          <h2 className="mb-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            {title}
          </h2>
        )}
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="px-8 py-8 md:px-10 md:py-10">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">Thank You!</h3>
            <p className="text-muted-foreground">
              Your request has been sent. We&apos;ll contact you shortly with custom tour options.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Tell us about your tour preferences (dates, group size, specific interests)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Send size={18} />
              Send Quote Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
