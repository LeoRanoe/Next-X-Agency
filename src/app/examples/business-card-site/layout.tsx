import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Card Site Demo — KaderBouw NV',
  description:
    'Demo van een professionele one-page business card website voor een bouwbedrijf. Counter-animaties, contactformulier en responsive design.',
  openGraph: {
    title: 'Business Card Site Demo — NextX Agency',
    description: 'One-page digitale identiteit voor een bouwbedrijf met counter-animaties en contactformulier.',
    url: '/examples/business-card-site',
  },
  alternates: { canonical: '/examples/business-card-site' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
