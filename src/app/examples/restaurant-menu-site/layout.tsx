import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Menu Site Demo — Warung Indah',
  description:
    'Demo van een Surinaamse restaurant website met volledig digitaal menu, reserveringsformulier en openingstijden.',
  openGraph: {
    title: 'Restaurant Menu Site Demo — NextX Agency',
    description: 'Restaurant website met digitaal menu, reserveringsformulier en openingstijden.',
    url: '/examples/restaurant-menu-site',
  },
  alternates: { canonical: '/examples/restaurant-menu-site' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
