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
    default: 'Stegg — Hide Secret Messages & Photos Privately',
    template: '%s — Stegg',
  },
  description: 'Hide secret messages and photos inside ordinary images with private, on-device steganography. Free for iPhone, with Android coming soon.',
  keywords: ['steganography', 'hide secret messages', 'hide photos', 'private messaging', 'screenshot recovery', 'offline privacy'],
  applicationName: 'Stegg',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Stegg — Hide Secrets in Plain Sight',
    description: 'Hide messages and photos inside ordinary images. No account, no cloud processing—everything stays on your device.',
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
    title: 'Stegg — Hide Secrets in Plain Sight',
    description: 'Hide messages and photos inside ordinary images. No account, no cloud processing—everything stays on your device.',
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
