# Marcos Zamora — Portfolio

Personal portfolio site built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Dark/cyberpunk aesthetic with terminal-inspired design.

**Live:** https://portfolio-one-beryl-60.vercel.app/

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS + CSS custom properties
- **Animations:** Framer Motion
- **Fonts:** Orbitron + Share Tech Mono, self-hosted via `next/font`
- **Deployment:** Vercel

## Features

- Glitch effect on hero name (CSS `::before` / `::after` + `clip-path`)
- Scanline overlay + neon grid background (fixed CSS pseudo-elements)
- Staggered `fadeIn` entrance animations
- Project cards with animated top-line on hover
- System status panel with pulsing indicators
- Fully typed data layer (`src/data/`)
- Static export ready

## Project structure

```
src/
├── app/
│   ├── globals.css      # CSS variables, glitch keyframes, scanlines
│   ├── layout.tsx       # Root layout + SEO metadata
│   └── page.tsx         # Page composition
├── components/
│   ├── Nav.tsx          # Fixed nav with animated underlines
│   ├── Hero.tsx         # Glitch name, blinking cursor, CTA buttons
│   ├── StatusPanel.tsx  # Live status indicators
│   ├── Projects.tsx     # Project grid
│   ├── ProjectCard.tsx  # Individual card with hover effects
│   ├── Experience.tsx   # Community / teaching experience
│   ├── Skills.tsx       # Tech stack by category
│   └── Contact.tsx      # Contact links + footer
└── data/
    ├── projects.ts      # Typed project data
    └── skills.ts        # Skill categories
```

## CV as code

`src/data/cv.ts` is the single source of truth. Three artifacts are generated from it:

| Artifact | Route / path | What it's for |
| --- | --- | --- |
| HTML | `/cv` | Readable CV + embedded `schema.org/Person` JSON-LD |
| JSON Resume | `/cv.json` | [jsonresume.org](https://jsonresume.org/schema) v1 — machine-readable, CORS-enabled |
| PDF | `public/MarcosZamora_CV.pdf` | Tagged, 1 page, what recruiters get |

Edit `src/data/cv.ts`, then regenerate the PDF:

```bash
npm run build
npm run cv:pdf
```

Notes for future edits:

- Dates live in ISO (`YYYY-MM`) plus a `display` string. ATS parsers and LinkedIn autofill build the
  timeline from the ISO values, so keep them accurate.
- The print styles are calibrated so the CV fits on **one letter page** at 9pt. If you add content,
  re-run `npm run cv:pdf` and check `pdfinfo public/MarcosZamora_CV.pdf | grep Pages`.
- Don't add `letter-spacing` to the section headings: it makes `pdftotext` extract
  `SPEAKING & COMMUNITY` as `S P E A K I N G & CO M M U N I T Y`, and ATS parsers stop recognising
  the section.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Optimized for Vercel — just connect the repo and deploy. No additional configuration needed.

---

**Marcos Zamora Sánchez** · Costa Rica · [zamoramarcos13@gmail.com](mailto:zamoramarcos13@gmail.com)
