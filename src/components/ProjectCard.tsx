// ProjectCard.tsx — Card individual de proyecto con hover effects y links a GitHub
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(0,245,255,0.4)" : "rgba(0,245,255,0.12)"}`,
        background: "rgba(10,21,32,0.6)",
        padding: "1.8rem",
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.3s, transform 0.3s",
        cursor: "crosshair",
      }}
    >
      {/* Línea superior que se expande en hover */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.4s ease",
          display: "block",
        }}
      />

      {/* Badge de categoría */}
      <div
        style={{
          display: "inline-block",
          fontSize: "0.6rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "var(--orange)",
          border: "1px solid rgba(255,107,0,0.3)",
          padding: "2px 8px",
          marginBottom: "1rem",
        }}
      >
        {project.badge}
      </div>

      {/* Título del proyecto */}
      <div
        style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "1rem",
          color: "#fff",
          marginBottom: "0.6rem",
          fontWeight: 700,
        }}
      >
        {project.title}
      </div>

      {/* Descripción */}
      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--text)",
          opacity: 0.6,
          lineHeight: 1.7,
          marginBottom: "1rem",
        }}
      >
        {project.description}
      </p>

      {/* Highlights en lista compacta */}
      <ul
        style={{
          fontSize: "0.7rem",
          color: "var(--text)",
          opacity: 0.5,
          lineHeight: 1.6,
          marginBottom: "1.2rem",
          paddingLeft: "1rem",
          listStyle: "none",
        }}
      >
        {project.highlights.map((h) => (
          <li key={h} style={{ marginBottom: "0.2rem" }}>
            <span style={{ color: "var(--green)", marginRight: "6px" }}>›</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "0.6rem",
              letterSpacing: "1px",
              color: "var(--cyan)",
              background: "rgba(0,245,255,0.07)",
              padding: "2px 8px",
              border: "1px solid rgba(0,245,255,0.15)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links a GitHub / Live */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {project.links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "1px",
              color: "var(--cyan)",
              textDecoration: "none",
              textTransform: "uppercase",
              opacity: 0.8,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
          >
            ↗ {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
