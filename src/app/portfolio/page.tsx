'use client'

import { motion } from 'framer-motion'
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

const projectVisuals = [
  { bg: 'bg-gradient-to-br from-primary/10 to-orange-50', accent: 'text-primary' },
  { bg: 'bg-gradient-to-br from-sky-500/10 to-sky-50', accent: 'text-sky-500' },
  { bg: 'bg-gradient-to-br from-violet-500/10 to-violet-50', accent: 'text-violet-500' },
  { bg: 'bg-gradient-to-br from-emerald-500/10 to-emerald-50', accent: 'text-emerald-500' },
  { bg: 'bg-gradient-to-br from-amber-500/10 to-amber-50', accent: 'text-amber-500' },
  { bg: 'bg-gradient-to-br from-pink-500/10 to-pink-50', accent: 'text-pink-500' },
] as const

const projects = [
  {
    title: 'Tjin Catering',
    category: 'Restaurant Website',
    description: 'Complete restaurant website met digitaal menu, openingstijden en reserveringslink.',
    tags: ['Web Design', 'Restaurant'],
  },
  {
    title: 'RP Trading',
    category: 'E-Commerce',
    description: 'Webshop met productcatalogus, winkelwagen en Stripe betalingsintegratie.',
    tags: ['E-Commerce', 'Webshop'],
  },
  {
    title: 'Suri Style Boutique',
    category: 'E-Commerce',
    description: 'Mode webshop met klantaccounts, wishlist en order tracking systeem.',
    tags: ['E-Commerce', 'Fashion'],
  },
  {
    title: 'Green Garden Landscaping',
    category: 'Service Website',
    description: 'Multi-page service website met portfolio galerij en contactformulier.',
    tags: ['Web Design', 'Services'],
  },
  {
    title: 'Studio Kroon',
    category: 'Portfolio Website',
    description: "Fotografen portfolio met galerij, project detail pagina's en over mij sectie.",
    tags: ['Portfolio', 'Fotografie'],
  },
  {
    title: 'FreshBite Delivery',
    category: 'Brand Identity',
    description: 'Complete visuele identiteit \u2014 logo, social media templates en flyer designs.',
    tags: ['Graphic Design', 'Branding'],
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

        {/* Projects grid */}
        <section className="py-24 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => {
                const vis = projectVisuals[index % projectVisuals.length]
                return (
                  <motion.div
                    key={project.title}
                    variants={cardFlipIn}
                    className="group"
                  >
                    <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20">
                      {/* Preview area */}
                      <div className={`aspect-[16/9] ${vis.bg} relative flex items-center justify-center`}>
                        <span className={`text-3xl font-bold ${vis.accent} opacity-20`} style={{ fontFamily: 'var(--font-heading)' }}>
                          {project.title.charAt(0)}
                        </span>
                        <div className="absolute bottom-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/80 backdrop-blur-sm text-slate-600 border border-slate-200/60">
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
                )
              })}
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
