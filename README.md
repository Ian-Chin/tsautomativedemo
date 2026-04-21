# TS Automotive Workshop — Website

Modern, minimalist marketing site for a Cheras-based car workshop.
Built with **Vite + React + TailwindCSS + Framer Motion + lucide-react**.

## Stack
- React 18 (Vite)
- TailwindCSS 3 (custom `ink` + `accent` palette, Inter + Space Grotesk)
- Framer Motion (entrance + carousel animations)
- lucide-react (icons)
- shadcn-style component conventions (composable, utility-driven)

## Project structure
```
ts-automotive/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Services.jsx        ← horizontal carousel
      ├─ WhyChooseUs.jsx
      ├─ Testimonials.jsx    ← auto-sliding carousel
      ├─ Gallery.jsx         ← bento grid w/ hover zoom
      ├─ Contact.jsx         ← Google Maps embed + WhatsApp
      └─ Footer.jsx
```

## Install & run
```bash
cd ts-automotive
npm install
npm run dev
```

Then open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Customisation pointers
- **Brand colour**: `tailwind.config.js` → `colors.accent`
- **Fonts**: swap Google Fonts link in `index.html` and `tailwind.config.js`
- **Phone / WhatsApp**: search for `60123456789` and replace
- **Address / map**: `Contact.jsx` — update the `iframe src` query
- **Reviews**: `Testimonials.jsx` → `reviews` array
- **Services**: `Services.jsx` → `services` array
- **Gallery images**: `Gallery.jsx` → `images` array (currently Unsplash)

## Notes
Copy was rewritten for clarity and conversion — drawing on the workshop's
real strengths (honesty, transparent pricing, no hard selling, replaced
parts shown to customers) rather than copying source text verbatim.
