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
      username: "marcos-zamora-sánchez-01b374272",
      url: "https://www.linkedin.com/in/marcos-zamora-s%C3%A1nchez-01b374272",
    },
  ],
  summary:
    "Computer Engineering student who ships production software: a multi-tenant SaaS platform in active development and a freelance web app sold and delivered to a paying client. Strong in TypeScript, Node.js and Supabase/PostgreSQL, with automated testing (Vitest, Playwright) and Scrum team experience. Workshop facilitator at COMPDES, the Central American computing congress, two years running.",
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
  {
    label: "Testing & Process",
    items: ["Vitest", "Testing Library", "Playwright", "Scrum", "Jira", "Gitflow"],
  },
];

export const experience: Role[] = [
  {
    organization: "CoreBase / DojoBase",
    position: "Founder & Solo Developer",
    location: "Remote — Costa Rica",
    period: { start: "2026-03", display: "Mar 2026 – Present" },
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "pnpm monorepo"],
    url: "https://dojobase-landing.vercel.app",
    // Bullets de una línea: el CV entra en una página carta a 9pt
    highlights: [
      "Built GymBase v1, a multi-tenant gym SaaS live on a custom domain, then rewrote it as CoreBase, a reusable platform layer.",
      "DojoBase, the first product on CoreBase: ranks, classes, sparring, promotions, tournaments and billing for martial arts academies.",
      "Tenant resolved from a JWT claim and isolated with Supabase RLS, with automated RLS tests; 40+ merged PRs.",
      "Fixed production-grade bugs: recurring-class timezone drift, local-date handling, SECURITY DEFINER on auth triggers.",
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
      "Kept it running 24/7 on free-tier Netlify and Render via a keep-alive Edge Function; shipped a v2 rework in May 2026.",
    ],
  },
  {
    organization: "Tacha — Web Development course",
    position: "Full-Stack Developer, Scrum team of 6",
    location: "Tecnológico de Costa Rica",
    period: { start: "2026-08", display: "Aug 2026 – Present" },
    stack: ["Next.js", "React", "Supabase", "Vitest", "Playwright", "Jira"],
    url: "https://github.com/MarcosZam13/tacha",
    highlights: [
      "Collaborative shopping-list app run as real Scrum: Jira sprints, gitflow, one ticket per PR, peer QA before every merge.",
      "Built the list features, set up Vitest + Playwright and CI on PRs, and ran system QA on each sprint deliverable.",
    ],
  },
  {
    organization: "Tecnológico de Costa Rica",
    position: "Teaching Assistant — Algorithm Analysis",
    location: "Campus San Carlos, Costa Rica",
    period: { start: "2026-02", display: "Feb 2026 – Present" },
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
      "Built on OpenClaw + OpenRouter as a two-step install; tested on CachyOS, Ubuntu, Raspberry Pi 4 and Windows 11 (WSL2).",
    ],
  },
  {
    event: "COMPDES 2025",
    title: "Git & GitHub Practical Workshop (4 hours)",
    location: "Guatemala",
    period: { start: "2025-07", end: "2025-07", display: "Jul 2025" },
    url: "https://github.com/MarcosZam13/COMPDES2025-GIT",
    highlights: [
      "Delivered a 4-hour workshop on real Git workflows, with a group activity using pull requests to practice team development.",
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
