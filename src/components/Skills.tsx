// Skills.tsx — Sección de habilidades técnicas agrupadas por categoría
"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills(): React.ReactElement {
  return (
    <section
      id="skills"
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
          03 · skills
        </div>
        <h2
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Tech Stack
        </h2>
      </div>

      {/* Grid de categorías */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skills.map((category, i) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            style={{
              border: "1px solid rgba(0,245,255,0.1)",
              background: "rgba(10,21,32,0.5)",
              padding: "1.5rem",
            }}
          >
            {/* Label de categoría */}
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "3px",
                color: "var(--orange)",
                textTransform: "uppercase",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid rgba(0,245,255,0.1)",
              }}
            >
              {category.label}
            </div>

            {/* Items como tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {category.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.5px",
                    color: "var(--text)",
                    background: "rgba(0,245,255,0.05)",
                    padding: "3px 10px",
                    border: "1px solid rgba(0,245,255,0.12)",
                    opacity: 0.8,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
