// Contact.tsx — Sección de contacto con email, GitHub y LinkedIn
"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    label: "Email",
    value: "zamoramarcos13@gmail.com",
    href: "mailto:zamoramarcos13@gmail.com",
    prefix: "✉",
  },
  {
    label: "GitHub",
    value: "github.com/MarcosZam13",
    href: "https://github.com/MarcosZam13",
    prefix: "⌥",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marcos-zamora-sanchez",
    href: "https://linkedin.com/in/marcos-zamora-sanchez",
    prefix: "↗",
  },
];

export default function Contact(): React.ReactElement {
  return (
    <section
      id="contact"
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
          04 · contact
        </div>
        <h2
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Get In Touch
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ maxWidth: "560px" }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text)",
            opacity: 0.6,
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          Open to freelance projects, internships, and full-time opportunities.
          If you have an interesting problem to solve, let&apos;s talk.
        </p>

        {/* Links de contacto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {LINKS.map(({ label, value, href, prefix }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.2rem",
                border: "1px solid rgba(0,245,255,0.1)",
                background: "rgba(10,21,32,0.4)",
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "crosshair",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(0,245,255,0.4)";
                el.style.background = "rgba(10,21,32,0.8)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(0,245,255,0.1)";
                el.style.background = "rgba(10,21,32,0.4)";
              }}
            >
              {/* Ícono */}
              <span
                style={{
                  fontSize: "1rem",
                  color: "var(--cyan)",
                  width: "20px",
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                {prefix}
              </span>

              <div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "2px",
                    color: "var(--dim)",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text)",
                    opacity: 0.8,
                  }}
                >
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div
        style={{
          marginTop: "5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(0,245,255,0.08)",
          fontSize: "0.65rem",
          color: "var(--dim)",
          letterSpacing: "1px",
          opacity: 0.6,
        }}
      >
        Marcos Zamora Sánchez · Costa Rica · {new Date().getFullYear()}
      </div>
    </section>
  );
}
