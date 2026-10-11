"use client";
import { useEffect, useState } from "react";

const roles = [
  "AI & RAG Solutions Engineer",
  "LLM Prompting & Agent Workflows",
  ".NET & C# Backend Developer",
  "API & OAuth Integrations",
  "Enterprise Workflow Automation",
];

const techTicker = [
  "Azure OpenAI", "LLMs", "RAG", "Prompt Engineering", "Vector Embeddings", "Cosmos DB",
  "C#", ".NET", "REST APIs", "OAuth 2.0", "Semantic Search", "Microsoft Graph API",
  "SQL Server", "Zendesk", "Zoho Desk", "Apollo", "Google APIs", "Azure DevOps",
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
          backgroundImage: "radial-gradient(rgba(245,158,11,0.85) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-[#f59e0b] rounded-full blur-[150px] animate-glow-pulse pointer-events-none opacity-[0.14]" />
      <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#fb7185] rounded-full blur-[140px] animate-glow-pulse pointer-events-none opacity-[0.14]" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* Text side */}
        <div>
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 shadow-sm shadow-amber-500/10">
            <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#fde68a] tracking-wider uppercase">
              Associate Software Engineer · TCAIGV
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-[#fdfbf7] mb-5 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text relative inline-block">
              Vinay Kumar Reddy
            </span>
          </h1>

          {/* Typewriter line */}
          <div className="flex items-center gap-2 mb-6 min-h-[32px]">
            <span className="text-[#a8a29e] text-base">Specializing in</span>
            <span className="text-[#fbbf24] font-semibold text-base font-mono-custom">
              {displayed}
              <span className="animate-caret">|</span>
            </span>
          </div>

          <p className="text-[#d6d3d1] leading-[1.85] max-w-[520px] mb-4 text-[0.93rem]">
            Associate Software Engineer focused on LLMs, RAG architectures, and intelligent API workflows.
            Experienced in building context-grounded retrieval pipelines with Azure OpenAI and Cosmos DB vector search,
            engineering structured prompt templates, and integrating .NET enterprise backends with platforms like
            Microsoft Graph, Zendesk, and Apollo.
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
            <span key={i} className="text-[11px] font-mono-custom text-[#a8a29e]/70 uppercase tracking-widest">
              {t} <span className="text-[#f59e0b]/40 mx-3">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-5 h-8 rounded-full border border-[#a8a29e]/50 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#fbbf24]" style={{ animation: "float 1.6s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}

function ArchCard() {
  const steps = [
    { label: "User Request",     color: "#f59e0b", icon: "💬", code: "POST /api/assistant" },
    { label: "Intent Detection", color: "#fbbf24", icon: "🧠", code: "classifyIntent(input)" },
    { label: "Azure OpenAI",     color: "#fb7185", icon: "✨", code: "gpt-4o · few-shot" },
    { label: "RAG Retrieval",    color: "#f59e0b", icon: "🔍", code: "vectorSearch(Cosmos)" },
    { label: "API Execution",    color: "#fbbf24", icon: "⚡", code: "Graph / Zendesk / Apollo" },
    { label: "Streaming Reply",  color: "#f43f5e", icon: "✅", code: "streamed chunks · 200 OK" },
  ];

  return (
    <div className="relative animate-float">
      {/* Spinning ring */}
      <div
        className="absolute -inset-6 rounded-full border border-dashed border-[#f59e0b]/20 animate-spin-slow"
      />

      <div
        className="relative w-[300px] rounded-2xl p-5 border border-[rgba(245,158,11,0.2)]"
        style={{ background: "rgba(18,20,26,0.85)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[rgba(245,158,11,0.12)]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
          </div>
          <span className="font-mono-custom text-[10px] text-[#a8a29e] ml-1">enterprise-ai · flow.ts</span>
        </div>

        {steps.map((s, i) => (
          <div key={s.label} className="flex gap-3 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs border shadow-sm"
                style={{ borderColor: `${s.color}35`, background: `${s.color}15` }}
              >
                {s.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 min-h-[14px]" style={{ background: `${s.color}40` }} />
              )}
            </div>
            <div className="pb-2.5">
              <p className="text-[0.75rem] font-semibold leading-none mb-0.5" style={{ color: s.color }}>
                {s.label}
              </p>
              <p className="font-mono-custom text-[10px] text-[#78716c]">{s.code}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute -top-2 -right-2 w-12 h-12 border-t border-r border-[#f59e0b]/40 rounded-tr-xl" />
      <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b border-l border-[#fb7185]/40 rounded-bl-xl" />
    </div>
  );
}