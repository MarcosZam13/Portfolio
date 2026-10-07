// skills.ts — Datos de habilidades técnicas agrupadas por categoría

export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
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
    items: ["Node.js", "Supabase", "Edge Functions", "RLS", "Supabase Auth", "Supabase Realtime", "REST APIs"],
  },
  {
    label: "Data & State",
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
  {
    label: "Currently Learning",
    items: ["CI/CD", "Docker", "Ansible", "Observability", "DB optimization"],
  },
];
