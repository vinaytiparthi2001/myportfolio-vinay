"use client";
import { useEffect, useState } from "react";

const roles = [
  "Associate Software Engineer",
  ".NET & C# Developer",
  "API & OAuth Integrations",
  "AI & RAG Solutions",
  "Enterprise Workflow Automation",
];

const techTicker = [
  "C#", ".NET", "REST APIs", "OAuth 2.0", "Azure OpenAI",
  "LLMs", "RAG", "Vector Search", "Microsoft Graph API", "SQL Server", "Cosmos DB",
  "Zendesk", "Zoho Desk", "Apollo", "Google APIs", "Jira", "Azure DevOps",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let i = displayed.length;
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 25);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((r) => (r + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(rgba(99,179,237,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#63b3ed] rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#b794f4] rounded-full blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Text side */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#68d391]/30 bg-[#68d391]/8">
            <span className="w-2 h-2 rounded-full bg-[#68d391] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#68d391] tracking-wider uppercase">
              Associate Software Engineer · Tech Cubes AI
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-[#e2e8f0] mb-5">
            Hi, I&apos;m{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg,#63b3ed,#b794f4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Vinay Kumar Reddy
            </span>
          </h1>

          {/* Typewriter line */}
          <div className="flex items-center gap-2 mb-6 min-h-[32px]">
            <span className="text-[#718096] text-base">Specializing in</span>
            <span className="text-[#63b3ed] font-semibold text-base font-mono-custom">
              {displayed}
              <span className="animate-caret">|</span>
            </span>
          </div>

          <p className="text-[#94a3b8] leading-[1.85] max-w-[520px] mb-4 text-[0.93rem]">
            Associate Software Engineer with experience in .NET development, REST APIs,
            third-party integrations, and business workflow automation. Currently engineering an
            enterprise application for employee activities, document tasks, marketing, and support
            operations with SQL Server, Cosmos DB, and Azure OpenAI RAG pipelines.
          </p>
        </div>

        {/* Right — floating arch card */}
        <div className="hidden lg:flex items-center justify-center">
          <ArchCard />
        </div>
      </div>

      {/* Tech ticker */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden">
        <div className="flex gap-8 animate-ticker whitespace-nowrap w-max">
          {[...techTicker, ...techTicker].map((t, i) => (
            <span key={i} className="text-[11px] font-mono-custom text-[#718096]/60 uppercase tracking-widest">
              {t} <span className="text-[#63b3ed]/30 mx-3">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
        <div className="w-5 h-8 rounded-full border border-[#718096]/50 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#63b3ed]" style={{ animation: "float 1.6s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}

function ArchCard() {
  const steps = [
    { label: "User Request",     color: "#63b3ed", icon: "💬", code: "POST /api/assistant" },
    { label: "Intent Detection", color: "#76e4f7", icon: "🧠", code: "classifyIntent(input)" },
    { label: "Azure OpenAI",     color: "#b794f4", icon: "✨", code: "gpt-4o · prompting" },
    { label: "RAG Retrieval",    color: "#f6ad55", icon: "🔍", code: "vectorSearch(Cosmos)" },
    { label: "API Execution",    color: "#68d391", icon: "⚡", code: "Graph / Zendesk / Apollo" },
    { label: "Response",         color: "#63b3ed", icon: "✅", code: "200 OK · streamed" },
  ];

  return (
    <div className="relative animate-float">
      {/* Spinning ring */}
      <div
        className="absolute -inset-6 rounded-full border border-dashed border-[#63b3ed]/10 animate-spin-slow"
      />

      <div
        className="relative w-[290px] rounded-2xl p-5 border border-[rgba(99,179,237,0.14)]"
        style={{ background: "rgba(10,22,40,0.75)", backdropFilter: "blur(16px)" }}
      >
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[rgba(99,179,237,0.08)]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fc8181]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f6ad55]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#68d391]/70" />
          </div>
          <span className="font-mono-custom text-[10px] text-[#4a5568] ml-1">enterprise-ai · flow.ts</span>
        </div>

        {steps.map((s, i) => (
          <div key={s.label} className="flex gap-3 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs border"
                style={{ borderColor: `${s.color}25`, background: `${s.color}10` }}
              >
                {s.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 min-h-[14px]" style={{ background: `${s.color}30` }} />
              )}
            </div>
            <div className="pb-2.5">
              <p className="text-[0.75rem] font-semibold leading-none mb-0.5" style={{ color: s.color }}>
                {s.label}
              </p>
              <p className="font-mono-custom text-[10px] text-[#4a5568]">{s.code}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute -top-2 -right-2 w-12 h-12 border-t border-r border-[#63b3ed]/25 rounded-tr-xl" />
      <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b border-l border-[#b794f4]/25 rounded-bl-xl" />
    </div>
  );
}