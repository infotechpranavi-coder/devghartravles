'use client'

import { WHATSAPP_LINK } from '@/lib/contact'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function FloatingWhatsAppButton() {
  const handleClick = () => {
    const message = "Hello! I'm interested in your taxi and car rental services in Deoghar."
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:brightness-110 sm:right-6 md:bottom-8"
    >
      <WhatsAppIcon size={28} />
    </button>
  )
}
