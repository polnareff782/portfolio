'use client';
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal"; // Importez votre composant


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Terminal/>
      <Footer />
    </div>
  );
}
