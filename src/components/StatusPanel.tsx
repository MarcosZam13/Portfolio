// StatusPanel.tsx — Panel lateral del hero con indicadores de estado del sistema
"use client";

import { motion } from "framer-motion";

interface StatusEntry {
  label: string;
  value: string;
  dotColor: "green" | "orange";
}

const STATUS_ENTRIES: StatusEntry[] = [
  { label: "GymBase SaaS",   value: "ACTIVE",   dotColor: "green" },
  { label: "CaneleApp",      value: "DEPLOYED",  dotColor: "green" },
  { label: "TEC · CS Degree",value: "IN PROG",   dotColor: "orange" },
  { label: "Open to work",   value: "TRUE",      dotColor: "green" },
];

export default function StatusPanel(): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
      style={{
        position: "absolute",
        right: "2.5rem",
        top: "50%",
        transform: "translateY(-50%)",
        border: "1px solid rgba(0,245,255,0.2)",
        padding: "1.5rem",
        background: "rgba(10,21,32,0.8)",
        minWidth: "220px",
      }}
    >
      {/* Título del panel */}
      <div
        style={{
          fontSize: "0.65rem",
          letterSpacing: "3px",
          color: "var(--cyan)",
          textTransform: "uppercase",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(0,245,255,0.15)",
        }}
      >
        System Status
      </div>

      {/* Filas de estado */}
      {STATUS_ENTRIES.map(({ label, value, dotColor }) => (
        <div
          key={label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.72rem",
            marginBottom: "0.6rem",
            color: "var(--text)",
            opacity: 0.8,
            alignItems: "center",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Dot pulsante */}
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: dotColor === "green" ? "var(--green)" : "var(--orange)",
                boxShadow: `0 0 8px ${dotColor === "green" ? "var(--green)" : "var(--orange)"}`,
                display: "inline-block",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            {label}
          </span>
          <span
            style={{
              color: dotColor === "green" ? "var(--green)" : "var(--orange)",
              marginLeft: "1rem",
            }}
          >
            {value}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
