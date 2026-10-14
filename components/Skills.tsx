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
    label: "LLMs, RAG & GenAI",
    color: "#b794f4",
    skills: [
      "Azure OpenAI (GPT-4o)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Vector Embeddings",
      "Semantic Search",
      "Intent Detection & Routing",
      "Agent Workflows",
      "JSON Schema Constraints",
      "Context Window Management",
    ],
  },
  {
    id: "azure_devops",
    label: "Azure & DevOps",
    color: "#f59e0b",
    skills: [
      "Azure Portal",
      "Azure DevOps",
      "Azure DevOps Pipelines",
      "Build and deployment pipelines",
      "Application deployments and troubleshooting",
      "Azure Cosmos DB",
      "Azure AI Foundry",
      "AI agent creation and configuration",
      "Agent instructions and configuration",
      "Agent testing and response evaluation",
      "Azure sandbox environments",
      "Azure container environments",
    ],
  },
  {
    id: "apis",
    label: "APIs & Integrations",
    color: "#f6ad55",
    skills: [
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
    skills: ["SQL Server"],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    color: "#fc8181",
    skills: ["Application Insights", "Git", "Postman"],
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
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
            !active
              ? "bg-[#38bdf8] text-[#07090e] border-[#38bdf8] shadow-sm shadow-cyan-500/20"
              : "border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.04)] text-[#94a3b8] hover:text-[#f1f5f9]"
          }`}
        >
          All
        </button>
        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => setActive(active === g.id ? null : g.id)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer"
            style={
              active === g.id
                ? { background: g.color, color: "#07090e", borderColor: g.color, boxShadow: `0 2px 12px ${g.color}35` }
                : { borderColor: "rgba(56,189,248,0.2)", background: "rgba(56,189,248,0.04)", color: "#94a3b8" }
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