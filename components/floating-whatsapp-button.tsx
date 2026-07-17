'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/contact'

export function FloatingWhatsAppButton() {
  const handleClick = () => {
    const message = "Hello! I'm interested in your taxi and car rental services in Deoghar."
    const encodedMessage = encodeURIComponent(message)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const url = `${WHATSAPP_LINK}?text=${encodedMessage}`

    if (window.self !== window.top) {
      window.open(url, '_blank')
    } else if (isMobile) {
      window.location.href = url
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-28 z-40 hidden rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-105 hover:brightness-110 md:bottom-8 md:flex"
    >
      <MessageCircle size={26} fill="currentColor" />
    </button>
  )
}
