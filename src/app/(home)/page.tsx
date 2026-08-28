import { About } from "./components/about";
import { Experience } from "./components/experience";
import Hero from "./components/hero";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className="max-w-400 mx-auto items-center px-4 md:px-6  ">
      <Hero />
      <div className="section-divider my-10 md:my-0" />
      <About />
      <div className="section-divider my-10 md:my-0" />
      <Projects />
      <div className="section-divider my-10 md:my-0" />
      <Experience />
      <div className="section-divider my-10 md:my-0" />
    </div>
  );
}
