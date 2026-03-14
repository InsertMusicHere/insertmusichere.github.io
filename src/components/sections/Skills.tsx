"use client";
import { useEffect, useRef, useState } from "react";
import { skillCategories, services } from "@/data/skills";

function SkillBar({ name, level, percentage }: { name: string; level: string; percentage: number }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const levelColor =
    level === "Advanced" ? "bg-[#f59e0b]" :
    level === "Intermediate" ? "bg-[#14b8a6]" :
    "bg-[#8b8ba7]";

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-[#f1f0eb] text-sm">{name}</span>
        <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
          level === "Advanced" ? "bg-[#f59e0b]/15 text-[#f59e0b]" :
          level === "Intermediate" ? "bg-[#14b8a6]/15 text-[#14b8a6]" :
          "bg-white/5 text-[#8b8ba7]"
        }`}>
          {level}
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full ${levelColor} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: filled ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="section-fade py-24 px-4 bg-[#11111a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">02 / Skills</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f1f0eb] mt-3">
            What I&apos;m good at<br />
            <span className="text-[#14b8a6]">(and honest about)</span>
          </h2>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-[#1c1c2e] rounded-2xl p-6 border border-white/5">
              <h3 className="font-display font-semibold text-lg text-[#f1f0eb] mb-5 flex items-center gap-2">
                <span>{cat.emoji}</span> {cat.title}
              </h3>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Services / strengths */}
        <div className="mb-4">
          <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">What I do best</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-[#1c1c2e] rounded-2xl p-6 border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{svc.emoji}</div>
              <h3 className="font-display font-semibold text-[#f1f0eb] text-lg mb-3">{svc.title}</h3>
              <p className="text-[#8b8ba7] font-body text-sm leading-relaxed mb-4">{svc.description}</p>
              <ul className="space-y-1.5">
                {svc.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs font-body text-[#8b8ba7]">
                    <span className="w-1 h-1 rounded-full bg-[#f59e0b] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
