// cv/page.tsx — CV en HTML: una columna, semántico y print-friendly.
// Es la misma fuente (src/data/cv.ts) que alimenta /cv.json y el PDF.
import type { Metadata } from "next";
import Link from "next/link";
import { basics, education, experience, languages, skills, talks, type Role } from "@/data/cv";
import "./cv.css";

export const metadata: Metadata = {
  title: `${basics.name} — CV`,
  description: `Résumé of ${basics.name}: ${basics.label}`,
  alternates: { canonical: "/cv" },
};

/** schema.org Person: lo que leen crawlers, buscadores y herramientas de reclutamiento */
function personJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: basics.name,
    jobTitle: "Full-Stack Developer",
    description: basics.summary,
    email: `mailto:${basics.email}`,
    telephone: basics.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: basics.location.countryCode,
      addressLocality: basics.location.city,
    },
    url: "https://portfolio-one-beryl-60.vercel.app/cv",
    sameAs: basics.profiles.map((p) => p.url),
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
    })),
    knowsAbout: skills.flatMap((s) => s.items),
    knowsLanguage: languages.map((l) => ({
      "@type": "Language",
      name: l.language,
      alternateName: l.fluency,
    })),
  });
}

export default function CVPage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        // El JSON-LD se genera de cv.ts, no viene de input externo
        dangerouslySetInnerHTML={{ __html: personJsonLd() }}
      />

      {/* Acciones: no salen en el PDF */}
      <div className="cv-actions cv-no-print">
        <a href="/MarcosZamora_CV.pdf" download>
          ↓ Download PDF
        </a>
        <a href="/cv.json">{"{ }"} JSON Resume</a>
        <Link href="/">← Portfolio</Link>
      </div>

      <main className="cv">
        <header>
          <h1 className="cv-name">{basics.name}</h1>
          <div className="cv-label">{basics.label}</div>
          <div className="cv-contact">
            <span>{basics.location.city}</span>
            <span className="sep">|</span>
            <a href={`tel:${basics.phone.replace(/\s/g, "")}`}>{basics.phone}</a>
            <span className="sep">|</span>
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
            {basics.profiles.map((p) => (
              <span key={p.network} style={{ display: "contents" }}>
                <span className="sep">|</span>
                <a href={p.url}>{p.url.replace("https://", "")}</a>
              </span>
            ))}
          </div>
        </header>

        <section className="cv-section">
          <h2>Summary</h2>
          <p className="cv-summary">{basics.summary}</p>
        </section>

        <section className="cv-section">
          <h2>Technical Skills</h2>
          <dl className="cv-skills">
            {skills.map((group) => (
              <div key={group.label} style={{ display: "contents" }}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cv-section">
          <h2>Experience</h2>
          {experience.map((role) => (
            <EntryBlock key={role.organization + role.position} role={role} />
          ))}
        </section>

        <section className="cv-section">
          <h2>Speaking & Community</h2>
          {talks.map((talk) => (
            <article className="cv-entry" key={talk.event}>
              <div className="cv-entry-head">
                <span className="cv-entry-title">{talk.title}</span>
                <span className="cv-entry-date">{talk.period.display}</span>
              </div>
              <div className="cv-entry-sub">
                <span>{talk.event}</span>
                <span className="cv-entry-loc">{talk.location}</span>
              </div>
              <ul>
                {talk.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          {education.map((e) => (
            <article className="cv-entry" key={e.institution}>
              <div className="cv-entry-head">
                <span className="cv-entry-title">
                  {e.institution} — {e.studyType} in {e.area}
                </span>
                <span className="cv-entry-date">{e.period.display}</span>
              </div>
              <div className="cv-entry-sub">
                <span>{e.location}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="cv-section">
          <h2>Languages</h2>
          <p className="cv-langs">
            {languages.map((l) => `${l.language} (${l.fluency})`).join(" · ")}
          </p>
        </section>
      </main>
    </>
  );
}

function EntryBlock({ role }: { role: Role }): React.ReactElement {
  return (
    <article className="cv-entry">
      <div className="cv-entry-head">
        <span className="cv-entry-title">{role.organization}</span>
        <span className="cv-entry-date">{role.period.display}</span>
      </div>
      <div className="cv-entry-sub">
        <span>
          {role.position}
          {role.stack?.length ? ` | ${role.stack.join(" · ")}` : ""}
        </span>
        {role.location && <span className="cv-entry-loc">{role.location}</span>}
      </div>
      <ul>
        {role.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}
