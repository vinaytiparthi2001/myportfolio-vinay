"use client";
import { Mail } from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(245,158,11,0.15)] bg-[#0b0c10] py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[rgba(245,158,11,0.08)]">
        <div className="text-center md:text-left max-w-lg">
          <p className="text-[#fdfbf7] font-semibold text-base">Vinay Kumar Reddy</p>
          <p className="text-[#fbbf24] text-xs font-medium mt-0.5">
            AI &amp; RAG Engineer · .NET Backend Developer · Workflow Automation
          </p>
          <p className="text-[#a8a29e] text-xs leading-relaxed mt-2">
            Associate Software Engineer specializing in Azure OpenAI (GPT-4o), RAG architectures with Cosmos DB vector search, prompt engineering, and scalable .NET enterprise integrations.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <a
            href="mailto:vinaytiparthi2001@gmail.com"
            className="w-10 h-10 rounded-lg border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.06)] flex items-center justify-center text-[#d6d3d1] hover:text-[#fbbf24] hover:border-[#fbbf24]/50 hover:bg-[rgba(245,158,11,0.14)] transition-all cursor-pointer"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <a
            href="https://linkedin.com/in/vinayreddytiparthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.06)] flex items-center justify-center text-[#d6d3d1] hover:text-[#fb7185] hover:border-[#fb7185]/50 hover:bg-[rgba(251,113,133,0.14)] transition-all cursor-pointer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={17} />
          </a>
        </div>
      </div>

      <div className="pt-6 text-center">
        <p className="text-[#78716c] text-xs">
          &copy; 2026 Vinay Kumar Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
