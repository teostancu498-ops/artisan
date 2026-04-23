# Artizan Urban Coffee Shop

A warm, greenhouse-inspired marketing site for **Artizan Urban Coffee Shop** in Pitești.
Built to make people want to walk through the door.

> *Bulevardul I. C. Brătianu, bl. 35 - Pitești, România*

---

## Stack

- **[Astro 4](https://astro.build/)** – islands, file-based routing, fast output
- **TypeScript** – strict, with `~/*` path alias to `src/*`
- **Tailwind CSS 3** – used alongside a hand-tuned custom CSS design system
- **GSAP + ScrollTrigger** – orchestrated reveals and hero timeline
- **[Lenis](https://lenis.darkroom.engineering/)** – buttery smooth scrolling
- **Google Fonts** – Fraunces (display), Cormorant Garamond (body), Inter (UI), Caveat (hand)

No CMS, no tracker, no analytics by default. Content lives in `src/data/` as typed TypeScript - simple to edit, impossible to break the build.

---

## Pages

| Route        | Purpose                                                  |
| ------------ | -------------------------------------------------------- |
| `/`          | Story, signature drinks, reviews, and a visit CTA        |
| `/menu`      | Full menu with sticky category rail and staggered reveal |
| `/about-us`  | Our story, values, and a small timeline of the years     |
| `/visit-us`  | Address, hours, embedded Google Map, directions, contact |

---

## Getting started

```bash
# 1. install
npm install

# 2. dev
npm run dev
# → http://localhost:4321

# 3. build for production
npm run build

# 4. preview the production build
npm run preview
```

---

## Design system

The **hobbit greenhouse** palette lives in two places:

- `tailwind.config.mjs` → `moss`, `parchment`, `ember`, `bark` scales
- `src/styles/global.css` → CSS custom properties for ad-hoc styling

Core intentions:

- **Moss greens** for calm (nav, titles, body text)
- **Parchment cream** for the backdrop (warm, aged paper feel)
- **Ember amber** for accents, emphasis, hover states - the candle light
- **Bark brown** for depth on coffee illustrations

Typography mixes a soft display serif (Fraunces), an elegant body serif (Cormorant Garamond), a clean UI sans (Inter) and a hand-written accent (Caveat) for little chalkboard notes.

---

## Motion

All non-essential motion respects `prefers-reduced-motion`.

- **Hero** – GSAP timeline lifts title lines, fades eyebrow/sub/CTAs, drifts the cup with CSS
- **Sections** – `data-reveal` / `data-reveal-stagger` wired in `src/scripts/smooth.ts`
- **Smooth scroll** – Lenis boots on load, anchors route through it
- **Decorative** – Flickering lanterns, steam dots, a drifting cup, a scroll cue

---

## Editing content

- Opening hours, phone, address → `src/data/site.ts`
- The menu (categories, items, prices, badges) → `src/data/menu.ts`
- Copy for story/values/timeline lives inline in `src/pages/about-us.astro`
- Reviews live inline in `src/components/Reviews.astro`

---

## Deploying

This is a static Astro site. After `npm run build`, the `dist/` folder is what you want - drop it on Netlify, Vercel, Cloudflare Pages, or any plain static host.

---

Made with patience, plants, and a kettle that never stops humming.
