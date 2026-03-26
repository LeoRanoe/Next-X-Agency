export const PUBLIC_ROUTES = [
  '/',
  '/services',
  '/portfolio',
  '/about',
  '/contact',
  '/blog',
  '/faq',
  '/examples',
] as const

export type PublicRoute = (typeof PUBLIC_ROUTES)[number]

export const EXAMPLE_ROUTES = [
  '/examples/business-card-site',
  '/examples/service-website',
  '/examples/portfolio-website',
  '/examples/restaurant-menu-site',
  '/examples/starter-webshop',
  '/examples/grotere-webshop',
  '/examples/logo-branding',
  '/examples/ux-ui-design',
  '/examples/seo',
  '/examples/hosting',
  '/examples/ux-kukru',
] as const

export type ExampleRoute = (typeof EXAMPLE_ROUTES)[number]
