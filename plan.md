# NextX Agency — Design Language & Build Specification

> Dit document is de **single source of truth** voor de agency marketing site.
> Alle componenten, kleuren, spacing en patronen moeten exact matchen aan dit project.

---

## 1. Brand Identity

| Token | Waarde | Gebruik |
|---|---|---|
| Brand dark | `#141c2e` | Backgrounds, nav, footer |
| Brand orange | `#f97015` | Primary CTA, highlights, accents |
| Orange hover | `#e5640d` | Hover state op primary buttons |
| Orange shadow | `rgba(249,112,21,0.3)` | Box-shadow on primary elements |
| Pure white | `#ffffff` | Card backgrounds (light surfaces) |
| Off-white text | `hsl(0 0% 98%)` | Primary text on dark backgrounds |

---

## 2. CSS Custom Properties (volledig systeem)

Alle waarden komen uit `src/app/globals.css` en worden gebruikt via Tailwind CSS v4 via `@theme inline`.

### Backgrounds & Surfaces

```css
--background:          218 36% 13%   /* #141c2e equivalent */
--background-elevated: 218 36% 15%
--card:                218 36% 15%
--card-hover:          218 36% 18%
--popover:             222 40% 14%
--secondary:           218 36% 18%
--muted:               218 36% 18%
--input:               218 36% 16%
--input-focus:         218 36% 18%
```

### Foregrounds & Text

```css
--foreground:          0 0% 98%
--card-foreground:     0 0% 98%
--muted-foreground:    218 15% 60%   /* subtiele info-tekst */
--secondary-foreground: 0 0% 98%
```

### Brand Colors

```css
--primary:             20 96% 53%   /* #f97015 */
--primary-hover:       20 96% 58%
--primary-active:      20 96% 48%
--primary-foreground:  0 0% 100%
--primary-muted:       20 60% 20%   /* subtiele orange achtergrond */
--accent:              20 96% 53%   /* zelfde als primary */
```

### Borders

```css
--border:              218 30% 22%
--border-hover:        218 30% 30%
--ring:                20 96% 53%   /* focus ring = primary */
```

### Semantic States

```css
--success:             142 70% 45%
--success-muted:       142 50% 15%
--success-foreground:  142 70% 90%

--warning:             38 92% 50%
--warning-muted:       38 60% 15%
--warning-foreground:  38 92% 90%

--destructive:         0 72% 50%
--destructive-muted:   0 50% 15%
--destructive-foreground: 0 72% 90%

--info:                217 91% 60%
--info-muted:          217 60% 15%
--info-foreground:     217 91% 90%
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3)
--shadow:    0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(0 0 0 / 0.6)
```

### Border Radius

```css
--radius-sm: 0.375rem   /* 6px  – kleine badges, chips */
--radius:    0.5rem     /* 8px  – standaard */
--radius-md: 0.75rem    /* 12px – inputs, tabel cellen */
--radius-lg: 1rem       /* 16px – cards */
--radius-xl: 1.25rem    /* 20px – grote cards, modals */
```

### Spacing Scale

```css
--space-xs:  0.5rem    /*  8px */
--space-sm:  0.75rem   /* 12px */
--space-md:  1rem      /* 16px */
--space-lg:  1.5rem    /* 24px */
--space-xl:  2rem      /* 32px */
--space-2xl: 3rem      /* 48px */
```

---

## 3. Typografie

### Font Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
font-feature-settings: 'cv11', 'ss01';
-webkit-font-smoothing: antialiased;
line-height: 1.6;
letter-spacing: -0.011em;
```

### Vaste Typografische Klassen (niet op maat verzinnen)

| Klasse | Size | Weight | Line-height | Letter-spacing | Gebruik |
|---|---|---|---|---|---|
| `.text-display` | 3.5rem | 800 | 1.1 | -0.025em | Hero hoofdkop |
| `.text-headline` | 2rem | 700 | 1.2 | -0.02em | Sectie titels |
| `.text-title` | 1.5rem | 600 | 1.3 | -0.015em | Card titels |
| `.text-body-lg` | 1.125rem | 400 | 1.6 | -0.011em | Hero subtekst |
| `.text-body` | 1rem | 400 | 1.6 | -0.011em | Standaard tekst |
| `.text-caption` | 0.875rem | 400 | 1.5 | -0.006em | Meta info |

### Tailwind Typography in componenten

```tsx
// Hoofd kop
<h1 className="text-display text-foreground">

// Sectie kop
<h2 className="text-headline text-foreground">

// Card kop
<h3 className="text-title text-foreground">

// Body tekst
<p className="text-body text-muted-foreground">

// Label / meta
<span className="text-caption">
```

---

## 4. Kleur gebruik per context

### Dark page (agency nav, hero, footer)
- Background: `bg-background` → `#141c2e`
- Tekst: `text-foreground` → bijna-wit
- Subtitels: `text-muted-foreground` → grijzig
- Borders: `border-border`
- Cards: `bg-card` (licht donkerder dan background)

### Light surface (binnen secties, pricing cards)
- Background: `#ffffff` of `#f8fafc`
- Borders: `#d1d5db` of `#e5e7eb`
- Hover border: `rgba(249,112,21,0.4)`
- Tekst: `#141c2e`

> **Regel:** Mix nooit random grijs tinten. Gebruik altijd CSS custom properties of de exacte hex waarden hierboven.

---

## 5. Component Bibliotheek

### 5.1 Buttons

Altijd `rounded-xl`, `font-semibold`, minimum touch target `min-h-[44px]`, `transition-all duration-200`, `active:scale-[0.97]`.

```tsx
// Primary (orange)
className="bg-primary hover:bg-[hsl(var(--primary-hover))] active:bg-[hsl(var(--primary-active))] text-white shadow-sm hover:shadow-md rounded-xl font-semibold px-5 py-3 transition-all duration-200 active:scale-[0.97]"

// Outline
className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-semibold px-5 py-3 transition-all duration-200"

// Secondary (dark surface)
className="bg-secondary hover:bg-[hsl(var(--secondary-hover))] text-foreground border border-border rounded-xl font-semibold px-5 py-3 transition-all duration-200"

// Ghost
className="hover:bg-muted text-foreground rounded-xl font-semibold px-5 py-3 transition-all duration-200"
```

**Focus ring (verplicht op alle knoppen):**
```tsx
focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
```

### 5.2 Cards

```tsx
// Standaard card (dark theme)
className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-150 hover:border-[hsl(var(--border-hover))] hover:shadow-md"

// Interactive card (met lift)
className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-200 hover:border-[hsl(var(--border-hover))] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"

// Light surface card (op witte achtergrond)
className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all duration-300 hover:border-orange-300/40 hover:shadow-lg"

// Highlighted card (pricing "aanbevolen")
className="bg-primary/10 border-2 border-primary rounded-xl p-6 relative"
```

**CSS klasse alternatief:**
```css
.card-premium { /* zie globals.css */ }
.catalog-card { /* light variant */ }
.glass       { /* blur glass effect */ }
```

### 5.3 Badges

```tsx
// Altijd: rounded-full, uppercase, text-xs, font-semibold, letter-spacing: 0.025em

// Success
className="badge badge-success"

// Warning
className="badge badge-warning"

// Orange brand
className="badge bg-[hsl(var(--primary-muted))] text-primary border border-primary/30"

// Neutral
className="badge badge-neutral"
```

### 5.4 Inputs & Forms

```tsx
<input className="input-field" />  // mobiel-first: min-h-[48px], font-size: 1rem
<select className="select-field" />
<textarea className="form-input" />
<label className="input-label" />
```

Focus state (verplicht):
```css
border-color: hsl(var(--primary));
box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15);
```

### 5.5 Loading States

```tsx
// Spinner
<div className="loading-spinner" />  // zie globals.css

// Shimmer skeleton
<div className="shimmer h-4 w-24 rounded" />

// Full page loading
<div className="flex items-center justify-center py-12">
  <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-primary rounded-full animate-spin" />
</div>
```

### 5.6 Empty State

```tsx
<div className="empty-state">
  <Icon size={48} className="empty-state-icon" />
  <h3 className="empty-state-title">Geen items</h3>
  <p className="empty-state-description">Omschrijving</p>
</div>
```

### 5.7 Section Container (agency pagina's)

```tsx
// Max width wrapper — consistent op alle secties
<section className="py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

---

## 6. Layout Systeem

### Breakpoints (Tailwind defaults, mobile-first)

| Prefix | Min-width | Gebruik |
|---|---|---|
| *(geen)* | 0px | Mobile default |
| `sm:` | 640px | Grote telefoons / kleine tablets |
| `lg:` | 1024px | Desktop layout activeren |
| `xl:` | 1280px | Brede desktops |

### Grid Patronen

```tsx
// 4 kolommen features grid
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"

// 3 kolommen cards
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// 2 kolommen (tekst + visual)
className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"

// Pricing (3 cards, midden highlighted)
className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
```

### Container Padding

```tsx
// Standaard in alle secties
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Extra ruimte boven/onder per sectie
className="py-16 lg:py-24"    // normale sectie
className="py-20 lg:py-32"    // hero / grote CTA
```

---

## 7. Navigatie (Agency Nav)

De agency nav verschilt van de admin sidebar. Dit is een **sticky top navbar**, niet de collapse sidebar.

```
Structuur:
[Logo "NX"] [nav links: Services · Portfolio · Over · Blog · FAQ] [CTA knop "Aanvraag sturen"]
```

**Design regels:**
- Sticky: `sticky top-0 z-50`
- Achtergrond: `bg-background/95 backdrop-blur-sm border-b border-border`
- Logo: `text-foreground font-bold text-xl` + oranje accent punt/icon
- Links: `text-muted-foreground hover:text-foreground transition-colors font-medium text-sm`
- Actieve link: `text-primary font-semibold`
- CTA: primary button, `size="sm"`
- Mobile: hamburger menu → slide-down of off-canvas

---

## 8. Agency-specifieke Componenten

### 8.1 Hero Section

```
Structuur: [tag-badge] [H1 .text-display] [subkop .text-body-lg] [twee CTA knoppen] [trust indicators]

Achtergrond: bg-background (#141c2e)
Decoratie: subtiele radial gradient oranje glow achter kop
  → background: radial-gradient(ellipse at 50% 0%, rgba(249,112,21,0.12) 0%, transparent 60%)
Tag badge: .badge bg-[hsl(var(--primary-muted))] text-primary
H1: .text-display, wit, max 10-12 woorden, geen ALL CAPS
Sub: .text-body-lg text-muted-foreground, max 2 regels
Trust: kleine icoontjes + tekst, bijv: ✓ Lokaal · ✓ Snel geleverd · ✓ Transparant
```

### 8.2 Service Card

```tsx
interface ServiceCardProps {
  icon: React.ReactNode
  name: string
  description: string
  priceFrom: string
  href: string
}

// Card stijl: light surface op dark background sectie
className="bg-white/5 border border-border rounded-xl p-6 hover:border-primary/40 hover:bg-white/8 transition-all duration-200 group cursor-pointer"

// Icon container
className="w-12 h-12 rounded-xl bg-[hsl(var(--primary-muted))] flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
className="text-primary" // icon zelf

// Prijs
className="text-primary font-semibold text-sm mt-3"
```

### 8.3 Process Step

```tsx
interface ProcessStepProps {
  number: number     // "01", "02", ...
  title: string
  description: string
  isLast?: boolean
}

// Stap nummer
className="text-display font-black text-primary/15 leading-none select-none"  // groot, fade oranje

// Connector lijn (horizontaal desktop)
className="hidden lg:block w-full h-px bg-border mx-4 mt-6"
```

### 8.4 Pricing Card

```tsx
// Standaard
className="bg-card border border-border rounded-xl p-8"

// Aanbevolen (midden)
className="bg-card border-2 border-primary rounded-xl p-8 relative shadow-xl shadow-primary/10"
// Badge boven de card:
className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap"
// → .badge .catalog-combo-badge tekst: "Meest Gekozen"

// Prijs display
<span className="text-display font-black text-foreground">$160</span>
<span className="text-muted-foreground text-sm">/maand</span>

// Feature list item
className="flex items-center gap-2 text-sm text-muted-foreground"
// Check icon: text-primary, size 16
```

### 8.5 Testimonial Card

```tsx
className="bg-card border border-border rounded-xl p-6"

// Quote marks: grote decoratieve " " in text-primary/20
// Tekst: text-muted-foreground, italic
// Naam: font-semibold text-foreground
// Beschrijving: text-caption
// Sterren: text-primary (lucide Star icon, filled)
```

### 8.6 CTA Banner

```tsx
// Fullwidth, oranje achtergrond
className="bg-primary py-16 lg:py-20"

// Tekst: wit
<h2 className="text-headline text-white">
<p className="text-body-lg text-white/80">

// Knoppen: wit outline + wit ghost
className="bg-white text-primary hover:bg-white/90 rounded-xl font-semibold px-6 py-3"
className="border-2 border-white text-white hover:bg-white/10 rounded-xl font-semibold px-6 py-3"
```

---

## 9. Animaties & Transities

**Globale regel:** gebruik alleen Tailwind transities. Geen GSAP of Framer Motion tenzij noodzakelijk.

```css
/* Standaard */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Snel (hover states) */
transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;

/* Card lift */
transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

/* Verboden: */
/* transition: all — op body-level elementen */
/* duration > 400ms — voelt traag */
```

**Toegestane micro-interacties:**
- `hover:-translate-y-0.5` (2px lift) op cards
- `active:scale-[0.97]` op knoppen
- `hover:shadow-md` → `hover:shadow-lg` escalatie
- `hover:border-primary/40` op service cards
- `group-hover:` voor icon kleur wissels in cards

**Scroll animaties (optioneel):** alleen native CSS via `@keyframes` of Intersection Observer voor simpele fade-in. Nooit willekeurige bounce/spin effecten.

---

## 10. Iconen

Gebruik uitsluitend `lucide-react`. Geen andere icon libraries mengen.

```tsx
import { ArrowRight, Check, Star, Zap, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react'

// Standaard maten
size={16}  // inline in tekst, badges
size={20}  // knoppen, labels
size={24}  // card icons
size={32}  // feature icons in grotere sectie
size={48}  // empty state
```

**Icon containers in feature cards:**
```tsx
<div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary-muted))] flex items-center justify-center">
  <Icon size={24} className="text-primary" />
</div>
```

---

## 11. Afbeeldingen

- Altijd `next/image` — nooit `<img>` tags
- Vercel Blob URLs zijn al geconfigureerd in `next.config.ts`
- `ImageUpload` component voor uploads via `/api/upload`
- Nooit `unoptimized={true}` globaal instellen
- Aspect ratio's vastleggen met `aspect-[16/9]` of `aspect-square` classes

---

## 12. Gradients (toegestaan)

```css
/* Orange glow (hero achtergrond decoratie) */
background: radial-gradient(ellipse at 50% 0%, rgba(249,112,21,0.12) 0%, transparent 60%);

/* Gradient primary button/badge */
background: linear-gradient(135deg, #f97015 0%, #e5640d 100%);

/* Gradient subtiele card */
background: linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%);

/* VERBODEN: */
/* Willekeurige multi-kleur gradienten */
/* Neon glow effecten */
/* Bright purple/blue gradients die niet in het brandpalet zitten */
```

---

## 13. Glass Effect

```css
.glass {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

Tailwind equivalent:
```tsx
className="bg-slate-800/80 backdrop-blur-xl border border-white/[0.08]"
```

Gebruik enkel op: sticky nav, modals, floating elementen over een achtergrond.

---

## 14. Footer

```
Structuur (4 kolommen op desktop, gestapeld op mobile):
[Logo + tagline + social icons] | [Diensten links] | [Bedrijf links] | [Contact info]

Lijn eronder: copyright + "Gemaakt door NextX"
```

**Design:**
- Achtergrond: `bg-background` (zelfde donkerblauwe als nav)
- Border boven: `border-t border-border`
- Section titles: `text-caption uppercase tracking-widest font-semibold text-muted-foreground`
- Links: `text-muted-foreground hover:text-foreground transition-colors text-sm`
- Social icons: `w-9 h-9 rounded-lg bg-secondary hover:bg-primary/20 border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all`

---

## 15. Code Regels (TypeScript / React)

### Component structuur (verplicht patroon)

```tsx
'use client'  // alleen bij interactiviteit nodig

import { memo } from 'react'

interface MyComponentProps {
  title: string
  description?: string
  className?: string
}

function MyComponentFn({ title, description, className = '' }: MyComponentProps) {
  return (
    <div className={`... ${className}`}>
      {/* content */}
    </div>
  )
}

export const MyComponent = memo(MyComponentFn)
```

### Imports

```tsx
// Altijd @/ alias, nooit relatieve paden
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'
import { prisma } from '@/lib/prisma'      // alleen in API routes
import { Button } from '@/components/UI'
```

### cn() utility (class merging)

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  'base-klassen hier',
  condition && 'conditionele klasse',
  variant === 'primary' && 'primary-klassen',
  className  // altijd als laatste: externe override mogelijk
)} />
```

### Server vs Client componenten

| Situatie | Type |
|---|---|
| Statische marketing sectie (Hero, Features, Footer) | Server Component (geen `'use client'`) |
| Navigatie met active state / toggle | `'use client'` |
| Contactformulier | `'use client'` |
| Data-fetch voor blog preview, testimonials | Server Component met `async` |
| Animaties via state | `'use client'` |

### API Routes structuur

```ts
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // validatie...
    const result = await prisma.contactSubmission.create({ data: { ...body } })
    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

---

## 16. Routes Configuratie

Alle nieuwe agency publieke routes toevoegen aan **beide** bestanden:

### `src/lib/routes.ts`

```ts
export const PUBLIC_ROUTES = [
  '/',
  '/services',
  '/portfolio',
  '/about',
  '/contact',
  // ... bestaande routes
] as const
```

### `src/middleware.ts`

Dezelfde routes spiegelen zodat middleware en routes.ts in sync blijven.

---

## 17. Wat absoluut NIET mag (Anti-patterns)

| Verboden | Correct alternatief |
|---|---|
| `<img src="...">` | `<Image>` van `next/image` |
| `import x from '../../lib/x'` | `import x from '@/lib/x'` |
| Random hex kleuren die niet in de palette staan | CSS custom properties of de vaste hex waarden uit sectie 2 |
| `any` types | `unknown` met narrowing of specifieke interface |
| Inline `style={{ color: 'orange' }}` | Tailwind klasse of CSS custom property |
| Componenten zonder `memo()` | `export const X = memo(XFn)` |
| Meerdere font families mengen | Altijd Inter stack |
| Animaties langer dan 400ms | Max `duration-300`, liever `duration-150`/`duration-200` |
| `px-` waarden die geen multiple van 4 zijn | Gebruik Tailwind spacing scale |
| Gradient kleuren buiten het brandpalet | Zie toegestane gradients in sectie 12 |
| `z-index` hoger dan `z-50` zonder reden | Documenteer waarom als het hoger moet |
| `!important` in componenten | Refactor de specificity |

---

## 18. Sectie Spacing Standaarden

```tsx
// Sectie padding
className="py-16 lg:py-24"      // normale sectie
className="py-20 lg:py-32"      // hero of grote CTA
className="py-12 lg:py-16"      // compacte sectie (blog preview, badges rij)

// Ruimte tussen sectie elementen
// kop → subkop: mb-4 lg:mb-6
// subkop → grid/content: mt-12 lg:mt-16
// card interne padding: p-6 lg:p-8

// Gap in grids
gap-6           // kaarten grid
gap-8           // pricing grid
gap-12 lg:gap-16  // twee-koloms layout
```

---

## 19. Toegankelijkheid (a11y)

- Alle interactieve elementen: zichtbare focus ring via `focus-visible:` (al globaal ingesteld in globals.css)
- Knoppen zonder tekst: altijd `aria-label`
- Afbeeldingen: altijd beschrijvende `alt` tekst
- Formuliervelden: altijd `<label>` gekoppeld via `htmlFor` / `id`
- Semantische HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`–`<h6>` in correcte volgorde
- Kleurcontrast: tekst op `--background` voldoet aan WCAG AA (al geregeld door dit palet)

---

## 20. Build Checklist

Vóór elke commit / taak als "klaar" beschouwen:

- [ ] `pnpm build` geeft **zero errors**
- [ ] Nieuwe routes staan in `src/lib/routes.ts` én `src/middleware.ts`
- [ ] Nieuwe DB tabellen: `prisma/schema.prisma` bijgewerkt + nieuwe Supabase migratie SQL
- [ ] Create/update/delete operations roepen `logActivity()` aan
- [ ] API routes gebruiken `requireAuth` of `requireAdmin`
- [ ] Geen ongemotiveerde `any` types
- [ ] Afbeeldingen via `<Image>` van `next/image`
- [ ] Nieuwe herbruikbare components zijn gewrapped met `memo()`
- [ ] Geen inline styles of hardcoded kleuren buiten het brandpalet
- [ ] Mobile-first: getest op 375px viewport

---

---

# DEEL II — NextX Agency: Bedrijfsinformatie & Content

> Dit deel bevat alle tekst, prijzen, voorwaarden en bedrijfsdata die direct gebruikt worden in de website componenten. Kopieer altijd de exacte waarden — verzin geen alternatieve teksten.

---

## 21. Bedrijfsidentiteit

| Gegeven | Waarde |
|---|---|
| Bedrijfsnaam | NextX Agency |
| Tagline | Complete Digital Solutions for Modern Businesses |
| Missie (kort) | Bedrijven niet alleen online brengen, maar hen structureel laten groeien |
| Locatie | Paramaribo, Suriname |
| Website | www.shop-nextx.com |
| Email | lranoesendjojo@gmail.com |
| Telefoon / WhatsApp | +597 831-8508 |
| Versie businessplan | 1.0 — Februari 2026 |

### Langere beschrijvingsteksten (voor About / Hero secties)

**Executive Summary (volledig):**
> NextX Agency is een innovatieve digitale startup gevestigd in Paramaribo, Suriname, die bedrijven helpt om professioneel zichtbaar te worden en te groeien in de digitale wereld. Wij combineren betaalbaarheid met professionaliteit door te werken met een slimme template-based aanpak, waarbij we hoogwaardige basis-templates volledig personaliseren naar de wensen, stijl en 'vibe' van elke klant. Als lokale Surinaamse startup begrijpen wij de unieke uitdagingen en kansen van de Surinaamse markt en bieden wij internationale kwaliteit tegen lokaal toegankelijke prijzen.

**Missie:**
> Bedrijven niet alleen online brengen, maar hen structureel laten groeien door professionele digitale oplossingen toegankelijk te maken voor startups en groeiende ondernemingen.

**Visie:**
> De go-to digitale partner zijn voor ondernemers die hun online aanwezigheid willen professionaliseren zonder de hoge kosten van traditionele agencies. Door efficiëntie en kwaliteit te combineren, maken we professionele digitale services toegankelijk.

### Core Value Propositions (voor Why-sectie / Hero trust indicators)

| # | Waarde | Uitleg |
|---|---|---|
| 1 | Snel geleverd | Template-based aanpak — bouwen niet vanaf nul |
| 2 | Betaalbaar | Startup-prijzen zonder kwaliteitsverlies |
| 3 | Volledig gepersonaliseerd | Volledige aanpassing naar klantwensen |
| 4 | Gratis revisions | Gratis minor revisions na oplevering |
| 5 | Transparant | Geen verborgen kosten, altijd vooraf gecommuniceerd |
| 6 | Custom-ready | Mogelijkheid voor custom development en uitbreidingen |

### Expertigegebieden (voor About / Diensten introductie)

- Graphic Design & Visual Marketing
- Web Design & Development
- E-commerce Solutions
- UX/UI Design & Optimization
- SEO & Online Marketing
- Web Hosting & Technical Support
- Outsourcing & Team Augmentation (UX Kukru)

---

## 22. Service Portfolio (exacte prijzen & inhoud)

### 22.1 Graphic Marketing & Visual Design

| Service | Prijs | Inclusief |
|---|---|---|
| Logo Design | vanaf $20 | 1 logo concept, 2 revisie rondes, export PNG/JPG (transparant + wit). Extra formats op aanvraag. |
| Social Media Post Design | $4 per post | 1 design per post, 1 revisie ronde, Instagram/Facebook ready formaat (1080×1080 of 1080×1350). |
| Flyer/Poster Design | vanaf $8 | 1 design, 2 revisie rondes, print-ready PDF (A4/A5 standaard). Custom formaten mogelijk. |

### 22.2 Websites & Online Presence

Alle websites bevatten standaard:
- Volledig responsive/mobiel-vriendelijk design
- Template gepersonaliseerd naar huisstijl
- SSL certificaat (HTTPS beveiliging)
- Basis SEO optimalisatie (meta tags, alt texts)
- Google Analytics integratie (optioneel)
- Online publicatie klaar voor gebruik
- Basis instructies voor contentbeheer

| Website Type | Prijs | Inclusief |
|---|---|---|
| Business Card Site | vanaf $100 | One-page design, bedrijfsinfo, WhatsApp knop, contactformulier, responsive design, online publicatie. |
| Service Website | vanaf $120 | Multi-page site (Home, Diensten, Over Ons, Contact), responsive design, contactformulier, online publicatie. |
| Portfolio Website | vanaf $130 | Portfolio galerij (max 20 items), project detail pagina's, over mij/ons, contact, responsive design. |
| Restaurant/Menu Site | vanaf $130 | Digitaal menu (max 50 items), openingstijden, locatie/kaart, reserveringslink, responsive design. |

### 22.3 E-Commerce Webshops

| Shop Type | Prijs | Inclusief |
|---|---|---|
| Starter Webshop | vanaf $280 | Max 25 producten, winkelwagen, checkout, betalingsgateway (Stripe/PayPal), responsive design, basis productbeheer instructies. |
| Grotere Webshop | vanaf $420 | Max 100 producten, categorieën, filters, zoekfunctie, klantaccounts, order tracking, meerdere betaalmethoden, uitgebreide instructies. |

> Extra producten boven limiet: **$2 per product** (tot 250 producten). Meer dan 250 producten = custom pricing.

### 22.4 UX/UI Design Services

| Service | Prijs | Inclusief |
|---|---|---|
| UX Audit & Advies | vanaf $50 | Analyse van huidige website/app, verbeterpunten rapport (PDF), basis aanbevelingen. |
| UI Design (Re-design) | vanaf $90 | Nieuw design voor max 3 pagina's/schermen, Figma/Adobe XD mockups, 2 revisie rondes. Implementatie apart geprijsd. |

### 22.5 SEO & Online Zichtbaarheid

| Service | Prijs | Inclusief |
|---|---|---|
| Basic SEO Setup | vanaf $30 | Meta tags optimalisatie, sitemap, Google Search Console setup, robots.txt configuratie. |
| Maandelijkse SEO Support | $25/maand | Maandelijkse performance rapportage, keyword monitoring, content suggesties, technische checks. Min. 3 maanden contract. |

### 22.6 Webhosting & Technische Support

| Service | Prijs | Inclusief |
|---|---|---|
| Hosting Setup (eenmalig) | $15 | Hosting account aanmaken, domein koppeling, SSL installatie, website deployment. |
| Basic Hosting | $4/maand | 10GB storage, 100GB bandwidth, SSL, dagelijkse backups, 99.9% uptime. |
| Business Hosting | $10/maand | 50GB storage, onbeperkte bandwidth, SSL, CDN, dagelijkse backups, priority support, 99.9% uptime. |

> Domein registratie niet inbegrepen — klant registreert eigen domein of wij verzorgen dit tegen kostprijs + **$5 service fee**.

### 22.7 UX Kukru — NextX Outsourcing Service

**Wat is UX Kukru?**
> UX Kukru is onze unieke outsourcing service waarbij bedrijven toegang krijgen tot ons volledige NextX team via één specialist. Perfect voor bedrijven die structurele digitale ondersteuning nodig hebben zonder een volledig intern team aan te nemen.

**Hoe het werkt:**
- U betaalt voor één dedicated specialist (developer of designer)
- Uw specialist wordt ondersteund door ons volledige NextX team
- Flexibele pakket opties voor verschillende behoeften
- Directe communicatie via Slack / Teams / Email / WhatsApp
- Voor lokale Surinaamse klanten: mogelijk voor fysieke meetings in Paramaribo

| Pakket | Prijs/maand | Inclusief |
|---|---|---|
| Starter Support | $90 | 10 uur/maand, kleine updates, bug fixes, content wijzigingen, technisch advies, email support (48u response). |
| Business Support | $160 | 20 uur/maand, feature development, design updates, integraties, strategisch advies, Slack support (24u response). |
| Partner Support | $260 | 40 uur/maand, dedicated specialist, priority support, complexe projecten, team collaboration, direct contact (12u response). |

> Extra uren boven pakket limiet: **$12/uur**. Alle pakketten vereisen minimaal **3 maanden** commitment.

---

## 23. Prijsstructuur — Wat Inbegrepen Is

### Altijd inbegrepen (bij elke service)

- Template-based professional design gepersonaliseerd naar huisstijl
- Implementatie van alle aangeleverde content (teksten, afbeeldingen, logo's)
- Export in juiste formaten (designs) of online publicatie (websites)
- Gratis minor revisions volgens revision policy
- Basis instructies voor gebruik/beheer
- Email support tijdens project

### NIET inbegrepen (extra kosten)

| Item | Detail |
|---|---|
| Content creatie | Schrijven van teksten, professionele foto's, originele graphics |
| Logo ontwerp | Aparte service indien klant geen logo heeft ($20+) |
| Domein registratie | Kostprijs + $5 service fee indien via ons |
| Licenties & subscripties | Premium plugins, fonts, stock foto's, payment gateways |
| Extra pagina's/features | Uitbreidingen buiten gekozen pakket |
| Website migratie | Content overzetten van oude naar nieuwe site (custom quote) |
| Training & workshops | Uitgebreide training boven basis instructies ($40/uur) |
| Ongoing support | Continue ondersteuning na oplevering (zie UX Kukru) |

### Transparantie & No Hidden Fees

- Alle prijzen in **USD** (ook betaalbaar in SRD tegen dagkoers)
- Alle prijzen zijn finaal — geen verborgen kosten
- Extra werk wordt vooraf gecommuniceerd en goedgekeurd
- Quotes voor custom werk binnen **24-48 uur**
- Klanten ontvangen gedetailleerde facturen met uitsplitsing

---

## 24. Projectproces & Tijdlijnen

### Standaard 5-Fasen Workflow

| Fase | Naam | Dagen | Activiteiten |
|---|---|---|---|
| 1 | Intake & Briefing | Dag 1–2 | Klant stuurt intake formulier, bevestiging ontvangst, eventueel korte call (15-30 min, gratis), schriftelijke bevestiging met timeline. |
| 2 | Development/Design | Dag 3–10 | Werken volgens scope, template personaliseren, tussentijdse update bij grotere projecten, testen functionaliteit en responsive design. |
| 3 | Review & Revisions | Dag 11–15 | Eerste versie gepresenteerd, klant test en geeft feedback, minor revisions verwerken, herhalen tot akkoord. |
| 4 | Finalisatie & Oplevering | Dag 16–17 | Laatste checks, website live / designs geëxporteerd, instructies en credentials, factuur verstuurd. |
| 5 | Post-Launch Support | Dag 18–47 | 30-dagen gratis minor revisions actief, technische vragen beantwoord. |

### Geschatte Levertijden

| Service | Levertijd |
|---|---|
| Logo Design | 3–5 werkdagen |
| Social Media Posts / Flyers | 2–4 werkdagen |
| Business Card / Service Website | 7–10 werkdagen |
| Portfolio / Restaurant Website | 10–14 werkdagen |
| Starter Webshop | 14–21 werkdagen |
| Grotere Webshop | 21–30 werkdagen |
| Custom Development Projects | Per project bepaald |

> **Belangrijk:** Levertijden starten pas na ontvangst van **ALLE** benodigde materialen van de klant.

### Wat klanten moeten aanleveren

- Bedrijfsinformatie: Naam, slogan, contactgegevens, social media links
- Logo: Hoge resolutie, bij voorkeur vector (.ai, .svg, .eps)
- Kleuren & Fonts: Huisstijl kleuren (hex codes) en gewenste lettertypen
- Teksten: Alle content die op de website/designs moet komen
- Afbeeldingen: Foto's, product images in hoge kwaliteit
- Voorbeelden: Inspiratie of referenties van gewenste stijl/vibe
- Specifieke wensen: Functionaliteiten, features of design voorkeuren

---

## 25. Revisie- & Wijzigingsbeleid

### Gratis Minor Revisions — definitie

Minor revisions zijn kleine aanpassingen die de scope of structuur **niet** veranderen:
- Tekst wijzigen, typo's corrigeren
- Afbeeldingen vervangen (zelfde formaat/positie)
- Kleuren aanpassen binnen bestaand ontwerp
- Lettertype aanpassen (indien technisch mogelijk zonder redesign)
- Contactgegevens, links of social media updates
- Kleine layout tweaks binnen bestaande structuur

### Limieten Gratis Revisions

| Service type | Revisie rondes | Periode | Max per ronde |
|---|---|---|---|
| Websites | 3 rondes | 30 dagen na oplevering | 5 minor changes |
| Designs (logo, flyers, social media) | 2 rondes | 14 dagen | 5 minor changes |
| E-commerce | 4 rondes | 45 dagen | 5 minor changes |

> Na limiet: **$25 per revisie ronde** of **$8 per wijziging**

### Major Revisions (betaald) — definitie

Major revisions veranderen scope, structuur of functionaliteit significant:
- Extra pagina's toevoegen
- Complete layout/design verandering
- Nieuwe functionaliteiten of systemen
- Integraties met third-party services
- Herstructurering van informatie-architectuur
- E-commerce toevoegen aan bestaande site
- Complete rebranding

> Standaard uurtarief major revisions: **$25/uur**

### Revisie Request Proces

1. Klant dient verzoek in via email met duidelijke lijst van wijzigingen
2. NextX beoordeelt minor of major
3. Bij major: quote gestuurd voor goedkeuring
4. Na goedkeuring: minor binnen 3–5 werkdagen verwerkt
5. Klant ontvangt update voor review
6. Proces herhaalt tot klant tevreden is (binnen gratis limiet)

---

## 26. Custom Work & Extra Services

### Custom Development — voorbeelden

- Maatwerk web applicaties
- Custom CMS of dashboard systemen
- API integraties met externe systemen
- Database ontwerp en implementatie
- Booking/reserveringssystemen
- Membership/community platforms
- Custom payment flows
- Mobile app development (iOS/Android)

**Pricing:** $35–50/uur (afhankelijk van complexiteit). Fixed-price quotes beschikbaar na scope definitie.

### Extra Features & Add-ons (voor bestaande projecten)

| Feature | Prijs |
|---|---|
| Extra website pagina (standaard) | $25–40 per pagina |
| Blog/nieuws systeem | $80–120 |
| Contact form (advanced met validatie) | $30–50 |
| Multi-language support | $100+ per taal |
| Social media feed integratie | $40–60 |
| Email marketing integratie (Mailchimp/etc) | $50–80 |
| Live chat widget | $35–50 |
| Advanced analytics & tracking | $40–70 |
| Custom animations/interactions | $60–150 per element |

### Custom Quote Proces

1. Klant beschrijft gewenste functionaliteit in detail
2. NextX analyseert requirements en technische haalbaarheid
3. Intake call (15–30 min, gratis) indien nodig
4. NextX stuurt binnen **24–48 uur** gedetailleerde quote met: scope, tijdsinvestering, prijs, timeline, aannames
5. Klant keurt goed of vraagt aanpassingen
6. Na goedkeuring: werk begint

---

## 27. Betalingsvoorwaarden

### Betalingsstructuur

| Projectgrootte | Structuur |
|---|---|
| Projecten < $150 | 100% vooruitbetaling voor aanvang |
| Projecten $150–$500 | 50% bij bevestiging · 50% bij oplevering |
| Projecten > $500 | 30% bij bevestiging · 40% bij eerste versie · 30% bij finale oplevering |
| Maandelijkse services | Eerste maand vooruit · Daarna automatisch op de 1e van de maand · Betaling binnen 7 dagen |

### Betaalmethoden

- Contante betaling (cash) — bij afspraak of oplevering
- Bankoverschrijving — IBAN op factuur
- Mobile banking — via Surinaamse banking apps
- Valuta: **USD of SRD** (tegen dagkoers)

### Late Payment

- Betalingstermijn: **14 dagen** na factuurdatum
- Herinnering na 7 dagen
- Na 21 dagen: **2% rente per maand** over openstaand bedrag
- Bij wanbetaling: diensten kunnen worden opgeschort
- Incassokosten voor rekening van de klant

### Refund Policy

| Situatie | Beleid |
|---|---|
| Voor start werkzaamheden | Volledige refund mogelijk |
| Na start | Alleen refund voor niet-verrichte werkzaamheden |
| Bij ontevredenheid | Eerst revisions, dan eventueel partiële refund bespreekbaar |
| Maandelijkse services | Geen refund lopende maand · Direct opzegbaar voor volgende maand |

---

## 28. Garantie & Support

### Garantieperiode (standaard)

| Garantie | Detail |
|---|---|
| 30 dagen bug-fix garantie | Technische bugs, broken links, niet-werkende functionaliteiten, gratis opgelost |
| Browser compatibility | Chrome, Firefox, Safari, Edge (laatste 2 versies) |
| Mobile responsiveness | Getest op standaard screen sizes (desktop, tablet, mobile) |
| Uptime | 99.9% voor door ons gehoste websites (excl. geplande maintenance) |

### Niet onder garantie

- Issues door klant-aanpassingen of third-party plugins
- Content updates / wijzigingen (valt onder revision policy)
- Problemen door verouderde browsers of non-standard devices
- Downtime door externe factoren (hosting, DNS, etc.)
- Security issues door zwakke klant-passwords of nalatigheid

### Post-Launch Support Opties

| Optie | Prijs | Detail |
|---|---|---|
| Pay-per-fix | $25–50 per issue | Afhankelijk van complexiteit |
| UX Kukru Support | vanaf $90/maand | Structurele support (zie sectie 22.7) |
| Extended Warranty | $30/maand | 12 maanden extra bug-fix garantie |

---

## 29. Algemene Voorwaarden (samenvatting voor website)

### Overeenkomst
- Overeenkomst bindend na schriftelijke bevestiging per email
- Mondelinge toezeggingen pas bindend na schriftelijke bevestiging
- Offertes geldig voor **14 dagen**

### Annulering
- Vóór start: geen kosten
- Na start: klant betaalt voor verrichte werkzaamheden (min. 50% van totaal)
- Maandelijkse services: **1 maand opzegtermijn**

### Intellectueel Eigendom
- Na **volledige betaling**: alle rechten gaan over naar klant
- NextX behoudt rechten op templates, frameworks, code libraries en methodologieën
- NextX mag projecten gebruiken in portfolio/marketing (tenzij klant bezwaar maakt vóór projectstart)
- NextX mag 'Designed by NextX' credit in footer plaatsen (op verzoek verwijderbaar)

### Aansprakelijkheid
- Maximale aansprakelijkheid = bedrag dat klant heeft betaald voor de specifieke dienst
- Niet aansprakelijk voor: indirecte schade, gederfde winst, reputatieschade, force majeure
- Klant vrijwaart NextX van third-party claims over aangeleverde content

### Klantverantwoordelijkheden
- Alle materialen aanleveren op tijd en in correcte kwaliteit
- Feedback binnen **5 werkdagen** geven
- Alle aangeleverde content valt onder eigen verantwoordelijkheid (juistheid, auteursrechten)
- Na **10 werkdagen** zonder feedback: project geldt als goedgekeurd
- Issues melden binnen **7 dagen** na oplevering voor gratis fix

### Geschillen
- Eerst minnelijke schikking via direct overleg
- Anders: bevoegde rechter in **Paramaribo, Suriname**
- Surinaams recht is van toepassing

---

## 30. Kant-en-klare Copy per Paginasectie

### Homepage Hero

```
Badge:    "🇸🇷 Lokale Surinaamse Startup"
H1:       "Uw digitale succes begint hier"
Sub:      "NextX Agency helpt Surinaamse bedrijven professioneel online te groeien — snel, betaalbaar en volledig op maat."
CTA 1:    "Start uw project"  →  /contact
CTA 2:    "Bekijk onze diensten"  →  /services
Vertrouw: ✓ Lokaal in Paramaribo  ·  ✓ Snel geleverd  ·  ✓ Transparante prijzen
```

### Why NextX (4 cards)

```
1. Snel Geleverd
   "Template-based aanpak betekent: professioneel resultaat in dagen, niet weken."
   Icon: Zap

2. Betaalbaar
   "Internationale kwaliteit tegen lokaal toegankelijke startup-prijzen. Geen verborgen kosten."
   Icon: DollarSign

3. Volledig Gepersonaliseerd
   "Elke template wordt 100% aangepast aan uw merk, stijl en wensen."
   Icon: Sparkles / Palette

4. Surinaams & Lokaal
   "Wij begrijpen de lokale markt. Betalen in USD of SRD, persoonlijk contact in Paramaribo."
   Icon: MapPin
```

### Diensten Sectie Header

```
Badge:   "Ons Aanbod"
H2:      "Alles wat uw bedrijf digitaal nodig heeft"
Sub:     "Van logo en social media tot complete webshops en maandelijkse support. Één partner, complete oplossingen."
```

### Process Sectie

```
Badge:   "Hoe Wij Werken"
H2:      "Helder proces, geen verrassingen"
Sub:     "Wij volgen altijd dezelfde 5 stappen — zodat u precies weet wat u kunt verwachten."

Stap 01: Intake & Briefing
         "U stuurt uw materialen en wensen. Wij bevestigen schriftelijk met een duidelijke timeline."

Stap 02: Design & Development
         "Wij bouwen en personaliseren uw project. U ontvangt tussentijdse updates bij grotere projecten."

Stap 03: Review & Revisies
         "U beoordeelt de eerste versie en geeft feedback. Wij verwerken gratis minor revisions."

Stap 04: Oplevering
         "Website live of designs geëxporteerd. U ontvangt alle credentials en instructies."

Stap 05: Post-Launch Support
         "30 dagen gratis minor revisions. Daarna: pay-per-fix of UX Kukru maandpakket."
```

### Pricing Sectie (UX Kukru highlight)

```
Badge:   "Maandelijkse Support"
H2:      "Structurele digitale ondersteuning"
Sub:     "Via UX Kukru krijgt u toegang tot ons volledige team via één dedicated specialist."

Card 1 — Starter:    $90/maand
Card 2 — Business:   $160/maand  ← "Meest Gekozen" badge
Card 3 — Partner:    $260/maand
```

### CTA Banner

```
H2:   "Klaar om uw bedrijf online te laten groeien?"
Sub:  "Stuur ons een bericht en ontvang binnen 24-48 uur een vrijblijvende quote."
CTA1: "Stuur een aanvraag"  →  /contact
CTA2: "WhatsApp ons"        →  https://wa.me/5978318508
```

### Footer contact blok

```
Email:     lranoesendjojo@gmail.com
WhatsApp:  +597 831-8508
Locatie:   Paramaribo, Suriname
Website:   www.shop-nextx.com
```

### Contact pagina introductie

```
Badge:  "Neem Contact Op"
H1:     "Laten we samenwerken"
Sub:    "Beschrijf uw project en wij sturen binnen 24-48 uur een vrijblijvende quote. Of stuur direct een WhatsApp bericht."
```

---

## 31. Contactformulier Velden & Validatie

Gebruikt op `/contact` en als modal op de homepage.

| Veld | Type | Vereist | Placeholder |
|---|---|---|---|
| Naam | text | ja | "Uw volledige naam" |
| Email | email | ja | "uw@email.com" |
| Telefoon / WhatsApp | tel | nee | "+597 XXX-XXXX" |
| Service interesse | select | ja | "Kies een dienst..." |
| Budget indicatie | select | nee | "Kies een budget..." |
| Bericht / project omschrijving | textarea | ja | "Beschrijf uw project, wensen en vragen..." |

**Service opties (select):**
- Logo Design
- Social Media Designs
- Flyer / Poster Design
- Business Card Website
- Service Website
- Portfolio Website
- Restaurant/Menu Website
- Starter Webshop
- Grotere Webshop
- UX/UI Audit of Re-design
- SEO Setup
- Webhosting
- UX Kukru Support
- Custom / Anders

**Budget opties (select):**
- Minder dan $50
- $50 – $150
- $150 – $300
- $300 – $500
- Meer dan $500
- Weet ik nog niet

**DB tabel (contact_submissions):**
```sql
id              uuid PRIMARY KEY DEFAULT uuid_generate_v4()
name            text NOT NULL
email           text NOT NULL
phone           text
service_type    text NOT NULL
budget          text
message         text NOT NULL
status          text DEFAULT 'new'   -- 'new' | 'contacted' | 'closed'
created_at      timestamptz DEFAULT now()
```
