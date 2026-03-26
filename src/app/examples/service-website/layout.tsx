import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Website Demo — DentaCare Paramaribo',
  description:
    'Demo van een multi-page service website voor een tandartspraktijk. Scroll-spy navigatie, teampagina en afsprakensysteem.',
  openGraph: {
    title: 'Service Website Demo — NextX Agency',
    description: 'Multi-page website voor een tandartspraktijk met scroll-spy, team en afsprakensysteem.',
    url: '/examples/service-website',
  },
  alternates: { canonical: '/examples/service-website' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
