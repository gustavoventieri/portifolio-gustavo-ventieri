import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";

export default function Home() {
  return (
    <div className="container mx-auto  px-8">
      <section id="about" className="md:pt-28 pt-15 pb-15 md:pb-20 w-full">
        <About />
      </section>

      <section
        id="experience"
        className="md:pt-28 pt-15 pb-15 md:pb-20 w-ful"
        style={{ borderTop: "1px solid rgba(34,211,238,0.08)" }}
      >
        <Experience />
      </section>

      <section
        id="contact"
        className="md:pt-28 pt-15 pb-15 md:pb-20 w-full"
        style={{ borderTop: "1px solid rgba(52,211,153,0.12)" }}
      >
        <Contact />
      </section>
    </div>
  );
}
