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
    <footer className="border-t border-[rgba(99,179,237,0.08)] bg-[#050d1a] py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[rgba(99,179,237,0.05)]">
        <div className="text-center md:text-left">
          <p className="text-[#e2e8f0] font-semibold">Vinay Kumar Reddy</p>
          <p className="text-[#718096] text-xs mt-0.5">
            Associate Software Engineer · .NET · AI Workflows · Third-party Integrations
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:vinaytiparthi2001@gmail.com"
            className="w-9 h-9 rounded-lg border border-[rgba(99,179,237,0.2)] flex items-center justify-center text-[#718096] hover:text-[#63b3ed] hover:border-[#63b3ed]/40 transition-all"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://linkedin.com/in/vinayreddytiparthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-[rgba(99,179,237,0.2)] flex items-center justify-center text-[#718096] hover:text-[#b794f4] hover:border-[#b794f4]/40 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
        </div>
      </div>

      <div className="pt-6 text-center">
        <p className="text-[#718096] text-xs">
          &copy; 2026 Vinay Kumar Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
