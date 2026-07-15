// Nav.tsx — Barra de navegación fija con backdrop blur, links animados y menú móvil
"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Speaking", href: "#experience" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

const CV_HREF = "/MarcosZamora_CV.pdf";

export default function Nav(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Aumentar la opacidad del fondo al hacer scroll
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al agrandar la ventana: si no, queda abierto pero oculto por CSS
  useEffect(() => {
    const onResize = (): void => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className="nav"
      style={{
        background: scrolled ? "rgba(5,10,14,0.97)" : "rgba(5,10,14,0.92)",
      }}
    >
      <div className="nav-bar">
        {/* Logo con punto naranja */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-orbitron), monospace",
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

        {/* Links de escritorio con underline animado */}
        <ul className="nav-links">
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
          <li>
            <a href={CV_HREF} download className="nav-cv">
              CV ↓
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa: sólo visible en móvil */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Panel desplegable en móvil */}
      {open && (
        <ul className="nav-mobile">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setOpen(false)}>
                <span style={{ color: "var(--green)", marginRight: "8px" }}>&gt;</span>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={CV_HREF} download onClick={() => setOpen(false)}>
              <span style={{ color: "var(--orange)", marginRight: "8px" }}>↓</span>
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
