"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  { title: "Telegram Bot", category: "python", emoji: "📱", description: "A fully functional Telegram bot built with Python. Watch the demo on YouTube.", link: "https://youtu.be/6ICS8JRKuPk?si=7ZPieKO_dRjNtYSz", cta: "Watch Demo" },
  { title: "Built an API to scan uploaded files", category: "python", emoji: "📁", description: "Building a File Scanner with FastAPI, Streamlit, and VirusTotal API", link: "https://medium.com/@saumitrapanchal/building-a-file-scanner-with-fastapi-streamlit-and-virustotal-api-b430fba048cf", cta: "Visit Site" },
  { title: "Streamlit Article", category: "python", emoji: "📝", description: "How Streamlit goes beyond data science: a practical guide for Python devs.", link: "https://medium.com/@saumitrapanchal/streamlit-stlite-beyond-data-science-applications-23de64648883", cta: "Read Article" },
  { title: "Employee Leave Management System", category: "python", emoji: "📝", description: "Flask-based web application designed to manage employee leave requests and attendance efficiently", link: "https://github.com/InsertMusicHere/HRMS_software_proto", cta: "Visit Repo" },
  { title: "Typescript Indexed DB Blog", category: "typescript", emoji: "📊", description: "Offline First App with IndexedDB and TypeScript", link: "https://medium.com/@saumitrapanchal/when-the-internet-ghosts-you-building-an-offline-first-app-with-indexeddb-and-typescript-2705cb41a6ac", cta: "Read More" },
  { title: "AI SaaS Platform with LLMs", category: "typescript", emoji: "📊", description: " AI SaaS Platform, an innovative solution packed with Two powerful AI tools, all powered by cutting-edge technologies like Next.js 13 App Router, React, TailwindCSS, Prisma, and more.", link: "https://github.com/InsertMusicHere/Mi_saas_anto", cta: "Visit Repo" },
  { title: "Object Detection", category: "ai-ml & python", emoji: "👁️", description: "Deep dive into bounding box detection and YOLO. Published on Medium.", link: "https://medium.com/@saumitrapanchal/thinking-inside-the-bounding-box-3b1cea2b54de", cta: "Read Article" },
  { title: "Flutter Object Detection", category: "flutter", emoji: "📱", description: "Code for Object detection blog", link: "https://github.com/InsertMusicHere/Object_Detection_flutter_nmims_thesis", cta: "Visit Repo" },
  { title: "RAG App", category: "ai-ml & python", emoji: "📃", description: "a RAG app where nothing is a black box.", link: "https://rag-howto.vercel.app/", cta: "Visit App" },
  { title: "Football Analysis using CV", category: "ai-ml & python", emoji: "🤖", description: "A project that leverages machine learning, computer vision, and deep learning to build a football analysis system.", link: "https://github.com/InsertMusicHere/football_analysis_my_updates", cta: "Visit Repo" },
  { title: "Pfizer ML App", category: "ai-ml & python", emoji: "💊", description: "Streamlit ML web app to predict daily food orders. Helped reduced food wastage meaningfully.", link: "https://pfizerappcloud.streamlit.app/", cta: "Visit App" },
  { title: "NGO Website", category: "web", emoji: "🌐", description: "A clean, responsive website built for a non-profit organisation.", link: "https://sharmilamalekar.github.io/", cta: "Visit Site" },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "ai-ml & python", label: "AI-ML & Python" },
  { key: "python", label: "Python" },
  { key: "flutter", label: "Flutter" },
  { key: "typescript", label: "Typescript" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("python");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" ref={sectionRef} className="section-fade py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">03 / Work</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f1f0eb] mt-3">
          Things I&apos;ve<br />
          <span className="text-[#f59e0b]">actually shipped</span>
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
              activeFilter === f.key
                ? "bg-[#f59e0b] text-[#0a0a0f] font-medium"
                : "border border-white/10 text-[#8b8ba7] hover:border-[#f59e0b]/40 hover:text-[#f59e0b]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group bg-[#1c1c2e] rounded-2xl p-5 border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="text-3xl mb-3">{project.emoji}</div>
            <h3 className="font-display font-semibold text-[#f1f0eb] text-base mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-[#8b8ba7] font-body text-xs leading-relaxed flex-1 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#f59e0b] text-xs font-mono hover:gap-2 transition-all"
            >
              {project.cta} <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
