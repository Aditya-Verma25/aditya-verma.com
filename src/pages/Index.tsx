import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Research } from "@/components/portfolio/Research";
import { Community } from "@/components/portfolio/Community";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Aditya Verma — Software Engineer & Backend Builder";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Aditya Verma — CS @ University of Maryland. Software engineer building backend systems, full-stack applications, and AI integrations. Open to Summer 2027 internships.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Education />
      <Research />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
