'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  fadeInUp,
  slideInLeft,
  staggerContainerFast,
  staggerContainerSlow,
  cardFlipIn,
  blurFadeIn,
} from '@/lib/animationUtils'

// Inline icons (simplified for light theme)
const IconBusinessCard = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <rect x="6" y="18" width="52" height="28" rx="4" />
    <line x1="6" y1="27" x2="58" y2="27" stroke="#f97015" strokeWidth="0.8" />
    <rect x="12" y="33" width="16" height="2" rx="1" fill="#f97015" opacity="0.7" />
    <rect x="12" y="38" width="10" height="1.5" rx="0.75" fill="currentColor" opacity="0.35" />
    <circle cx="47" cy="36" r="6" stroke="#f97015" strokeWidth="1" />
  </svg>
)

const IconServiceWebsite = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <rect x="8" y="12" width="48" height="36" rx="4" />
    <line x1="8" y1="22" x2="56" y2="22" stroke="#f97015" strokeWidth="0.8" />
    <circle cx="14" cy="17" r="1.5" fill="#f97015" />
    <circle cx="20" cy="17" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="26" cy="17" r="1.5" fill="currentColor" opacity="0.25" />
    <rect x="14" y="28" width="36" height="3" rx="1" fill="currentColor" opacity="0.15" />
    <rect x="14" y="34" width="22" height="2" rx="1" fill="currentColor" opacity="0.1" />
    <path d="M22 56 L42 56" stroke="#f97015" strokeWidth="1" />
  </svg>
)

const IconWebshop = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 14 L14 14 L19 38 L50 38" />
    <path d="M14 14 L18 30 L50 30 L53 14 Z" />
    <circle cx="24" cy="44" r="3" stroke="#f97015" strokeWidth="1.2" />
    <circle cx="44" cy="44" r="3" stroke="#f97015" strokeWidth="1.2" />
    <path d="M27 20 L37 20 M32 15 L32 25" stroke="#f97015" strokeWidth="1" />
  </svg>
)

const IconLogoBranding = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 10 L52 52 L12 52 Z" />
    <circle cx="32" cy="38" r="9" stroke="#f97015" strokeWidth="1" strokeDasharray="3 2" />
    <circle cx="42" cy="26" r="1.5" fill="#f97015" />
  </svg>
)

const IconUxUi = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <rect x="6" y="10" width="52" height="36" rx="4" />
    <line x1="6" y1="20" x2="58" y2="20" stroke="#f97015" strokeWidth="0.8" />
    <circle cx="12" cy="15" r="1.5" fill="#f97015" />
    <rect x="12" y="27" width="12" height="12" rx="2" stroke="#f97015" strokeWidth="1" strokeDasharray="2 1.5" />
    <rect x="30" y="27" width="22" height="5" rx="2" fill="currentColor" opacity="0.15" />
    <rect x="30" y="35" width="14" height="4" rx="2" fill="currentColor" opacity="0.1" />
  </svg>
)

const IconUxKukru = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="22" r="10" />
    <path d="M14 54 C14 40 50 40 50 54" />
    <circle cx="14" cy="26" r="6" stroke="#f97015" strokeWidth="1" strokeDasharray="2.5 1.5" />
    <circle cx="50" cy="26" r="6" stroke="#f97015" strokeWidth="1" strokeDasharray="2.5 1.5" />
  </svg>
)

const IconSeo = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="28" cy="28" r="16" />
    <path d="M39 39 L54 54" strokeWidth="2.5" />
    <path d="M20 28 Q28 18 36 28" fill="none" stroke="#f97015" strokeWidth="1.5" />
    <line x1="20" y1="33" x2="36" y2="33" stroke="#f97015" strokeWidth="0.8" />
    <line x1="20" y1="37" x2="36" y2="37" stroke="#f97015" strokeWidth="0.8" />
  </svg>
)

// Category data
const categories = [
  {
    id: 'build',
    tag: 'Web & Platform',
    title: 'Build',
    subtitle: 'Van snelle landingspagina tot volledig e-commerce platform.',
    services: [
      { name: 'Business Card Site', description: 'Krachtige one-page digitale identiteit. Professioneel en direct inzetbaar.', price: '$100', href: '/services#websites', recommended: false, Icon: IconBusinessCard },
      { name: 'Service Website', description: 'Responsive multi-page platform met geavanceerde functionaliteiten.', price: '$120', href: '/services#websites', recommended: true, features: ["5 geoptimaliseerde pagina's", 'Lead Forms integratie', 'Basis SEO setup'], Icon: IconServiceWebsite },
      { name: 'Starter Webshop', description: 'Max 25 producten. Winkelwagen, checkout en betaalgateway inbegrepen.', price: '$280', href: '/services#e-commerce', recommended: false, Icon: IconWebshop },
    ],
  },
  {
    id: 'design',
    tag: 'Visueel & UX',
    title: 'Design',
    subtitle: 'Merkidentiteit, interface en gebruikerservaring die converteert.',
    services: [
      { name: 'Logo & Branding', description: 'Vector-gebaseerd conceptontwerp. Scherpe merkidentiteit voor elk formaat.', price: '$20', href: '/services#graphic-design', recommended: false, Icon: IconLogoBranding },
      { name: 'UX/UI Design', description: 'UX audits, UI redesigns en gebruiksvriendelijke Figma mockups.', price: '$50', href: '/services#ux-ui', recommended: false, Icon: IconUxUi },
      { name: 'UX Kukru', description: 'Dedicated specialist ondersteund door ons team. Starter, Business of Partner.', price: '$90', href: '/services#ux-kukru', recommended: false, Icon: IconUxKukru },
    ],
  },
  {
    id: 'marketing',
    tag: 'Zichtbaarheid',
    title: 'Marketing',
    subtitle: 'Vergroot je online bereik met SEO en zoekwoordstrategie.',
    services: [
      { name: 'SEO & Zichtbaarheid', description: 'Basis SEO setup, Google Search Console, sitemap en keyword monitoring.', price: '$30', href: '/services#seo', recommended: false, features: ['Google Search Console', 'XML Sitemap setup', 'Keyword monitoring'], Icon: IconSeo },
    ],
  },
] as const

type ServiceItem = (typeof categories)[number]['services'][number]

function ServiceCard({ service }: { service: ServiceItem }) {
  const { name, description, price, href, recommended, Icon } = service
  const features = 'features' in service ? (service as { features: readonly string[] }).features : []
  return (
    <motion.div variants={cardFlipIn} className="h-full">
      <Link
        href={href}
        className="group flex flex-col h-full bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/30 relative overflow-hidden"
      >
        {recommended && (
          <span className="absolute top-0 right-0 px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
            Aanbevolen
          </span>
        )}

        {/* Icon */}
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
          <div className="w-9 h-9"><Icon /></div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
          {name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mb-4 space-y-1.5 text-sm">
            {features.map((f: string) => (
              <li key={f} className="flex items-center text-slate-600">
                <span className="text-primary mr-2 font-bold">›</span>{f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-end gap-1">
            <span className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
              {price.replace('', '')}
            </span>
            <span className="text-slate-400 mb-1 text-sm font-medium">/ start</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function CategoryBlock({ cat }: { cat: (typeof categories)[number] }) {
  const isWideCard = cat.services.length === 1
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainerSlow}
      className="mb-20 last:mb-0"
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary tracking-widest uppercase px-3 py-1 bg-primary/5 border border-primary/15 rounded-full">
            {cat.tag}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {cat.title}
          </h3>
          <p className="text-slate-500 text-sm max-w-sm md:text-right leading-relaxed">
            {cat.subtitle}
          </p>
        </div>
      </motion.div>

      <div className={isWideCard ? 'max-w-sm' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {cat.services.map((svc) => (
          <ServiceCard key={svc.name} service={svc} />
        ))}
      </div>
    </motion.div>
  )
}

function ServicesSectionFn() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="services">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <motion.div variants={slideInLeft} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Diensten
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Schaalbare{' '}
              <span className="text-primary">Oplossingen</span>
            </h2>
            <motion.p variants={blurFadeIn} className="mt-4 text-slate-500 text-lg leading-relaxed">
              3 categorieën — 7 services — één schaalbare aanpak
            </motion.p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-orange-600 transition-colors group"
            >
              Bekijk portfolio
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Categories */}
        {categories.map((cat) => (
          <CategoryBlock key={cat.id} cat={cat} />
        ))}
      </div>
    </section>
  )
}

export { ServicesSectionFn as ServicesSection }
