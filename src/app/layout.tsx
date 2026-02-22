import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const viewport: Viewport = {
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Stegg — Hide Secret Messages in Images',
  description: 'Stegg uses steganography to hide secret messages inside ordinary images. Your secrets stay hidden in plain sight. Available on iOS.',
  keywords: ['steganography', 'hide messages', 'secret messages', 'image encryption', 'iOS app', 'privacy'],
  openGraph: {
    title: 'Stegg — Secret Messages. Hidden in Plain Sight.',
    description: 'Hide any message in any image with Stegg. Steganography made simple.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
