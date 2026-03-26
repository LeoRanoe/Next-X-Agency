import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starter Webshop Demo — Bloom Boutique',
  description:
    'Demo van een fashion webshop met werkende winkelwagen, checkout-flow en wishlist functionaliteit.',
  openGraph: {
    title: 'Starter Webshop Demo — NextX Agency',
    description: 'Fashion webshop met winkelwagen, checkout-flow en wishlist.',
    url: '/examples/starter-webshop',
  },
  alternates: { canonical: '/examples/starter-webshop' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
