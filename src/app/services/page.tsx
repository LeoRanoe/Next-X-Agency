'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  fadeInUp,
  blurFadeIn,
  slideInLeft,
  staggerContainer,
  staggerContainerFast,
  clipRevealUp,
} from '@/lib/animationUtils'

const serviceCategories = [
  {
    id: 'graphic-design',
    tag: 'Visuele Identiteit',
    title: 'Graphic Marketing & Visual Design',
    description: 'Professionele visuele identiteit voor uw merk — van logo tot social media content.',
    services: [
      { name: 'Logo Design', price: 'Vanaf $20', includes: '1 logo concept, 2 revisie rondes, export PNG/JPG (transparant + wit). Extra formats op aanvraag.' },
      { name: 'Social Media Post Design', price: '$4 per post', includes: '1 design per post, 1 revisie ronde, Instagram/Facebook ready formaat (1080×1080 of 1080×1350).' },
      { name: 'Flyer/Poster Design', price: 'Vanaf $8', includes: '1 design, 2 revisie rondes, print-ready PDF (A4/A5 standaard). Custom formaten mogelijk.' },
    ],
  },
  {
    id: 'websites',
    tag: 'Web & Aanwezigheid',
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
    tag: 'E-Commerce',
    title: 'E-Commerce Webshops',
    description: 'Complete webshops met winkelwagen, checkout en betalingsgateway integratie.',
    services: [
      { name: 'Starter Webshop', price: 'Vanaf $280', includes: 'Max 25 producten, winkelwagen, checkout, betalingsgateway (Stripe/PayPal), responsive design, basis productbeheer instructies.' },
      { name: 'Grotere Webshop', price: 'Vanaf $420', includes: 'Max 100 producten, categorieën, filters, zoekfunctie, klantaccounts, order tracking, meerdere betaalmethoden, uitgebreide instructies.' },
    ],
    note: 'Extra producten boven limiet: $2 per product (tot 250 producten). Meer dan 250 producten = custom pricing.',
  },
  {
    id: 'ux-ui',
    tag: 'UX / UI',
    title: 'UX/UI Design Services',
    description: 'Verbeter uw gebruikerservaring met professionele UX audits en UI re-designs.',
    services: [
      { name: 'UX Audit & Advies', price: 'Vanaf $50', includes: 'Analyse van huidige website/app, verbeterpunten rapport (PDF), basis aanbevelingen.' },
      { name: 'UI Design (Re-design)', price: 'Vanaf $90', includes: "Nieuw design voor max 3 pagina's/schermen, Figma/Adobe XD mockups, 2 revisie rondes. Implementatie apart geprijsd." },
    ],
  },
  {
    id: 'seo',
    tag: 'Zichtbaarheid',
    title: 'SEO & Online Zichtbaarheid',
    description: 'Verbeter uw vindbaarheid in zoekmachines met professionele SEO optimalisatie.',
    services: [
      { name: 'Basic SEO Setup', price: 'Vanaf $30', includes: 'Meta tags optimalisatie, sitemap, Google Search Console setup, robots.txt configuratie.' },
      { name: 'Maandelijkse SEO Support', price: '$25/maand', includes: 'Maandelijkse performance rapportage, keyword monitoring, content suggesties, technische checks. Min. 3 maanden contract.' },
    ],
  },
  {
    id: 'hosting',
    tag: 'Infrastructuur',
    title: 'Webhosting & Technische Support',
    description: 'Betrouwbare hosting met SSL, dagelijkse backups en 99.9% uptime garantie.',
    services: [
      { name: 'Hosting Setup (eenmalig)', price: '$15', includes: 'Hosting account aanmaken, domein koppeling, SSL installatie, website deployment.' },
      { name: 'Basic Hosting', price: '$4/maand', includes: '10GB storage, 100GB bandwidth, SSL, dagelijkse backups, 99.9% uptime.' },
      { name: 'Business Hosting', price: '$10/maand', includes: '50GB storage, onbeperkte bandwidth, SSL, CDN, dagelijkse backups, priority support, 99.9% uptime.' },
    ],
    note: 'Domein registratie niet inbegrepen — klant registreert eigen domein of wij verzorgen dit tegen kostprijs + $5 service fee.',
  },
  {
    id: 'ux-kukru',
    tag: 'Outsourcing',
    title: 'UX Kukru — Outsourcing Service',
    description: 'Toegang tot ons volledige NextX team via één dedicated specialist. Flexibele maandpakketten voor structurele digitale ondersteuning.',
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
        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

          {/* Decorative arc */}
          <div className="absolute -top-40 -right-40 w-160 h-160 pointer-events-none z-0" aria-hidden="true">
            <svg viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="320" cy="320" r="290" stroke="#f97015" strokeWidth="1.5" opacity="0.06" />
              <circle cx="320" cy="320" r="210" stroke="#f97015" strokeWidth="1" opacity="0.035" />
            </svg>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-6xl mx-auto px-6"
          >
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-8 bg-primary" style={{ opacity: 0.45 }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-slate-400">
                7 Diensten · 3 Categorieën · 1 Partner
              </span>
            </motion.div>

            {/* Headline — clip-reveal */}
            <motion.h1
              variants={staggerContainer}
              className="mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {['Alles wat uw', 'bedrijf digitaal', 'nodig heeft'].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    variants={clipRevealUp}
                    transition={{ delay: i * 0.12 }}
                    className="block font-bold text-slate-900 leading-[0.92] tracking-tighter"
                    style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={blurFadeIn}
              className="text-base md:text-lg text-slate-400 max-w-md leading-relaxed font-medium"
            >
              Één partner, complete oplossingen — van logo en social media tot
              complete webshops en maandelijkse support.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Service Categories ── */}
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-6">
            {serviceCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.07 }}
                variants={staggerContainerFast}
                className="mb-16 last:mb-0 pt-16 border-t border-slate-100 first:border-0 first:pt-0"
              >
                {/* Category header */}
                <motion.div variants={fadeInUp} className="mb-3">
                  <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1 mb-4">
                    <span className="text-[11px] font-black tracking-[0.28em] uppercase text-primary/70">
                      {String(catIndex + 1).padStart(2, '0')}
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {category.title}
                    </h2>
                    <span className="text-xs font-bold tracking-[0.16em] uppercase text-slate-400">
                      — {category.tag}
                    </span>
                  </div>
                  <div className="w-full h-px bg-slate-200" />
                  <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>

                {/* Service rows */}
                <div className="mt-6">
                  {category.services.map((service, i) => (
                    <motion.div
                      key={service.name}
                      variants={fadeInUp}
                      className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-5 px-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-primary/3 border-b border-slate-100 last:border-0 cursor-default"
                    >
                      {/* Index */}
                      <span className="text-[11px] font-black tabular-nums text-slate-300 tracking-wider w-6 shrink-0 group-hover:text-primary transition-colors duration-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Name */}
                      <span
                        className="text-[15px] font-bold text-slate-900 tracking-tight w-52 shrink-0 group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {service.name}
                      </span>

                      {/* Description */}
                      <span className="text-sm text-slate-400 leading-relaxed flex-1">
                        {service.includes}
                      </span>

                      {/* Dotted spacer */}
                      <div className="hidden md:block w-16 border-b border-dashed border-slate-200 shrink-0 group-hover:border-primary/30 transition-colors duration-300" />

                      {/* Price */}
                      <span
                        className="text-[15px] font-bold text-slate-700 shrink-0 group-hover:text-primary transition-colors duration-300 whitespace-nowrap"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {service.price}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Note */}
                {'note' in category && category.note && (
                  <motion.p
                    variants={fadeInUp}
                    className="text-xs text-slate-500 mt-5 bg-slate-50 border-l-2 border-primary/50 rounded-r-xl px-4 py-3 leading-relaxed"
                  >
                    <strong className="text-slate-700 font-bold">Let op: </strong>
                    {category.note}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Altijd Inbegrepen — dark band ── */}
        <section className="py-24 lg:py-28 bg-slate-900 relative overflow-hidden mt-20">
          {/* Subtle orange glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {/* Header */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-primary opacity-60" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-slate-500">
                  Standaard
                </span>
              </motion.div>

              <motion.h2
                variants={clipRevealUp}
                className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4 overflow-hidden"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Altijd inbegrepen
              </motion.h2>
              <motion.p variants={blurFadeIn} className="text-slate-400 text-base mb-14 max-w-lg leading-relaxed">
                Bij elke service ontvangt u standaard het volgende — zonder extra kosten.
              </motion.p>

              {/* Items grid */}
              <motion.div
                variants={staggerContainerFast}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5"
              >
                {[
                  'Professional design gepersonaliseerd naar uw huisstijl',
                  'Implementatie van alle aangeleverde content',
                  'Export in de juiste formaten of online publicatie',
                  'Minor revisions volgens revision policy',
                  'Basis instructies voor gebruik & beheer',
                  'Email support tijdens het project',
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="w-4 h-4 text-primary mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
