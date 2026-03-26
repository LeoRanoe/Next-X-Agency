import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Bekijk recente projecten van NextX Agency — van moderne webshops tot creatieve portfolio websites. Elk project volledig op maat gebouwd.',
  openGraph: {
    title: 'Portfolio — NextX Agency',
    description:
      'Recente projecten van NextX Agency. Van webshops tot portfolio websites, volledig op maat.',
    url: '/portfolio',
  },
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
