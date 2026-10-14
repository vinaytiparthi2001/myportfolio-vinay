"use client";
import { Mail } from "lucide-react";

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
    </svg>
  );
}

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18.01 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.14 6.84 12 6.84C12.86 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
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
            Associate Software Engineer &middot; .NET Backend Development &middot; API Integrations &middot; AI Automation
          </p>
          <p className="text-[#a8a29e] text-xs leading-relaxed mt-2">
            Associate Software Engineer working with .NET, REST APIs, Azure services, AI-powered workflows, and third-party integrations.
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
          <a
            href="https://github.com/vinaytiparthi2001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.06)] flex items-center justify-center text-[#d6d3d1] hover:text-[#fbbf24] hover:border-[#fbbf24]/50 hover:bg-[rgba(245,158,11,0.14)] transition-all cursor-pointer"
            aria-label="GitHub"
          >
            <GitHubIcon size={17} />
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
