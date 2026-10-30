"use client";
import { useState, useRef } from "react";
import { Send, Bot, User } from "lucide-react";

const resumeQA: Record<string, string> = {
  net: "I write and maintain .NET and C# REST APIs for our core business modules. This includes setting up services, handling business logic, and working on features like attendance, timesheets, leave approvals, and document Q&A.",
  csharp: "C# is my primary programming language. I use it for backend development, creating REST APIs, handling authentication flows, and connecting external services.",
  workflows: "In the Enterprise AI Assistant project, I built automated workflows for email handling, meeting scheduling, transcript summaries, resume screening, and onboarding/offboarding checklists.",
  ai: "I have hands-on experience working with Azure OpenAI, LLMs, and RAG. I use them to build features that let users interact with internal data and services using natural language.",
  rag: "For document Q&A, I set up RAG using Cosmos DB vector search and Azure OpenAI. The system searches for relevant text in uploaded documents and passes it to the model so it can answer questions based on actual company files.",
  prompting: "I write system instructions and prompt templates to guide AI agents. This helps ensure the AI understands user requests and returns the right data to our backend APIs.",
  api: "I've built and integrated REST APIs with several third-party platforms, including Microsoft Graph API for emails and meetings, Apollo for CRM data, Zendesk and Zoho Desk for ticketing, and Google APIs, using OAuth 2.0 and webhooks.",
  database: "I work with SQL Server for relational data and Cosmos DB for document storage and vector search. I use both for querying, storing, and retrieving application data.",
  spfx: "I'm working on an AI-powered SPFx development workflow built with React and TypeScript. It turns SharePoint requirements into packaged SPFx solutions by separating code generation from the build process, using AI agents and an Azure sandbox to generate and package SharePoint solutions, secured with Azure Key Vault.",
  role: "I am an Associate Software Engineer at TCAIGV in Hyderabad, where I build backend services, .NET APIs, third-party integrations, and AI-assisted workflows.",
  education:
    "I hold a B.Tech in CSE with an AI & ML specialization from Samskruti College of Engineering and Technology (7.63 CGPA) and a Diploma in Computer Engineering (9.4 CGPA).",
  contact: "You can reach me directly at vinaytiparthi2001@gmail.com, on LinkedIn at linkedin.com/in/vinayreddytiparthi, or by phone at +91-9347702744.",
};

const suggestions = [
  "Tell me about your SPFx development workflow project.",
  "How do you implement RAG and vector search?",
  "What is your experience with AI and prompting?",
  "What workflows did you build?",
  "What APIs have you integrated?",
];

interface Message {
  role: "user" | "assistant";
  text: string;
}

function getAnswer(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("spfx") || q.includes("sharepoint") || q.includes("sppkg") || q.includes("sandbox")) return resumeQA.spfx;
  if (q.includes("rag") || q.includes("vector") || q.includes("retrieval") || q.includes("semantic")) return resumeQA.rag;
  if (q.includes("prompt") || q.includes("prompting") || q.includes("few-shot") || q.includes("system prompt")) return resumeQA.prompting;
  if (q.includes("workflow") || q.includes("meeting") || q.includes("transcript") || q.includes("resume") || q.includes("onboard") || q.includes("offboard") || q.includes("lifecycle")) return resumeQA.workflows;
  if (q.includes(".net") || q.includes("dotnet")) return resumeQA.net;
  if (q.includes("c#") || q.includes("csharp")) return resumeQA.csharp;
  if (q.includes("api") || q.includes("integration") || q.includes("graph") || q.includes("zendesk") || q.includes("apollo") || q.includes("zoho")) return resumeQA.api;
  if (q.includes("ai") || q.includes("llm") || q.includes("openai") || q.includes("azure") || q.includes("gpt")) return resumeQA.ai;
  if (q.includes("database") || q.includes("sql") || q.includes("cosmos")) return resumeQA.database;
  if (q.includes("role") || q.includes("current") || q.includes("job") || q.includes("work") || q.includes("company")) return resumeQA.role;
  if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("btech") || q.includes("university")) return resumeQA.education;
  if (q.includes("contact") || q.includes("email") || q.includes("linkedin") || q.includes("reach")) return resumeQA.contact;
  return "I can answer questions about my work with RAG, LLMs, prompt engineering, agent workflows, .NET APIs, and enterprise integrations. Try one of the suggestions above!";
}

export default function ResumeAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I am Vinay's AI Portfolio Assistant. Ask me anything about my hands-on experience with LLMs, RAG, prompt engineering, or .NET enterprise workflows.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const activeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const streamResponse = (fullText: string) => {
    if (activeIntervalRef.current) {
      clearInterval(activeIntervalRef.current);
    }
    setMessages((prev) => [...prev, { role: "assistant", text: "" }]);
    setLoading(false);
    setStreaming(true);

    const words = fullText.split(" ");
    let currentIndex = 0;
    let accumulatedText = "";

    activeIntervalRef.current = setInterval(() => {
      if (currentIndex < words.length) {
        accumulatedText += (currentIndex > 0 ? " " : "") + words[currentIndex];
        const currentTextSnapshot = accumulatedText;
        setMessages((prev) => {
          const updated = [...prev];
          if (updated.length > 0) {
            updated[updated.length - 1] = {
              role: "assistant",
              text: currentTextSnapshot,
            };
          }
          return updated;
        });
        currentIndex++;
        scrollToBottom();
      } else {
        if (activeIntervalRef.current) clearInterval(activeIntervalRef.current);
        setStreaming(false);
        scrollToBottom();
      }
    }, 20);
  };

  const send = (question: string) => {
    if (!question.trim()) return;
    if (activeIntervalRef.current) {
      clearInterval(activeIntervalRef.current);
    }
    setStreaming(false);
    setLoading(false);

    const userMsg: Message = { role: "user", text: question };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      scrollToBottom();
      const answer = getAnswer(question);
      streamResponse(answer);
    }, 250);
  };

  return (
    <section id="assistant" className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
          <div>
            <span className="section-label">Interactive Q&amp;A</span>
            <h2 className="text-xl md:text-2xl font-bold text-[#f1f5f9] mt-1">
              Ask About My Experience
            </h2>
          </div>
          <p className="text-[#94a3b8] text-xs">
            Grounded directly in my resume &amp; engineering work
          </p>
        </div>

        <div className="w-full">
          {/* Suggestion chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-[11px] px-3 py-1.5 rounded-full border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.06)] text-[#d6d3d1] hover:text-[#fbbf24] hover:border-[#fbbf24]/50 hover:bg-[rgba(245,158,11,0.14)] transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[rgba(245,158,11,0.14)] bg-[#12141a]/80">
              <Bot size={15} className="text-[#fbbf24]" />
              <span className="text-xs font-semibold text-[#fbbf24] uppercase tracking-wider font-mono-custom">
                AI Portfolio Assistant
              </span>
              <span className="ml-auto text-[10px] text-[#a8a29e] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] inline-block animate-pulse" />
                Streaming active
              </span>
            </div>

            <div ref={chatContainerRef} className="h-64 overflow-y-auto p-4 space-y-3.5 scroll-smooth">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-[#f59e0b]/15 border border-[#f59e0b]/30"
                        : "bg-[#fb7185]/15 border border-[#fb7185]/30"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={13} className="text-[#fbbf24]" />
                    ) : (
                      <User size={13} className="text-[#fb7185]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[85%] px-3.5 py-2 rounded-xl text-xs leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-[#12141a]/90 text-[#fdfbf7] border border-[rgba(245,158,11,0.18)] shadow-sm"
                        : "bg-[#fb7185]/20 text-[#fff1f2] border border-[#fb7185]/35 shadow-sm"
                    }`}
                  >
                    {msg.text}
                    {streaming && i === messages.length - 1 && (
                      <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#fbbf24] animate-pulse align-middle" />
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center">
                    <Bot size={13} className="text-[#fbbf24]" />
                  </div>
                  <div className="bg-[#12141a] border border-[rgba(245,158,11,0.18)] rounded-xl px-3.5 py-2 flex gap-1.5 items-center">
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-bounce"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-[rgba(245,158,11,0.12)] px-3.5 py-2.5 flex gap-2 bg-[#0b0c10]/70">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask e.g. How do you implement RAG pipelines and prompt guardrails?"
                className="flex-1 bg-transparent text-xs text-[#fdfbf7] placeholder-[#78716c] outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || streaming || loading}
                className="w-7 h-7 rounded-lg bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#fbbf24] hover:bg-[#f59e0b]/30 transition-all disabled:opacity-30 cursor-pointer"
              >
                <Send size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
