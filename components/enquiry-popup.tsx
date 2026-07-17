'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { ArrowRight, Phone, Send, X } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'

type EnquiryContextValue = {
  openEnquiry: (vehicle?: string) => void
  closeEnquiry: () => void
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null)

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) {
    throw new Error('useEnquiry must be used within EnquiryProvider')
  }
  return ctx
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [vehicle, setVehicle] = useState('')

  const openEnquiry = useCallback((selectedVehicle = '') => {
    setVehicle(selectedVehicle)
    setOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiry()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeEnquiry])

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}
      <EnquiryPopup open={open} vehicle={vehicle} onClose={closeEnquiry} />
    </EnquiryContext.Provider>
  )
}

function EnquiryPopup({
  open,
  vehicle,
  onClose,
}: {
  open: boolean
  vehicle: string
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Car Rental',
    message: '',
  })

  useEffect(() => {
    if (open && vehicle) {
      setFormData((prev) => ({
        ...prev,
        service: vehicle,
        message: `I want to enquire about ${vehicle}.`,
      }))
    }
  }, [open, vehicle])

  if (!open) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello! Enquiry from Deoghar Travels website.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank')
    onClose()
    setFormData({
      name: '',
      phone: '',
      service: 'Car Rental',
      message: '',
    })
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close enquiry popup"
        className="absolute inset-0 bg-secondary/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-[1.75rem] bg-card shadow-2xl sm:rounded-[1.75rem]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border bg-secondary px-5 py-5 text-white sm:px-6">
          <div>
            <p className="mb-1 font-accent text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Quick enquiry
            </p>
            <h2 id="enquiry-title" className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Book a car on rent
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Tell us which vehicle you need — we&apos;ll reply on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 p-5 sm:p-6">
          <div>
            <label htmlFor="enquiry-name" className="mb-1.5 block font-accent text-sm font-semibold">
              Full Name *
            </label>
            <input
              id="enquiry-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="mb-1.5 block font-accent text-sm font-semibold">
              Phone *
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="enquiry-service" className="mb-1.5 block font-accent text-sm font-semibold">
              Service / Vehicle *
            </label>
            <select
              id="enquiry-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Car Rental</option>
              <option>Sedan Car on Rent</option>
              <option>Dzire Car on Rent</option>
              <option>Ertiga Car on Rent</option>
              <option>Scorpio Car on Rent</option>
              <option>Crysta Innova Car on Rent</option>
              <option>Tempo Traveller Rent</option>
              <option>Bus On Rent</option>
              <option>Temple Tour Package</option>
              <option>Airport / Railway Transfer</option>
              <option>Custom Trip</option>
            </select>
          </div>

          <div>
            <label htmlFor="enquiry-message" className="mb-1.5 block font-accent text-sm font-semibold">
              Message *
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Travel date, pickup location, group size..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-accent text-base font-semibold text-primary-foreground hover:bg-primary-light"
          >
            <Send size={18} />
            Send Enquiry on WhatsApp
            <ArrowRight size={16} />
          </button>

          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3.5 font-accent text-base font-semibold text-foreground hover:border-primary hover:text-primary"
          >
            <Phone size={18} />
            Or call {PHONE_DISPLAY}
          </a>
        </form>
      </div>
    </div>
  )
}

export function EnquiryButton({
  children,
  className = '',
  vehicle = '',
  type = 'button',
  'aria-label': ariaLabel,
}: {
  children: ReactNode
  className?: string
  vehicle?: string
  type?: 'button' | 'submit'
  'aria-label'?: string
}) {
  const { openEnquiry } = useEnquiry()

  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel}
      onClick={() => openEnquiry(vehicle)}
    >
      {children}
    </button>
  )
}
