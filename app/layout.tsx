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
  title: "Vinay Kumar Reddy | Software Engineer - AI, API Integration, .NET",
  description:
    "Associate Software Engineer specializing in .NET, REST APIs, Azure OpenAI, RAG, LLMs, Microsoft Graph API, and enterprise automation.",
  keywords: ["Vinay Kumar Reddy", ".NET Developer", "AI Engineer", "REST API", "Azure OpenAI", "RAG", "C#", "Software Engineer", "Hyderabad"],
  openGraph: {
    title: "Vinay Kumar Reddy | Software Engineer - AI, .NET",
    description: "Associate Software Engineer specializing in .NET, REST APIs, Azure OpenAI, RAG, and enterprise automation.",
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
        <meta name="theme-color" content="#050d1a" />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}