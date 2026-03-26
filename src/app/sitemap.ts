import type { MetadataRoute } from 'next'

const SITE_URL = 'https://nextxagency.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/examples`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  const exampleSlugs = [
    'business-card-site',
    'service-website',
    'portfolio-website',
    'restaurant-menu-site',
    'starter-webshop',
    'grotere-webshop',
    'logo-branding',
    'ux-ui-design',
    'seo',
    'hosting',
    'ux-kukru',
  ]

  const examplePages: MetadataRoute.Sitemap = exampleSlugs.map((slug) => ({
    url: `${SITE_URL}/examples/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...mainPages, ...examplePages]
}
