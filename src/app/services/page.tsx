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

const serviceCategories = [
  {
    id: 'graphic-design',
    icon: Brush,
    title: 'Graphic Marketing & Visual Design',
    description:
      'Professionele visuele identiteit voor uw merk — van logo tot social media content.',
    services: [
      {
        name: 'Logo Design',
        price: 'Vanaf $20',
        includes:
          '1 logo concept, 2 revisie rondes, export PNG/JPG (transparant + wit). Extra formats op aanvraag.',
      },
      {
        name: 'Social Media Post Design',
        price: '$4 per post',
        includes:
          '1 design per post, 1 revisie ronde, Instagram/Facebook ready formaat (1080×1080 of 1080×1350).',
      },
      {
        name: 'Flyer/Poster Design',
        price: 'Vanaf $8',
        includes:
          '1 design, 2 revisie rondes, print-ready PDF (A4/A5 standaard). Custom formaten mogelijk.',
      },
    ],
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Websites & Online Presence',
    description:
      'Volledig responsive websites gepersonaliseerd naar uw huisstijl, met SSL en basis SEO inbegrepen.',
    services: [
      {
        name: 'Business Card Site',
        price: 'Vanaf $100',
        includes:
          'One-page design, bedrijfsinfo, WhatsApp knop, contactformulier, responsive design, online publicatie.',
      },
      {
        name: 'Service Website',
        price: 'Vanaf $120',
        includes:
          'Multi-page site (Home, Diensten, Over Ons, Contact), responsive design, contactformulier, online publicatie.',
      },
      {
        name: 'Portfolio Website',
        price: 'Vanaf $130',
        includes:
          'Portfolio galerij (max 20 items), project detail pagina\'s, over mij/ons, contact, responsive design.',
      },
      {
        name: 'Restaurant/Menu Site',
        price: 'Vanaf $130',
        includes:
          'Digitaal menu (max 50 items), openingstijden, locatie/kaart, reserveringslink, responsive design.',
      },
    ],
  },
  {
    id: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-Commerce Webshops',
    description:
      'Complete webshops met winkelwagen, checkout en betalingsgateway integratie.',
    services: [
      {
        name: 'Starter Webshop',
        price: 'Vanaf $280',
        includes:
          'Max 25 producten, winkelwagen, checkout, betalingsgateway (Stripe/PayPal), responsive design, basis productbeheer instructies.',
      },
      {
        name: 'Grotere Webshop',
        price: 'Vanaf $420',
        includes:
          'Max 100 producten, categorieën, filters, zoekfunctie, klantaccounts, order tracking, meerdere betaalmethoden, uitgebreide instructies.',
      },
    ],
    note: 'Extra producten boven limiet: $2 per product (tot 250 producten). Meer dan 250 producten = custom pricing.',
  },
  {
    id: 'ux-ui',
    icon: Figma,
    title: 'UX/UI Design Services',
    description:
      'Verbeter uw gebruikerservaring met professionele UX audits en UI re-designs.',
    services: [
      {
        name: 'UX Audit & Advies',
        price: 'Vanaf $50',
        includes:
          'Analyse van huidige website/app, verbeterpunten rapport (PDF), basis aanbevelingen.',
      },
      {
        name: 'UI Design (Re-design)',
        price: 'Vanaf $90',
        includes:
          'Nieuw design voor max 3 pagina\'s/schermen, Figma/Adobe XD mockups, 2 revisie rondes. Implementatie apart geprijsd.',
      },
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Online Zichtbaarheid',
    description:
      'Verbeter uw vindbaarheid in zoekmachines met professionele SEO optimalisatie.',
    services: [
      {
        name: 'Basic SEO Setup',
        price: 'Vanaf $30',
        includes:
          'Meta tags optimalisatie, sitemap, Google Search Console setup, robots.txt configuratie.',
      },
      {
        name: 'Maandelijkse SEO Support',
        price: '$25/maand',
        includes:
          'Maandelijkse performance rapportage, keyword monitoring, content suggesties, technische checks. Min. 3 maanden contract.',
      },
    ],
  },
  {
    id: 'hosting',
    icon: Server,
    title: 'Webhosting & Technische Support',
    description:
      'Betrouwbare hosting met SSL, dagelijkse backups en 99.9% uptime garantie.',
    services: [
      {
        name: 'Hosting Setup (eenmalig)',
        price: '$15',
        includes:
          'Hosting account aanmaken, domein koppeling, SSL installatie, website deployment.',
      },
      {
        name: 'Basic Hosting',
        price: '$4/maand',
        includes:
          '10GB storage, 100GB bandwidth, SSL, dagelijkse backups, 99.9% uptime.',
      },
      {
        name: 'Business Hosting',
        price: '$10/maand',
        includes:
          '50GB storage, onbeperkte bandwidth, SSL, CDN, dagelijkse backups, priority support, 99.9% uptime.',
      },
    ],
    note: 'Domein registratie niet inbegrepen — klant registreert eigen domein of wij verzorgen dit tegen kostprijs + $5 service fee.',
  },
  {
    id: 'ux-kukru',
    icon: Users,
    title: 'UX Kukru — Outsourcing Service',
    description:
      'Toegang tot ons volledige NextX team via één dedicated specialist. Flexibele maandpakketten voor structurele digitale ondersteuning.',
    services: [
      {
        name: 'Starter Support',
        price: '$90/maand',
        includes:
          '10 uur/maand, kleine updates, bug fixes, content wijzigingen, technisch advies, email support (48u response).',
      },
      {
        name: 'Business Support',
        price: '$160/maand',
        includes:
          '20 uur/maand, feature development, design updates, integraties, strategisch advies, Slack support (24u response).',
      },
      {
        name: 'Partner Support',
        price: '$260/maand',
        includes:
          '40 uur/maand, dedicated specialist, priority support, complexe projecten, team collaboration, direct contact (12u response).',
      },
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
        <section className="relative py-20 lg:py-32 overflow-hidden circuit-bg">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">— Ons Aanbod —</span>
            <h1 className="text-display text-white max-w-4xl mx-auto mb-6">
              Alles wat uw bedrijf digitaal nodig heeft
            </h1>
            <p className="text-body-lg text-[#888888] max-w-2xl mx-auto">
              Van logo en social media tot complete webshops en maandelijkse
              support. Één partner, complete oplossingen.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-16 lg:py-24 ${index % 2 === 1 ? 'bg-[#111111]' : 'bg-[#0a0a0a]'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category header */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#FF6B00]/30 flex items-center justify-center shrink-0" style={{ borderRadius: '2px' }}>
                  <category.icon size={28} className="text-[#FF6B00]" />
                </div>
                <div>
                  <span className="section-label">— {category.title.toUpperCase()} —</span>
                  <h2 className="text-headline text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-body-lg text-[#888888]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="card-service"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-title text-white">
                        {service.name}
                      </h3>
                      <span className="price-badge ml-4">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-body text-[#888888]">
                      {service.includes}
                    </p>
                  </div>
                ))}
              </div>

              {/* Note */}
              {'note' in category && category.note && (
                <p className="text-caption text-[#888888] mt-6 bg-[#1a1a1a] border-l-2 border-[#FF6B00] p-4" style={{ borderRadius: '2px' }}>
                  <strong className="text-white">Let op:</strong>{' '}
                  {category.note}
                </p>
              )}
            </div>
          </section>
        ))}

        {/* Always included section */}
        <section className="py-16 lg:py-24 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">— Standaard —</span>
              <h2 className="text-headline text-white mb-4">
                Altijd inbegrepen
              </h2>
              <p className="text-body-lg text-[#888888] max-w-2xl mx-auto">
                Bij elke service ontvangt u standaard het volgende — zonder extra
                kosten.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                'Template-based professional design gepersonaliseerd naar huisstijl',
                'Implementatie van alle aangeleverde content',
                'Export in juiste formaten of online publicatie',
                'Gratis minor revisions volgens revision policy',
                'Basis instructies voor gebruik/beheer',
                'Email support tijdens project',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3">
                  <Check
                    size={16}
                    className="text-[#FF6B00] shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[#888888]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
