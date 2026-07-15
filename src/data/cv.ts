// cv.ts — Fuente única de verdad del CV.
// De acá salen: la página /cv, el endpoint /cv.json (JSON Resume) y el PDF.
// Las fechas van en ISO (YYYY-MM) para que las lean los ATS y el autorrelleno de LinkedIn,
// y en `display` para lo que se imprime.

export interface Period {
  /** ISO YYYY-MM — lo que parsean las máquinas */
  start: string;
  /** ISO YYYY-MM. Ausente = en curso */
  end?: string;
  /** Lo que ve una persona */
  display: string;
}

export interface Role {
  organization: string;
  position: string;
  location?: string;
  period: Period;
  stack?: string[];
  highlights: string[];
  url?: string;
}

export interface Talk {
  event: string;
  title: string;
  location: string;
  period: Period;
  highlights: string[];
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const basics = {
  name: "Marcos Zamora Sánchez",
  label: "Full-Stack Developer & SaaS Builder — Computer Engineering Student",
  email: "zamoramarcos13@gmail.com",
  phone: "+506 8774-4555",
  location: { city: "Costa Rica", countryCode: "CR" },
  profiles: [
    { network: "GitHub", username: "MarcosZam13", url: "https://github.com/MarcosZam13" },
    {
      network: "LinkedIn",
      username: "marcos-zamora-sanchez",
      url: "https://linkedin.com/in/marcos-zamora-sanchez",
    },
  ],
  summary:
    "Computer Engineering student who ships production software: a multi-tenant SaaS platform in active development and a freelance web app sold and delivered to a paying client. Strong in TypeScript, Node.js and Supabase/PostgreSQL, with production deployments on Vercel and Cloudflare. Workshop facilitator at COMPDES, the Central American computing congress, two years running.",
} as const;

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL (PostgreSQL)", "Python", "Java", "C++"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js (App Router)", "HTML", "CSS", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Supabase (Edge Functions, RLS, Auth, Realtime)", "REST APIs"],
  },
  {
    label: "Data / State",
    items: ["PostgreSQL", "Zustand", "React Hook Form", "Zod"],
  },
  {
    label: "Data Analysis",
    items: ["pandas", "scikit-learn", "Plotly", "Dimensional modeling (star schema)"],
  },
  {
    label: "AI & Automation",
    items: ["Claude Code", "OpenClaw", "OpenRouter", "n8n"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Cloudflare", "Netlify", "Render", "Google Maps API", "Linux (CachyOS)"],
  },
];

export const experience: Role[] = [
  {
    organization: "GymBase / MemberBase",
    position: "Founder & Solo Developer",
    location: "Remote — Costa Rica",
    period: { start: "2026-03", display: "Mar 2026 – Present" },
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Zustand"],
    url: "https://gymbase.fit",
    // Bullets de una línea: el CV entra en una página carta a 9pt
    highlights: [
      "Architected a multi-tenant gym SaaS covering members, routines, community, payments and scheduling; live on a custom domain.",
      "Enforced tenant isolation at the DB layer with Supabase RLS policies on a shared get_user_role() function.",
      "Designed a WhatsApp Business integration using gym-owned numbers via Embedded Signup.",
      "Built admin and client portals (Next.js App Router, TypeScript strict, shadcn/ui, Zustand) with Google OAuth and Resend email.",
    ],
  },
  {
    organization: "CaneleApp",
    position: "Freelance Full-Stack Developer",
    location: "Costa Rica",
    period: { start: "2025-10", end: "2026-05", display: "Oct 2025 – May 2026" },
    stack: ["Node.js", "PostgreSQL", "Supabase", "Google Maps API"],
    url: "https://github.com/MarcosZam13/caneleApp-v2",
    highlights: [
      "Designed, sold and delivered a route and order management app for a bakery — first paid client project, shipped Dec 2025.",
      "Built the backend with Node.js and Supabase (PostgreSQL); Google Maps API for route visualization.",
      "Kept it running 24/7 on free-tier Netlify and Render via a keep-alive Edge Function and cron job.",
      "Shipped a v2 rework on an updated stack in May 2026.",
    ],
  },
  {
    organization: "Tecnológico de Costa Rica",
    position: "Teaching Assistant — Algorithm Analysis",
    location: "Campus San Carlos, Costa Rica",
    period: { start: "2026-02", end: "2026-06", display: "Semester I 2026" },
    highlights: [
      "Graded assignments and exams and gave feedback on algorithmic problem-solving and complexity analysis.",
    ],
  },
];

export const talks: Talk[] = [
  {
    event: "COMPDES 2026",
    title: "AI Agents From Scratch — Hands-On Workshop",
    location: "El Salvador",
    period: { start: "2026-07", end: "2026-07", display: "Jul 2026" },
    url: "https://github.com/MarcosZam13/taller-agentes-ia",
    highlights: [
      "Designed and delivered a workshop on building AI agents from scratch: personal finance, second brain, dev assistant, PDF extraction.",
      "Built the foundation on OpenClaw + OpenRouter (gpt-4o-mini) as a two-step install: bare chatbot, then tool-executing agent.",
      "Tested and documented on Arch/CachyOS, Ubuntu/Debian, Raspberry Pi 4 and Windows 11 (WSL2) — runs fully local, no cloud.",
    ],
  },
  {
    event: "COMPDES 2025",
    title: "Git & GitHub Practical Workshop (4 hours)",
    location: "Guatemala",
    period: { start: "2025-07", end: "2025-07", display: "Jul 2025" },
    url: "https://github.com/MarcosZam13/COMPDES2025-GIT",
    highlights: [
      "Delivered a 4-hour workshop for university students on real Git workflows: commits, branching, merging, GitHub collaboration.",
      "Guided a group activity using pull requests to practice team-based development.",
    ],
  },
];

export const education = [
  {
    institution: "Tecnológico de Costa Rica",
    studyType: "B.S.",
    area: "Computer Engineering",
    location: "Campus San Carlos, Costa Rica",
    period: { start: "2023-02", end: "2027-12", display: "2023 – 2027 (expected)" },
  },
];

export const languages = [
  { language: "Spanish", fluency: "Native speaker" },
  { language: "English", fluency: "B1 — Intermediate" },
];
