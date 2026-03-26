import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX/UI Design Demo — ShopPlaza Redesign',
  description:
    'Demo van een UX case study met before/after slider, metrics, bevindingen en design-proces.',
  openGraph: {
    title: 'UX/UI Design Demo — NextX Agency',
    description: 'UX case study met before/after slider, metrics en design-proces.',
    url: '/examples/ux-ui-design',
  },
  alternates: { canonical: '/examples/ux-ui-design' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
