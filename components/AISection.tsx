"use client";
import { useInView } from "@/hooks/useInView";

const flow = [
  { step: "01", label: "User Request", desc: "User inputs a request or message through the application.", color: "#f59e0b", icon: "💬" },
  { step: "02", label: "Intent Routing", desc: "Intent routing helps the application determine what a user is asking for and direct the request to the appropriate workflow or API.", color: "#fbbf24", icon: "🧠" },
  { step: "03", label: "Context Retrieval (RAG)", desc: "RAG retrieves relevant information from documents or other data sources before sending it to a language model.", color: "#fb7185", icon: "🔍" },
  { step: "04", label: "AI Processing", desc: "Azure OpenAI processes the request with instructions and context.", color: "#f59e0b", icon: "✨" },
  { step: "05", label: "API Orchestration", desc: "I work on connecting backend workflows with external platforms such as Microsoft Graph, Zendesk, Zoho Desk, and Apollo.", color: "#fbbf24", icon: "⚡" },
  { step: "06", label: "Response", desc: "Returns the result or updates workflow status.", color: "#f43f5e", icon: "✅" },
];

const concepts = [
  {
    title: "Retrieval-Augmented Generation (RAG)",
    color: "#fbbf24",
    desc: "RAG retrieves relevant information from documents or other data sources before sending it to a language model. In my work, I've used Cosmos DB vector search for document-related question answering.",
  },
  {
    title: "Prompt Design & Instructions",
    color: "#f59e0b",
    desc: "I work on writing clear instructions, providing examples, defining expected output formats, and testing agent responses.",
  },
  {
    title: "Intent Routing",
    color: "#fb7185",
    desc: "Intent routing helps the application determine what a user is asking for and direct the request to the appropriate workflow or API.",
  },
  {
    title: "API Orchestration",
    color: "#fbbf24",
    desc: "I work on connecting backend workflows with external platforms such as Microsoft Graph, Zendesk, Zoho Desk, and Apollo.",
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