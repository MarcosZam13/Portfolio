// Hero.tsx — Sección principal: glitch name, rol con cursor, descripción, botones y status panel
"use client";

import { motion } from "framer-motion";
import StatusPanel from "./StatusPanel";

// Variantes de animación con delays escalonados (stagger)
const fadeVariant = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: "easeOut" as const },
});

export default function Hero(): React.ReactElement {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "800px" }}>
        {/* Label de introducción con prefijo > en verde */}
        <motion.div {...fadeVariant(0.3)}
          style={{
            fontSize: "0.7rem",
            letterSpacing: "4px",
            color: "var(--cyan)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          <span style={{ color: "var(--green)" }}>&gt; </span>
          Initializing system...
        </motion.div>

        {/* Nombre con efecto glitch */}
        <motion.h1 {...fadeVariant(0.5)}
          style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          <span className="glitch" data-text="MARCOS">MARCOS</span>
          <br />
          ZAMORA
        </motion.h1>

        {/* Rol con cursor parpadeante */}
        <motion.div {...fadeVariant(0.7)}
          style={{
            fontSize: "1rem",
            color: "var(--green)",
            marginBottom: "1.5rem",
          }}
        >
          {/* Comentario de código como presentación del rol */}
          // Full-Stack Developer
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--cyan)",
              marginLeft: "4px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </motion.div>

        {/* Descripción corta */}
        <motion.p {...fadeVariant(0.9)}
          style={{
            fontSize: "0.85rem",
            color: "var(--text)",
            lineHeight: 1.8,
            maxWidth: "560px",
            marginBottom: "2.5rem",
            opacity: 0.7,
          }}
        >
          Computer Engineering student at TEC, Costa Rica. I build full-stack web applications —
          from freelance client delivery to SaaS platforms in active development.
          Strong focus on TypeScript, React ecosystem, and Supabase.
        </motion.p>

        {/* Botones CTA */}
        <motion.div {...fadeVariant(1.1)}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <PrimaryButton href="#projects">View Projects</PrimaryButton>
          <SecondaryButton href="#contact">Get In Touch</SecondaryButton>
        </motion.div>
      </div>

      {/* Panel de status a la derecha */}
      <StatusPanel />
    </section>
  );
}

// Botón primario con fill de izquierda a derecha en hover
function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
  return (
    <a
      href={href}
      style={{
        padding: "0.75rem 2rem",
        background: "transparent",
        border: "1px solid var(--cyan)",
        color: "var(--cyan)",
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "0.8rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        cursor: "crosshair",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        display: "inline-block",
        transition: "color 0.3s",
        zIndex: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.color = "var(--bg)";
        const fill = el.querySelector<HTMLSpanElement>(".btn-fill");
        if (fill) fill.style.transform = "translateX(0)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.color = "var(--cyan)";
        const fill = el.querySelector<HTMLSpanElement>(".btn-fill");
        if (fill) fill.style.transform = "translateX(-100%)";
      }}
    >
      <span
        className="btn-fill"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--cyan)",
          transform: "translateX(-100%)",
          transition: "transform 0.3s ease",
          zIndex: -1,
        }}
      />
      {children}
    </a>
  );
}

// Botón secundario que cambia a naranja en hover
function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement {
  return (
    <a
      href={href}
      style={{
        padding: "0.75rem 2rem",
        background: "transparent",
        border: "1px solid var(--dim)",
        color: "var(--dim)",
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "0.8rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        cursor: "crosshair",
        textDecoration: "none",
        display: "inline-block",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "var(--orange)";
        el.style.color = "var(--orange)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "var(--dim)";
        el.style.color = "var(--dim)";
      }}
    >
      {children}
    </a>
  );
}
