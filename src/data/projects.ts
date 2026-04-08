// projects.ts — Datos de los proyectos del portafolio

export interface Project {
  id: string;
  badge: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  status: "active" | "deployed" | "academic";
}

export const projects: Project[] = [
  {
    id: "gymbase",
    badge: "SaaS · In Development",
    title: "GymBase / MemberBase",
    description:
      "Multi-tenant gym management SaaS built on a reusable base platform. Full admin portal (members, content, community, routines, calendar, payments) and client-facing portal with workout mode. Multi-tenancy enforced at the database layer via Supabase RLS.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Zustand", "Zod"],
    highlights: [
      "Row-Level Security with shared get_user_role() for tenant isolation",
      "Admin and client portals with 30+ screens",
      "Resolved real production issues: UTC timezone bugs, NULL payment backfill, SECURITY DEFINER on auth triggers",
      "Schema migrations and RLS policy architecture from scratch",
    ],
    links: [
      { label: "GymBase", href: "https://github.com/MarcosZam13/Gymbase" },
      { label: "MemberBase", href: "https://github.com/MarcosZam13/MemberBase" },
    ],
    status: "active",
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
      { label: "GitHub", href: "https://github.com/MarcosZam13" },
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
  {
    id: "fifa-analysis",
    badge: "Academic · Data Analysis",
    title: "FIFA Player Dataset Analysis",
    description:
      "Data analysis course project (IC-8076 at TEC). Dimensional modeling of a FIFA player dataset (~215K rows, seasons 2015–2024) with star schema design, clustering, and query optimization.",
    stack: ["Python", "SQLite", "Pandas", "Matplotlib", "Google Colab"],
    highlights: [
      "Star Schema: 5 dimension tables + 1 fact table",
      "K-Means clustering with outlier handling",
      "Index optimization benchmarks (before/after query performance)",
      "Analytical SQL queries on 215K+ rows",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/MarcosZam13" },
    ],
    status: "academic",
  },
];
