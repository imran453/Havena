# Havena — Landing Page

A pixel-faithful React + Tailwind implementation of the Havena real estate landing page, built from the Figma design.

> **Update:** All placeholder illustrations/SVG scenes have been replaced with real `<img>` tags pointing at files in `public/images/` (see the **Images** section below for the exact path of every file to swap). The header is now a true fixed bar that sits outside/above the hero section with a solid white background — no more blur, and no more overlap with the hero content.

## Stack

- **React 18** + **Vite** (fast dev server, instant HMR)
- **Tailwind CSS** for styling, with custom Havena design tokens (`havena.green`, `havena.orange`, `havena.amber`) in `tailwind.config.js`
- No backend — all content is static/mock data, ready to wire up to a real API or CMS

## Getting started

1. Open this folder in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

## Other commands

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Project structure

```
public/
  images/                  Real image assets served at the site root (see
                           "Images" section below for the full path map)
src/
  components/
    Header.jsx             Fixed top nav bar (outside/above the hero, solid white background)
    Hero.jsx                Hero banner + headline + trust badges
    SearchBar.jsx          Property search card (Buy/Rent/Short-let tabs)
    Stats.jsx               "Across every corner of Nigeria" stats row
    WhyChoose.jsx          Feature list + image collage + satisfaction card
    PropertyCard.jsx        Single property card (used by FeaturedProperties)
    FeaturedProperties.jsx  Filterable property grid section
    HowItWorks.jsx          4-step process section
    Categories.jsx          Horizontal scrolling category showcase
    CTABand.jsx             "Ready to find your dream home" banner
    Footer.jsx              Newsletter + link columns + socials
    Logo.jsx                Havena logo lockup (inline SVG mark + wordmark)
    icons.jsx                Inline SVG icon set (UI icons only — see note below)
  App.jsx                  Assembles all sections in page order
  main.jsx                 React entry point
  index.css                Tailwind directives + small global styles
```

## Images

Every illustration/placeholder graphic has been replaced with plain `<img>` tags
that point at files under `public/`. Vite serves anything in `public/` at the
site root, so `public/images/hero.jpg` is requested as `/images/hero.jpg` in
the code — you don't need to change any import paths, just **replace the file
contents** at each path below with your real photo (same filename, same
folder).

Placeholder images are already included so the site runs and looks correct
immediately; each placeholder is labeled with its own path so it's obvious
which file to swap.

| Used in | Path | Recommended size (≈ matches Figma) |
|---|---|---|
| Hero background | `public/images/hero.jpg` | 1392 × 773 |
| Featured property cards (6) | `public/images/properties/property-1.jpg` … `property-6.jpg` | 822 × 776 |
| "Why Choose Havena" collage — large | `public/images/why-choose/collage-1.jpg` | 1200 × 600 |
| "Why Choose Havena" collage — small | `public/images/why-choose/collage-2.jpg` | 800 × 440 |
| "Why Choose Havena" — 95% satisfaction card background | `public/images/why-choose/collage-3.jpg` | 800 × 440 |
| "How it works" banner | `public/images/how-it-works/banner.jpg` | 1392 × 773 |
| Category cards (6) | `public/images/categories/houses.jpg`, `apartments.jpg`, `duplexes.jpg`, `short-let.jpg`, `land.jpg`, `commercial.jpg` | 432 × 730 |
| CTA band decorative map graphic | `public/images/cta/map-pattern.png` | 735 × 630, transparent PNG |

To swap an image: just replace the file at that path with your own (keep the
same filename/extension, or update the `src`/`image` value in the relevant
component if you rename it). No other code changes are needed.

The Havena logo mark (the small house icon next to the wordmark, in
`src/components/Logo.jsx`) is kept as an inline SVG rather than an image
file, since logos are normally vector for crispness at any size — let me
know if you'd like that swapped to an image too.

## Design tokens

Defined in `tailwind.config.js`:

| Token | Hex | Usage |
|---|---|---|
| `havena.green` (DEFAULT) | `#0f5e3a` | Primary buttons, active nav state |
| `havena.green.light` | `#1e8e5a` | Hover states, badges |
| `havena.green.soft` | `#9fccb8` | Feature icon backgrounds |
| `havena.orange` | `#f97316` | Property tags, satisfaction badge |
| `havena.amber` | `#f59e0b` | Newsletter CTA button |

## Responsive behavior

The page is responsive from mobile (375px) through desktop (1440px+):

- The header is fixed to the top of the viewport at all sizes, with a solid
  white background (`bg-white`, no blur/transparency) so it stays readable
  while scrolling. It sits above the hero in normal page flow — `App.jsx`
  adds top padding to the page content so nothing is hidden underneath it.
  Secondary links (Find Agent / Your Location) collapse below `md`; the
  Buy/Rent/Short-let nav collapses below `lg`.
- The search card sits inline below the hero on mobile/tablet, and becomes
  an absolutely positioned floating card over the hero image at `lg` and up
  (matching the Figma desktop layout).
- The property grid goes 1 → 2 → 3 columns; the "How it works" steps go
  1 → 2 → 4 columns; the category showcase scrolls horizontally on small
  screens.
