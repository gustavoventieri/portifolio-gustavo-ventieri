import { Languages } from "./languages";

export interface TerminalType {
  output: string[];
}

export const terminalData: Record<Languages, TerminalType> = {
  pt: {
    output: [
      "Gustavo Ventieri — Software Engineer",
      "Java, Spring Boot, Go, React, TypeScript,\nPostgreSQL, Docker, Kubernetes",
      "Sistemas Distribuídos, Design de API, \nOpen Source & Arquitetura Limpa",
      "Disponível para novos projetos",
    ],
  },
  en: {
    output: [
      "Gustavo Ventieri — Software Engineer",
      "Java, Spring Boot, Go, React, TypeScript, \nPostgreSQL, Docker, Kubernetes",
      "Distributed Systems, API Design, \nOpen Source & Clean Architecture",
      "Available for new projects",
    ],
  },
};

export const TERMINAL_CMDS = [
  "whoami",
  "cat skills.sh",
  "cat interests.sh",
  "echo $STATUS",
];
export const TERMINAL_DELAYS = [600, 800, 700, 600];
