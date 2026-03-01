import { memo } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'NextX heeft onze complete online aanwezigheid opgezet. Van logo tot website, alles in twee weken geleverd. Echt indrukwekkend!',
    name: 'Maria Tjin-A-Lim',
    role: 'Eigenaar, Tjin Catering',
    stars: 5,
  },
  {
    quote:
      'Eindelijk een agency die begrijpt hoe de Surinaamse markt werkt. Betaalbaar, snel en altijd bereikbaar via WhatsApp.',
    name: 'Ravin Parbhudayal',
    role: 'Directeur, RP Trading',
    stars: 5,
  },
  {
    quote:
      'Onze webshop draait fantastisch. Het team denkt echt mee en geeft ook na oplevering nog support. Aanrader!',
    name: 'Sharmila Kasanmoenadi',
    role: 'Founder, Suri Style Boutique',
    stars: 5,
  },
] as const

function TestimonialsSectionFn() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex badge bg-primary-muted text-primary border border-primary/30 mb-4">
            Klantervaring
          </div>
          <h2 className="text-headline text-foreground mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Wij bouwen langdurige relaties met onze klanten. Hier zijn enkele
            ervaringen.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6"
            >
              {/* Quote mark */}
              <div className="text-primary/20 text-6xl font-serif leading-none mb-2 select-none">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-muted-foreground italic mb-6">
                {testimonial.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-caption text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const TestimonialsSection = memo(TestimonialsSectionFn)
