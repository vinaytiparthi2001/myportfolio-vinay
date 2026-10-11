import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AISection from "@/components/AISection";
import ResumeAssistant from "@/components/ResumeAssistant";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResumeAssistant />
        <div className="glow-line" />
        <About />
        <div className="glow-line" />
        <Experience />
        <div className="glow-line" />
        <Skills />
        <div className="glow-line" />
        <Projects />
        <div className="glow-line" />
        <AISection />
        <div className="glow-line" />
        <Education />
        <div className="glow-line" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
