// projects.ts — Datos de los proyectos del portafolio

export interface Project {
  id: string;
  badge: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  status: "active" | "deployed" | "academic" | "planning";
  /** El código fuente es privado: se muestra un chip en vez de un link roto */
  sourcePrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "dojobase",
    badge: "SaaS · In Development",
    title: "CoreBase / DojoBase",
    description:
      "Multi-tenant SaaS for martial arts academies, built from scratch on CoreBase, a reusable platform layer in a pnpm monorepo. Multi-discipline ranks, classes and attendance, sparring with a round timer, belt promotions, official fight history, tournaments with automatic brackets, billing and an installable PWA. Rewrite of GymBase v1, using it as the validated spec.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "pnpm monorepo", "Tailwind CSS", "PWA", "Vercel"],
    highlights: [
      "Tenant resolved at runtime from a JWT claim; tenant isolation enforced with RLS and covered by RLS tests",
      "Shared packages (core, ui, modules) reused by DojoBase and the upcoming GymBase v2",
      "40+ merged PRs: tournaments with brackets, promotions with rubrics, billing with late fees, notifications",
      "Fixed real bugs such as recurring-class timezone drift and local-date handling for Costa Rica",
      "Separate marketing landing deployed on Vercel",
    ],
    links: [
      { label: "Landing · DojoBase", href: "https://dojobase-landing.vercel.app" },
    ],
    status: "active",
    sourcePrivate: true,
  },
  {
    id: "tacha",
    badge: "Team Project · Scrum",
    title: "Tacha",
    description:
      "Collaborative shopping-list web app built by a team of six in the Web Development course. Households share lists, recipes and a product catalog. Run as a real Scrum team: Jira sprints, strict gitflow with one ticket per PR, peer QA before merge and a deliverable branch per sprint.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Vitest", "Playwright", "Jira"],
    highlights: [
      "Built the list features: search and add products, quantities, detail and delete",
      "Set up the test stack (Vitest + Testing Library, Playwright E2E) and lint + CI on every PR",
      "Audited the shared Supabase database: RLS gaps, grants, functions without fixed search_path",
      "Ran system QA on each sprint deliverable with real login and route guards",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/MarcosZam13/tacha" },
    ],
    status: "academic",
  },
  {
    id: "devopslab",
    badge: "DevOps · In Planning",
    title: "DevOpsLab",
    description:
      "Self-hosted DevOps platform on a Raspberry Pi 4, reproducible from a single repo. The Pi is the workshop, not the datacenter: it runs pipelines, scans, monitoring and the non-production environments, while client production stays in the cloud. Architecture and decisions documented as ADRs before writing any code.",
    stack: ["Docker", "Ansible", "GitHub Actions", "Prometheus", "Grafana", "Tailscale", "Caddy", "SOPS"],
    highlights: [
      "Infrastructure as code: if the Pi dies, it is rebuilt from the repo with one command",
      "DEV / QA / UAT / PROD environments with build-once, promote-many images",
      "Automated QA and security scans in the pipeline, alerts to Telegram",
      "Pilot with one of my own apps (DojoBase or Tacha)",
    ],
    links: [],
    status: "planning",
  },
  {
    id: "gymbase",
    badge: "SaaS · v1 Legacy",
    title: "GymBase v1",
    description:
      "First version of my multi-tenant gym management SaaS: admin portal (members, content, community, routines, calendar, payments) and client portal with workout mode, live on a custom domain. It grew into one product serving gyms and dojos through feature flags, which led to the CoreBase rewrite.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Zustand", "Zod", "Cloudflare"],
    highlights: [
      "Row-Level Security with shared get_user_role() for tenant isolation",
      "Admin and client portals with 30+ screens",
      "Resolved real production issues: UTC timezone bugs, NULL payment backfill, SECURITY DEFINER on auth triggers",
      "Google OAuth via Supabase Auth + transactional email with Resend",
    ],
    links: [
      { label: "Live · gymbase.fit", href: "https://gymbase.fit" },
    ],
    status: "deployed",
    sourcePrivate: true,
  },
  {
    id: "caneleapp",
    badge: "Freelance · Delivered to Client",
    title: "CaneleApp",
    description:
      "Route and order management web app built and delivered to a paying bakery client. First paid freelance project — live in production with 24/7 uptime.",
    stack: ["Node.js", "PostgreSQL", "Supabase", "Google Maps API", "Netlify", "Render"],
    highlights: [
      "Full CRUD for delivery routes and customer orders",
      "Google Maps API integration for route visualization",
      "Keep-alive Edge Function + cron job for 24/7 uptime on free tier",
      "Designed, built, and sold to a real client",
    ],
    links: [
      { label: "GitHub · v2", href: "https://github.com/MarcosZam13/caneleApp-v2" },
    ],
    status: "deployed",
  },
  {
    id: "arrendamientos",
    badge: "Academic · Software Design",
    title: "Plataforma de Arrendamientos CR",
    description:
      "Full-stack rental property management platform for Costa Rica. Built in a Software Design course with microservices architecture. I led the mobile app (React Native); the web platform was a team effort.",
    stack: ["React 18", "TypeScript", "Tailwind CSS v4", "React Router 7", "shadcn/ui", "Vite", "React Native"],
    highlights: [
      "25 pages: public catalog, owner dashboard, tenant dashboard",
      "Role-based auth (owner / tenant) with full rental flow: listing → contract → payment → approval",
      "PDF contract generation (jsPDF) + Excel export (xlsx)",
      "CI/CD deploy via GitHub Actions to GitHub Pages",
    ],
    links: [
      { label: "Web", href: "https://github.com/Pochonski/Plataforma-de-Arrendamientos-CR" },
      { label: "Mobile", href: "https://github.com/MarcosZam13/Plataforma-Arrendamientos-Mobile" },
    ],
    status: "academic",
  },
];
