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
        company: "InPower Br",
        role: "Assistente de Desenvolvimento Júnior",
        period: "Fev 2026 — o momento",
        description:
          "Como efetivo, desenvolvi uma integração conciliadora entre marketplaces (Mercado Livre, Shopee e Amazon) e o SAP, automatizando o processo de contas a receber da empresa. Também estruturei uma base no SAP do zero, realizando configurações e DTWs para alimentá-la, além de dar continuidade ao hub centralizador de processos, integrado a SAP, SEFAZ e marketplaces, contribuindo com novas funcionalidades e manutenção das mais de 50 páginas da aplicação.",
      },
      {
        company: "InPower Br",
        role: "Estagiário de Desenvolvimento de Software",
        period: "Out 2025 — Fev 2026",
        description:
          "Atuei no desenvolvimento full-stack de um hub centralizador de processos com mais de 50 páginas, integrado a SAP, SEFAZ e outros sistemas, dando suporte à operação da empresa. Desenvolvi integrações de estoque e nota fiscal com o Mercado Livre, trabalhando junto ao time em soluções que conectavam diferentes sistemas internos e externos.",
      },
    ],
  },
  en: {
    title: "Professional Journey",
    description: "// 03. Professional",
    items: [
      {
        company: "InPower Br",
        role: "Junior Development Assistant",
        period: "Feb 2026 — Present",
        description:
          "As a full-time employee, I built a reconciliation integration connecting marketplaces (Mercado Livre, Shopee, and Amazon) with SAP, automating the company's accounts receivable process. I also set up a SAP base from scratch, handling configurations and DTWs to populate it, and continued developing the process-centralizing hub, integrated with SAP, SEFAZ, and marketplaces, contributing new features and maintaining its 50+ pages.",
      },
      {
        company: "InPower Br",
        role: "Software Development Intern",
        period: "Oct 2025 — Feb 2026",
        description:
          "I worked on full-stack development of a process-centralizing hub with over 50 pages, integrated with SAP, SEFAZ, and other systems, supporting the company's daily operations. I developed inventory and invoice integrations with Mercado Livre, collaborating with the team on solutions connecting different internal and external systems.",
      },
    ],
  },
};
