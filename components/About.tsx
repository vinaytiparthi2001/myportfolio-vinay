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
            I&apos;m an Associate Software Engineer at TCAIGV in Hyderabad. I work mainly on .NET backend development, REST APIs, and integrations with third-party platforms.
          </p>
          <p>
            My work also involves AI-powered features using Azure OpenAI, LLMs, RAG, and vector search. I&apos;ve worked on document question answering, workflow automation, and configuring AI agents with instructions and testing their responses.
          </p>
          <p>
            I also work with Azure services, including Azure Portal and Cosmos DB, and use Azure DevOps for deployment-related work. I enjoy solving integration issues, testing new features, and learning how AI can make everyday business tasks easier.
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