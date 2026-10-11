"use client";
import { useInView } from "@/hooks/useInView";

const facts = [
  { icon: "🏢", label: "Role",       value: "Associate Software Engineer" },
  { icon: "🏙", label: "Company",    value: "TCAIGV" },
  { icon: "📍", label: "Location",   value: "Hyderabad, Telangana" },
  { icon: "⚙️", label: "Backend",   value: ".NET · C# · REST APIs" },
  { icon: "🤖", label: "AI stack",   value: "Azure OpenAI · RAG · LLMs" },
  { icon: "🗄️", label: "Databases", value: "SQL Server · Cosmos DB" },
];

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 md:px-8" ref={ref}>
      <span className="section-label">Background</span>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#fdfbf7] mt-3 mb-12 anim-fade-up ${visible ? "in" : ""}`}>
        A bit about me
      </h2>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className={`lg:col-span-3 space-y-5 text-[#d6d3d1] leading-[1.9] text-[0.93rem] anim-fade-left ${visible ? "in" : ""}`}>
          <p>
            I graduated with a B.Tech in CS (AI & ML) and started my career at TCAIGV in mid-2025. Since then I&apos;ve
            been the backend person on an internal enterprise platform that the whole company runs on — HR, documents,
            marketing, support, you name it.
          </p>
          <p>
            Most of what I do is write .NET APIs, figure out how to connect things to each other, and make sure those connections
            don&apos;t break. That means a lot of work with OAuth flows, webhook handling, and keeping track of what each
            third-party platform actually supports versus what its docs claim.
          </p>
          <p>
            The core focus of my day-to-day work is LLM application development and RAG architecture.
            I design semantic retrieval pipelines that ingest enterprise knowledge into Cosmos DB vector collections,
            generate embeddings, and perform similarity searches so our language models answer with factual, grounded company
            data instead of hallucinations. Getting prompts right is a big part of it — crafting strict system prompts, few-shot
            demonstrations, and JSON schema constraints so outputs can be directly executed by backend services.
          </p>
          <p>
            I connect these LLM outputs to automated agent workflows: when an employee submits a query, intent classification
            determines whether to trigger Microsoft Graph for meetings/emails, fetch candidate details from Apollo, or generate
            a support ticket in Zendesk or Zoho Desk. All of this runs on solid .NET backends with SQL Server, monitored with
            Application Insights to keep latency and token usage under control.
          </p>
        </div>

        <div className={`lg:col-span-2 grid grid-cols-1 gap-3 anim-fade-right ${visible ? "in" : ""} delay-200`}>
          {facts.map((f, i) => (
            <div
              key={f.label}
              className="glass-card flex items-center gap-3.5 px-4 py-3.5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-xl">{f.icon}</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-semibold">{f.label}</p>
                <p className="text-[0.84rem] text-[#fdfbf7] font-medium mt-0.5">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}