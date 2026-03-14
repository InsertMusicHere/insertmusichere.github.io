"use client";
import { useEffect, useRef, useState } from "react";
import { certifications } from "@/data/certifications";

const INITIAL_VISIBLE = 3;

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "ai-ml": { bg: "bg-black", text: "text-[#f59e0b]", border: "border-[#f59e0b]/25" },
  "cloud": { bg: "bg-[#14b8a6]/10", text: "text-[#14b8a6]", border: "border-[#14b8a6]/25" },
  "data": { bg: "bg-[#818cf8]/10", text: "text-[#818cf8]", border: "border-[#818cf8]/25" },
  "dev": { bg: "bg-[#f43f5e]/10", text: "text-[#f43f5e]", border: "border-[#f43f5e]/25" },
  "other": { bg: "bg-white/5", text: "text-[#8b8ba7]", border: "border-white/10" },
  "degree": { bg: "bg-[#1b8142]", text: "text-white", border: "border-white/10" },
  "db": { bg: "bg-white/45", text: "text-white", border: "border-white/10" },
};

const categoryLabels: Record<string, string> = {
  "ai-ml": "AI & ML",
  "cloud": "Cloud",
  "data": "Data",
  "dev": "Development",
  "other": "Other",
  "degree":"Degree",
  "db":"DB"
};

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const expandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visible = expanded ? certifications : certifications.slice(0, INITIAL_VISIBLE);
  const hidden = certifications.length - INITIAL_VISIBLE;

  return (
    <section id="certifications" ref={sectionRef} className="section-fade py-24 px-4 bg-[#11111a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">04 / Certifications</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f1f0eb] mt-3">
            Proof that I actually<br />
            <span className="text-[#f59e0b]">learned the stuff</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {visible.map((cert, i) => {
            const colors = categoryColors[cert.category] ?? categoryColors.other;
            return (
              <div
                key={cert.id}
                className="noise-card group bg-[#1c1c2e] rounded-2xl p-6 border border-white/5 hover:border-[#f59e0b]/25 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
                style={{
                  animationDelay: `${i * 80}ms`,
                  animation: "fadeUp 0.5s ease forwards",
                  opacity: 50,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{cert.badgeEmoji}</span>
                  <span className={`shrink-0 text-xs font-mono px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
                    {categoryLabels[cert.category]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-[#f1f0eb] text-sm leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[#8b8ba7] font-mono text-xs">{cert.issuer}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-[#8b8ba7] font-mono text-xs">{cert.date}</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#f59e0b] text-xs font-mono hover:gap-2 transition-all duration-200"
                  >
                    Verify ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / collapse */}
        <div
          ref={expandRef}
          className="overflow-hidden transition-all duration-500"
        />

        {!expanded && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setExpanded(true)}
              className="group flex items-center gap-3 px-7 py-3 border border-white/10 rounded-full text-[#f1f0eb] font-display font-medium hover:border-[#f59e0b]/50 hover:text-[#f59e0b] transition-all duration-200"
            >
              <span>View all {hidden} more certifications</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>
          </div>
        )}

        {expanded && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setExpanded(false)}
              className="group flex items-center gap-3 px-7 py-3 border border-white/10 rounded-full text-[#8b8ba7] font-display font-medium hover:border-white/25 hover:text-[#f1f0eb] transition-all duration-200"
            >
              <span>Show less</span>
              <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
