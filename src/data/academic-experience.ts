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

export const eventeData = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop&auto=format",
    title: "Campus Party 2023",
    desc: "Palestra sobre arquitetura de microsserviços para mais de 500 pessoas em São Paulo.",
  },
  {
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&h=600&fit=crop&auto=format",
    title: "The Developers Conference 2022",
    desc: "Apresentei o projeto StreamFlow no track de backend da maior conf de devs do Brasil.",
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&h=600&fit=crop&auto=format",
    title: "GopherCon Brasil 2023",
    desc: "Workshop de performance em Go com foco em profiling e otimização de alocações.",
  },
  {
    url: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=900&h=600&fit=crop&auto=format",
    title: "DevOps Days 2022",
    desc: "Participação no painel sobre cultura DevOps em empresas de médio porte.",
  },
  {
    url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&h=600&fit=crop&auto=format",
    title: "AWS re:Invent 2021",
    desc: "Networking internacional e workshops hands-on de arquitetura cloud em Las Vegas.",
  },
  {
    url: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=900&h=600&fit=crop&auto=format",
    title: "Hackathon iFood 2022",
    desc: "1º lugar com solução de otimização de rotas de entrega implementada em Go + Redis.",
  },
];
