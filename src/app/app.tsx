import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gustavo Ventieri",
  url: "https://www.gustavoventieri.com.br",
  image: "https://www.gustavoventieri.com.br/assets/android-chrome-512x512.png",
  logo: "https://www.gustavoventieri.com.br/assets/android-chrome-512x512.png",
  jobTitle: "Software Engineer",
  description:
    "Engenheiro de software com foco no desenvolvimento de aplicações escaláveis e na entrega de projetos.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  worksFor: {
    "@type": "Organization",
    name: "InPower Br",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Go",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Full Stack Development",
  ],
  sameAs: [
    "https://github.com/gustavoventieri",
    "https://www.linkedin.com/in/gustavo-ventieri",
  ],
};

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col " suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="flex-1">{children}</main>
          <MobileNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};
