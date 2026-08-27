import { useState } from "react";
import BackgroundFX from "./components/BackgroundFX";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectShowcase from "./components/ProjectShowcase";
import { getProject } from "./data/projects";

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const project = activeSlug ? getProject(activeSlug) : undefined;

  const openProject = (slug: string) => {
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const goHome = () => {
    setActiveSlug(null);
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <ScrollProgress />
      <Nav onHome={goHome} />

      {project ? (
        <ProjectShowcase
          project={project}
          onBack={() => {
            goHome();
            requestAnimationFrame(() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "auto" })
            );
          }}
        />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects onSelect={openProject} />
          <Certificates />
          <Contact />
        </main>
      )}

      <Footer />
    </div>
  );
}
