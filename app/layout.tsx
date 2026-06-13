import type { Metadata } from 'next'
import { Barlow_Condensed, Source_Serif_4 } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ExcavPro — Excavații & Terasamente Profesionale',
    template: '%s | ExcavPro',
  },
  description:
    'Servicii profesionale de excavații, terasamente, demolări și lucrări de pământ. 15+ ani experiență, 500+ proiecte finalizate. Disponibil 24/7.',
  keywords: [
    'excavații',
    'terasamente',
    'fundații',
    'demolări',
    'săpături',
    'canalizare',
    'transport pământ',
  ],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteUrl,
    siteName: 'ExcavPro',
    title: 'ExcavPro — Excavații & Terasamente Profesionale',
    description:
      'Servicii profesionale de excavații, terasamente, demolări și lucrări de pământ.',
    images: [
      {
        url: '/logo_excavator.png',
        width: 1200,
        height: 1200,
        alt: 'ExcavPro — Excavații & Terasamente Profesionale',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'ExcavPro — Excavații & Terasamente Profesionale',
    description: 'Servicii profesionale de excavații, terasamente, demolări și lucrări de pământ.',
    images: ['/logo_excavator.png'],
  },
  icons: {
    icon: '/logo_excavator.png',
    apple: '/logo_excavator.png',
    shortcut: '/logo_excavator.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ro"
      className={`${barlowCondensed.variable} ${sourceSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
