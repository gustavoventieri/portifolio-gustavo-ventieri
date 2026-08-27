import { About } from "./components/about";
import Hero from "./components/hero";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className="max-w-400 mx-auto px-4 md:px-6">
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
    </div>
  );
}
