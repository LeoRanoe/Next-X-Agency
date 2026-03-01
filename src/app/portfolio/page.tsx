import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CTABanner } from '@/components/sections/CTABanner'

const projects = [
  {
    title: 'Tjin Catering',
    category: 'Restaurant Website',
    description:
      'Complete restaurant website met digitaal menu, openingstijden en reserveringslink.',
    tags: ['Web Design', 'Restaurant'],
  },
  {
    title: 'RP Trading',
    category: 'E-Commerce',
    description:
      'Webshop met productcatalogus, winkelwagen en Stripe betalingsintegratie.',
    tags: ['E-Commerce', 'Webshop'],
  },
  {
    title: 'Suri Style Boutique',
    category: 'E-Commerce',
    description:
      'Mode webshop met klantaccounts, wishlist en order tracking systeem.',
    tags: ['E-Commerce', 'Fashion'],
  },
  {
    title: 'Green Garden Landscaping',
    category: 'Service Website',
    description:
      'Multi-page service website met portfolio galerij en contactformulier.',
    tags: ['Web Design', 'Services'],
  },
  {
    title: 'Studio Kroon',
    category: 'Portfolio Website',
    description:
      'Fotografen portfolio met galerij, project detail pagina\'s en over mij sectie.',
    tags: ['Portfolio', 'Fotografie'],
  },
  {
    title: 'FreshBite Delivery',
    category: 'Brand Identity',
    description:
      'Complete visuele identiteit — logo, social media templates en flyer designs.',
    tags: ['Graphic Design', 'Branding'],
  },
] as const

export default function PortfolioPage() {
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
              Ons Werk
            </div>
            <h1 className="text-display text-foreground max-w-4xl mx-auto mb-6">
              Portfolio
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Een selectie van recente projecten. Elk project begint als template
              en wordt volledig gepersonaliseerd naar de wensen van de klant.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-border-hover hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  {/* Placeholder image area */}
                  <div className="aspect-[16/9] bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-caption">
                      Project Preview
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-title text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-body text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-neutral text-xs normal-case tracking-normal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
