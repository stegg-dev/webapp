import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SITE_URL } from './site-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#061c17',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Stegg — Hide Secret Messages in Photos',
    template: '%s — Stegg',
  },
  description: 'Hide secret messages and photos inside ordinary images. Private on-device processing, screenshot recovery, and a one-time Pro upgrade.',
  keywords: ['steganography', 'hide secret messages', 'hide photos', 'private messaging', 'screenshot recovery', 'offline privacy'],
  applicationName: 'Stegg',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Stegg — A secret can look like any other photo.',
    description: 'Hide messages and photos inside ordinary images. Everything is processed on your device.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Stegg',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Stegg — hide secret messages and photos in plain sight',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stegg — Hidden in plain sight.',
    description: 'Private, on-device steganography for iPhone. Android coming soon.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
