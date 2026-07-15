// Projects.tsx — Sección de proyectos: grid de cards con animación al entrar en viewport
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects(): React.ReactElement {
  return (
    <section id="projects" className="section">
      {/* Header de sección con numeración estilo código */}
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "4px",
            color: "var(--cyan)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ color: "var(--dim)" }}>{"// "}</span>
          01 · projects
        </div>
        <h2
          style={{
            fontFamily: "var(--font-orbitron), monospace",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Selected Work
        </h2>
      </div>

      {/* Grid de cards */}
      <div className="card-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
