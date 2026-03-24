'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  Brush,
  Globe,
  ShoppingCart,
  Figma,
  Search,
  Server,
  Users,
  Check,
} from 'lucide-react'
import {
  fadeInUp,
  blurFadeIn,
  fadeInDown,
  slideInLeft,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  cardFlipIn,
  scaleIn,
} from '@/lib/animationUtils'

const serviceCategories = [
  {
    id: 'graphic-design',
    icon: Brush,
    title: 'Graphic Marketing & Visual Design',
    description: 'Professionele visuele identiteit voor uw merk \u2014 van logo tot social media content.',
    services: [
      { name: 'Logo Design', price: 'Vanaf $20', includes: '1 logo concept, 2 revisie rondes, export PNG/JPG (transparant + wit). Extra formats op aanvraag.' },
      { name: 'Social Media Post Design', price: '$4 per post', includes: '1 design per post, 1 revisie ronde, Instagram/Facebook ready formaat (1080\u00d71080 of 1080\u00d71350).' },
      { name: 'Flyer/Poster Design', price: 'Vanaf $8', includes: '1 design, 2 revisie rondes, print-ready PDF (A4/A5 standaard). Custom formaten mogelijk.' },
    ],
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Websites & Online Presence',
    description: 'Volledig responsive websites gepersonaliseerd naar uw huisstijl, met SSL en basis SEO inbegrepen.',
    services: [
      { name: 'Business Card Site', price: 'Vanaf $100', includes: 'One-page design, bedrijfsinfo, WhatsApp knop, contactformulier, responsive design, online publicatie.' },
      { name: 'Service Website', price: 'Vanaf $120', includes: 'Multi-page site (Home, Diensten, Over Ons, Contact), responsive design, contactformulier, online publicatie.' },
      { name: 'Portfolio Website', price: 'Vanaf $130', includes: "Portfolio galerij (max 20 items), project detail pagina's, over mij/ons, contact, responsive design." },
      { name: 'Restaurant/Menu Site', price: 'Vanaf $130', includes: 'Digitaal menu (max 50 items), openingstijden, locatie/kaart, reserveringslink, responsive design.' },
    ],
  },
  {
    id: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-Commerce Webshops',
    description: 'Complete webshops met winkelwagen, checkout en betalingsgateway integratie.',
    services: [
      { name: 'Starter Webshop', price: 'Vanaf $280', includes: 'Max 25 producten, winkelwagen, checkout, betalingsgateway (Stripe/PayPal), responsive design, basis productbeheer instructies.' },
      { name: 'Grotere Webshop', price: 'Vanaf $420', includes: 'Max 100 producten, categorie\u00ebn, filters, zoekfunctie, klantaccounts, order tracking, meerdere betaalmethoden, uitgebreide instructies.' },
    ],
    note: 'Extra producten boven limiet: $2 per product (tot 250 producten). Meer dan 250 producten = custom pricing.',
  },
  {
    id: 'ux-ui',
    icon: Figma,
    title: 'UX/UI Design Services',
    description: 'Verbeter uw gebruikerservaring met professionele UX audits en UI re-designs.',
    services: [
      { name: 'UX Audit & Advies', price: 'Vanaf $50', includes: 'Analyse van huidige website/app, verbeterpunten rapport (PDF), basis aanbevelingen.' },
      { name: 'UI Design (Re-design)', price: 'Vanaf $90', includes: "Nieuw design voor max 3 pagina's/schermen, Figma/Adobe XD mockups, 2 revisie rondes. Implementatie apart geprijsd." },
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Online Zichtbaarheid',
    description: 'Verbeter uw vindbaarheid in zoekmachines met professionele SEO optimalisatie.',
    services: [
      { name: 'Basic SEO Setup', price: 'Vanaf $30', includes: 'Meta tags optimalisatie, sitemap, Google Search Console setup, robots.txt configuratie.' },
      { name: 'Maandelijkse SEO Support', price: '$25/maand', includes: 'Maandelijkse performance rapportage, keyword monitoring, content suggesties, technische checks. Min. 3 maanden contract.' },
    ],
  },
  {
    id: 'hosting',
    icon: Server,
    title: 'Webhosting & Technische Support',
    description: 'Betrouwbare hosting met SSL, dagelijkse backups en 99.9% uptime garantie.',
    services: [
      { name: 'Hosting Setup (eenmalig)', price: '$15', includes: 'Hosting account aanmaken, domein koppeling, SSL installatie, website deployment.' },
      { name: 'Basic Hosting', price: '$4/maand', includes: '10GB storage, 100GB bandwidth, SSL, dagelijkse backups, 99.9% uptime.' },
      { name: 'Business Hosting', price: '$10/maand', includes: '50GB storage, onbeperkte bandwidth, SSL, CDN, dagelijkse backups, priority support, 99.9% uptime.' },
    ],
    note: 'Domein registratie niet inbegrepen \u2014 klant registreert eigen domein of wij verzorgen dit tegen kostprijs + $5 service fee.',
  },
  {
    id: 'ux-kukru',
    icon: Users,
    title: 'UX Kukru \u2014 Outsourcing Service',
    description: 'Toegang tot ons volledige NextX team via \u00e9\u00e9n dedicated specialist. Flexibele maandpakketten voor structurele digitale ondersteuning.',
    services: [
      { name: 'Starter Support', price: '$90/maand', includes: '10 uur/maand, kleine updates, bug fixes, content wijzigingen, technisch advies, email support (48u response).' },
      { name: 'Business Support', price: '$160/maand', includes: '20 uur/maand, feature development, design updates, integraties, strategisch advies, Slack support (24u response).' },
      { name: 'Partner Support', price: '$260/maand', includes: '40 uur/maand, dedicated specialist, priority support, complexe projecten, team collaboration, direct contact (12u response).' },
    ],
    note: 'Extra uren boven pakket limiet: $12/uur. Alle pakketten vereisen minimaal 3 maanden commitment.',
  },
]

export default function ServicesPage() {
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
              Ons Aanbod
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Alles wat uw bedrijf digitaal nodig heeft
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Van logo en social media tot complete webshops en maandelijkse
              support. \u00c9\u00e9n partner, complete oplossingen.
            </motion.p>
          </motion.div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={index % 2 === 0 ? 'py-24 lg:py-32 relative' : 'py-24 lg:py-32 bg-slate-50/50 relative'}
          >
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              {/* Category header */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-4 mb-12"
              >
                <motion.div
                  variants={scaleIn}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <category.icon size={28} className="text-primary" />
                </motion.div>
                <div>
                  <motion.h2 variants={slideInLeft} className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {category.title}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-slate-500 leading-relaxed">
                    {category.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Service cards */}
              <motion.div
                variants={staggerContainerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.services.map((service) => (
                  <motion.div
                    key={service.name}
                    variants={cardFlipIn}
                    className="bg-white border border-slate-100 rounded-3xl p-6 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                      <span className="ml-4 shrink-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.includes}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Note */}
              {'note' in category && category.note && (
                <motion.p
                  className="text-sm text-slate-500 mt-6 bg-slate-50 border-l-2 border-primary rounded-r-xl p-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <strong className="text-slate-900">Let op:</strong>{' '}
                  {category.note}
                </motion.p>
              )}
            </div>
          </section>
        ))}

        {/* Always Included */}
        <section className="py-24 lg:py-32 bg-slate-50/50 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Altijd inbegrepen
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                Bij elke service ontvangt u standaard het volgende \u2014 zonder extra kosten.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              {[
                'Template-based professional design gepersonaliseerd naar huisstijl',
                'Implementatie van alle aangeleverde content',
                'Export in juiste formaten of online publicatie',
                'Gratis minor revisions volgens revision policy',
                'Basis instructies voor gebruik/beheer',
                'Email support tijdens project',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
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
