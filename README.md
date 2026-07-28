# Aurum — Casino Affiliate Site (Astro)

Independent online-casino review & ranking site. Light theme, professional, no sidebar.

## Run it

```bash
cd aurum
npm install
npm run dev      # http://localhost:4321
```

Build for production:

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## What's here

- `src/pages/index.astro` — the homepage, assembling all sections
- `src/layouts/Layout.astro` — `<head>`, fonts (Fraunces + Inter), meta
- `src/components/`
  - `Nav.astro` — sticky nav, mobile menu, scroll-aware border
  - `Hero.astro` — split hero with the gold "Editor's #1" verdict card
  - `TrustBar.astro` — credibility strip
  - `CasinoList.astro` — ranked casino comparison cards (the core)
  - `HowWeRate.astro` — weighted scoring methodology
  - `Footer.astro` — link columns + 18+/responsible-gambling notices
- `src/styles/global.css` — design tokens (emerald + gold + ivory), buttons, score chip

## Design

- Palette: ivory `#FBFAF7`, casino-felt emerald `#0B3D2E` / `#0E5C43`, restrained gold `#C8A24B`.
- Type: Fraunces (display) + Inter (body/UI).
- Signature: gold wax-seal "#1 pick" medallion + poker-chip score discs.

## Adding more pages

Drop new `.astro` files in `src/pages/` (e.g. `bonuses.astro` → `/bonuses`).
The casino data is hardcoded in `CasinoList.astro` / `Hero.astro` — swap it for a
content collection or CMS/affiliate feed when you're ready.

## Note

Casino content is hardcoded placeholder data. Replace affiliate links (`href="#"`)
with your real tracking URLs, and confirm licensing/responsible-gambling
requirements for the jurisdictions you target.
