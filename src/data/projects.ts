import { Languages } from "./languages";

export interface ProjectsSectionType {
  s3Title: string;
  s3Github: string;
  s3SubTitle: string;
}

export const projectsSectionData: Record<Languages, ProjectsSectionType> = {
  pt: {
    s3Title: "Projetos",
    s3Github: "Ver no GitHub",
    s3SubTitle: "// 02. Artefatos & Projetos",
  },
  en: {
    s3Title: "Projects",
    s3Github: "View on GitHub",
    s3SubTitle: "// 02. Artifacts & Projects",
  },
};

// Dados que não mudam entre idiomas
export interface ProjectMeta {
  id: string;
  repo: string;
  demo: string;
  color: string;
  status: "developed" | "developing";
}

export const projectsMeta: ProjectMeta[] = [
  {
    id: "financial-application",
    repo: "https://github.com/gustavoventieri/financial-application",
    demo: "#",
    color: "#059669",
    status: "developing",
  },
  {
    id: "checkdocsai",
    repo: "https://github.com/gustavoventieri/CheckDocsAI",
    demo: "#",
    color: "#7c3aed",
    status: "developed",
  },
  {
    id: "front-haes",
    repo: "https://github.com/gustavoventieri/projeto-controle-de-HAEs",
    demo: "#",
    color: "#dc2626",
    status: "developed",
  },
  {
    id: "linkline",
    repo: "https://github.com/gustavoventieri/LinkLine",
    demo: "#",
    color: "#2563eb",
    status: "developed",
  },

  {
    id: "mirai",
    repo: "https://github.com/gustavoventieri/Mirai",
    demo: "#",
    color: "#0891b2",
    status: "developed",
  },
  {
    id: "second-vision",
    repo: "https://github.com/gustavoventieri/Second-Vision",
    demo: "#",
    color: "#65a30d",
    status: "developed",
  },
  {
    id: "archwizard",
    repo: "https://github.com/gustavoventieri/ArchWizard",
    demo: "#",
    color: "#c026d3",
    status: "developed",
  },
];

// Dados traduzidos
export interface ProjectTranslated {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const projectsData: Record<Languages, ProjectTranslated[]> = {
  pt: [
    {
      id: "financial-application",
      title: "Aplicação Financeira",
      description:
        "Aplicação financeira desenvolvida para gerenciamento e acompanhamento de informações financeiras pessoais, utilizando uma arquitetura moderna e escalável.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
    },

    {
      id: "second-vision",
      title: "Second Vision",
      description:
        "Dispositivo microcomputador projetado para ajudar pessoas com deficiência visual a detectar objetos potencialmente perigosos em ambientes metropolitanos.",
      tags: [
        "Embedded Systems",
        "Python",
        "TypeScript",
        "React Native",
        "OpenCV",
      ],
    },

    {
      id: "checkdocsai",
      title: "CheckDocsAI",
      description:
        "Plataforma de análise de documentos segura e escalável, construída com Java, Spring Boot, PostgreSQL, Python, FastAPI, LangChain, React e Material UI. Projetada para análise rápida e precisa de documentos.",
      tags: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "LangChain",
        "React",
        "TypeScript",
      ],
    },

    {
      id: "front-haes",
      title: "Controle de HAEs Fatec ZL",
      description:
        "Sistema para digitalizar e otimizar a gestão das Horas de Atividades Específicas (HAEs), simplificando o fluxo de solicitação e avaliação.",
      tags: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "TypeScript",
        "React",
        "Material UI",
        "Render",
      ],
    },

    {
      id: "linkline",
      title: "LinkLine",
      description:
        "Sistema de chat em tempo real seguro e escalável, construído com Java, Spring Boot, TypeScript, React, Docker e PostgreSQL. Desenvolvido para uso profissional, educacional e social.",
      tags: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "React",
        "Docker",
        "PostgreSQL",
      ],
    },

    {
      id: "mirai",
      title: "Mirai",
      description:
        "Aplicativo móvel para ajudar inovadores, pesquisadores e gerentes de projeto a avaliar o Nível de Maturidade Tecnológica (TRL) de seus projetos.",
      tags: ["TypeScript", "React Native", "Expo"],
    },

    {
      id: "archwizard",
      title: "ArchWizard",
      description:
        "Script interativo para instalação automatizada do Arch Linux. Permite selecionar o disco, definir nomes e configurar o sistema de forma rápida e fácil.",
      tags: ["Shell", "Linux"],
    },
  ],

  en: [
    {
      id: "financial-application",
      title: "Financial Application",
      description:
        "A financial application designed to manage and track personal financial information using a modern and scalable architecture.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
    },
    {
      id: "second-vision",
      title: "Second Vision",
      description:
        "A microcomputer device designed to help visually impaired individuals detect potentially dangerous objects in metropolitan environments.",
      tags: [
        "Embedded Systems",
        "Python",
        "TypeScript",
        "React Native",
        "OpenCV",
      ],
    },

    {
      id: "checkdocsai",
      title: "CheckDocsAI",
      description:
        "Secure and scalable document analysis platform built with Java, Spring Boot, PostgreSQL, Python, FastAPI, LangChain, React, and Material UI. Designed for fast and accurate document analysis.",
      tags: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "LangChain",
        "React",
        "TypeScript",
      ],
    },

    {
      id: "front-haes",
      title: "Fatec ZL HAE Management",
      description:
        "A system to digitize and streamline the management of Specific Activity Hours (HAEs), simplifying the entire request and evaluation workflow.",
      tags: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "TypeScript",
        "React",
        "Material UI",
        "Render",
      ],
    },

    {
      id: "linkline",
      title: "LinkLine",
      description:
        "Secure and scalable real-time chat system built with Java, Spring Boot, TypeScript, React, Docker, and PostgreSQL. Designed for professional, educational, and social use.",
      tags: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "React",
        "Docker",
        "PostgreSQL",
      ],
    },

    {
      id: "mirai",
      title: "Mirai",
      description:
        "A mobile app designed to help innovators, researchers, and project managers assess the Technology Readiness Level (TRL) of their projects.",
      tags: ["TypeScript", "React Native", "Expo"],
    },

    {
      id: "archwizard",
      title: "ArchWizard",
      description:
        "An interactive script for automated Arch Linux installation. Lets you select the disk, set names, and configure the system quickly and easily.",
      tags: ["Shell", "Linux"],
    },
  ],
};
