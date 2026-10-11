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
            ? "bg-[#050d1a]/90 backdrop-blur-xl border-b border-[rgba(99,179,237,0.08)] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#63b3ed] to-[#b794f4] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/20">
              V
            </span>
            <span className="text-sm font-semibold text-[#e2e8f0] group-hover:text-[#63b3ed] transition-colors">
              Vinay Kumar Reddy
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#718096] hover:text-[#63b3ed] text-sm font-medium transition-colors cursor-pointer no-underline"
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
              className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-lg border border-[#63b3ed]/40 text-[#63b3ed] hover:bg-[#63b3ed]/10 transition-all no-underline"
            >
              Let&apos;s Connect
            </a>
            <button
              className="md:hidden text-[#718096] hover:text-[#63b3ed] transition-colors"
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
        <div className="fixed inset-0 z-40 bg-[#050d1a]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-[#e2e8f0] hover:text-[#63b3ed] transition-colors cursor-pointer no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#63b3ed] to-[#b794f4] text-white font-semibold text-lg shadow-lg no-underline"
          >
            Let&apos;s Connect
          </a>
        </div>
      )}
    </>
  );
}
