import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grotere Webshop Demo — TechMart SUR',
  description:
    'Demo van een electronica webshop met filters, zoekfunctie, product-modals en cart-drawer.',
  openGraph: {
    title: 'Grotere Webshop Demo — NextX Agency',
    description: 'Electronica webshop met filters, zoekfunctie, product-modals en cart-drawer.',
    url: '/examples/grotere-webshop',
  },
  alternates: { canonical: '/examples/grotere-webshop' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
