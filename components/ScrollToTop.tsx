"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-[rgba(245,158,11,0.35)] bg-[#12141a]/90 backdrop-blur-md text-[#fbbf24] shadow-lg shadow-black/60 hover:bg-[#f59e0b] hover:text-[#0b0c10] hover:scale-110 active:scale-95 transition-all cursor-pointer"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  );
}
