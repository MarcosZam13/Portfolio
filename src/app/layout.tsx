// layout.tsx — Layout raíz: metadatos, fuentes y estructura base de la app
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Zamora — Full-Stack Developer",
  description:
    "Computer Engineering student at TEC. Building SaaS platforms and delivering production-ready software. TypeScript, React, Supabase.",
  openGraph: {
    title: "Marcos Zamora — Full-Stack Developer",
    description: "Full-stack developer from Costa Rica. TypeScript · React · Supabase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
