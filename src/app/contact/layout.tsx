import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met NextX Agency voor een vrijblijvende quote. Stuur een bericht of WhatsApp ons — reactie binnen 24-48 uur. Paramaribo, Suriname.',
  openGraph: {
    title: 'Contact — NextX Agency',
    description:
      'Neem contact op voor een vrijblijvende quote. Reactie binnen 24-48 uur.',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
