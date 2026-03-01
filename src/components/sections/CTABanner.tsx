import { memo } from 'react'
import Link from 'next/link'

function CTABannerFn() {
  return (
    <section className="bg-[#FF6B00] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-headline text-[#0a0a0a] mb-4">
          Klaar om uw bedrijf online te laten groeien?
        </h2>
        <p className="text-body-lg text-[#0a0a0a]/70 max-w-2xl mx-auto mb-10">
          Stuur ons een bericht en ontvang binnen 24-48 uur een vrijblijvende
          quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] font-bold uppercase tracking-[0.12em] text-xs px-8 py-4 transition-colors duration-150 min-h-[44px]"
            style={{ borderRadius: '2px' }}
          >
            Stuur een aanvraag
          </Link>
          <a
            href="https://wa.me/5978318508"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0a0a0a] hover:bg-white/90 font-bold uppercase tracking-[0.12em] text-xs px-8 py-4 transition-colors duration-150 min-h-[44px]"
            style={{ borderRadius: '2px' }}
          >
            WhatsApp ons
          </a>
        </div>
      </div>
    </section>
  )
}

export const CTABanner = memo(CTABannerFn)
