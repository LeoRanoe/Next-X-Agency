import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX Kukru Outsourcing Demo',
  description:
    'Demo van een community platform case study met FAQ, team, pricing pakketten en contactformulier.',
  openGraph: {
    title: 'UX Kukru Demo — NextX Agency',
    description: 'Community platform met FAQ, team, pricing pakketten en contactformulier.',
    url: '/examples/ux-kukru',
  },
  alternates: { canonical: '/examples/ux-kukru' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
