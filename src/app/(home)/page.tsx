import { About } from "./components/about";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="max-w-400 mx-auto  items-center   px-4 md:px-6">
      <div className="w-full">
        <Hero />
      </div>
      <div className="section-divider" />
      <div className="w-full">
        <About />
      </div>
    </div>
  );
}
