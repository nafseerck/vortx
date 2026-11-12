import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'BLASTX Dry Ice — Precision Eco-Cleaning & Detailing | Dubai, UAE',
  description:
    'BLASTX is Dubai’s premier zero-water, chemical-free precision eco-cleaning service for hypercars, superyachts, aviation, and industrial maintenance.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050d14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="noise antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
