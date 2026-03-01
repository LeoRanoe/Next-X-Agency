export const PUBLIC_ROUTES = [
  '/',
  '/services',
  '/portfolio',
  '/about',
  '/contact',
  '/blog',
  '/faq',
] as const

export type PublicRoute = (typeof PUBLIC_ROUTES)[number]
