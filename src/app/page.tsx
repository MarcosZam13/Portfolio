// page.tsx — Página principal del portafolio: composición de todas las secciones
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home(): React.ReactElement {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "72px" }}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
