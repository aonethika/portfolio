import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Project";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
