"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Code2, Cpu, Globe } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 px-5 sm:px-8 lg:px-12 flex flex-col justify-between editorial-grid overflow-hidden border-b border-[#E6E6E2]"
    >
      {/* Top Metadata Line from CV */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] border-b border-[#E6E6E2] pb-4 sm:pb-6 mb-6 sm:mb-8 lg:mb-12"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#111111] shrink-0" />
          <span>KERALA, INDIA // OPEN TO RELOCATE</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#111111] shrink-0" />
          <span>LLMS • RAG PIPELINES • FASTAPI</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#111111] shrink-0" />
          <span>MARKETS: INDIA • UAE • UK • GULF</span>
        </div>
      </motion.div>

      {/* Main Hero Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Editorial Typography with Fluid Text Transitions */}
        <div className="lg:col-span-8 flex flex-col justify-center order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#111111]"></span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#777777]">
              AI/ML UNDERGRADUATE &amp; DEVELOPER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display fluid-headline font-black tracking-[-0.04em] sm:tracking-[-0.05em] text-[#111111] uppercase mb-6 sm:mb-8 select-none"
          >
            BUILDING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#555555] to-[#111111]">
              INTELLIGENT
            </span>
            <br />
            DIGITAL
            <br />
            EXPERIENCES.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
          >
            <p className="md:col-span-8 text-sm sm:text-base lg:text-lg text-[#444444] font-normal leading-relaxed tracking-tight max-w-xl">
              I&apos;m <strong className="text-[#111111] font-semibold">Mohammed Jasil KJ</strong> — an AI/ML Engineer with hands-on experience building LLM applications, RAG pipelines, and FastAPI REST APIs. Freelance developer at <strong className="text-[#111111] font-semibold">DeplotAI</strong> serving clients worldwide.
            </p>

            <div className="md:col-span-4 flex items-center md:justify-end gap-3 pt-2 sm:pt-0">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#111111] bg-transparent active:bg-[#111111] active:text-[#F8F8F6] hover:bg-[#111111] text-[#111111] hover:text-[#F8F8F6] transition-all duration-300 touch-target"
                aria-label="Scroll to Selected Work"
              >
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-y-1" />
              </a>
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                DISCOVER WORK
              </span>
            </div>
          </motion.div>
        </div>

        {/* Editorial Portrait Frame */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end order-2 mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]"
          >
            {/* Outer Frame with Corner Crosshairs */}
            <div className="relative p-3 sm:p-3.5 bg-white border border-[#E6E6E2] shadow-sm">
              <span className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 border-l-2 border-[#111111]"></span>
              <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 border-r-2 border-[#111111]"></span>
              <span className="absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 border-l-2 border-[#111111]"></span>
              <span className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 border-r-2 border-[#111111]"></span>

              <div className="relative aspect-[3/4] w-full bg-[#EAEAE6] overflow-hidden contrast-110 brightness-100">
                <Image
                  src="/images/jasil-hero.jpg"
                  alt="Mohammed Jasil KJ - AI/ML Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex justify-between items-end">
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                      CANDIDATE
                    </p>
                    <p className="text-[11px] sm:text-xs font-display font-bold tracking-tight">
                      MOHAMMED JASIL KJ
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                    B.E. AIML &apos;27
                  </span>
                </div>
              </div>

              {/* Technical Meta bar beneath portrait */}
              <div className="mt-2.5 pt-2.5 border-t border-[#E6E6E2] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#777777]">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span>OPEN TO RELOCATE</span>
                </div>
                <span>+91 97455 99760</span>
              </div>
            </div>

            {/* Floating Academic Badge */}
            <div className="flex absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-6 bg-[#111111] text-[#F8F8F6] p-2.5 sm:p-3 px-3 sm:px-4 rounded-xl border border-white/20 shadow-xl items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold">
                VTU
              </div>
              <div className="text-left font-mono">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#AAAAAA]">
                  ACADEMIC
                </p>
                <p className="text-[11px] sm:text-xs font-medium tracking-tight">
                  CGPA: 7.81 / 10 • AIML
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker / Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl w-full mx-auto pt-6 sm:pt-8 border-t border-[#E6E6E2] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-[#777777]"
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="text-[#111111] font-semibold">ROLE:</span>
          <span>FREELANCE FULL-STACK DEVELOPER @ DEPLOTAI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>SEEKING AI / ML ENGINEER ROLES</span>
        </div>
      </motion.div>
    </section>
  );
}
