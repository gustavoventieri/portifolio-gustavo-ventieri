import { Languages } from "./languages";

export interface TerminalType {
  output: string[];
}

export const terminalData: Record<Languages, TerminalType> = {
  pt: {
    output: [
      "Gustavo Ventieri — Software Engineer",
      "Java, Spring Boot, Go, Next.js, TypeScript,\nPostgreSQL, Docker, Kubernetes",
      "Sistemas Distribuídos, Design de API, \nOpen Source & Arquitetura Limpa",
      "github: github.com/gustavoventieri\nemail: contato.gustavoventieri@gmail.com",
      "Aberto a trabalho",
    ],
  },
  en: {
    output: [
      "Gustavo Ventieri — Software Engineer",
      "Java, Spring Boot, Go, Next.js, TypeScript, \nPostgreSQL, Docker, Kubernetes",
      "Distributed Systems, API Design, \nOpen Source & Clean Architecture",
      "github: github.com/gustavoventieri\nemail: contato.gustavoventieri@gmail.com",
      "Open to work",
    ],
  },
};

export const TERMINAL_CMDS = [
  "whoami",
  "cat skills.sh",
  "cat interests.sh",
  "cat contact.sh | grep -E 'github|email'",
  "echo $STATUS",
];
export const TERMINAL_DELAYS = [600, 800, 700, 700, 600];
