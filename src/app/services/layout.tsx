import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Bekijk alle diensten van NextX Agency — web design, e-commerce webshops, grafisch ontwerp, UX/UI design, SEO, hosting en outsourcing. Betaalbare prijzen voor Surinaamse bedrijven.',
  keywords: [
    'web design diensten',
    'e-commerce Suriname',
    'webshop laten maken',
    'logo ontwerp',
    'SEO optimalisatie',
    'hosting Suriname',
    'UX UI design',
    'outsourcing Suriname',
  ],
  openGraph: {
    title: 'Diensten — NextX Agency',
    description:
      'Web design, e-commerce, grafisch ontwerp, UX/UI, SEO, hosting en outsourcing. Betaalbare prijzen.',
    url: '/services',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
