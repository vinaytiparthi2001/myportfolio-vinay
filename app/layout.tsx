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
  title: "Vinay Kumar Reddy | Associate Software Engineer",
  description:
    "Associate Software Engineer working with .NET, REST APIs, Azure services, AI-powered workflows, and third-party integrations.",
  keywords: [
    "Vinay Kumar Reddy",
    "Software Engineer",
    ".NET Developer",
    "C#",
    "REST APIs",
    "Azure",
    "Azure DevOps",
    "Azure AI Foundry",
    "Hyderabad"
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vinay Kumar Reddy | Associate Software Engineer",
    description: "Associate Software Engineer working with .NET, REST APIs, Azure services, AI-powered workflows, and third-party integrations.",
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