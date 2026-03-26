import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Leer meer over NextX Agency — een innovatieve digitale startup in Paramaribo, Suriname. Onze missie, visie en het team achter professionele digitale oplossingen.',
  openGraph: {
    title: 'Over Ons — NextX Agency',
    description:
      'Leer meer over NextX Agency. Innovatieve digitale startup in Paramaribo voor web design, e-commerce en meer.',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
