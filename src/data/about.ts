import { Languages } from "./languages";

export interface AboutType {
  title: string;
  subTitle: string;
  description1: string;
  description2: string;
  description3: string;
  title2: string;
  jsonStatus: string;

  jsonOs: string;
  jsonMainStack: string;
  jsonDatabase: string;
  jsonEditor: string;
  jsonInterests: string;
}

export const aboutData: Record<Languages, AboutType> = {
  pt: {
    title: "Sobre mim",
    subTitle: "// 01. Sobre",

    description1:
      "Sou um engenheiro de software com foco em desenvolvimento backend e experiência em aplicações full-stack. Gosto de transformar problemas de negócio em soluções bem estruturadas, buscando sempre escrever código limpo, organizado e de fácil manutenção.",

    description2:
      "Tenho experiência com Java, Spring Boot, React, TypeScript, bancos de dados e integrações com APIs, além de trabalhar com conceitos como Clean Architecture, Hexagonal Architecture e Domain-Driven Design. Busco entender não apenas como implementar uma solução, mas também como construir sistemas escaláveis e sustentáveis.",

    description3:
      "Acredito que evoluir como desenvolvedor é um processo constante. Por isso, estou sempre estudando novas tecnologias, aprimorando meus conhecimentos em arquitetura e engenharia de software e buscando novos desafios que me permitam crescer profissionalmente e criar soluções que realmente gerem valor.",

    title2: "// Stack Principal",

    jsonOs: "macOS / Arch Linux",
    jsonMainStack: "Java, Go, Spring Boot, TypeScript",
    jsonDatabase: "PostgreSQL, Redis, MongoDB",
    jsonEditor: "Neovim / IntelliJ IDEA",
    jsonInterests: "Sistemas Distribuidos, DevOps, Design de API",
    jsonStatus: "Aberto a trabalho",
  },

  en: {
    title: "About me",
    subTitle: "// 01. About",

    description1:
      "I am a software engineer focused on backend development with experience in full-stack applications. I enjoy turning business problems into well-structured solutions, always striving to write clean, organized, and maintainable code.",

    description2:
      "I have experience with Java, Spring Boot, React, TypeScript, databases, and API integrations, as well as concepts such as Clean Architecture, Hexagonal Architecture, and Domain-Driven Design. I aim to understand not only how to implement a solution, but also how to build scalable and sustainable systems.",

    description3:
      "I believe that growing as a developer is a continuous process. That is why I am always studying new technologies, improving my knowledge of software architecture and engineering, and looking for new challenges that allow me to grow professionally and create solutions that deliver real value.",

    title2: "// Main Stack",

    jsonOs: "macOS / Arch Linux",
    jsonMainStack: "Java, Go, Spring Boot, TypeScript",
    jsonDatabase: "PostgreSQL, Redis, MongoDB",
    jsonEditor: "Neovim / IntelliJ IDEA",
    jsonInterests: "Distributed Systems, DevOps, API Design",
    jsonStatus: "Open to work",
  },
};
