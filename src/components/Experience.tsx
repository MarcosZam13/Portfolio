// Experience.tsx — Sección de experiencia: talleres, charlas y docencia
"use client";

import { motion } from "framer-motion";
import { talks, workshopCases, type Talk } from "@/data/speaking";

export default function Experience(): React.ReactElement {
  return (
    <section id="experience" className="section">
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
          <span style={{ color: "var(--dim)" }}>{"// "}</span>
          02 · speaking &amp; teaching
        </div>
        <h2
          style={{
            fontFamily: "var(--font-orbitron), monospace",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Beyond the Code
        </h2>
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text)",
            opacity: 0.55,
            lineHeight: 1.7,
            marginTop: "0.8rem",
            maxWidth: "620px",
          }}
        >
          Two years running as a workshop facilitator at COMPDES, the Central American
          university computing congress.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "760px" }}>
        {talks.map((talk, i) => (
          <TalkCard key={talk.id} talk={talk} index={i} />
        ))}
      </div>
    </section>
  );
}

function TalkCard({ talk, index }: { talk: Talk; index: number }): React.ReactElement {
  const accent = talk.upcoming ? "var(--green)" : "var(--cyan)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      style={{
        border: `1px solid ${talk.upcoming ? "rgba(57,255,20,0.3)" : "rgba(0,245,255,0.12)"}`,
        background: "rgba(10,21,32,0.6)",
        padding: "1.8rem",
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
          background: accent,
          opacity: 0.4,
        }}
      />

      {/* Tag + periodo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "0.5rem",
        }}
      >
        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "2px",
            color: "var(--orange)",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Dot pulsante solo en la entrada próxima/en curso */}
          {talk.upcoming && (
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 8px var(--green)",
                display: "inline-block",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
          )}
          {talk.tag}
        </div>
        <div style={{ fontSize: "0.6rem", letterSpacing: "1px", color: "var(--dim)" }}>
          {talk.period}
        </div>
      </div>

      <div
        style={{
          fontFamily: "var(--font-orbitron), monospace",
          fontSize: "clamp(0.9rem, 3vw, 1rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.3rem",
        }}
      >
        {talk.title}
      </div>

      <div style={{ fontSize: "0.72rem", color: accent, marginBottom: "1rem", opacity: 0.8 }}>
        {talk.venue}
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
        {talk.description}
      </p>

      {/* Los 4 agentes que se construyen en el taller */}
      {talk.id === "compdes-2026" && (
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "2px",
              color: "var(--dim)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            4 agents built live
          </div>
          <div className="agent-grid">
            {workshopCases.map(({ name, blurb }) => (
              <div
                key={name}
                style={{
                  border: "1px solid rgba(0,245,255,0.12)",
                  background: "rgba(5,10,14,0.5)",
                  padding: "0.6rem 0.7rem",
                }}
              >
                <div style={{ fontSize: "0.68rem", color: "var(--green)", marginBottom: "2px" }}>
                  {name}
                </div>
                <div style={{ fontSize: "0.62rem", color: "var(--text)", opacity: 0.5 }}>
                  {blurb}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags de skills aplicadas */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: talk.links.length ? "1.2rem" : 0 }}>
        {talk.tags.map((tag) => (
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

      {/* Links al repo */}
      {talk.links.length > 0 && (
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {talk.links.map(({ label, href }) => (
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
              }}
            >
              ↗ {label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
