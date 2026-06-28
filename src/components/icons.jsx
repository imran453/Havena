// Lightweight inline icon set matching the Havena design's iconography.
// All icons use currentColor / stroke inheritance so they can be recolored via className.

export const IconArrow = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 18" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9h21M15 1l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconChevronDown = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconPin = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 14.5s5-4.2 5-8.2A5 5 0 003 6.3c0 4 5 8.2 5 8.2z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="6.3" r="1.8" stroke="currentColor" strokeWidth="1.3" />
  </svg>
)

export const IconStar = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 .8l2.18 4.54 4.99.62-3.66 3.5.95 4.94L8 12.04l-4.46 2.36.95-4.94L.83 5.96l4.99-.62L8 .8z" />
  </svg>
)

export const IconArea = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 17 17" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="13" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M2 6.5h3.5V2M15 10.5h-3.5V15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

export const IconBath = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 17 17" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 9h13v1.5A4 4 0 0111 14.5H6A4 4 0 012 10.5V9z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path d="M4 9V4.5A2 2 0 016 2.5h.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M4 14.5v1M13 14.5v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

export const IconBed = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 17 17" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 13V5a1 1 0 011-1h3a1 1 0 011 1v3M2 13v1.5M2 13h13M9 8h4a2 2 0 012 2v3M15 13v1.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconHeart = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 17.2s-6.4-3.9-8.4-7.7C0.4 6.8 1.6 3.6 4.6 2.8c1.9-0.5 3.8 0.3 4.9 1.9 0.1 0.1 0.4 0.1 0.5 0 1.1-1.6 3-2.4 4.9-1.9 3 0.8 4.2 4 3 6.7-2 3.8-8.4 7.7-8.4 7.7z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconSearch = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 14l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const IconVerified = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 1.7l2.2 1.1 2.4-0.4 1.1 2.2 2.2 1.1-0.4 2.4 1.1 2.2-1.7 1.7 0.4 2.4-2.2 1.1-1.1 2.2-2.4-0.4-2.2 1.1-1.7-1.7-2.4 0.4-1.1-2.2-2.2-1.1 0.4-2.4-1.7-1.7 1.1-2.2-0.4-2.4 2.2-1.1 1.1-2.2 2.4 0.4z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M7 10l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconAgent = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="14" cy="7.5" r="2.1" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M1.8 17c0.3-3 2.6-5 5.2-5s4.9 2 5.2 5M12.4 12.2c2.2 0.2 3.9 2 4.2 4.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

export const IconShield = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 1.8l7 2.6v5c0 5-3 8-7 8.8-4-0.8-7-3.8-7-8.8v-5l7-2.6z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M7 10l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconSupport = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M4.5 4.5l2.6 2.6M15.5 4.5l-2.6 2.6M4.5 15.5l2.6-2.6M15.5 15.5l-2.6-2.6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

export const IconStepSearch = ({ className = 'size-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2.2" />
    <path d="M21 21l8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const IconStepInspect = ({ className = 'size-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="9" width="22" height="16" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
    <path d="M5 13h22M11 4.5v5M21 4.5v5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M11 19l3 3 6-6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconStepDecide = ({ className = 'size-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26V11l10-7 10 7v15" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M13 26v-8h6v8" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M21 13l2 2 4-4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconStepMoveIn = ({ className = 'size-8' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="16" r="3.5" stroke="currentColor" strokeWidth="2.2" />
    <path d="M20 19.5V26M6 26V13l9-6.5L24 13" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M11 26v-6h6v6" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
)

export const IconFacebook = ({ className = 'size-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8.5h2.5V5.3h-2.7c-2.6 0-4 1.6-4 4.1v2H7.5v3.1H9.8V21h3.3v-6.5h2.6l.5-3.1h-3.1V9.6c0-.8.3-1.1 1.2-1.1z" />
  </svg>
)

export const IconInstagram = ({ className = 'size-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
)

export const IconTwitter = ({ className = 'size-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 5.5c-.7.3-1.4.6-2.2.7.8-.5 1.4-1.2 1.7-2.1-.7.4-1.5.7-2.4.9-.7-.7-1.7-1.2-2.7-1.2-2.1 0-3.7 1.9-3.2 3.9-3-.1-5.7-1.6-7.5-3.9-1 1.6-.5 3.7 1.1 4.7-.7 0-1.3-.2-1.9-.5 0 1.6 1.2 3.1 2.8 3.5-.6.2-1.2.2-1.8.1.5 1.5 1.9 2.6 3.6 2.7C7 20.6 5 21.1 3 20.9c1.8 1.1 3.9 1.8 6.1 1.8 7.5 0 11.6-6.4 11.4-12.1.8-.5 1.4-1.3 1.5-2.1z" />
  </svg>
)

export const IconLinkedin = ({ className = 'size-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="8.3" r="1.3" />
    <path d="M7 11h2v6.5H7zM11 11h1.9v.9c.4-.6 1.2-1.1 2.3-1.1 1.9 0 2.8 1.2 2.8 3.3v3.9h-2v-3.5c0-1-.4-1.7-1.3-1.7-.7 0-1.2.5-1.4 1-.1.2-.1.4-.1.7v3.5h-2z" />
  </svg>
)
