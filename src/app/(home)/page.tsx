import { About } from "./components/about";
import { Academic } from "./components/academic";
import { Certifications } from "./components/certifications";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import Hero from "./components/hero";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className="max-w-400 mx-auto items-center px-4 md:px-6 mt-8  ">
      <Hero />
      <div className="section-divider my-10 " />
      <About />
      <div className="section-divider my-10 " />
      <Experience />
      <div className="section-divider my-10 " />
      <Projects />
      <div className="section-divider my-10 " />
      <Academic />
      <div className="section-divider my-10 " />
      <Certifications />
      <div className="section-divider my-10 " />
      <Contact />
    </div>
  );
}
