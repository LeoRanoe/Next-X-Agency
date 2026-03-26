import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextX Agency — Complete Digital Solutions',
    short_name: 'NextX Agency',
    description:
      'Professionele digitale oplossingen voor Surinaamse bedrijven. Web design, e-commerce, grafisch ontwerp en meer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97015',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
