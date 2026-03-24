'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, blurFadeIn, staggerContainer, scaleIn } from '@/lib/animationUtils'

function CTABannerFn() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #f97015 40%, #ff8c00 70%, #FF6B00 100%)' }}>
      {/* Subtle decorative circles */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-black/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Klaar om uw bedrijf online te laten groeien?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-900/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stuur ons een bericht en ontvang binnen 24-48 uur een vrijblijvende
            quote.
          </motion.p>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div variants={scaleIn}>
              <Link
                href="/contact"
                className="inline-block bg-slate-900 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20 min-h-[44px]"
              >
                Stuur een aanvraag
              </Link>
            </motion.div>
            <motion.div variants={scaleIn}>
              <a
                href="https://wa.me/5978318508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-slate-900 font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-xl min-h-[44px]"
              >
                WhatsApp ons
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { CTABannerFn as CTABanner }
