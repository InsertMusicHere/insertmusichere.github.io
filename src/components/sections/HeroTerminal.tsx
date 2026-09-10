"use client";
import { useEffect, useState, useRef } from "react";

// ──────────────────────────────────────────────────────────────
// The terminal script — fun, playful, non-coder friendly
// ──────────────────────────────────────────────────────────────
type ScriptLine =
  | { type: "prompt"; text: string }
  | { type: "output"; text: string; color?: string }
  | { type: "gap" };

const SCRIPT: ScriptLine[] = [
  { type: "prompt", text: "open-portfolio --person saumitra" },
  { type: "output", text: "👀  Loading your next ideal candidate...", color: "text-[#8b8ba7]" },
  { type: "output", text: "✅  Found! (Only took 8 years to build up to this)", color: "text-[#14b8a6]" },
  { type: "gap" },
  { type: "prompt", text: "whoami" },
  { type: "output", text: "🙋  Saumitra Panchal — Software Developer", color: "text-[#f1f0eb]" },
  { type: "output", text: "📍  Balancing AI-driven efficiency with necessary human intuition to ensure that while LLMs accelerate development, architectural integrity remains robust.", color: "text-[#8b8ba7]" },
  { type: "gap" },
  { type: "prompt", text: "list-superpowers --top 3" },
  { type: "output", text: "⚡  #1  Python & Typescript", color: "text-[#f59e0b]" },
  { type: "output", text: "🤖  #2  AI & Machine Learning", color: "text-[#f59e0b]" },
  { type: "output", text: "🔬  #3  Data Engineering", color: "text-[#f59e0b]" },
  { type: "gap" },
  { type: "prompt", text: "check-experience --years" },
  { type: "output", text: "📅  8+ years  |  20+ hobby projects  |  10 freelance gigs", color: "text-[#14b8a6]" },
  { type: "output", text: "☕  Runs on coffee. Debugs at 2am. Ships on time.", color: "text-[#8b8ba7]" },
  { type: "gap" },
  { type: "prompt", text: "ask --question 'should I hire this person?'" },
  { type: "output", text: "🎯  Calculating...", color: "text-[#8b8ba7]" },
  { type: "output", text: "✨  Output: YES. Scroll down to find out why. ↓", color: "text-[#f43f5e]" },
];

const CHAR_DELAY = 18;     // ms per character
const LINE_DELAY = 300;    // ms between lines
const PROMPT_PAUSE = 500;  // ms after typing a prompt before output appears

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<{ line: ScriptLine; typed: string; done: boolean }[]>([]);
  const [ctaVisible, setCtaVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const line = SCRIPT[i];

        if (line.type === "gap") {
          setVisibleLines((prev) => [...prev, { line, typed: "", done: true }]);
          await sleep(LINE_DELAY);
          continue;
        }

        // Add the line with empty typed string
        setVisibleLines((prev) => [...prev, { line, typed: "", done: false }]);
        await sleep(50);

        // Type it out character by character
        const fullText = line.text;
        for (let c = 0; c <= fullText.length; c++) {
          if (cancelled) return;
          setVisibleLines((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { line, typed: fullText.slice(0, c), done: c === fullText.length };
            return updated;
          });
          await sleep(CHAR_DELAY);
        }

        // Extra pause after prompts
        if (line.type === "prompt") await sleep(PROMPT_PAUSE);
        await sleep(LINE_DELAY);

        // Scroll terminal to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }

      await sleep(600);
      if (!cancelled) setCtaVisible(true);
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#14b8a6]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Tooltip for non-techies */}
      {/* <div className="mb-6 flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-sm font-body text-[#f59e0b]">
        <span className="animate-pulse">✨</span>
        <span>This box types itself — no tech knowledge needed, just enjoy the show!</span>
      </div> */}

      {/* Terminal window */}
      <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl glow-amber">
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c2e] border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-[#f43f5e]" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
          <span className="w-3 h-3 rounded-full bg-[#14b8a6]" />
          <span className="ml-3 text-xs font-mono text-[#8b8ba7] tracking-wide">
            saumitra@portfolio ~ — whoami
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          className="bg-[#0d0d1a] p-5 md:p-7 min-h-[420px] max-h-[540px] overflow-y-auto font-mono text-sm leading-relaxed scroll-smooth"
        >
          {visibleLines.map((entry, i) => {
            if (entry.line.type === "gap") return <div key={i} className="h-3" />;

            if (entry.line.type === "prompt") {
              return (
                <div key={i} className="flex items-start gap-2 mb-1">
                  <span className="text-[#14b8a6] select-none shrink-0">❯</span>
                  <span className="text-[#f1f0eb]">
                    {entry.typed}
                    {!entry.done && (
                      <span className="inline-block w-2 h-4 bg-[#f59e0b] ml-0.5 cursor-blink align-middle" />
                    )}
                  </span>
                </div>
              );
            }

            return (
              <div key={i} className={`ml-4 mb-0.5 ${(entry.line as { color?: string }).color ?? "text-[#f1f0eb]"}`}>
                {entry.typed}
                {!entry.done && (
                  <span className="inline-block w-1.5 h-4 bg-current ml-0.5 cursor-blink align-middle opacity-70" />
                )}
              </div>
            );
          })}

          {/* Idle prompt after script */}
          {ctaVisible && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#14b8a6]">❯</span>
              <span className="inline-block w-2 h-4 bg-[#f59e0b] cursor-blink" />
            </div>
          )}
        </div>
      </div>

      {/* CTA buttons — fade in after script */}
      {/* <div
        className={`mt-8 flex flex-wrap justify-center gap-4 transition-all duration-700 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <a
          href="/assets/pdf/SaumitraP_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 border border-white/15 text-[#f1f0eb] rounded-full font-display font-semibold hover:border-[#f59e0b]/50 hover:text-[#f59e0b] hover:scale-105 transition-all duration-200"
        >
          📄 Download CV
        </a>
        <a
          href="#work"
          className="px-7 py-3 border border-white/15 text-[#f1f0eb] rounded-full font-display font-semibold hover:border-[#f59e0b]/50 hover:text-[#f59e0b] hover:scale-105 transition-all duration-200"
        >
          🚀 View Projects
        </a>
        <a
          href="#contact"
          className="px-7 py-3 border border-[#14b8a6]/30 text-[#14b8a6] rounded-full font-display font-semibold hover:bg-[#14b8a6]/10 hover:scale-105 transition-all duration-200"
        >
          👋 Say Hello
        </a>
      </div> */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8b8ba7]">
        <span className="text-xs font-body tracking-widest uppercase">Scroll ⬇️ Please</span>
        <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#f59e0b] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
