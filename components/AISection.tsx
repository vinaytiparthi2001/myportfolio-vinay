"use client";
import { useInView } from "@/hooks/useInView";

const flow = [
  { step: "01", label: "User Request / Trigger", desc: "User prompt, email inquiry, new applicant resume, or scheduled event", color: "#63b3ed", icon: "💬" },
  { step: "02", label: "Intent & Workflow Detection", desc: "LLM classifies action: meeting setup, email, transcript summary, resume screening, or onboarding", color: "#76e4f7", icon: "🧠" },
  { step: "03", label: "Context Retrieval (RAG)", desc: "Cosmos DB vector search retrieves policy documents, employee guidelines, or resume data", color: "#b794f4", icon: "🔍" },
  { step: "04", label: "Azure OpenAI Processing", desc: "LLM generates structured responses, meeting notes, action items, or candidate candidate scorecards", color: "#f6ad55", icon: "✨" },
  { step: "05", label: "API & Action Execution", desc: "Triggers Graph API (calendars/emails), Zendesk/Zoho tickets, or employee provisioning services", color: "#68d391", icon: "⚡" },
  { step: "06", label: "Response & Workflow State", desc: "Delivers grounded response, updates SQL/Cosmos DB status, and completes workflow checklist", color: "#63b3ed", icon: "✅" },
];

const concepts = [
  {
    title: "RAG — Retrieval-Augmented Generation",
    color: "#b794f4",
    desc: "Instead of relying on what the LLM was trained on, we store documents as vector embeddings in Cosmos DB. When someone asks a document question, we search for the closest matches and pass those chunks to the model. It answers from real content, not a guess.",
  },
  {
    title: "Intent routing",
    color: "#68d391",
    desc: "Not every request needs an LLM response. Some need a database query, some need an API call. The intent layer classifies the request first, then routes it to the right handler — keeps things fast and avoids unnecessary model calls.",
  },
  {
    title: "Azure OpenAI integration",
    color: "#f6ad55",
    desc: "We use Azure OpenAI (GPT-4o) as the model. I handle prompt construction, context injection, and output parsing. The prompts are kept tight — clear system instructions, relevant context only, no fluff.",
  },
  {
    title: "Multi-platform API orchestration",
    color: "#63b3ed",
    desc: "After the AI decides what to do, the backend calls whatever it needs — Graph API for calendar/email, Zendesk for tickets, Apollo for contacts, Zoho Desk for support. Each integration has its own handler so they stay independent.",
  },
];

export default function AISection() {
  const { ref, visible } = useInView();

  return (
    <section id="ai" className="py-24 max-w-6xl mx-auto px-4 md:px-8" ref={ref}>
      <span className="section-label">AI Work</span>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-3 mb-4 anim-fade-up ${visible ? "in" : ""}`}>
        How the AI layer works
      </h2>
      <p className={`text-[#718096] text-sm leading-relaxed max-w-xl mb-14 anim-fade-up ${visible ? "in" : ""} delay-100`}>
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