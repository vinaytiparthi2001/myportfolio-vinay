"use client";
import { useInView } from "@/hooks/useInView";

const aiAssistantWorkflow = [
  { step: "01", label: "User Request", desc: "The user submits a business question or task through the assistant." },
  { step: "02", label: "Intent Identification", desc: "The request is interpreted and routed to the relevant workflow." },
  { step: "03", label: "Service or Integration", desc: "The appropriate backend API, internal service, or connected third-party platform is invoked." },
  { step: "04", label: "Data Retrieval / Processing", desc: "The workflow retrieves relevant information or performs the supported operation." },
  { step: "05", label: "AI Processing", desc: "Azure OpenAI is used for applicable tasks such as summarization and document question answering." },
  { step: "06", label: "Response to User", desc: "The assistant returns the available result or response." },
];

const backendTech = ["C#", ".NET", "ASP.NET Core", "REST APIs"];
const aiTech = ["Azure OpenAI", "GPT-4o (where applicable)", "LLMs", "RAG", "Vector Search", "Prompt Engineering"];
const dataTech = ["Azure Cosmos DB", "SQL Server"];
const integrationTech = ["Microsoft Graph API", "Google APIs", "Apollo", "Zendesk", "Zoho Desk", "OAuth 2.0"];

const spfxWorkflowSteps = [
  { step: "Step 1", label: "Requirement", status: "Implemented", desc: "The user describes the SharePoint functionality or web part they want." },
  { step: "Step 2", label: "Design & Planning", status: "Implemented", desc: "The requirement is translated into a UI design and implementation plan." },
  { step: "Step 3", label: "Coding Agent", status: "Implemented", desc: "The coding agent generates the required project code using React and TypeScript." },
  { step: "Step 4", label: "Azure Sandbox", status: "Implemented", desc: "The generated project is transferred to an isolated Azure sandbox for the build and testing process." },
  { step: "Step 5", label: "Build Agent", status: "Implemented", desc: "A separate build agent runs necessary build commands, handles build errors, and generates the SPFx .sppkg package." },
  { step: "Step 6", label: "Package Validation", status: "In Progress", desc: "The generated package is checked and prepared for deployment through the SharePoint App Catalog." },
];

const spfxTech = [
  "React",
  "TypeScript",
  "Azure AI Foundry",
  "Azure Key Vault",
  "SharePoint Framework (SPFx)",
  "SharePoint Online",
  "Node.js",
  "npm",
  "Azure sandbox environments",
  ".sppkg packaging",
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

        <div className="space-y-12">
          {/* Project 1: Enterprise AI Assistant */}
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
            <p className="text-[#d6d3d1] text-sm leading-relaxed mb-8 max-w-3xl">
              An AI-powered internal business application designed to bring multiple business services and employee workflows into one place. It combines .NET backend APIs, intent-based request routing, third-party integrations, and Azure OpenAI to help users complete tasks and retrieve information without manually navigating multiple applications. My work focuses on backend development, workflow automation, API integrations, AI-assisted features, and connecting internal services with external business platforms.
            </p>

            {/* The Problem */}
            <div className="mb-8 p-5 rounded-xl bg-[#07090e]/60 border border-[rgba(245,158,11,0.12)]">
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-3">The Problem</h4>
              <p className="text-[#d6d3d1] text-sm leading-relaxed">
                Employees needed to work across separate applications for HR activities, CRM, customer support, documents, meetings, and marketing. Finding information or completing a task often required switching between tools and following different processes. The goal was to provide a centralized AI assistant that could understand a user&apos;s request, identify the relevant workflow, and connect with the appropriate backend services or integrations.
              </p>
            </div>

            {/* What I Worked On */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-4">What I Worked On</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Intent-Based Request Routing</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Implemented intent routing to identify the type of request and direct it to the relevant backend service or workflow. This helps the assistant handle different business requests through a common interface rather than treating every request as a generic question.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Employee and HR Workflows</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Contributed to employee-related workflows, including attendance, timesheets, leave management, and onboarding/offboarding activities. The assistant connects user requests to the relevant application functionality and supported backend operations.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Microsoft Graph and Meeting Workflows</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Integrated Microsoft Graph API for supported email and meeting operations. Worked on meeting transcript summarization using Azure OpenAI to turn meeting content into more useful summaries.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Document Question Answering</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Worked on document question answering using Retrieval-Augmented Generation (RAG), Azure OpenAI, and Cosmos DB vector search. The workflow retrieves relevant document content to help the assistant generate responses based on available information.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Resume Screening &amp; Employee Lifecycle</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Contributed to resume screening and employee onboarding/offboarding workflows, helping connect AI-assisted processing with the relevant application services.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Third-Party Integrations</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Developed or maintained .NET REST APIs and integrations with relevant business platforms, including Apollo, Zendesk, Zoho Desk, and Google APIs. Worked with OAuth 2.0 where required for authorized access to external services.
                  </p>
                </div>
                <div className="md:col-span-2 p-4 rounded-xl bg-[#07090e]/40 border border-[rgba(245,158,11,0.1)]">
                  <h5 className="text-xs font-semibold text-[#fbbf24] mb-1.5">Backend Services and Data</h5>
                  <p className="text-xs text-[#d6d3d1] leading-relaxed">
                    Worked with C#, .NET, ASP.NET Core, SQL Server, and Cosmos DB to support backend functionality, data access, and communication between application components and integrated services.
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Architecture */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-4">Workflow Architecture</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {aiAssistantWorkflow.map((w) => (
                  <div key={w.step} className="p-3.5 rounded-xl bg-[#07090e]/60 border border-[rgba(245,158,11,0.12)]">
                    <span className="text-[10px] font-mono-custom text-[#fbbf24] font-bold block mb-1">Stage {w.step}</span>
                    <p className="text-xs font-semibold text-[#fdfbf7] mb-1">{w.label}</p>
                    <p className="text-[11px] text-[#94a3b8] leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* My Work */}
            <div className="mb-8 p-5 rounded-xl bg-[#07090e]/50 border border-[rgba(245,158,11,0.1)]">
              <h4 className="text-xs uppercase tracking-widest text-[#fbbf24] font-semibold mb-2">My Work</h4>
              <p className="text-xs text-[#d6d3d1] leading-relaxed">
                &ldquo;I worked on .NET backend services, intent-based request routing, and integrations with internal and third-party APIs. My contributions also included employee workflow automation, Microsoft Graph API integration, meeting summarization, and document question answering using Azure OpenAI and Cosmos DB vector search. I contributed to connecting AI capabilities with practical business operations and improving how users interact with different services through a common assistant.&rdquo;
              </p>
            </div>

            {/* Technologies Used (Grouped) */}
            <div className="border-t border-[rgba(245,158,11,0.15)] pt-6 space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-semibold">Technologies used</p>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-[#a8a29e] font-medium block mb-1.5">Backend Development</span>
                  <div className="flex flex-wrap gap-2">
                    {backendTech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#a8a29e] font-medium block mb-1.5">AI and Retrieval</span>
                  <div className="flex flex-wrap gap-2">
                    {aiTech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#a8a29e] font-medium block mb-1.5">Data</span>
                  <div className="flex flex-wrap gap-2">
                    {dataTech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#a8a29e] font-medium block mb-1.5">Integrations and Authentication</span>
                  <div className="flex flex-wrap gap-2">
                    {integrationTech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: AI-Powered SPFx Development Workflow */}
          <div className={`glass-card p-6 md:p-10 anim-fade-up ${visible ? "in" : ""} delay-300`}>
            {/* Title row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full inline-block"
                    style={{ color: "#38bdf8", background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.3)" }}
                  >
                    AI Development Automation
                  </span>
                  <span className="text-[10px] font-mono-custom uppercase px-2.5 py-0.5 rounded-full bg-[#fbbf24]/15 text-[#fbbf24] border border-[#fbbf24]/30">
                    In Progress
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#fdfbf7]">AI-Powered SPFx Development Workflow</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#d6d3d1] text-sm leading-relaxed mb-8 max-w-2xl">
              I&apos;m working on an AI-assisted development workflow that turns SharePoint requirements into buildable SharePoint Framework (SPFx) solutions. Built with React and TypeScript, it separates code generation from the build process using dedicated AI agents. The generated project runs in an Azure sandbox, where the build agent processes the code and generates an SPFx <code>.sppkg</code> package.
            </p>

            {/* Architecture / Workflow Steps */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-4">Architecture &amp; Workflow</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {spfxWorkflowSteps.map((s) => (
                  <div key={s.step} className="p-3.5 rounded-xl bg-[#07090e]/60 border border-[rgba(245,158,11,0.12)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono-custom text-[#38bdf8] font-bold">{s.step}</span>
                      <span className="text-[10px] text-[#a8a29e]">
                        {s.status}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#fdfbf7] mb-1">{s.label}</p>
                    <p className="text-[11px] text-[#94a3b8] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Implementation details */}
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-2">React &amp; TypeScript Implementation</h4>
                  <p className="text-[#d6d3d1] text-xs leading-relaxed mb-2">
                    React and TypeScript are the primary technologies used to build the application&apos;s interface and workflow. The interface allows users to submit requirements and follow the development process. It presents coding progress, build results, and errors where those features are available.
                  </p>
                  <p className="text-[#d6d3d1] text-xs leading-relaxed">
                    React is used to build the interface and reusable components, while TypeScript provides a structured and typed codebase. Node.js and npm support the development tooling and the SPFx build and packaging process.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-2">Coding &amp; Build Agents</h4>
                  <p className="text-[#d6d3d1] text-xs leading-relaxed mb-2">
                    <strong>Coding Agent:</strong> Generates project code from the user&apos;s requirements and design details using React and TypeScript.
                  </p>
                  <p className="text-[#d6d3d1] text-xs leading-relaxed mb-2">
                    <strong>Build Agent:</strong> Processes the generated project inside the Azure sandbox, runs the required build commands, reports build errors, and produces the <code>.sppkg</code> package when the build succeeds.
                  </p>
                  <p className="text-[#d6d3d1] text-xs leading-relaxed">
                    Separating code generation from building makes it easier to identify issues in the generated code and troubleshoot problems during the build and packaging process.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#a8a29e] font-semibold mb-2">Azure Sandbox</h4>
                  <p className="text-[#d6d3d1] text-xs leading-relaxed">
                    The Azure sandbox provides an isolated environment for processing generated code. The build agent runs the required commands in this environment instead of executing generated code directly in the main application. This separation helps isolate the build process and makes it easier to inspect results and troubleshoot errors.
                  </p>
                </div>
              </div>

              {/* Project Details summary */}
              <div className="space-y-4 bg-[#07090e]/50 p-5 rounded-xl border border-[rgba(245,158,11,0.1)]">
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#fbbf24] mb-1">Overview</h5>
                  <p className="text-xs text-[#d6d3d1]">An AI-assisted workflow for generating React and TypeScript code for SharePoint solutions and producing deployable SPFx packages.</p>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#fbbf24] mb-1">Workflow</h5>
                  <p className="text-xs text-[#d6d3d1]">Requirement &rarr; Design &rarr; Coding Agent &rarr; Azure Sandbox &rarr; Build Agent &rarr; <code>.sppkg</code> Package.</p>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#fbbf24] mb-1">Security</h5>
                  <p className="text-xs text-[#d6d3d1]">
                    Azure Key Vault is integrated to manage sensitive values used by the workflow. This avoids storing secrets directly in plain-text configuration and provides controlled access to the required values through the appropriate identity and permissions.
                  </p>
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#fbbf24] mb-1">My Work</h5>
                  <p className="text-xs text-[#d6d3d1]">
                    I&apos;m working on the React and TypeScript application and the workflow connecting requirements, UI planning, AI-assisted code generation, sandbox execution, and package building. My work also includes testing the workflow, troubleshooting build issues, and integrating Azure Key Vault for secret management.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[rgba(245,158,11,0.15)] pt-6">
              <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-semibold mb-3">Technologies used</p>
              <div className="flex flex-wrap gap-2">
                {spfxTech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}