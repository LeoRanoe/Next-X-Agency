'use client'

import { memo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'Over' },
  { href: '/contact', label: 'Contact' },
] as const

function NavbarFn() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-dark.png"
              alt="NextX Agency"
              width={140}
              height={56}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.15em] transition-colors',
                  pathname === link.href
                    ? 'text-[#FF6B00]'
                    : 'text-white hover:text-[#FF6B00]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#FF6B00] hover:bg-[#e86200] text-white text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 transition-colors duration-150"
              style={{ borderRadius: '2px' }}
            >
              Aanvraag sturen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#FF6B00]/20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors',
                  pathname === link.href
                    ? 'text-[#FF6B00] bg-[#FF6B00]/10'
                    : 'text-white hover:text-[#FF6B00] hover:bg-[#111111]'
                )}
                style={{ borderRadius: '2px' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#FF6B00] hover:bg-[#e86200] text-white font-bold uppercase tracking-[0.12em] px-5 py-3 text-xs transition-colors duration-150"
                style={{ borderRadius: '2px' }}
              >
                Aanvraag sturen
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export const Navbar = memo(NavbarFn)
