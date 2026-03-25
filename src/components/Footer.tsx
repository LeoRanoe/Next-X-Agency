import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const serviceLinks = [
  { href: '/services#graphic-design', label: 'Graphic Design' },
  { href: '/services#websites', label: 'Websites' },
  { href: '/services#e-commerce', label: 'E-Commerce' },
  { href: '/services#ux-ui', label: 'UX/UI Design' },
  { href: '/services#seo', label: 'SEO' },
  { href: '/services#hosting', label: 'Hosting' },
]

const companyLinks = [
  { href: '/about', label: 'Over Ons' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

function FooterFn() {
  return (
    <footer className="bg-white border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/logo-light.png"
                alt="NextX Agency"
                width={140}
                height={56}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm mb-6 max-w-xs leading-relaxed">
              Complete Digital Solutions for Modern Businesses. Lokaal in
              Paramaribo, Suriname.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5978318508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-50 hover:bg-primary/10 border border-slate-200 hover:border-primary/30 flex items-center justify-center text-slate-400 hover:text-primary transition-all rounded-xl"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:lranoesendjojo@gmail.com"
                className="w-10 h-10 bg-slate-50 hover:bg-primary/10 border border-slate-200 hover:border-primary/30 flex items-center justify-center text-slate-400 hover:text-primary transition-all rounded-xl"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.shop-nextx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-50 hover:bg-primary/10 border border-slate-200 hover:border-primary/30 flex items-center justify-center text-slate-400 hover:text-primary transition-all rounded-xl"
                aria-label="Website"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4">
              Diensten
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4">
              Bedrijf
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:lranoesendjojo@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  lranoesendjojo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500 text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href="https://wa.me/5978318508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +597 831-8508
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-500 text-sm">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>Paramaribo, Suriname</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} NextX Agency. Alle rechten voorbehouden.
          </p>
          <p className="text-sm text-slate-400">
            Gemaakt door{' '}
            <span className="text-primary font-medium">NextX</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterFn)
