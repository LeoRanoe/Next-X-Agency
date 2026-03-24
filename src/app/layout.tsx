import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'NextX Agency — Complete Digital Solutions for Modern Businesses',
  description:
    'NextX Agency helpt Surinaamse bedrijven professioneel online te groeien — snel, betaalbaar en volledig op maat. Web design, e-commerce, grafisch ontwerp en meer.',
  keywords: [
    'NextX Agency',
    'web design Suriname',
    'digital agency Paramaribo',
    'website laten maken',
    'e-commerce Suriname',
    'grafisch ontwerp',
  ],
  openGraph: {
    title: 'NextX Agency — Complete Digital Solutions',
    description:
      'Professionele digitale oplossingen voor Surinaamse bedrijven. Snel, betaalbaar en volledig op maat.',
    type: 'website',
    locale: 'nl_SR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
