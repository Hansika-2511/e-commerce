# SweetNight — Next.js Frontend

Light editorial nightwear e-commerce homepage.  
Design: Blush pink + white | Playfair Display + DM Sans

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Homepage — assembles all sections
├── components/
│   ├── Topbar.tsx          # Announcement bar
│   ├── Navbar.tsx          # Sticky navigation with cart/wishlist
│   ├── Hero.tsx            # Hero with category quick-links
│   ├── FeatureStrip.tsx    # 4-column dark feature bar
│   ├── CategoryGrid.tsx    # Asymmetric editorial category grid
│   ├── Marquee.tsx         # Scrolling tape banner
│   ├── TrendingProducts.tsx# Filterable product grid (client)
│   ├── ProductCard.tsx     # Individual product card (client)
│   ├── AboutSection.tsx    # Brand story + stats + gallery
│   ├── BrandStrip.tsx      # Licensed brand pills
│   ├── Newsletter.tsx      # Email signup with success state
│   └── Footer.tsx          # 4-column footer
└── styles/
    └── globals.css         # Design tokens + resets + utilities
```

---

## Design Tokens (globals.css)

All colors, fonts, and spacing are CSS variables — edit them in `src/styles/globals.css`:

| Variable | Value | Used for |
|---|---|---|
| `--color-rose` | `#c97b7b` | Primary accent |
| `--color-surface` | `#fdf5f5` | Soft blush backgrounds |
| `--font-display` | Playfair Display | Headings, logo |
| `--font-body` | DM Sans | All body text |

---

## Next Steps

- Replace emoji placeholders with real product images using `next/image`
- Connect product data to a CMS (Sanity, Contentful) or your existing backend API
- Add `/products`, `/women`, `/men`, `/kids` route pages
- Implement cart state with Zustand or React Context
- Add WhatsApp enquiry links (replace the enquire buttons)
- Set up INR pricing once backend pricing data is available
