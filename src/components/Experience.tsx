// Experience.tsx — Sección de experiencia: actividades de comunidad y enseñanza
"use client";

import { motion } from "framer-motion";

export default function Experience(): React.ReactElement {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 2.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Header */}
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
          <span style={{ color: "var(--dim)" }}>// </span>
          02 · experience
        </div>
        <h2
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Beyond the Code
        </h2>
      </div>

      {/* Entry: Workshop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          border: "1px solid rgba(0,245,255,0.12)",
          background: "rgba(10,21,32,0.6)",
          padding: "1.8rem",
          maxWidth: "720px",
          position: "relative",
        }}
      >
        {/* Línea decorativa izquierda */}
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "1.8rem",
            bottom: "1.8rem",
            width: "2px",
            background: "var(--cyan)",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "2px",
            color: "var(--orange)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Community · Teaching
        </div>

        <div
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "0.3rem",
          }}
        >
          Git & GitHub Practical Workshop
        </div>

        <div
          style={{
            fontSize: "0.72rem",
            color: "var(--cyan)",
            marginBottom: "1rem",
            opacity: 0.7,
          }}
        >
          Tech Congress · Guatemala University
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text)",
            opacity: 0.6,
            lineHeight: 1.7,
            marginBottom: "1rem",
          }}
        >
          Designed and delivered a 4-hour hands-on workshop for university students. Covered
          real-world workflows: commits, branching, merging, version navigation, and GitHub
          collaboration via PRs. Led a team group activity simulating real team-based development.
        </p>

        {/* Tags de skills aplicadas */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {["Git", "GitHub", "Teaching", "Workshop Design", "Team Dynamics"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "1px",
                color: "var(--cyan)",
                background: "rgba(0,245,255,0.07)",
                padding: "2px 8px",
                border: "1px solid rgba(0,245,255,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
