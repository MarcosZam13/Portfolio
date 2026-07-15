// opengraph-image.tsx — Preview que se ve al compartir el link (WhatsApp, LinkedIn, Slack)
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Marcos Zamora — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse no hereda las fuentes de next/font y no soporta woff2:
// se leen los TTF del repo para que el preview use la misma tipografía que el sitio.
async function loadFont(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(join(process.cwd(), "src/app/fonts", file));
  return Uint8Array.from(buf).buffer;
}

export default async function Image(): Promise<Response> {
  const [orbitron, shareTech] = await Promise.all([
    loadFont("Orbitron-Black.ttf"),
    loadFont("ShareTechMono-Regular.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050a0e",
          // Grid de neón, mismo lenguaje visual que el sitio
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          padding: "70px",
          fontFamily: "ShareTechMono",
        }}
      >
        <div style={{ display: "flex", color: "#00f5ff", fontSize: 24, letterSpacing: 6 }}>
          &gt; MZ.DEV
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
            fontFamily: "Orbitron",
            fontSize: 88,
            lineHeight: 1.08,
            letterSpacing: 2,
            marginTop: 24,
          }}
        >
          <span>MARCOS</span>
          <span>ZAMORA</span>
        </div>

        <div style={{ display: "flex", color: "#39ff14", fontSize: 30, marginTop: 28 }}>
          {"// "}Full-Stack Developer &amp; SaaS Builder
        </div>

        <div style={{ display: "flex", color: "#c8d8e4", fontSize: 24, marginTop: 14, opacity: 0.7 }}>
          Next.js · TypeScript · Supabase · Costa Rica
        </div>

        {/* Barra inferior de acento */}
        <div style={{ display: "flex", marginTop: 40 }}>
          <div style={{ display: "flex", width: 180, height: 6, background: "#00f5ff" }} />
          <div style={{ display: "flex", width: 60, height: 6, background: "#ff6b00" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Orbitron", data: orbitron, style: "normal", weight: 900 },
        { name: "ShareTechMono", data: shareTech, style: "normal", weight: 400 },
      ],
    }
  );
}
