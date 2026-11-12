"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { ClientShowcaseSlider } from "@/components/ClientShowcaseSlider";
import Image from "next/image";

interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  year: string;
  category: string;
  description: string;
  bullets: string[];
  technologies: string[];
  metrics?: string;
  image?: string;
  isSlider?: boolean;
  slides?: { title: string; category: string; image: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "hirica",
    number: "01",
    title: "HIRICA",
    tagline: "AI-Powered Hiring & Recruitment Platform",
    year: "2026",
    category: "AI PLATFORM // TALENT ACQUISITION INTELLIGENCE",
    description:
      "A Phase-I end-to-end AI recruitment platform integrating recruiter and candidate workflows, dynamic assessments, evaluation, behavioural monitoring, and interview architecture.",
    bullets: [
      "Developed an end-to-end AI recruitment platform integrating recruiter and candidate workflows, dynamic assessments, evaluation, behavioural monitoring, and interview architecture.",
      "Designed a dynamic LLM assessment engine using role-specific prompts, structured JSON output, unique generation seeds, recruiter review, and retry-safe question regeneration.",
      "Implemented the technical architecture with Next.js, Supabase PostgreSQL/RLS, LLM APIs, MediaPipe client-side monitoring, real-time state persistence, and structured AI evaluation reports.",
    ],
    technologies: ["Next.js", "Supabase PostgreSQL/RLS", "LLM APIs", "MediaPipe", "Groq LLaMA-3.1", "FastAPI"],
    metrics: "Dynamic LLM assessment engine + MediaPipe client-side integrity monitoring",
    image: "/images/hirica-preview.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Jasil-kj",
  },
  {
    id: "infina",
    number: "02",
    title: "INFINA",
    tagline: "Socratic AI Dialogue System",
    year: "2025",
    category: "CONVERSATIONAL AI // ADAPTIVE COGNITION",
    description:
      "An LLM-powered conversational AI that uses Socratic questioning to guide users through adaptive follow-up questions instead of providing direct answers, fostering active dialectic reasoning.",
    bullets: [
      "Built an LLM-powered conversational AI that uses Socratic questioning to guide users through adaptive follow-up questions instead of providing direct answers.",
      "Implemented conversation memory, prompt engineering, and context management to maintain reasoning-focused multi-turn interactions.",
      "Developed a FastAPI REST API with input validation, session management, and structured JSON responses for frontend integration.",
    ],
    technologies: ["FastAPI", "Python", "OpenAI API / LLMs", "LangChain", "Prompt Engineering", "React"],
    metrics: "Reasoning-focused multi-turn interactions with context memory",
    image: "/images/infina-preview.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Jasil-kj",
  },
  {
    id: "deplotai",
    number: "03",
    title: "DEPLOTAI ECOSYSTEM",
    tagline: "Commercial AI Web Applications & API Infrastructure",
    year: "2026",
    category: "PRODUCTION CLIENT SUITE // GLOBAL MARKETS",
    description:
      "Full-stack and AI-integrated commercial solutions engineered for clients across India, UAE, UK, and Gulf markets. Spanning intelligent conversational assistants, backend REST services, and high-performance business web applications.",
    bullets: [
      "Developed AI-powered web applications and full-stack websites for clients across India, UAE, UK, and Gulf markets using React, Next.js, FastAPI.",
      "Built backend systems and REST APIs, integrating OpenAI APIs to add AI-powered features and conversational capabilities to web applications.",
      "Delivered 10+ production-ready websites with responsive UI, SEO optimisation, SSL, and structured data for businesses across multiple industries.",
    ],
    technologies: ["Next.js", "React", "FastAPI", "OpenAI API", "Tailwind CSS", "Vercel"],
    metrics: "10+ commercial production platforms deployed across India, UAE, UK & Gulf",
    image: "/images/deplotai-preview.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Jasil-kj",
  },
  {
    id: "client-experiences",
    number: "04",
    title: "SELECTED CLIENT PLATFORMS",
    tagline: "Commercial Freelance Deliveries Across Multiple Industries",
    year: "2024 – 2026",
    category: "FREELANCE PRODUCTION ARCHITECTURE",
    description:
      "A portfolio of 10+ production-ready websites delivered with responsive UI, strict SEO optimisation, SSL encryption, and schema markup for commercial businesses across diverse sectors.",
    bullets: [
      "Zevora Groupe — International Food & Logistics Corporate Platform",
      "Balanco — Engineering, HVAC TAB & Commissioning Platform (Abu Dhabi)",
      "Arogya Ayurveda — Holistic Healthcare & Treatment Portal (Abu Dhabi)",
      "Royal Shawarma Hub — Premium Middle Eastern Hospitality & Online Menu Portal",
      "Urbantrop Architecture — Editorial architecture portfolio & spatial showcasing",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Structured Data", "Vercel"],
    metrics: "Sub-second load times, 100% SEO scores, interactive slider showcase",
    isSlider: true,
    slides: [
      {
        title: "Zevora Groupe",
        category: "Export & Logistics Corporate",
        image: "/images/client-zevora.jpg",
      },
      {
        title: "Balanco",
        category: "HVAC & Engineering Specialists (Abu Dhabi)",
        image: "/images/client-balanco.jpg",
      },
      {
        title: "Arogya Ayurveda",
        category: "Healthcare & Therapy Portal (Abu Dhabi)",
        image: "/images/client-arogya.jpg",
      },
      {
        title: "Royal Shawarma Hub",
        category: "Hospitality & Dining Platform",
        image: "/images/client-royal-shawarma.jpg",
      },
      {
        title: "Urbantrop Architecture",
        category: "Architectural Studio Portfolio",
        image: "/images/urbantrop-architecture.jpg",
      },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Jasil-kj",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E6E6E2] bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Reveal */}
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
                [ 03 // PROJECTS &amp; PRODUCTIONS ]
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#111111] uppercase leading-none">
              SELECTED WORK.
              <br />
              <span className="text-[#777777]">BUILT WITH INTENT.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] leading-relaxed">
              Real-world AI systems and production web platforms from my verified CV.
            </p>
          </div>
        </motion.div>

        {/* Project Showcase */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32 pt-10 sm:pt-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative border-b border-[#E6E6E2] pb-14 sm:pb-20 lg:pb-28"
              >
                {/* Project Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-[#E6E6E2]">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-display font-black text-[#111111]">
                      {project.number}
                    </span>
                    <span className="h-3.5 w-[1px] bg-[#D5D5D0]"></span>
                    <span className="truncate max-w-[200px] sm:max-w-none">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>EDITION {project.year}</span>
                  </div>
                </div>

                {/* Content + Preview Grid */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Preview Frame */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="group relative bg-white border border-[#E6E6E2] p-2.5 sm:p-4 lg:p-5 shadow-xs overflow-hidden">
                      {project.isSlider && project.slides ? (
                        /* Slideshow for Project 04 */
                        <ClientShowcaseSlider slides={project.slides} />
                      ) : (
                        /* Standard Single Image View */
                        <>
                          <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#AAAAAA] pb-2">
                            <span>ARCHITECTURE // {project.number}</span>
                            <span>STATUS: PRODUCTION</span>
                          </div>

                          <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E6E6E2]">
                            {project.image && (
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                              />
                            )}

                            <div className="hidden lg:flex absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                              <span className="px-5 py-2.5 rounded-full bg-[#F8F8F6] text-[#111111] font-mono text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                                <span>EXPLORE CODE &amp; ARCHITECTURE</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-[#E6E6E2] flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#777777]">
                            <span className="truncate mr-2">TECH: {project.technologies[0]} + {project.technologies[1]}</span>
                            <span className="shrink-0">MOHAMMED JASIL KJ</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Details Description */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-4 sm:space-y-6 mt-2 lg:mt-0`}>
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111111] uppercase mb-1 sm:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg font-medium text-[#444444] tracking-tight">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm lg:text-base text-[#555555] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Points directly from CV */}
                    <div className="space-y-1.5 sm:space-y-2 pt-1">
                      {project.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#666666] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0"></span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Highlight Metric */}
                    {project.metrics && (
                      <div className="p-3.5 sm:p-4 bg-white border border-[#E6E6E2] text-xs font-mono">
                        <span className="block text-[10px] text-[#777777] uppercase tracking-wider mb-1">
                          ARCHITECTURAL HIGHLIGHT
                        </span>
                        <span className="text-[#111111] font-semibold text-[11px] sm:text-xs leading-snug block">
                          {project.metrics}
                        </span>
                      </div>
                    )}

                    {/* Technologies Tags */}
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2">
                        TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white border border-[#D5D5D0] text-[#111111]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project CTAs */}
                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#111111] text-[#F8F8F6] font-mono text-xs uppercase tracking-widest active:scale-98 hover:bg-black transition-transform touch-target"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>VIEW REPO</span>
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#111111] text-[#111111] font-mono text-xs uppercase tracking-widest hover:bg-white active:bg-zinc-100 transition-colors touch-target"
                      >
                        <span>DISCUSS SYSTEM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
