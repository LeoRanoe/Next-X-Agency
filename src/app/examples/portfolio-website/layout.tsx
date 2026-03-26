import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Website Demo — Studio Vibe',
  description:
    'Demo van een creatief portfolio website met filter-tabs, lightbox galerij en animaties.',
  openGraph: {
    title: 'Portfolio Website Demo — NextX Agency',
    description: 'Creatief portfolio met filter-tabs, lightbox galerij en animaties.',
    url: '/examples/portfolio-website',
  },
  alternates: { canonical: '/examples/portfolio-website' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
