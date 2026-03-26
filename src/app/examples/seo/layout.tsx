import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Dashboard Demo',
  description:
    'Demo van een live SEO dashboard met Recharts grafieken, sorteerbare keyword-tabel en periodefilters.',
  openGraph: {
    title: 'SEO Dashboard Demo — NextX Agency',
    description: 'Live SEO dashboard met grafieken, keyword-tabel en periodefilters.',
    url: '/examples/seo',
  },
  alternates: { canonical: '/examples/seo' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
