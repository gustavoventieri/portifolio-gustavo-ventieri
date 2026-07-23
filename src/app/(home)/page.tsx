import { About } from "./components/about";
import { Certificates } from "./components/certificates";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";

export default function Home() {
  return (
    <div className=" px-6 lg:px-28 md:px-20 ">
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
        id="certifications"
        className="md:pt-28 pt-15 pb-15 md:pb-20 w-full"
        style={{ borderTop: "1px solid rgba(1,211,153,0.12)" }}
      >
        <Certificates />
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
