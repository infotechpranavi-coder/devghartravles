'use client'

import { Phone } from 'lucide-react'
import { PHONE_TEL, WHATSAPP_LINK } from '@/lib/contact'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function MobileBottomBar() {
  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your taxi and car rental services in Deoghar."
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-card/95 shadow-lg backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-7xl gap-2 p-3">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-light"
        >
          <Phone size={18} />
          Call
        </a>
        <button
          onClick={handleWhatsApp}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-base font-semibold text-white hover:brightness-110"
        >
          <WhatsAppIcon size={18} />
          Chat
        </button>
      </div>
    </div>
  )
}
