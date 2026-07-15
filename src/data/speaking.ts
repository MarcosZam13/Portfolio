// speaking.ts — Talleres, charlas y experiencia docente

export interface Talk {
  id: string;
  tag: string;
  title: string;
  venue: string;
  period: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  /** Marca la entrada como próxima/en curso: pinta el borde y muestra un dot pulsante */
  upcoming?: boolean;
}

export const talks: Talk[] = [
  {
    id: "compdes-2026",
    tag: "Speaking · Workshop",
    title: "AI Agents From Scratch",
    venue: "COMPDES 2026 · El Salvador",
    period: "July 2026",
    description:
      "Hands-on workshop teaching attendees to build real AI agents from scratch with OpenClaw and the OpenRouter API (gpt-4o-mini). Structured in two steps so the difference is visible live: first a bare chatbot that only talks, then a full agent that executes tools.",
    tags: ["OpenClaw", "OpenRouter", "Node.js 22", "Telegram Bot API", "Linux", "Workshop Design"],
    links: [
      { label: "Workshop repo", href: "https://github.com/MarcosZam13/taller-agentes-ia" },
    ],
    upcoming: true,
  },
  {
    id: "compdes-2025",
    tag: "Speaking · Workshop",
    title: "Git & GitHub Practical Workshop",
    venue: "COMPDES 2025 · Guatemala",
    period: "July 2025 · 4 hours",
    description:
      "Designed and delivered a 4-hour hands-on workshop for university students covering real-world workflows: commits, branching, merging, version navigation, and GitHub collaboration via pull requests. Led a group activity simulating team-based development.",
    tags: ["Git", "GitHub", "Teaching", "Workshop Design", "Team Dynamics"],
    links: [
      { label: "Practice repo", href: "https://github.com/MarcosZam13/COMPDES2025-GIT" },
    ],
  },
  {
    id: "ta-algorithms",
    tag: "Teaching · Academic",
    title: "Teaching Assistant — Algorithm Analysis",
    venue: "Tecnológico de Costa Rica",
    period: "Grading & student support",
    description:
      "Supported course delivery by grading assignments and exams, and giving feedback on algorithmic problem-solving and complexity analysis.",
    tags: ["Algorithms", "Complexity Analysis", "Mentoring"],
    links: [],
  },
];

/** Los 4 agentes que se construyen en el taller de COMPDES 2026 */
export const workshopCases: { name: string; blurb: string }[] = [
  { name: "finanzas", blurb: "Personal finance agent" },
  { name: "second-brain", blurb: "Notes & knowledge capture" },
  { name: "dev-assistant", blurb: "Developer assistant" },
  { name: "pdf-extractor", blurb: "PDF data extraction" },
];
