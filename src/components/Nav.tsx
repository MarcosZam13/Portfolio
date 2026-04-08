// Nav.tsx — Barra de navegación fija con backdrop blur y links animados
"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);

  // Aumentar la opacidad del fondo al hacer scroll
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "1rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,245,255,0.15)",
        background: scrolled
          ? "rgba(5,10,14,0.97)"
          : "rgba(5,10,14,0.92)",
        backdropFilter: "blur(8px)",
        zIndex: 100,
        transition: "background 0.3s",
      }}
    >
      {/* Logo con punto naranja */}
      <a
        href="#"
        style={{
          fontFamily: "'Orbitron', monospace",
          fontWeight: 900,
          fontSize: "1.1rem",
          color: "var(--cyan)",
          textShadow: "0 0 20px var(--cyan)",
          letterSpacing: "3px",
          textDecoration: "none",
        }}
      >
        MZ<span style={{ color: "var(--orange)" }}>.</span>DEV
      </a>

      {/* Links con underline animado */}
      <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                color: "var(--dim)",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                position: "relative",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cyan)";
                const line = e.currentTarget.querySelector<HTMLSpanElement>(".nav-line");
                if (line) line.style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--dim)";
                const line = e.currentTarget.querySelector<HTMLSpanElement>(".nav-line");
                if (line) line.style.transform = "scaleX(0)";
              }}
            >
              {label}
              <span
                className="nav-line"
                style={{
                  position: "absolute",
                  bottom: "-3px",
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "var(--cyan)",
                  transform: "scaleX(0)",
                  transition: "transform 0.2s",
                  display: "block",
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
