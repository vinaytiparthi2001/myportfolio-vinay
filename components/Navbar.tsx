"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#assistant", label: "Ask AI" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI / RAG" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0c10]/85 backdrop-blur-xl border-b border-[rgba(245,158,11,0.15)] shadow-xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="flex items-center gap-2.5 group no-underline"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f59e0b] via-[#fbbf24] to-[#fb7185] flex items-center justify-center text-[#0b0c10] text-sm font-extrabold shadow-md shadow-amber-500/20">
              V
            </span>
            <span className="text-sm font-semibold text-[#fdfbf7] group-hover:text-[#fbbf24] transition-colors">
              Vinay Kumar Reddy
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#a8a29e] hover:text-[#fbbf24] text-sm font-medium transition-colors cursor-pointer no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-lg border border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b]/10 hover:border-[#fbbf24] transition-all no-underline"
            >
              Let&apos;s Connect
            </a>
            <button
              className="md:hidden text-[#a8a29e] hover:text-[#fbbf24] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0b0c10]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-[#fdfbf7] hover:text-[#fbbf24] transition-colors cursor-pointer no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#fb7185] text-[#0b0c10] font-bold text-lg shadow-lg no-underline"
          >
            Let&apos;s Connect
          </a>
        </div>
      )}
    </>
  );
}
