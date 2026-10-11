import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vinay Kumar Reddy | Software Engineer - AI, RAG, Prompting & .NET",
  description:
    "Associate Software Engineer specializing in LLMs, RAG architectures, prompt engineering, Azure OpenAI, .NET REST APIs, Cosmos DB vector search, and enterprise automation.",
  keywords: [
    "Vinay Kumar Reddy",
    "LLM Engineer",
    "RAG",
    "Prompt Engineering",
    "Azure OpenAI",
    "Cosmos DB Vector Search",
    ".NET Developer",
    "C#",
    "REST APIs",
    "Software Engineer",
    "Hyderabad"
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vinay Kumar Reddy | Software Engineer - LLMs, RAG & .NET",
    description: "Associate Software Engineer specializing in LLMs, RAG architectures, prompt engineering, Azure OpenAI, and .NET enterprise workflows.",
    type: "website",
    locale: "en_IN",
  },
  authors: [{ name: "Vinay Kumar Reddy" }],
  creator: "Vinay Kumar Reddy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#0b0c10" />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}