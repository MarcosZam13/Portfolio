// build-cv-pdf.mjs — Imprime /cv a public/MarcosZamora_CV.pdf con Chromium headless.
// Chromium genera PDF etiquetado (estructura semántica de headings y listas), que es
// lo que aprovechan los parsers de ATS. Uso: npm run cv:pdf (con el server ya levantado)
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const URL = process.env.CV_URL ?? "http://localhost:3000/cv";
const OUT = "public/MarcosZamora_CV.pdf";

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return true;
    } catch {
      // el server todavía no responde
    }
    await sleep(500);
  }
  return false;
}

let server;
if (!(await waitForServer(URL, 1))) {
  console.log("· No hay server en :3000, levantando `next start`...");
  server = spawn("npx", ["next", "start"], { stdio: "ignore", detached: false });
  if (!(await waitForServer(URL))) {
    server?.kill();
    throw new Error(`No se pudo alcanzar ${URL}. ¿Corriste 'npm run build'?`);
  }
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(URL, { waitUntil: "networkidle" });

await page.pdf({
  path: OUT,
  format: "Letter",
  printBackground: true,
  // tagged: PDF con estructura semántica -> mejor parseo
  tagged: true,
  outline: false,
  margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
});

await browser.close();
server?.kill();

console.log(`✓ PDF generado en ${OUT}`);
