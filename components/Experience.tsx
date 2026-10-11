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
  ".NET", "C#", "ASP.NET Core", "REST APIs", "Azure OpenAI", "RAG", "LLMs",
  "Microsoft Graph API", "OAuth 2.0", "SQL Server", "Cosmos DB",
  "Apollo", "Zendesk", "Zoho Desk", "Google APIs", "Azure DevOps", "Application Insights",
];

export default function Experience() {
  const { ref, visible } = useInView();

  return (
    <section id="experience" className="py-24 bg-[#07111f]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <span className="section-label">Career</span>
        <h2 className={`text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-3 mb-14 anim-fade-up ${visible ? "in" : ""}`}>
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-[#63b3ed]/70 to-transparent hidden md:block" />

          <div className={`relative md:pl-16 anim-fade-up ${visible ? "in" : ""} delay-200`}>
            {/* Dot */}
            <div className="absolute left-[13px] top-6 w-[18px] h-[18px] rounded-full border-2 border-[#63b3ed] bg-[#07111f] hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#63b3ed] animate-pulse" />
            </div>

            <div className="glass-card p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <h3 className="text-xl font-bold text-[#e2e8f0]">Associate Software Engineer</h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#68d391]/10 text-[#68d391] border border-[#68d391]/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#68d391] animate-pulse" />
                      Current
                    </span>
                  </div>
                  <p className="text-[#63b3ed] font-semibold text-sm">Tech Cubes AI &amp; Consultants</p>
                  <p className="text-[#718096] text-xs mt-0.5">Hyderabad, Telangana</p>
                </div>
                <span className="font-mono-custom text-xs text-[#718096] bg-[#0a1628] px-3 py-1.5 rounded-lg border border-[rgba(99,179,237,0.08)] whitespace-nowrap">
                  June 2025 &ndash; Present
                </span>
              </div>

              {/* Description */}
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 mt-4">
                I work as the backend engineer on an internal platform that ties together our team&apos;s daily routines,
                customer tickets, and HR workflows. Most of my week goes into writing clean .NET APIs, making external
                integrations behave predictably, and building practical AI helpers that save people time.
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-7">
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm text-[#94a3b8] anim-fade-left ${visible ? "in" : ""}`}
                    style={{ transitionDelay: `${300 + i * 60}ms` }}
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#63b3ed]/70 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="border-t border-[rgba(99,179,237,0.07)] pt-5">
                <p className="text-[10px] uppercase tracking-widest text-[#4a5568] font-semibold mb-3">Stack</p>
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