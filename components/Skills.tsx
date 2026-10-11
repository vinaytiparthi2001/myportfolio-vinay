"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const groups = [
  {
    id: "languages",
    label: "Languages",
    color: "#63b3ed",
    skills: ["C#", ".NET", "JavaScript", "React", "SQL", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend & .NET Architecture",
    color: "#76e4f7",
    skills: [
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "OAuth 2.0 Integration",
      "Business Workflow Automation",
      "Webhooks",
      "Dependency Injection",
      "Async/Await Services",
    ],
  },
  {
    id: "ai",
    label: "AI & LLMs",
    color: "#b794f4",
    skills: ["Azure OpenAI", "LLMs", "RAG", "Vector Embeddings", "Agent Workflows", "Intent Handling", "Prompting"],
  },
  {
    id: "apis",
    label: "APIs & Integrations",
    color: "#f6ad55",
    skills: [
      "OAuth 2.0",
      "Microsoft Graph API",
      "Google APIs",
      "Apollo",
      "Zendesk",
      "Zoho Desk",
      "Zoho People",
      "Zoho CRM",
      "Jira",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#68d391",
    skills: ["SQL Server", "Cosmos DB"],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    color: "#fc8181",
    skills: ["Azure", "Azure DevOps", "Application Insights", "Git", "Postman"],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const { ref, visible } = useInView();

  const shown = active ? groups.filter((g) => g.id === active) : groups;

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-4 md:px-8" ref={ref}>
      <span className="section-label">Tech</span>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-3 mb-4 anim-fade-up ${visible ? "in" : ""}`}>
        What I work with
      </h2>
      <p className={`text-[#718096] text-sm mb-10 anim-fade-up ${visible ? "in" : ""} delay-100`}>
        Click a category to filter. These are things I&apos;ve actually used, not a wishlist.
      </p>

      {/* Filter pills */}
      <div className={`flex flex-wrap gap-2 mb-10 anim-fade-up ${visible ? "in" : ""} delay-200`}>
        <button
          onClick={() => setActive(null)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
            !active
              ? "bg-[#63b3ed] text-[#050d1a] border-[#63b3ed]"
              : "border-[rgba(99,179,237,0.2)] text-[#718096] hover:text-[#e2e8f0]"
          }`}
        >
          All
        </button>
        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => setActive(active === g.id ? null : g.id)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={
              active === g.id
                ? { background: g.color, color: "#050d1a", borderColor: g.color }
                : { borderColor: "rgba(99,179,237,0.2)", color: "#718096" }
            }
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map((g, i) => (
          <div
            key={g.id}
            className={`glass-card p-5 anim-scale ${visible ? "in" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: g.color }}
            >
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg text-[0.77rem] font-medium cursor-default hover:opacity-90 transition-opacity"
                  style={{ color: g.color, background: `${g.color}10`, border: `1px solid ${g.color}18` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}