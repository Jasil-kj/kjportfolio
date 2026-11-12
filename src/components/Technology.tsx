"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Code2, Layers } from "lucide-react";

export function Technology() {
  const marqueeItems = [
    "PYTHON",
    "•",
    "LLMs",
    "•",
    "RAG PIPELINES",
    "•",
    "LANGCHAIN",
    "•",
    "FASTAPI",
    "•",
    "NEXT.JS",
    "•",
    "REACT",
    "•",
    "HUGGING FACE TRANSFORMERS",
    "•",
    "OPENAI API",
    "•",
    "PROMPT ENGINEERING",
    "•",
    "SCIKIT-LEARN",
    "•",
    "TENSORFLOW",
    "•",
    "SQL",
    "•",
    "SUPABASE POSTGRESQL",
    "•",
    "AI AGENT DESIGN",
    "•",
    "VERCEL",
    "•",
  ];

  const categories = [
    {
      label: "LANGUAGES",
      items: ["Python", "SQL", "C", "JavaScript"],
      icon: Code2,
    },
    {
      label: "AI / MACHINE LEARNING",
      items: [
        "Machine Learning & Deep Learning",
        "Natural Language Processing (NLP)",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Prompt Engineering & AI Agent Design",
        "scikit-learn & TensorFlow",
        "Hugging Face Transformers",
        "OpenAI API & LangChain",
      ],
      icon: Cpu,
    },
    {
      label: "BACKEND & DEPLOYMENT",
      items: [
        "FastAPI REST APIs",
        "REST API Development",
        "Model Serving",
        "Git & GitHub",
        "Vercel Deployment",
        "Session & State Management",
      ],
      icon: Terminal,
    },
    {
      label: "FRONTEND ENGINEERING",
      items: [
        "React",
        "Next.js (App Router)",
        "Tailwind CSS",
        "JavaScript",
        "Responsive UI / UX",
        "SEO Optimisation & Structured Data",
      ],
      icon: Layers,
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E6E6E2] bg-[#F8F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E6E6E2]">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#777777]">
                [ 04 // TECHNICAL SKILLS ]
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#111111] uppercase">
              TECHNICAL REPERTOIRE.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] leading-relaxed">
              Mapped directly from validated production toolchains, frameworks &amp; AI architectures.
            </p>
          </div>
        </div>

        {/* Typographic Classification Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#E6E6E2] p-5 sm:p-6 flex flex-col justify-between hover:border-[#111111] transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#E6E6E2]">
                    <span className="text-xs font-mono tracking-widest uppercase text-[#777777]">
                      0{i + 1}
                    </span>
                    <Icon className="w-4 h-4 text-[#111111]" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-[#111111] uppercase mb-3 sm:mb-4">
                    {cat.label}
                  </h3>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {cat.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-mono text-[#555555] hover:text-[#111111] transition-colors flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#111111] mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#E6E6E2] text-[10px] font-mono uppercase text-[#AAAAAA]">
                  VERIFIED CV STACK
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Typographic Running Ribbon */}
      <div className="border-y border-[#111111] bg-[#111111] py-3.5 sm:py-5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((text, idx) => (
            <span
              key={idx}
              className={`font-display text-base sm:text-xl font-bold tracking-widest uppercase ${
                text === "•" ? "text-zinc-600" : "text-[#F8F8F6]"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
