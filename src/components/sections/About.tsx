"use client";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  target: number;
  suffix: string;
  labelMobile: string;
  labelDesktop: string;
  emoji: string;
}

function AnimatedStat({ target, suffix, labelMobile, labelDesktop, emoji }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setCount(Math.round(ease * target));

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="text-center p-5 bg-[#1c1c2e] rounded-2xl border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300 hover:scale-105"
    >
      <div className="text-3xl mb-2">{emoji}</div>

      <div className="font-display font-bold text-3xl text-[#f59e0b]">
        {count}{suffix}
      </div>

      <div className="text-[#8b8ba7] text-sm font-body mt-1">
        <span className="lg:hidden md:hidden">{labelMobile}</span>
        <span className="hidden md:inline lg:inline">{labelDesktop}</span>
      </div>
    </div>
  );
}


export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-fade py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">01 / About</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f1f0eb] mt-3">
          The human behind<br />
          <span className="text-[#f59e0b]">the code</span>
        </h2>
      </div>

      <div className="gap-12 items-center">
        {/* Bio */}
        <div className="space-y-5">
          <p className="text-[#8b8ba7] font-body text-lg leading-relaxed">
            With more than <span className="text-[#f1f0eb] font-medium">5 years of experience</span> in Software
            Engineering, I&apos;ve honed the skill of connecting user needs with tech capabilities.
          </p>
          <p className="text-[#8b8ba7] font-body leading-relaxed">
            I'm someone who genuinely enjoys learning, whether that's through hobby projects after work, exploring blogs and YouTube videos, or experimenting with new technologies on weekends. I'm naturally curious about developments in both software engineering and AI, and that curiosity led me to pursue and complete a <span className="text-[#f1f0eb] font-medium">second master's degree in Artificial Intelligence</span> with a focus on deep learning.
            <br /><br />
            I've always believed in learning by doing. To challenge myself further, I decided to learn <span className="text-[#f1f0eb] font-medium">Dart (Flutter)</span> and used it in my thesis project so I could get hands-on experience beyond my core stack.
            <br /><br />
            In my current organization, I was onboarded as a Backend Developer working primarily with <span className="text-[#f1f0eb] font-medium">Python, Kafka, MongoDB, and data-driven systems.</span> However, when I saw opportunities to support my teammates with frontend features, I stepped in and worked with <span className="text-[#f1f0eb] font-medium">Angular</span> as well. I Volunteered as a Backend Engineer on EPAMs internal <span className="text-[#f1f0eb] font-medium">AI platform</span>, contributing FastAPI services, observability, and tracing using <span className="text-[#f1f0eb] font-medium">Langfuse.</span>
            <br /><br />
            As for for my next adventure, I'm looking for a place where growth, ownership, and continuous learning are part of the culture. I know for a fact that I'll continue working in software development long term, and I'm comfortable taking on new responsibilities and challenges but one thing that won't change is my commitment to continuously improving myself and staying updated with evolving technologies.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Python", "AI/ML", "Data Engineering", "Backend Dev", "Typescript"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-[#f59e0b] text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-4 pb-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#14b8a6] font-body font-medium hover:gap-4 transition-all"
            >
              Let&apos;s talk <span>→</span>
            </a>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
      <AnimatedStat
        target={8}
        suffix="+"
        labelMobile="Years Exp."
        labelDesktop="Total Years Experience"
        emoji="🏆"
      />

      <AnimatedStat
        target={20}
        suffix=""
        labelMobile="Hobby Projects"
        labelDesktop="Hobby Projects"
        emoji="🔧"
      />

      <AnimatedStat
        target={5}
        suffix=""
        labelMobile="Gigs"
        labelDesktop="Freelance Gigs"
        emoji="💼"
      />
    </div>
    </section>
  );
}
