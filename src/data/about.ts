import { Languages } from "./languages";

export interface AboutSection {
  title: string;
  subTitle: string;
  description1: string;
  description2: string;
  description3: string;
}

export interface JsonSpecs {
  title2: string;
  jsonOs: string;
  jsonMainStack: string;
  jsonDatabase: string;
  jsonEditor: string;
  jsonInterests: string;
  jsonStatus: string;
}

export const aboutData: Record<Languages, AboutSection> = {
  pt: {
    title: "Sobre mim",
    subTitle: "// 01. Sobre",
    description1:
      "Sou Gustavo Ventieri, desenvolvedor full-stack de São Paulo. Fora do código, sou movido por hábitos que me mantêm em evolução constante: gosto de ler, principalmente sobre tecnologia e desenvolvimento pessoal, estudo com frequência e levo a mesma disciplina da academia para os meus projetos — consistência todos os dias, mesmo quando o resultado ainda não aparece.",
    description2:
      "Hoje curso Tecnologia em Análise e Desenvolvimento de Sistemas na FATEC Zona Leste e atuo como Assistente de Desenvolvimento Júnior na InPower Br, construindo integrações entre marketplaces, SAP e um hub interno com mais de 50 páginas. Antes disso, na ETEC Zona Leste, fui campeão da feira tecnológica da escola — meu primeiro passo levando projetos além da sala de aula.",
    description3:
      "Esse caminho me levou até a 16ª FETEPS, a maior feira tecnológica do Centro Paula Souza, onde apresentei o SecondVision, um colete com visão computacional para pessoas com deficiência visual. O projeto ficou em 2º lugar entre centenas de concorrentes, garantindo investimento para o desenvolvimento da solução e uma vaga de intercâmbio internacional — resultado direto de encarar tecnologia como ferramenta para gerar impacto real.",
  },
  en: {
    title: "About Me",
    subTitle: "// 01. About",
    description1:
      "I'm Gustavo Ventieri, a full-stack developer from São Paulo. Outside of code, I'm driven by habits that keep me constantly evolving: I love reading, especially about technology and personal development, I study regularly, and I bring the same discipline from the gym into my projects — consistency every day, even when results aren't visible yet.",
    description2:
      "I'm currently studying Systems Analysis and Development at FATEC Zona Leste and working as a Junior Development Assistant at InPower Br, building integrations between marketplaces, SAP, and an internal hub with over 50 pages. Before that, at ETEC Zona Leste, I was champion of my school's technology fair — my first step toward taking projects beyond the classroom.",
    description3:
      "That path led me to the 16th FETEPS, the largest technology fair of Centro Paula Souza, where I presented SecondVision, a computer-vision vest for visually impaired people. The project placed 2nd among hundreds of competitors, earning investment to develop the solution further and a spot in an international exchange program — a direct result of treating technology as a tool for real impact.",
  },
};

export const jsonSpecsData: Record<Languages, JsonSpecs> = {
  pt: {
    title2: "// Stack Principal",
    jsonOs: "Arch Linux",
    jsonMainStack: "Java, Go, Spring Boot, TypeScript",
    jsonDatabase: "PostgreSQL, Redis, MongoDB",
    jsonEditor: "IntelliJ IDEA",
    jsonInterests: "Sistemas Distribuídos, DevOps, Design de APIs",
    jsonStatus: "Aberto a oportunidades",
  },
  en: {
    title2: "// Main Stack",
    jsonOs: "Arch Linux",
    jsonMainStack: "Java, Go, Spring Boot, TypeScript",
    jsonDatabase: "PostgreSQL, Redis, MongoDB",
    jsonEditor: "IntelliJ IDEA",
    jsonInterests: "Distributed Systems, DevOps, API Design",
    jsonStatus: "Open to work",
  },
};
