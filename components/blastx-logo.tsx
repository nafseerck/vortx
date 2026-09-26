import React from 'react'

interface BlastxLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number
  className?: string
  alt?: string
}

export function BlastxLogo({
  size = 32,
  className = '',
  alt = 'BLASTX',
  ...props
}: BlastxLogoProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover shrink-0 ${className}`}
      style={{ width: size, height: size }}
      {...props}
    />
  )
}
