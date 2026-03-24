'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import {
  fadeInUp,
  blurFadeIn,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  cardFlipIn,
} from '@/lib/animationUtils'

const contactItems = [
  { icon: Mail, label: 'Email', value: 'lranoesendjojo@gmail.com', href: 'mailto:lranoesendjojo@gmail.com', isExternal: false },
  { icon: Phone, label: 'WhatsApp', value: '+597 831-8508', href: 'https://wa.me/5978318508', isExternal: true },
  { icon: MapPin, label: 'Locatie', value: 'Paramaribo, Suriname', href: null, isExternal: false },
  { icon: Clock, label: 'Reactietijd', value: 'Binnen 24-48 uur', href: null, isExternal: false },
] as const

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative max-w-6xl mx-auto px-6 text-center"
          >
            <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Neem Contact Op
            </motion.div>
            <motion.h1 variants={blurFadeIn} className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Laten we samenwerken
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Beschrijf uw project en wij sturen binnen 24-48 uur een
              vrijblijvende quote. Of stuur direct een WhatsApp bericht.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact content */}
        <section className="py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2 variants={fadeInDown} className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Stuur ons een bericht
                </motion.h2>
                <ContactForm />
              </motion.div>

              {/* Info */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2 variants={fadeInDown} className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                  Direct contact
                </motion.h2>

                <motion.div
                  variants={staggerContainerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="space-y-4 mb-10"
                >
                  {contactItems.map(({ icon: Icon, label, value, href, isExternal }) => (
                    <motion.div
                      key={label}
                      variants={cardFlipIn}
                      className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-0.5 text-sm">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-slate-500 hover:text-primary transition-colors text-sm"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-slate-500 text-sm">{value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quick CTA */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-3xl p-8 text-center"
                >
                  <p className="text-slate-900 font-semibold mb-2">
                    Liever direct chatten?
                  </p>
                  <p className="text-slate-500 text-sm mb-4">
                    Stuur een WhatsApp bericht en we reageren snel.
                  </p>
                  <a
                    href="https://wa.me/5978318508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    Open WhatsApp
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
