# Marcos Zamora — Portfolio

Personal portfolio site built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Dark/cyberpunk aesthetic with terminal-inspired design.

**Live:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app) ← replace after deploying

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS + CSS custom properties
- **Animations:** Framer Motion
- **Fonts:** Orbitron + Share Tech Mono (Google Fonts)
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
