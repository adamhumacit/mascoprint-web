import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from '@/components/seo/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mascoprint - Screen & Pad Printing Specialists',
    template: '%s | Mascoprint',
  },
  description:
    'Family-run industrial printing company specializing in screen and pad printing manufacturing with 50+ years experience. Serving aerospace, automotive, defence, medical, and plastics sectors.',
  keywords: [
    'screen printing',
    'pad printing',
    'industrial printing',
    'cylindrical printing',
    'aerospace printing',
    'automotive printing',
  ],
  authors: [{ name: 'Mascoprint' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mascoprint.co.uk',
    siteName: 'Mascoprint',
    images: [
      {
        url: 'https://mascoprint.co.uk/images/logo/mascoprint-logo-main.png',
        width: 1200,
        height: 630,
        alt: 'Mascoprint - Industrial Printing Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mascoprint',
    creator: '@mascoprint',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
