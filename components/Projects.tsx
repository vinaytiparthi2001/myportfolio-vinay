"use client";
import { useInView } from "@/hooks/useInView";

const contribution = [
  "Implemented intent routing to direct user requests to relevant backend services.",
  "Integrated Microsoft Graph API for supported email and meeting workflows.",
  "Worked on meeting transcript summarization using Azure OpenAI.",
  "Contributed to resume screening and employee onboarding/offboarding workflows.",
  "Worked on document question answering using RAG and Cosmos DB vector search.",
  "Developed or maintained .NET APIs integrating with relevant third-party services.",
];

const tech = [
  "RAG", "Azure OpenAI (GPT-4o)", "Vector Search", "Prompt Engineering", "Cosmos DB",
  ".NET", "C#", "ASP.NET Core", "REST APIs", "Microsoft Graph API", "Apollo",
  "Zendesk", "Zoho Desk", "OAuth 2.0", "SQL Server", "Google APIs",
];

export default function Projects() {
  const { ref, visible } = useInView();

  return (
    <section id="projects" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <span className="section-label">Featured Work</span>
        <h2 className={`text-3xl md:text-4xl font-bold text-[#f1f5f9] mt-3 mb-4 anim-fade-up ${visible ? "in" : ""}`}>
          Featured Work
        </h2>
        <p className={`text-[#94a3b8] text-sm mb-12 anim-fade-up ${visible ? "in" : ""} delay-100`}>
          A look at AI-assisted features and workflow automation built for internal business use.
        </p>

        <div className={`glass-card p-6 md:p-10 anim-fade-up ${visible ? "in" : ""} delay-200`}>
          {/* Title row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <span
                className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full inline-block mb-3"
                style={{ color: "#fbbf24", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)" }}
              >
                AI / Enterprise
              </span>
              <h3 className="text-2xl font-bold text-[#fdfbf7]">Enterprise AI Assistant</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#d6d3d1] text-sm leading-relaxed mb-8 max-w-2xl">
            An internal business application that brings AI-powered assistance and workflow automation together.
            My work includes backend APIs, third-party integrations, document question answering, and AI-assisted employee workflows.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Problem */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-4">The problem</h4>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                People were juggling five different tools just to do their daily work — separate apps for HR,
                CRM, support, documents, and marketing. There was no single place to ask a question and
                get an answer without opening three tabs.
              </p>
            </div>

            {/* What I did */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-4">What I built</h4>
              <ul className="space-y-2.5">
                {contribution.map((c, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 text-sm text-[#d6d3d1] anim-fade-left ${visible ? "in" : ""}`}
                    style={{ transitionDelay: `${400 + i * 70}ms` }}
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[rgba(245,158,11,0.15)] pt-6">
            <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-semibold mb-3">Technologies used</p>
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