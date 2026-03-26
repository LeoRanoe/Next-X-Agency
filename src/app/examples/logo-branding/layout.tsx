import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logo & Branding Demo — Savana Coffee',
  description:
    'Demo van een compleet brandbook met animated SVG logo, kleurenpalet, typografie en mock-ups.',
  openGraph: {
    title: 'Logo & Branding Demo — NextX Agency',
    description: 'Compleet brandbook met animated SVG logo, kleurenpalet en typografie.',
    url: '/examples/logo-branding',
  },
  alternates: { canonical: '/examples/logo-branding' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
