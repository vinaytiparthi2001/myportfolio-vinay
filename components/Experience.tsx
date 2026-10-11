"use client";
import { useInView } from "@/hooks/useInView";

const bullets = [
  "Build and maintain the core .NET backend APIs that handle daily employee activity — attendance logs, weekly timesheets, leave approvals, and internal document searches",
  "Hooked up Microsoft Graph API so employees can schedule meetings and sync emails without having to leave the app",
  "Put together an automated meeting workflow using Azure OpenAI to summarize call transcripts and pull out immediate action items",
  "Created an AI screening flow for candidate resumes, which parses key qualifications and cuts down manual recruiter review time",
  "Wrote onboarding and offboarding workflows to handle account setup, permissions, and exit clearance checklists in one place",
  "Integrated Zendesk, Zoho Desk, and Apollo over OAuth so support tickets, CRM lookups, and customer queries route through our central system",
  "Set up document Q&A using RAG with Cosmos DB vector search so teams get answers directly from uploaded company guides and policies",
  "Handled day-to-day data work across SQL Server and Cosmos DB, verified endpoints in Postman, and monitored production logs using Application Insights",
];

const tech = [
  "RAG Architecture", "Azure OpenAI", "LLM Prompting", "Vector Search", "Cosmos DB",
  ".NET", "C#", "ASP.NET Core", "REST APIs", "OAuth 2.0", "SQL Server",
  "Microsoft Graph API", "Apollo", "Zendesk", "Zoho Desk", "Google APIs", "Application Insights",
];

export default function Experience() {
  const { ref, visible } = useInView();

  return (
    <section id="experience" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <span className="section-label">Career</span>
        <h2 className={`text-3xl md:text-4xl font-bold text-[#f1f5f9] mt-3 mb-14 anim-fade-up ${visible ? "in" : ""}`}>
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-[#f59e0b]/80 to-transparent hidden md:block" />

          <div className={`relative md:pl-16 anim-fade-up ${visible ? "in" : ""} delay-200`}>
            {/* Dot */}
            <div className="absolute left-[13px] top-6 w-[18px] h-[18px] rounded-full border-2 border-[#f59e0b] bg-[#0b0c10] hidden md:flex items-center justify-center shadow-sm shadow-amber-500/30">
              <div className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
            </div>

            <div className="glass-card p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <h3 className="text-xl font-bold text-[#fdfbf7]">Associate Software Engineer</h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#f59e0b]/15 text-[#fbbf24] border border-[#f59e0b]/35">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                      Current
                    </span>
                  </div>
                  <p className="text-[#fbbf24] font-semibold text-sm">TCAIGV</p>
                  <p className="text-[#a8a29e] text-xs mt-0.5">Hyderabad, Telangana</p>
                </div>
                <span className="font-mono-custom text-xs text-[#d6d3d1] bg-[#12141a] px-3 py-1.5 rounded-lg border border-[rgba(245,158,11,0.2)] whitespace-nowrap">
                  June 2025 &ndash; Present
                </span>
              </div>

              {/* Description */}
              <p className="text-[#d6d3d1] text-sm leading-relaxed mb-6 mt-4">
                I engineer our internal enterprise platform with a heavy emphasis on LLMs, RAG-powered knowledge retrieval,
                and prompt orchestration. Alongside developing resilient .NET backend APIs, I build contextual AI agents that
                transform multi-system workflows — meetings, document search, candidate resumes, and support tickets — into fast, automated actions.
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-7">
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Architected RAG pipelines combining Cosmos DB vector search with Azure OpenAI (GPT-4o) for high-accuracy document Q&amp;A and context-aware responses
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "360ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Engineered prompt templates with chain-of-thought instructions, system guardrails, and JSON structured outputs for reliable downstream API execution
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "420ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Built meeting transcript analysis workflows that extract highlights, commitments, and automatically sync calendar invites through Microsoft Graph API
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "480ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Developed AI resume screening pipelines using vector embeddings and structured prompting to match candidates against job specifications
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "540ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Automated onboarding and offboarding workflows, provisioning credentials and tracking compliance checklists through .NET services
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Integrated third-party enterprise platforms including Apollo, Zendesk, and Zoho Desk via OAuth 2.0 to trigger automated business actions
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "660ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Developed scalable ASP.NET Core REST APIs supporting core modules: Attendance, Timesheets, Leave Management, and Marketing Automation
                </li>
                <li
                  className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                  style={{ transitionDelay: "720ms" }}
                >
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                  Managed relational data in SQL Server and vector datasets in Cosmos DB, debugging endpoints in Postman and tracking telemetry in Application Insights
                </li>
              </ul>

              {/* Tech */}
              <div className="border-t border-[rgba(245,158,11,0.15)] pt-5">
                <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-semibold mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}