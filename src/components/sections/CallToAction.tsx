"use client";
import { useEffect, useRef } from "react";

const contactLinks = [
  {
    emoji: "📧",
    label: "Email",
    value: "saumitrapanchal@gmail.com",
    href: "mailto:saumitrapanchal@gmail.com",
    cta: "Write Me",
    color: "hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/5",
    accentColor: "text-[#f59e0b]",
  },
  {
    emoji: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/saumitrapanchal",
    href: "https://www.linkedin.com/in/saumitrapanchal",
    cta: "Let's Connect",
    color: "hover:border-[#14b8a6]/40 hover:bg-[#14b8a6]/5",
    accentColor: "text-[#14b8a6]",
  },
  {
    emoji: "🐙",
    label: "GitHub",
    value: "github.com/InsertMusicHere",
    href: "https://github.com/InsertMusicHere",
    cta: "See My Code",
    color: "hover:border-[#818cf8]/40 hover:bg-[#818cf8]/5",
    accentColor: "text-[#818cf8]",
  },
];

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-fade py-28 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#f59e0b]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative text-center">
        {/* Section tag */}
        <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">06 / Contact</span>

        {/* Headline */}
        <h2 className="font-display font-bold text-4xl md:text-6xl text-[#f1f0eb] mt-4 mb-6 leading-tight">
          Let&apos;s build something<br />
          <span className="text-[#f59e0b]">genuinely great</span> together
        </h2>

        {/* Sub-copy */}
        <p className="text-[#8b8ba7] font-body text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Whether you have a project in mind, a role to fill, or just want to chat about
          Python, Typescript, AI or anything realted to programming, my inbox is always open.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group bg-[#1c1c2e] rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:-translate-y-1 ${link.color} text-left`}
            >
              <div className="text-3xl mb-3">{link.emoji}</div>
              <div className="font-display font-semibold text-[#f1f0eb] text-sm mb-1">{link.label}</div>
              <div className="text-[#8b8ba7] font-mono text-xs mb-4 break-all">{link.value}</div>
              <div className={`inline-flex items-center gap-1 text-xs font-mono ${link.accentColor} group-hover:gap-2 transition-all`}>
                {link.cta} <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/assets/pdf/SaumitraP_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/15 text-[#f1f0eb] rounded-full font-display font-semibold text-lg hover:border-[#f59e0b]/50 hover:text-[#f59e0b] hover:scale-105 transition-all duration-200"
          >
            📄 Download CV
          </a>
          {/* <a
            href="https://github.com/InsertMusicHere"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/15 text-[#f1f0eb] rounded-full font-display font-semibold text-lg hover:border-[#f59e0b]/50 hover:text-[#f59e0b] hover:scale-105 transition-all duration-200"
          >
            🌐 Visit My Github
          </a> */}
        </div>

        {/* Fun closing note */}
        <p className="mt-12 text-[#8b8ba7] font-mono text-xs">
          saumitrapanchal@gmail.com · Based in Toronto, Canada · Open to remote
        </p>
      </div>
    </section>
  );
}
