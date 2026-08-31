import { Languages } from "./languages";
import type { LucideIcon } from "lucide-react";
import {
  Workflow,
  Code2,
  Database,
  Globe,
  Cloud,
  ShieldCheck,
  Compass,
  FileText,
} from "lucide-react";

export interface CertificationItem {
  date: string;
  title: string;
  institution: string;
  description?: string;
  current?: boolean;
  icon: LucideIcon;
}

export interface CertificationsSection {
  title: string;
  description: string;
  items: CertificationItem[];
}

export const certifications: Record<Languages, CertificationsSection> = {
  pt: {
    title: "Certificações",
    description: "// 05. Certificações",
    items: [
      {
        date: "2026",
        title: "Gestão Ágil com Scrum COMPLETO",
        institution: "Udemy",
        current: true,
        icon: Workflow,
      },
      {
        date: "2026",
        title: "Aprenda Golang do Zero! Desenvolva uma APLICAÇÃO COMPLETA!",
        institution: "Udemy",
        current: false,
        icon: Code2,
      },
      {
        date: "2025",
        title: "SQL para Análise de Dados: Do básico ao avançado",
        institution: "Udemy",
        current: false,
        icon: Database,
      },
      {
        date: "2025",
        title: "TOEIC Listening & Reading (780/990 - B2)",
        institution: "ETS",
        current: false,
        icon: Globe,
      },
      {
        date: "2024",
        title: "Arquitetura com Spring Boot e Cloud (AWS)",
        institution: "DIO & Cognizant",
        current: false,
        icon: Cloud,
      },
      {
        date: "2024",
        title: "Fundamentos de Cibersegurança",
        institution: "IBM",
        current: false,
        icon: ShieldCheck,
      },
      {
        date: "2024",
        title: "Agile Explorer",
        institution: "IBM",
        current: false,
        icon: Compass,
      },
      {
        date: "2024",
        title: "Certificado de Publicação de Artigo",
        institution: "FATEC Zona Leste",
        description:
          "Second Vision: Sistema de Assistência à Autonomia para Pessoas com Deficiência Visual em Áreas Metropolitanas",
        current: false,
        icon: FileText,
      },
    ],
  },
  en: {
    title: "Certifications",
    description: "// 05. Certifications",
    items: [
      {
        date: "2026",
        title: "Complete Agile Management with Scrum",
        institution: "Udemy",
        current: true,
        icon: Workflow,
      },
      {
        date: "2026",
        title: "Learn Golang from Scratch! Build a Complete Application!",
        institution: "Udemy",
        current: false,
        icon: Code2,
      },
      {
        date: "2025",
        title: "SQL for Data Analysis: From Beginner to Advanced",
        institution: "Udemy",
        current: false,
        icon: Database,
      },
      {
        date: "2025",
        title: "TOEIC Listening & Reading (780/990 - B2)",
        institution: "ETS",
        current: false,
        icon: Globe,
      },
      {
        date: "2024",
        title: "Spring Boot Architecture & Cloud (AWS)",
        institution: "DIO & Cognizant",
        current: false,
        icon: Cloud,
      },
      {
        date: "2024",
        title: "Cybersecurity Fundamentals",
        institution: "IBM",
        current: false,
        icon: ShieldCheck,
      },
      {
        date: "2024",
        title: "Agile Explorer",
        institution: "IBM",
        current: false,
        icon: Compass,
      },
      {
        date: "2024",
        title: "Research Publication Certificate",
        institution: "FATEC Zona Leste",
        description:
          "Second Vision: Autonomy Assistance System for the Visually Impaired in Metropolitan Areas",
        current: false,
        icon: FileText,
      },
    ],
  },
};
