import { Languages } from "./languages";

export interface HeroType {
  role: string;
  desc: string;
  btn01: string;
  btn02: string;
}

export const heroData: Record<Languages, HeroType> = {
  pt: {
    role: "Software Engineer",
    desc: "Construo sistemas backend robustos e interfaces que fazem sentido. Apaixonado por código limpo, arquitetura bem pensada e soluções que escalam.",
    btn01: "Ver projetos",
    btn02: "Currículo",
  },
  en: {
    role: "Software Engineer",
    desc: "I build robust backend systems and interfaces that make sense. Passionate about clean code, thoughtful architecture, and solutions that scale.",
    btn01: "View projects",
    btn02: "Resume",
  },
};


