import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
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
              Neem Contact Op
            </div>
            <h1 className="text-display text-foreground max-w-4xl mx-auto mb-6">
              Laten we samenwerken
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Beschrijf uw project en wij sturen binnen 24-48 uur een
              vrijblijvende quote. Of stuur direct een WhatsApp bericht.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div>
                <h2 className="text-headline text-foreground mb-6">
                  Stuur ons een bericht
                </h2>
                <ContactForm />
              </div>

              {/* Contact info */}
              <div>
                <h2 className="text-headline text-foreground mb-6">
                  Direct contact
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:lranoesendjojo@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        lranoesendjojo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/5978318508"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +597 831-8508
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Locatie
                      </h3>
                      <p className="text-muted-foreground">
                        Paramaribo, Suriname
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Reactietijd
                      </h3>
                      <p className="text-muted-foreground">
                        Binnen 24-48 uur
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-title text-foreground mb-2">
                    Liever direct chatten?
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    Stuur ons een WhatsApp bericht en wij reageren zo snel
                    mogelijk.
                  </p>
                  <a
                    href="https://wa.me/5978318508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold px-6 py-3 transition-all duration-200 active:scale-[0.97]"
                  >
                    <Phone size={20} />
                    <span>WhatsApp ons</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
