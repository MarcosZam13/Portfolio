// skills.ts — Datos de habilidades técnicas agrupadas por categoría

export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL (PostgreSQL)", "Java", "Python", "C++"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Supabase", "Edge Functions", "RLS", "Supabase Auth", "Supabase Realtime"],
  },
  {
    label: "State & Forms",
    items: ["Zustand", "React Hook Form", "Zod"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Netlify", "Render", "Vercel", "Google Maps API", "Google Colab"],
  },
  {
    label: "Currently Learning",
    items: ["Advanced backend", "DB optimization", "CI/CD", "Testing", "ANTLR4"],
  },
];
