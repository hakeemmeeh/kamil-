# Kanila Theme Reference (for AI & developers)

> **Read this file before changing homepage layout or claiming “Kanila parity”.**  
> Live ThemeForest previews are often blocked for automated tools. This repo ships **local preview images** agents can open with the Read tool.

---

## How agents should use this pack

1. **Read images** in `public/reference/kanila/` (paths below). Cursor/Claude can load JPEGs from the workspace.
2. **Follow Home 3** section order unless the user explicitly picks another demo.
3. **Map Kamil gold** (`#C8A45D`) where Kanila uses orange — layout and motion match Kanila; brand colour stays Kamil.
4. **Do not invent sections** — check the checklist in § Home 3 before saying “done”.

### Image index

| File | What it shows |
|------|----------------|
| `public/reference/kanila/1.jpg` | **All 4 homepage thumbnails** side-by-side (best starting point) |
| `public/reference/kanila/2.jpg` | Home 1 hero + Elementor branding |
| `public/reference/kanila/3.jpg` | Home 1 demo import mockup |
| `public/reference/kanila/4.jpg` | Blog listing + single post layouts |
| `public/reference/kanila/5.jpg` | Four “Destinations” inner-page layouts (arches + `< The Best Destinations >`) |
| `public/reference/kanila/6.jpg` | Three “Tours” list/detail layouts |
| `public/reference/kanila/7.jpg` | About / Team / Contact inner pages |
| `public/reference/kanila/8.jpg` | Marketing hero (purchase CTA — not a homepage) |
| `public/reference/kanila/envato-01-large.jpg` | Envato item large preview (if downloaded) |

### URLs that usually fail for bots

- `https://preview.themeforest.net/item/kanila-travel-agency-wordpress-theme/full_screen_preview/63197248` (iframe)
- Undocumented `*.themelexus.com` demo hosts (404 or private)

### URLs that work for humans

- ThemeForest item: https://themeforest.net/item/kanila-travel-agency-wordpress-theme/63197248  
- Docs (may timeout): https://lexusdocs.gitbook.io/kanila/  
- Static previews (used to build this pack): `http://dev2.wpopal.com/themelexus/images/kanila/{1-8}.jpg`

### Local browser gallery (dev)

Run `npm run dev` and open **`/kanila-reference`** — grid of all reference images with labels.

---

## Four homepage demos — pick one

### Home 1 — Playful / illustrated

- **Hero:** Teal→orange gradient (no full-bleed photo). Left serif **“TRAVEL EXPLORE”**. Right: 3D plane window, polaroids, hearts, clouds, flight paths.
- **Vibe:** Consumer, fun, young.
- **Use when:** Leisure tour brand, not corporate B2B.
- **Avoid for Kamil:** Wrong tone for airport/corporate services.

### Home 2 — Search / booking first

- **Hero:** Full-width moody landscape photo. Centered **“Discover & Book Things To Do”**.
- **Hero UI:** Wide **search bar** on bottom (Where · Check-in · Guests · Search).
- **Below:** Awards copy, overlapping circular crops, dark **“Curated Luxury Journeys”** carousel.
- **Use when:** OTA / instant booking is the primary conversion.
- **Avoid for Kamil:** Inquiry-led corporate model; conflicts with Home 3 direction.

### Home 3 — Luxury cinematic + arches ⭐ **(Kamil target)**

- **Hero:** Full lake/kayak photo. *“It’s time to”* + **“Let’s Design Your Next Luxury Travel Experience”** (centered serif, white).
- **Hero UI:** **Arched destination cards** along bottom (staggered heights). **No** hero search bar. **No** hero CTAs (nav has Book Now).
- **Motion:** Sticky hero cover; cream panel slides over photo; later sticky “Popular Destinations” scenic band.
- **Use when:** Premium agency, destination storytelling, enquiry in nav/footer.

### Home 4 — Adventure / stats

- **Hero:** Canyon/dunes + large **orange circle** badge (e.g. “GRAND CANYON”).
- **Below:** Stat cards (300+, 98%, 40%), rafting/trip promos.
- **Use when:** Hiking/rafting/adventure operator.
- **Avoid for Kamil:** Activity-tour focus, not global corporate travel.

**Recommendation for Kamil Travel:** **Home 3 only.**

---

## Home 3 — full scroll order (canonical)

Use this order on `src/app/page.tsx` unless the user opts out of a section.

| # | Kanila section | Kamil component | Notes |
|---|----------------|-----------------|-------|
| 1 | Top bar + nav + Book Now | `TopBar` + `Navbar` | Transparent over hero → solid on scroll |
| 2 | **§1.1 Hero** — photo + headline + bottom arches | `HeroSection` + `HeroArchCarousel` | Sticky bg, arch autoplay, center card pops |
| 3 | Thin cream strip (optional): Events · Destinations · Activities | *Not built* — optional 3-icon strip | Celebrate replaces with 3 feature cards |
| 4 | **Celebrate** — cream overlap, gold top line | `CelebrateSection` | `overlap-panel`, negative margin over hero |
| 5 | **Places To Go** — dark, arched grid | `DestinationsPreview` | **Removed from home** (user: repetition) — still on `/destinations` |
| 6 | **‹ The Best Destinations ›** — sand + topo + region cards | `TravelByRegionSection` | Line art via `/public/regions/*.svg` |
| 7 | **Popular Destinations** — sticky golden lake + large arches | `PopularDestinationsSection` | `kanilaHeroAlt` bg, no side arrows |
| 8 | **Stats** — light band | `StatsStrip` | `overlap-panel` over Popular |
| 9 | **Tours / packages** — dark carousel | `CuratedJourneysSection` | Side arrows OK on carousels |
| 10 | Final **CTA** banner | `CinematicCTA` | Parallax photo + enquiry |
| 11 | **Footer** | `Footer` | |
| — | *(Kamil-only)* Somalia airport network | `SomaliaRepresentativeNetwork` | After tours, before CTA — not in Kanila |

### Home 3 design rules (do not mix with Home 2)

- ❌ Large booking/search card on hero  
- ❌ Hero primary CTA buttons (nav CTA only)  
- ❌ Carousel arrows on **arch** rows (hero + popular)  
- ✅ Arched cards: `border-radius: 50% 50% 0 0`, pill label below  
- ✅ Solid **overlap-panel** cover scroll — not fade-through sticky bg  
- ✅ Lenis + GSAP ScrollTrigger (`lib/animations.ts`)

---

## Kamil vs Kanila parity checklist

Before claiming “matches Kanila Home 3”, verify:

- [ ] Hero: single photo, centered 2-line headline, arches bottom-center  
- [ ] Celebrate: cream, rounded top, gold 4px top border  
- [ ] Travel by region: sand + `‹ The Best Destinations ›`  
- [ ] Popular: sticky full-viewport image, title upper third, arches lower  
- [ ] Stats: cream band overlapping Popular  
- [ ] Tours: horizontal cards, dark section  
- [ ] CTA: full-width image band  
- [ ] No extra homepage sections unless user asks (booking bar, testimonials, newsletter, etc.)

---

## Theme metadata

| Field | Value |
|-------|--------|
| Name | Kanila – Travel Agency & Tour Booking |
| ThemeForest ID | 63197248 |
| Author | ThemeLexus (WP OPAL) |
| Builder | Elementor |
| Home demos | 4 (Home 1–4) |

---

## Updating this pack

If preview URLs break, re-download:

```bash
mkdir -p public/reference/kanila
for i in 1 2 3 4 5 6 7 8; do
  curl -sL "http://dev2.wpopal.com/themelexus/images/kanila/${i}.jpg" \
    -o "public/reference/kanila/${i}.jpg"
done
```

*Last updated: 2026-05-24 — bundled for Kamil Travel / Home 3 build.*
