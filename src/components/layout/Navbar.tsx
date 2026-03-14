"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#certifications", label: "Certs" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-xl text-[#f1f0eb] tracking-tight hover:text-[#f59e0b] transition-colors"
        >
          SP<span className="text-[#f59e0b]">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href.slice(1))}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? "text-[#f59e0b] bg-[#f59e0b]/10"
                    : "text-[#8b8ba7] hover:text-[#f1f0eb]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/assets/pdf/Resume - Saumitra - Mar 26.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#f59e0b] text-[#0a0a0f] rounded-full text-sm font-display font-semibold hover:bg-[#fbbf24] transition-all duration-200 hover:scale-105"
        >
          Download CV
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#f1f0eb] p-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#11111a]/95 backdrop-blur-xl border-t border-white/5">
          <ul className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => { setActive(link.href.slice(1)); setMenuOpen(false); }}
                  className="block py-2 text-[#8b8ba7] hover:text-[#f59e0b] transition-colors font-body"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/assets/pdf/Resume - Saumitra - Mar 26.pdf"
                target="_blank"
                className="block text-center py-2 bg-[#f59e0b] text-[#0a0a0f] rounded-full text-sm font-display font-semibold"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
