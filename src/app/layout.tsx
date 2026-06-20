  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import { Header } from "@/components/layout/header/header";
  import { Footer } from "@/components/layout/footer/footer";
  import { ActionButton } from "@/components/ui/action-button/action-button";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Gustavo Ventieri | Full Stack Developer & Data Analyst",
    description:
      "Full Stack Developer and Data Analyst focused on building scalable web applications and transforming complex data into actionable insights.",
    keywords: [
      "Full Stack Developer",
      "Data Analyst",
      "Software Engineer",
      "Back End Development",
      "Data Analysis",
      "Web Development",
    ],
    authors: [{ name: "Gustavo Ventieri" }],
    openGraph: {
      title: "Gustavo Ventieri | Full Stack Developer & Data Analyst",
      description:
        "Crafting robust full-stack solutions with a data-driven mindset.",
      type: "website",
    },
  };
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col ">
          <Header />
          <main className="flex-1">{children}</main>  
          <ActionButton />
          <Footer />
        </body>
      </html>
    );
  }
