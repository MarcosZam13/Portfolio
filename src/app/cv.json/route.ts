// cv.json/route.ts — El CV en formato JSON Resume v1 (https://jsonresume.org/schema).
// Es el formato que saben leer las herramientas de reclutamiento y los importadores.
// Se genera de la misma fuente que /cv y que el PDF: src/data/cv.ts
import { basics, education, experience, languages, skills, talks } from "@/data/cv";

// El contenido sale de un módulo estático: se prerenderiza en el build en vez de
// resolverse por request (los route handlers son dinámicos por defecto).
export const dynamic = "force-static";

/** Fecha de la última edición del contenido del CV (src/data/cv.ts) */
const CV_LAST_MODIFIED = "2026-07-15";

/** JSON Resume espera YYYY-MM-DD; la fuente guarda YYYY-MM */
function isoDay(month: string): string {
  return `${month}-01`;
}

export function GET(): Response {
  const resume = {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: basics.name,
      label: basics.label,
      email: basics.email,
      phone: basics.phone,
      url: "https://portfolio-one-beryl-60.vercel.app",
      summary: basics.summary,
      location: {
        city: basics.location.city,
        countryCode: basics.location.countryCode,
      },
      profiles: basics.profiles.map((p) => ({
        network: p.network,
        username: p.username,
        url: p.url,
      })),
    },

    work: experience.map((role) => ({
      name: role.organization,
      position: role.position,
      location: role.location,
      url: role.url,
      startDate: isoDay(role.period.start),
      // Sin endDate = puesto en curso, que es como lo interpretan los parsers
      ...(role.period.end ? { endDate: isoDay(role.period.end) } : {}),
      highlights: role.highlights,
      keywords: role.stack ?? [],
    })),

    education: education.map((e) => ({
      institution: e.institution,
      area: e.area,
      studyType: e.studyType,
      startDate: isoDay(e.period.start),
      endDate: isoDay(e.period.end),
    })),

    // Los talleres van como proyectos de tipo workshop: tienen fecha, entidad y repo
    projects: talks.map((t) => ({
      name: t.title,
      description: t.highlights[0],
      highlights: t.highlights,
      startDate: isoDay(t.period.start),
      endDate: isoDay(t.period.end ?? t.period.start),
      url: t.url,
      entity: t.event,
      type: "workshop",
      roles: ["Speaker", "Workshop Facilitator"],
    })),

    skills: skills.map((group) => ({
      name: group.label,
      keywords: group.items,
    })),

    languages: languages.map((l) => ({
      language: l.language,
      fluency: l.fluency,
    })),

    meta: {
      canonical: "https://portfolio-one-beryl-60.vercel.app/cv.json",
      version: "v1.0.0",
      // Fecha del contenido del CV, no de la request: actualizar al editar cv.ts
      lastModified: CV_LAST_MODIFIED,
    },
  };

  return Response.json(resume, {
    headers: {
      // Que cualquier herramienta lo pueda leer desde otro origen
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
