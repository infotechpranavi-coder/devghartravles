type IconProps = { className?: string; size?: number }

export function GlobePlaneIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="24" r="16" />
      <path d="M8 24h32" />
      <path d="M24 8c4.5 4.5 7 10 7 16s-2.5 11.5-7 16c-4.5-4.5-7-10-7-16s2.5-11.5 7-16Z" />
      <path d="M10 16h28M10 32h28" />
      <path d="M30 18l10 2-7 4 2 9-5-6-6 2 6-11Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function DualPinIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 8c-5 0-9 4-9 9 0 7 9 17 9 17s9-10 9-17c0-5-4-9-9-9Z" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M30 12c-4.5 0-8 3.5-8 8 0 6 8 15 8 15s8-9 8-15c0-4.5-3.5-8-8-8Z" />
      <circle cx="30" cy="20" r="2.2" />
    </svg>
  )
}

export function AwardCrownIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="20" r="11" />
      <path d="M18 14l3 4 3-5 3 5 3-4" />
      <path d="M16 31l-3 11 11-4 11 4-3-11" />
    </svg>
  )
}

export function GuidesIcon({ className = '', size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="24" cy="14" r="5" />
      <path d="M12 36c0-5.5 5.4-10 12-10s12 4.5 12 10" />
      <circle cx="12" cy="18" r="3.5" />
      <path d="M4 34c0-4 3.5-7 8-7" />
      <circle cx="36" cy="18" r="3.5" />
      <path d="M44 34c0-4-3.5-7-8-7" />
    </svg>
  )
}
