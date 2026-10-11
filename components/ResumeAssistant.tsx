"use client";
import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

const resumeQA: Record<string, string> = {
  net: "Vinay works with .NET (C#) as his primary backend framework — building REST APIs, business logic, and enterprise application modules including Attendance, Timesheets, Leave Management, Marketing, and Document Q&A.",
  csharp: "C# is Vinay's core programming language, used for all backend development including REST APIs, business workflow automation, and AI/LLM integrations.",
  workflows: "In the Enterprise AI Assistant project, Vinay built end-to-end automated workflows for email handling, meeting setup, transcript processing, AI resume screening, and employee onboarding/offboarding lifecycle checklists.",
  api: "Vinay has built and integrated REST APIs extensively — developing internal application APIs and connecting external platforms including Microsoft Graph API, Apollo, Zendesk, Zoho Desk, and Google APIs using OAuth 2.0 and Webhooks.",
  ai: "Vinay has hands-on experience with Azure OpenAI, LLMs, RAG (Retrieval-Augmented Generation), vector embeddings, intent handling, agent workflows, and prompting — used to build AI-powered enterprise features.",
  rag: "Vinay implemented RAG using Cosmos DB vector search to enable context-aware document Q&A — retrieving relevant knowledge chunks and injecting them into LLM prompts for accurate, grounded responses.",
  database: "Vinay works with SQL Server for relational data and Cosmos DB for NoSQL/vector storage. He uses both for application data storage, querying, retrieval, and vector search for RAG.",
  role: "Vinay is an Associate Software Engineer at Tech Cubes AI & Consultants in Hyderabad, working since June 2025 on an enterprise application covering employee activities, business workflows, document tasks, and support operations.",
  education:
    "Vinay holds a B.Tech in Computer Science and Engineering (AIML specialization) from Samskruti College of Engineering and Technology (2021–2024, CGPA 7.63) and a Diploma in Computer Engineering from Samskruti College of Polytechnic (2018–2021, CGPA 9.4).",
  contact: "You can reach Vinay at vinaytiparthi2001@gmail.com, on LinkedIn at linkedin.com/in/vinayreddytiparthi, or by phone at +91-9347702744.",
};

const suggestions = [
  "What workflows did Vinay build in the Enterprise project?",
  "What experience does Vinay have with .NET?",
  "What APIs has Vinay worked with?",
  "What is Vinay's experience with AI?",
  "Tell me about Vinay's current role.",
];

interface Message {
  role: "user" | "assistant";
  text: string;
}

function getAnswer(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("workflow") || q.includes("email") || q.includes("meeting") || q.includes("transcript") || q.includes("resume") || q.includes("onboard") || q.includes("offboard") || q.includes("enterprise")) return resumeQA.workflows;
  if (q.includes(".net") || q.includes("dotnet")) return resumeQA.net;
  if (q.includes("c#") || q.includes("csharp")) return resumeQA.csharp;
  if (q.includes("api") || q.includes("integration") || q.includes("graph") || q.includes("zendesk") || q.includes("apollo")) return resumeQA.api;
  if (q.includes("rag") || q.includes("retrieval")) return resumeQA.rag;
  if (q.includes("ai") || q.includes("llm") || q.includes("openai") || q.includes("azure") || q.includes("artificial")) return resumeQA.ai;
  if (q.includes("database") || q.includes("sql") || q.includes("cosmos")) return resumeQA.database;
  if (q.includes("role") || q.includes("current") || q.includes("job") || q.includes("work") || q.includes("company")) return resumeQA.role;
  if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("btech") || q.includes("university")) return resumeQA.education;
  if (q.includes("contact") || q.includes("email") || q.includes("linkedin") || q.includes("reach")) return resumeQA.contact;
  return "I can answer questions about Vinay's workflows (emails, meetings, transcripts, resume screening, onboarding/offboarding), .NET experience, APIs worked with, AI/LLM skills, databases, and current role. Try one of the suggestions above!";
}

export default function ResumeAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm a resume assistant for Vinay Kumar Reddy. Ask me anything about his experience, skills, projects, or education.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = (question: string) => {
    if (!question.trim()) return;
    const userMsg: Message = { role: "user", text: question };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: getAnswer(question) }]);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="assistant" className="py-12 bg-[#06101d]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
          <div>
            <span className="section-label">Interactive Q&amp;A</span>
            <h2 className="text-xl md:text-2xl font-bold text-[#e2e8f0] mt-1">
              Ask About My Experience
            </h2>
          </div>
          <p className="text-[#718096] text-xs">
            Grounded directly in my resume information
          </p>
        </div>

        <div className="w-full">
          {/* Suggestion chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-[11px] px-2.5 py-1 rounded-full border border-[rgba(99,179,237,0.2)] text-[#94a3b8] hover:text-[#63b3ed] hover:border-[#63b3ed]/40 transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[rgba(99,179,237,0.08)] bg-[#0a1628]/60">
              <Bot size={15} className="text-[#63b3ed]" />
              <span className="text-xs font-semibold text-[#63b3ed] uppercase tracking-wider">
                Resume Assistant
              </span>
              <span className="ml-auto text-[10px] text-[#718096] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#68d391] inline-block" />
                Live context
              </span>
            </div>

            <div className="h-56 overflow-y-auto p-3.5 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-[#63b3ed]/15 border border-[#63b3ed]/25"
                        : "bg-[#b794f4]/15 border border-[#b794f4]/25"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={13} className="text-[#63b3ed]" />
                    ) : (
                      <User size={13} className="text-[#b794f4]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[85%] px-3 py-1.5 rounded-xl text-xs leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-[#0a1628] text-[#94a3b8] border border-[rgba(99,179,237,0.08)]"
                        : "bg-[#b794f4]/15 text-[#e2e8f0] border border-[#b794f4]/20"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#63b3ed]/15 border border-[#63b3ed]/25 flex items-center justify-center">
                    <Bot size={13} className="text-[#63b3ed]" />
                  </div>
                  <div className="bg-[#0a1628] border border-[rgba(99,179,237,0.08)] rounded-xl px-3 py-1.5 flex gap-1 items-center">
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-[#63b3ed] animate-bounce"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-[rgba(99,179,237,0.08)] px-3 py-2 flex gap-2 bg-[#081324]/50">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask e.g. What APIs or .NET modules has Vinay built?"
                className="flex-1 bg-transparent text-xs text-[#e2e8f0] placeholder-[#4a5568] outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim()}
                className="w-7 h-7 rounded-lg bg-[#63b3ed]/15 border border-[#63b3ed]/25 flex items-center justify-center text-[#63b3ed] hover:bg-[#63b3ed]/25 transition-all disabled:opacity-30 cursor-pointer"
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
