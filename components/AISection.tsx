"use client";
import { useInView } from "@/hooks/useInView";

const flow = [
  { step: "01", label: "User Request / Trigger", desc: "User prompt, email inquiry, new applicant resume, or scheduled event", color: "#f59e0b", icon: "💬" },
  { step: "02", label: "Intent & Workflow Detection", desc: "LLM classifies action: meeting setup, email, transcript summary, resume screening, or onboarding", color: "#fbbf24", icon: "🧠" },
  { step: "03", label: "Context Retrieval (RAG)", desc: "Cosmos DB vector search retrieves policy documents, employee guidelines, or resume data", color: "#fb7185", icon: "🔍" },
  { step: "04", label: "Azure OpenAI Processing", desc: "LLM generates structured responses, meeting notes, action items, or candidate scorecards", color: "#f59e0b", icon: "✨" },
  { step: "05", label: "API & Action Execution", desc: "Triggers Graph API (calendars/emails), Zendesk/Zoho tickets, or employee provisioning services", color: "#fbbf24", icon: "⚡" },
  { step: "06", label: "Response & Workflow State", desc: "Delivers grounded response, updates SQL/Cosmos DB status, and completes workflow checklist", color: "#f43f5e", icon: "✅" },
];

const concepts = [
  {
    title: "Retrieval-Augmented Generation (RAG)",
    color: "#fbbf24",
    desc: "Instead of relying solely on general training weights, enterprise documents are chunked and converted into vector embeddings stored in Cosmos DB. User queries trigger vector similarity searches to retrieve the most relevant snippets, providing factual, zero-hallucination context for the model.",
  },
  {
    title: "System Guardrails & Prompt Engineering",
    color: "#f59e0b",
    desc: "I design strict prompt architectures using system instructions, few-shot conditioning, and constrained JSON output schemas. This guarantees the LLM returns deterministic, machine-readable responses that downstream backend services can execute safely.",
  },
  {
    title: "Intent Routing & Workflow Classification",
    color: "#fb7185",
    desc: "Every natural language request passes through an intent classification layer. The LLM identifies whether the user wants to book a meeting, screen a resume, retrieve internal policies, or log a ticket, routing the payload directly to the corresponding service handler.",
  },
  {
    title: "Multi-Platform Tool Execution",
    color: "#fbbf24",
    desc: "Once intent and parameters are extracted, our .NET backend orchestrates external tool execution: Microsoft Graph API for email/calendar sync, Apollo for CRM lookups, Zendesk/Zoho for support tickets, and SQL Server for employee operations.",
  },
];

export default function AISection() {
  const { ref, visible } = useInView();

  return (
    <section id="ai" className="py-24 max-w-6xl mx-auto px-4 md:px-8" ref={ref}>
      <span className="section-label">AI Work</span>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#fdfbf7] mt-3 mb-4 anim-fade-up ${visible ? "in" : ""}`}>
        How the AI layer works
      </h2>
      <p className={`text-[#a8a29e] text-sm leading-relaxed max-w-xl mb-14 anim-fade-up ${visible ? "in" : ""} delay-100`}>
        This is the part I find most interesting to work on. Here is how the pieces fit together.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Flow */}
        <div className={`space-y-0 anim-fade-left ${visible ? "in" : ""} delay-200`}>
          {flow.map((f, i) => (
            <div key={f.step} className="flex gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base border mt-0.5"
                  style={{ borderColor: `${f.color}25`, background: `${f.color}10` }}
                >
                  {f.icon}
                </div>
                {i < flow.length - 1 && (
                  <div className="w-px flex-1 min-h-[20px]" style={{ background: `${f.color}30` }} />
                )}
              </div>
              <div className="pb-5 pt-1">
                <p className="text-[11px] font-mono-custom mb-0.5" style={{ color: `${f.color}60` }}>{f.step}</p>
                <p className="font-semibold text-[0.87rem] mb-0.5" style={{ color: f.color }}>{f.label}</p>
                <p className="text-[#718096] text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Concept cards */}
        <div className="space-y-4">
          {concepts.map((c, i) => (
            <div
              key={c.title}
              className={`glass-card p-5 anim-fade-right ${visible ? "in" : ""}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <h4 className="font-semibold text-[0.88rem] mb-2" style={{ color: c.color }}>{c.title}</h4>
              <p className="text-[#718096] text-xs leading-[1.8]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}