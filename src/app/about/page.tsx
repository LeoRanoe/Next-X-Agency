import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  Target,
  Eye,
  Zap,
  DollarSign,
  Palette,
  MapPin,
  Shield,
  Heart,
} from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Snel Geleverd',
    description: 'Template-based aanpak — bouwen niet vanaf nul.',
  },
  {
    icon: DollarSign,
    title: 'Betaalbaar',
    description: 'Startup-prijzen zonder kwaliteitsverlies.',
  },
  {
    icon: Palette,
    title: 'Volledig Gepersonaliseerd',
    description: 'Volledige aanpassing naar klantwensen.',
  },
  {
    icon: Heart,
    title: 'Gratis Revisions',
    description: 'Gratis minor revisions na oplevering.',
  },
  {
    icon: Shield,
    title: 'Transparant',
    description: 'Geen verborgen kosten, altijd vooraf gecommuniceerd.',
  },
  {
    icon: MapPin,
    title: 'Custom-ready',
    description: 'Mogelijkheid voor custom development en uitbreidingen.',
  },
] as const

const expertise = [
  'Graphic Design & Visual Marketing',
  'Web Design & Development',
  'E-commerce Solutions',
  'UX/UI Design & Optimization',
  'SEO & Online Marketing',
  'Web Hosting & Technical Support',
  'Outsourcing & Team Augmentation (UX Kukru)',
] as const

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(249,112,21,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex badge bg-primary-muted text-primary border border-primary/30 mb-8">
              Over Ons
            </div>
            <h1 className="text-display text-foreground max-w-4xl mx-auto mb-6">
              Wij zijn NextX Agency
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Een innovatieve digitale startup gevestigd in Paramaribo, Suriname,
              die bedrijven helpt om professioneel zichtbaar te worden en te
              groeien in de digitale wereld.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Mission */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-muted flex items-center justify-center mb-6">
                  <Target size={28} className="text-primary" />
                </div>
                <h2 className="text-headline text-foreground mb-4">
                  Onze Missie
                </h2>
                <p className="text-body-lg text-muted-foreground">
                  Bedrijven niet alleen online brengen, maar hen structureel
                  laten groeien door professionele digitale oplossingen
                  toegankelijk te maken voor startups en groeiende ondernemingen.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-muted flex items-center justify-center mb-6">
                  <Eye size={28} className="text-primary" />
                </div>
                <h2 className="text-headline text-foreground mb-4">
                  Onze Visie
                </h2>
                <p className="text-body-lg text-muted-foreground">
                  De go-to digitale partner zijn voor ondernemers die hun online
                  aanwezigheid willen professionaliseren zonder de hoge kosten
                  van traditionele agencies. Door efficiëntie en kwaliteit te
                  combineren, maken we professionele digitale services
                  toegankelijk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About text */}
        <section className="py-16 lg:py-24 bg-background-elevated">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-headline text-foreground mb-6 text-center">
                Wie zijn wij?
              </h2>
              <p className="text-body-lg text-muted-foreground mb-6">
                NextX Agency is een innovatieve digitale startup gevestigd in
                Paramaribo, Suriname, die bedrijven helpt om professioneel
                zichtbaar te worden en te groeien in de digitale wereld. Wij
                combineren betaalbaarheid met professionaliteit door te werken met
                een slimme template-based aanpak, waarbij we hoogwaardige
                basis-templates volledig personaliseren naar de wensen, stijl en
                &apos;vibe&apos; van elke klant.
              </p>
              <p className="text-body-lg text-muted-foreground">
                Als lokale Surinaamse startup begrijpen wij de unieke uitdagingen
                en kansen van de Surinaamse markt en bieden wij internationale
                kwaliteit tegen lokaal toegankelijke prijzen.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-headline text-foreground mb-4">
                Onze Kernwaarden
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                Deze waarden staan centraal in alles wat wij doen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-200 hover:border-border-hover hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-title text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 lg:py-24 bg-background-elevated">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-headline text-foreground mb-4">
                Onze Expertisegebieden
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="badge bg-primary-muted text-primary border border-primary/30 text-sm normal-case tracking-normal"
                >
                  {item}
                </span>
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
