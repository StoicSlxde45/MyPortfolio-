import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Skills />
      <Education />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
