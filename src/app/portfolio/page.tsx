'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  fadeInUp,
  blurFadeIn,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  cardFlipIn,
} from '@/lib/animationUtils'

const projects = [
  {
    title: 'Tjin Catering',
    category: 'Restaurant Website',
    description: 'Complete restaurant website met digitaal menu, openingstijden en reserveringslink.',
    tags: ['Web Design', 'Restaurant'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'RP Trading',
    category: 'E-Commerce',
    description: 'Webshop met productcatalogus, winkelwagen en Stripe betalingsintegratie.',
    tags: ['E-Commerce', 'Webshop'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Suri Style Boutique',
    category: 'E-Commerce',
    description: 'Mode webshop met klantaccounts, wishlist en order tracking systeem.',
    tags: ['E-Commerce', 'Fashion'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Green Garden Landscaping',
    category: 'Service Website',
    description: 'Multi-page service website met portfolio galerij en contactformulier.',
    tags: ['Web Design', 'Services'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Studio Kroon',
    category: 'Portfolio Website',
    description: "Fotografen portfolio met galerij, project detail pagina's en over mij sectie.",
    tags: ['Portfolio', 'Fotografie'],
    image: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'FreshBite Delivery',
    category: 'Brand Identity',
    description: 'Complete visuele identiteit \u2014 logo, social media templates en flyer designs.',
    tags: ['Graphic Design', 'Branding'],
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop&q=80',
  },
] as const

export default function PortfolioPage() {
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
              Ons Werk
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Portfolio
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Een selectie van recente projecten. Elk project begint als template
              en wordt volledig gepersonaliseerd naar de wensen van de klant.
            </motion.p>
          </motion.div>
        </section>

        {/* Disclaimer banner */}
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/5 border border-primary/15 text-sm"
            >
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-600">
                <strong className="text-slate-900">Opmerking:</strong> Dit zijn illustratieve voorbeeldprojecten die laten zien wat wij kunnen bouwen. Wij zijn net gestart en bouwen ons portfolio op met echte klanten.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16 lg:py-24 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={cardFlipIn}
                  className="group"
                >
                  <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20">
                    {/* Preview area with real image */}
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                      {/* Voorbeeldproject badge */}
                      <span className="project-badge">Voorbeeldproject</span>
                      {/* Category */}
                      <div className="absolute bottom-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200/60">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
