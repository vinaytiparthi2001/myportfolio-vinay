"use client";
import { useInView } from "@/hooks/useInView";

const contribution = [
  "Built the intent classification layer — takes natural language requests and maps them directly to the appropriate enterprise handler",
  "Engineered automated workflows for meeting setup, calendar scheduling, and email communications via Microsoft Graph API",
  "Implemented automated transcript processing and summarization using Azure OpenAI to capture key meeting items and action points",
  "Built AI-powered resume screening workflows to parse candidate profiles, extract key qualifications, and accelerate talent review",
  "Automated employee onboarding and offboarding workflows — account setup, permission provisioning, documentation, and asset checklist tasks",
  "Developed RAG pipelines using Cosmos DB vector search so document Q&A queries retrieve factual company knowledge rather than generic guesses",
  "Wrote and maintained scalable .NET REST APIs connecting the assistant to Zendesk, Zoho Desk, Apollo, and core business microservices",
  "Covered modules across Attendance, Timesheets, Leave Management, Document Q&A, and Marketing Automation",
];

const tech = [
  ".NET", "C#", "Azure OpenAI", "RAG", "LLMs", "Cosmos DB",
  "Microsoft Graph API", "Apollo", "Zendesk", "Zoho Desk", "Google APIs", "OAuth 2.0", "SQL Server",
];

export default function Projects() {
  const { ref, visible } = useInView();

  return (
    <section id="projects" className="py-24 bg-[#07111f]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <span className="section-label">Projects</span>
        <h2 className={`text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-3 mb-4 anim-fade-up ${visible ? "in" : ""}`}>
          Things I&apos;ve built
        </h2>
        <p className={`text-[#718096] text-sm mb-12 anim-fade-up ${visible ? "in" : ""} delay-100`}>
          Most of my work is internal, so I can only share what&apos;s safe to. One main project so far.
        </p>

        <div className={`glass-card p-6 md:p-10 anim-fade-up ${visible ? "in" : ""} delay-200`}>
          {/* Title row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <span
                className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full inline-block mb-3"
                style={{ color: "#b794f4", background: "#b794f410", border: "1px solid #b794f420" }}
              >
                AI / Enterprise
              </span>
              <h3 className="text-2xl font-bold text-[#e2e8f0]">Enterprise AI Assistant</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 max-w-2xl">
            An enterprise AI assistant integrated across company business operations. It automates key employee lifecycle
            actions — from email communication, meeting scheduling, and transcript summarization to AI-powered resume screening,
            onboarding/offboarding workflows, and RAG-driven document intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Problem */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#718096] font-semibold mb-4">The problem</h4>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                People were juggling five different tools just to do their daily work — separate apps for HR,
                CRM, support, documents, and marketing. There was no single place to ask a question and
                get an answer without opening three tabs.
              </p>
            </div>

            {/* What I did */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#718096] font-semibold mb-4">What I built</h4>
              <ul className="space-y-2.5">
                {contribution.map((c, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 text-sm text-[#94a3b8] anim-fade-left ${visible ? "in" : ""}`}
                    style={{ transitionDelay: `${400 + i * 70}ms` }}
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#b794f4]/70 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[rgba(99,179,237,0.07)] pt-6">
            <p className="text-[10px] uppercase tracking-widest text-[#4a5568] font-semibold mb-3">Technologies used</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}