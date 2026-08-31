import { Languages } from "./languages";
import { ExperienceSection } from "./profissional-experience";

export const academicData: Record<Languages, ExperienceSection> = {
  pt: {
    title: "Trajetória acadêmica",
    description: "// 04. Acadêmico",
    items: [
      {
        company: "FATEC Zona Leste",
        role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "Jan 2025 — Dez 2026 · Em andamento",
        description:
          "Aprofundei o uso de Java, Spring Boot, React, TypeScript, React Native e GitHub Actions em projetos práticos, com foco em arquitetura de sistemas e boas práticas de engenharia de software. Desenvolvi um sistema de controle de HAEs adotado por diversas unidades da FATEC, aplicando o ciclo completo de desenvolvimento, do levantamento de requisitos à entrega.",
      },
      {
        company: "Wizard by Pearson",
        role: "Inglês",
        period: "Mar 2021 — Mar 2026 · Finalizado",
        description:
          "Formação contínua em inglês, com foco em fluência para leitura de documentação técnica, comunicação em times internacionais e contextos profissionais de tecnologia.",
      },
      {
        company: "ETEC Zona Leste",
        role: "Ensino Técnico Integrado ao Médio, Desenvolvimento de Sistemas - AMS",
        period: "Mar 2022 — Dez 2024 · Finalizado",
        description:
          "Construí minha base em programação, lógica e front-end, aprendendo a estruturar código, projetar arquitetura de sistemas e documentar soluções. Trabalhei com Java, PHP, Laravel, MySQL, SQL Server, JavaScript, HTML, CSS e React, além de diagramação UML, testes de software e redes de computadores.",
      },
    ],
  },
  en: {
    title: "Academic Journey",
    description: "// 04. Academic",
    items: [
      {
        company: "FATEC Zona Leste",
        role: "Technologist, Systems Analysis and Development",
        period: "Jan 2025 — Dec 2026 · Ongoing",
        description:
          "Deepened my use of Java, Spring Boot, React, TypeScript, React Native, and GitHub Actions in hands-on projects, with a focus on systems architecture and software engineering practices. I developed a HAE (extracurricular activity hours) control system now adopted by multiple FATEC units, applying the full development cycle from requirements gathering to delivery.",
      },
      {
        company: "Wizard by Pearson",
        role: "English Language",
        period: "Mar 2021 — Mar 2026 · Completed",
        description:
          "Ongoing English language training, focused on fluency for reading technical documentation, communicating with international teams, and professional tech contexts.",
      },
      {
        company: "ETEC Zona Leste",
        role: "Technical High School, Systems Development - AMS",
        period: "Mar 2022 — Dec 2024 · Completed",
        description:
          "Built my foundation in programming, logic, and front-end development, learning to structure code, design systems architecture, and document solutions. I worked with Java, PHP, Laravel, MySQL, SQL Server, JavaScript, HTML, CSS, and React, along with UML diagramming, software testing, and computer networks.",
      },
    ],
  },
};

export interface EventItem {
  url: string;
  title: string;
  desc: string;
}

export const eventeData: EventItem[] = [
  {
    url: "/assets/feira-tec.jpeg",
    title: "Oficina de Android Studio e Firebase",
    desc: "Ainda no ensino médio, ministrei como voluntário uma oficina de Android Studio (Kotlin) e Firebase Firestore na FATEC Zona Leste.",
  },
  {
    url: "/assets/ibm.jpeg",
    title: "Apresentação do TCC — Second Vision",
    desc: "Apresentei em inglês, nas instalações da IBM, o Second Vision: um sistema de auxílio à autonomia para pessoas com deficiência visual em áreas metropolitanas, com o time Nickolas, Pedro e Tiago.",
  },
  {
    url: "/assets/feteps.jpeg",
    title: "Feira Tecnológica do Centro Paula Souza",
    desc: "Levei o Second Vision à Feteps ao lado do Tiago e do Pedro e conquistamos o 2º lugar no ranking geral — fomos contemplados com um intercâmbio para o Reino Unido.",
  },
  {
    url: "/assets/sao-paulo-innovation.jpeg",
    title: "São Paulo Innovation Week",
    desc: "Representei o Centro Paula Souza na SP Innovation Week no stand do Governo Federal (e-Gov), apresentando o Second Vision e sua proposta de detecção de objetos e leitura de placas para pessoas com deficiência visual.",
  },
];
