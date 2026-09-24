import React from 'react'

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function PelletsLogoIcon({ size = 24, className = '', ...props }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="blastx-pellet-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="blastx-pellet-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="blastx-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Supersonic Blast Wave Accents */}
      <path
        d="M2 12C2 12 4.5 9 8 9"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M2.5 15C2.5 15 5 13 7.5 13"
        stroke="#a5f3fc"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Main Dry Ice Cylinder Pellet 1 (Center Front) */}
      <rect
        x="9"
        y="6"
        width="6"
        height="11"
        rx="3"
        fill="url(#blastx-pellet-grad1)"
        stroke="#e0f2fe"
        strokeWidth="1"
        filter="url(#blastx-glow)"
      />
      <ellipse cx="12" cy="7.5" rx="3" ry="1.2" fill="#e0f2fe" opacity="0.9" />

      {/* Pellet 2 (Top Left Accent Pellet) */}
      <rect
        x="5.5"
        y="11"
        width="4.5"
        height="8"
        rx="2.25"
        fill="url(#blastx-pellet-grad2)"
        stroke="#bae6fd"
        strokeWidth="0.8"
        transform="rotate(-20 7.75 15)"
      />
      <ellipse
        cx="7.75"
        cy="12.2"
        rx="2.25"
        ry="0.9"
        fill="#ffffff"
        opacity="0.85"
        transform="rotate(-20 7.75 12.2)"
      />

      {/* Pellet 3 (Right Back Pellet) */}
      <rect
        x="14"
        y="9"
        width="5"
        height="9"
        rx="2.5"
        fill="url(#blastx-pellet-grad1)"
        stroke="#7dd3fc"
        strokeWidth="0.8"
        transform="rotate(15 16.5 13.5)"
      />
      <ellipse
        cx="16.5"
        cy="10.2"
        rx="2.5"
        ry="1"
        fill="#e0f2fe"
        opacity="0.8"
        transform="rotate(15 16.5 10.2)"
      />

      {/* Energy Sublimation Sparkle Particles */}
      <circle cx="19" cy="5" r="1" fill="#7dd3fc" />
      <circle cx="21" cy="9" r="0.8" fill="#a5f3fc" opacity="0.8" />
      <circle cx="5" cy="6" r="0.8" fill="#e0f2fe" opacity="0.7" />
    </svg>
  )
}
