"use client";
import { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { references } from "@/data/references";

export default function References() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="references" ref={sectionRef} className="section-fade py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">05 / References</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f1f0eb] mt-3">
          Don&apos;t take my word for it,<br />
          <span className="text-[#14b8a6]">take theirs</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex gap-5">
            {references.map((ref) => (
              <div
                key={ref.id}
                className="flex-none w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-[#1c1c2e] rounded-2xl p-7 border border-white/5 hover:border-[#14b8a6]/30 transition-all duration-300 flex flex-col min-h-[340px]"
              >
                {/* Quote mark */}
                <div className="text-[#14b8a6]/30 font-display text-7xl leading-none mb-2 select-none">&ldquo;</div>

                {/* Quote text */}
                <p className="text-[#8b8ba7] font-body text-sm leading-relaxed flex-1 mb-6 -mt-4">
                  {ref.quote}
                </p>

                {/* Person */}
                <div className="border-t border-white/5 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-display font-semibold text-[#f1f0eb] text-sm">{ref.name}</div>
                      <div className="text-[#8b8ba7] font-mono text-xs mt-0.5">{ref.role}</div>
                      <div className="text-[#14b8a6] font-mono text-xs">{ref.company}</div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {ref.pdfPath && (
                      <a
                        href={ref.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-[#f59e0b] text-xs font-mono hover:bg-[#f59e0b]/20 transition-all"
                      >
                        📄 Read Letter
                      </a>
                    )}
                    {ref.linkedIn && (
                      <a
                        href={ref.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-full text-[#8b8ba7] text-xs font-mono hover:border-white/25 hover:text-[#f1f0eb] transition-all"
                      >
                        🔗 LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#8b8ba7] hover:border-[#f59e0b]/50 hover:text-[#f59e0b] transition-all"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#8b8ba7] hover:border-[#f59e0b]/50 hover:text-[#f59e0b] transition-all"
              aria-label="Next"
            >
              →
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/saumitrapanchal/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#14b8a6] font-mono text-sm hover:gap-3 transition-all pl-1"
          >
            All LinkedIn recommendations ↗
          </a>
        </div>
      </div>
    </section>
  );
}
