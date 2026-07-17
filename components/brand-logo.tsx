import Image from 'next/image'

interface BrandLogoProps {
  size?: number
  className?: string
  showText?: boolean
  textLight?: boolean
}

export function BrandLogo({
  size = 48,
  className = '',
  showText = true,
  textLight = false,
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Deoghar Travel Guide"
        width={size}
        height={size}
        className="h-auto w-auto object-contain"
        style={{ width: size, height: size }}
        priority
      />
      {showText && (
        <div className="hidden sm:block">
          <p
            className={`font-serif text-xl font-bold leading-tight ${
              textLight ? 'text-white' : 'text-foreground'
            }`}
          >
            Deoghar Travels
          </p>
          <p
            className={`font-accent text-xs font-medium tracking-[0.14em] uppercase ${
              textLight ? 'text-white/70' : 'text-muted-foreground'
            }`}
          >
            Travel Guide
          </p>
        </div>
      )}
    </div>
  )
}
