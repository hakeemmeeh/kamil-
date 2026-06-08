# Kamil Travel

Premium travel management website — corporate travel, airport support, destinations, tours, and visa assistance.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- Next.js (App Router)
- React · TypeScript · Tailwind CSS
- GSAP ScrollTrigger + Lenis smooth scroll
- Framer Motion (select UI)

## Project structure

```
src/
├── app/                    # Routes (pages, layout, globals)
├── components/
│   ├── about/              # About page blocks
│   ├── layout/             # Navbar, Footer, scroll effects
│   ├── sections/
│   │   ├── home/           # Homepage-only sections
│   │   │   └── hero/       # Hero carousel + background
│   │   └── …               # Shared sections (FAQ, travel tips, …)
│   ├── services/           # Services page bento grid
│   ├── shared/             # PageBanner, InnerPageCTA, …
│   ├── tours/              # Tour cards, catalog, search bar
│   └── ui/                 # Reusable UI primitives
├── hooks/
├── lib/                    # content, images, animations, utils
└── types/

public/
├── illustrations/          # Travel tips SVG art
├── images/                 # Static image assets
├── logo/
├── reference/kanila/       # Theme reference screenshots
└── regions/                # Region line-art SVGs

docs/                       # Kanila reference guide
scripts/                    # Dev utilities (Unsplash ID lookup, etc.)
```

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com/new).
2. **Framework preset:** Next.js (auto-detected).
3. **Build command:** `npm run build` · **Output:** default.
4. **Node.js:** 20.x (set via `.nvmrc` / `package.json` engines).
5. No environment variables are required for a static marketing build.

Unsplash images load from `images.unsplash.com` (allowed in `next.config.ts`).

## Key docs

- `CLAUDE.md` / `AGENTS.md` — build rules and brand
- `docs/KANILA-REFERENCE.md` — Home 3 layout parity checklist
