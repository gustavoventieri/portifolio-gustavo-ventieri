import { Languages } from "./languages";

export interface ExperienceType {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceSection {
  title: string;
  description: string;
  items: ExperienceType[];
}

export const experienceData: Record<Languages, ExperienceSection> = {
  pt: {
    title: "Trajetória profissional",
    description: "// 03. Profissional",
    items: [
      {
        company: "InPower Br", // TODO: preencher
        role: "Assistente de Desenvolvimento Júnior",
        period: "Fev 2026 — o momento",
        description:
          "Atuo como desenvolvedor júnior em uma função full-stack, focado na construção de aplicações web modernas e integradas. No front-end, trabalho com React, Vite, shadcn/ui e Tailwind CSS para criar interfaces responsivas e de alta performance, com forte foco em experiência do usuário. No back-end, trabalho com Java utilizando Spring e Hibernate, desenvolvendo integrações com SAP via Service Layer, bancos de dados PostgreSQL e APIs de marketplaces. Tenho experiência entregando soluções integradas, mantendo sistemas existentes e colaborando em times ágeis, sempre buscando crescimento técnico e aderência às melhores práticas de desenvolvimento.",
      },
      {
        company: "InPower Br", // TODO: preencher
        role: "Estagiário de Desenvolvimento de Software",
        period: "Out 2025 — Fev 2026",
        description: "", // TODO: preencher
      },
    ],
  },
  en: {
    title: "Professional Journey",
    description: "// 03. Professional",
    items: [
      {
        company: "InPower Br", // TODO: fill in
        role: "Junior Development Assistant",
        period: "Feb 2026 — Present",
        description:
          "I work as a Junior Developer in a full-stack role, focused on building modern and integrated web applications. On the front end, I work with React, Vite, shadcn/ui, and Tailwind CSS to create responsive, high-performance interfaces with a strong focus on user experience. On the back end, I work with Java using Spring and Hibernate, developing integrations with SAP via Service Layer, PostgreSQL databases, and marketplace APIs. I have experience delivering integrated solutions, maintaining existing systems, and collaborating within agile teams, always aiming for technical growth and adherence to best development practices.",
      },
      {
        company: "InPower Br", // TODO: fill in
        role: "Software Development Intern",
        period: "Oct 2025 — Feb 2026",
        description: "", // TODO: fill in
      },
    ],
  },
};
