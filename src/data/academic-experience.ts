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
          "Formação com foco em engenharia de software, banco de dados e arquitetura de sistemas, unindo teoria sólida à prática de desenvolvimento full-stack aplicada a projetos reais.",
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
          "Durante o curso, construí uma base sólida em programação e análise de sistemas, adquirindo conhecimento em diversas áreas da tecnologia. Aprendi linguagens de programação como JavaScript, Java, Kotlin, C++, Python, PHP e MySQL, além de linguagens de marcação e estilização como HTML e CSS. Também explorei o framework Laravel, o que me ajudou a entender o desenvolvimento web de forma mais estruturada e eficiente. Além disso, adquiri experiência em diagramação UML, incluindo diagramas de casos de uso, classes, sequência, atividades e máquina de estados. Fora da programação, estudei metodologias de testes de software e redes de computadores, abrangendo conceitos essenciais e aplicações práticas.",
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
          "Degree focused on software engineering, database design, and systems architecture, combining strong theoretical foundations with hands-on full-stack development applied to real projects.",
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
          "During this course, I developed a strong foundation in both programming and system analysis, gaining knowledge across various areas of technology. I learned programming languages such as JavaScript, Java, Kotlin, C++, Python, PHP, and MySQL, along with markup and styling languages like HTML and CSS. Additionally, I explored the Laravel framework, which helped me understand web development in a more structured and efficient way. I also gained experience in UML diagramming, including use case diagrams, class diagrams, sequence diagrams, activity diagrams, and state machine diagrams. Beyond programming, I studied software testing methodologies and computer networks, covering essential concepts and practical applications.",
      },
    ],
  },
};
