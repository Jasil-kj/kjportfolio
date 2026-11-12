"use client";

import { motion } from "framer-motion";
import { Terminal, Award, Briefcase, GraduationCap, ArrowUpRight, Sparkles } from "lucide-react";

export function About() {
  const highlights = [
    { title: "LLMs & RAG Architecture", desc: "Hands-on experience building RAG pipelines, fine-tuned prompts, LangChain agent loops, and evaluation harnesses." },
    { title: "FastAPI REST Systems", desc: "Developing production-grade REST APIs with Pydantic validation, session persistence, and model serving." },
    { title: "Commercial Freelance", desc: "Delivered 10+ production-ready web apps for clients across India, UAE, UK, and Gulf markets at DeplotAI." },
  ];

  const stats = [
    { label: "DEGREE PROGRAM", value: "B.E.", detail: "AI & ML, Yenepoya Institute of Tech (VTU)" },
    { label: "ACADEMIC STANDING", value: "7.81", detail: "CGPA out of 10.0 (2023 – 2027)" },
    { label: "CLIENT DEPLOYMENTS", value: "10+", detail: "India, UAE, UK & Gulf markets" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E6E6E2] bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E6E6E2]"
        >
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#777777]">
                [ 01 // PROFESSIONAL SUMMARY ]
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#111111] uppercase">
              A LITTLE ABOUT ME.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] leading-relaxed">
              AI and Machine Learning undergraduate at VTU &amp; Freelance Developer at DeplotAI.
            </p>
          </div>
        </motion.div>

        {/* Editorial Layout: Pure Typographic & Structural Showcase (Image Removed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-10 sm:pt-16 items-start">
          {/* Left Column: Work Experience & Technical Blueprint Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Dark Editorial Identity Badge Box */}
            <div className="bg-[#111111] text-[#F8F8F6] p-6 sm:p-8 rounded-none border border-black relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#AAAAAA]">
                  PROFESSIONAL DOSSIER
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-2">
                MOHAMMED JASIL KJ
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6">
                B.E. AI &amp; ML • DEPLOTAI FREELANCE DEVELOPER
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono text-zinc-300 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-zinc-500">PRIMARY FOCUS:</span>
                  <span className="text-white font-medium">LLMs, RAG, REST APIs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">LOCATION:</span>
                  <span className="text-white font-medium">Kerala, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">AVAILABILITY:</span>
                  <span className="text-emerald-400 font-medium">Open to Relocate</span>
                </div>
              </div>
            </div>

            {/* Quick Experience Blueprint Box */}
            <div className="p-6 bg-white border border-[#E6E6E2]">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#111111]">
                <Briefcase className="w-4 h-4 shrink-0" />
                <span className="font-semibold">WORK EXPERIENCE // DEPLOTAI</span>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-3">
                <strong className="text-[#111111]">Freelance Full-Stack Developer (2026 – Present)</strong>
                <br />
                Remote | India, UAE, UK, Gulf
              </p>
              <ul className="text-xs text-[#666666] space-y-2 list-disc list-inside font-mono">
                <li>Developed AI-powered web applications using React, Next.js, FastAPI.</li>
                <li>Integrated OpenAI APIs for conversational agent workflows.</li>
                <li>Delivered 10+ production websites with SEO, SSL &amp; schema data.</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Biography & Capabilities with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-8 sm:space-y-12"
          >
            <div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#111111] mb-4 sm:mb-6 leading-snug">
                Engineering LLM workflows, adaptive dialog systems, and production web applications.
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-[#444444] font-normal leading-relaxed">
                <p>
                  I&apos;m an <strong className="text-[#111111] font-semibold">Artificial Intelligence and Machine Learning undergraduate at VTU</strong> with hands-on experience building LLM applications, RAG pipelines, AI-powered web applications, and FastAPI-based REST APIs.
                </p>
                <p>
                  Alongside my studies, I work as a freelance full-stack developer at <strong className="text-[#111111] font-semibold">DeplotAI</strong>, developing AI-integrated solutions for clients across India, UAE, UK, and Gulf markets.
                </p>
                <p>
                  I am actively seeking <strong className="text-[#111111] font-semibold">AI Engineer and Machine Learning Engineer roles</strong> where I can continue learning and contributing to real-world, high-impact intelligent products.
                </p>
              </div>
            </div>

            {/* Structured Highlights */}
            <div className="space-y-3.5 pt-4 sm:pt-6 border-t border-[#E6E6E2]">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#777777] block">
                TECHNICAL CAPABILITIES &amp; FOCUS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="p-4 bg-white border border-[#E6E6E2] hover:border-[#111111] transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#111111] text-[#F8F8F6] flex items-center justify-center text-xs font-mono mb-2.5">
                      0{i + 1}
                    </div>
                    <h4 className="text-sm font-semibold text-[#111111] mb-1">
                      {h.title}
                    </h4>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Swiss-style Editorial Stat Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#E6E6E2] divide-y sm:divide-y-0 sm:divide-x divide-[#E6E6E2] bg-white">
              {stats.map((s, idx) => (
                <div key={idx} className="p-5 sm:p-6 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#111111]">
                      {s.value}
                    </span>
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold mt-1">
                      {s.label}
                    </p>
                  </div>
                  <p className="text-xs font-mono text-[#777777] mt-2.5">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
