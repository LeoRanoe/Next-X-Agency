import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hosting Panel Demo',
  description:
    'Demo van een hosting control panel met resource meters, uptime grafieken, backup beheer en server restart.',
  openGraph: {
    title: 'Hosting Panel Demo — NextX Agency',
    description: 'Hosting control panel met resource meters, uptime grafieken en backup beheer.',
    url: '/examples/hosting',
  },
  alternates: { canonical: '/examples/hosting' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
