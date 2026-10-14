"use client";
import { useInView } from "@/hooks/useInView";

const bullets = [
  "Develop and maintain .NET and C# REST APIs for modules like Attendance, Timesheets, Leave Management, Marketing, and Document Q&A.",
  "Work with Azure DevOps for deployment-related tasks and use the Azure Portal to access and manage application resources.",
  "Use the Azure Portal to access and manage application-related cloud resources.",
  "Work with Cosmos DB for application data storage and relevant AI retrieval workflows.",
  "Create and configure AI agents in Azure AI Foundry, adding agent instructions and testing their responses and behavior.",
  "Work with Azure sandbox and container environments for agent setup, testing, and configuration.",
  "Integrate third-party platforms such as Microsoft Graph API, Apollo, Zendesk, and Zoho Desk using OAuth 2.0.",
  "Use Postman, Application Insights, and Git for API testing, monitoring, and resolving day-to-day issues.",
];

const tech = [
  "Azure Portal", "Azure DevOps", "Azure Cosmos DB", "Azure AI Foundry",
  ".NET", "C#", "REST APIs", "OAuth 2.0", "SQL Server",
  "Microsoft Graph API", "Apollo", "Zendesk", "Zoho Desk", "Application Insights",
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
                I work as an Associate Software Engineer on our internal enterprise platform, handling backend APIs, integrations,
                and Azure cloud resources. I also work with Azure DevOps for deployments and configure AI agents in Azure AI Foundry.
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-7">
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                    style={{ transitionDelay: `${300 + i * 60}ms` }}
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                    {b}
                  </li>
                ))}
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