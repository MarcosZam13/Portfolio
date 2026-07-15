// layout.tsx — Layout raíz: metadatos, fuentes y estructura base de la app
import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

// Fuentes self-hosted por next/font: sin request a Google, sin layout shift
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
  display: "swap",
});

const SITE_URL = "https://portfolio-one-beryl-60.vercel.app";
const TITLE = "Marcos Zamora — Full-Stack Developer";
const DESCRIPTION =
  "Full-stack developer from Costa Rica. Multi-tenant SaaS on Next.js and Supabase, freelance delivery, and AI agent workshops at COMPDES.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Marcos Zamora",
    "Full-Stack Developer",
    "Costa Rica",
    "Next.js",
    "TypeScript",
    "Supabase",
    "COMPDES",
    "AI Agents",
  ],
  authors: [{ name: "Marcos Zamora Sánchez", url: "https://github.com/MarcosZam13" }],
  creator: "Marcos Zamora Sánchez",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Marcos Zamora — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${shareTechMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
