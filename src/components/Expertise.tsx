"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Code, Globe, Cog, Database } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  icon: any;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    category: "RESEARCH & INTELLIGENCE",
    description:
      "Machine Learning, Deep Learning, Natural Language Processing, Generative AI, and LLM Integration with production-grade inference pipelines.",
    stack: ["PyTorch", "TensorFlow", "Transformers", "LangChain", "MediaPipe", "Ollama"],
    icon: Cpu,
  },
  {
    id: "02",
    title: "SOFTWARE DEVELOPMENT",
    category: "SYSTEMS & BACKEND",
    description:
      "Engineered backend microservices, high-throughput APIs, and scalable software using Python, FastAPI, Next.js, React, and Node.js.",
    stack: ["Python", "FastAPI", "Next.js", "React", "Node.js", "TypeScript"],
    icon: Code,
  },
  {
    id: "03",
    title: "WEB EXPERIENCE",
    category: "FRONTEND & AESTHETICS",
    description:
      "Frontend engineering, responsive interfaces, micro-interactions, and bespoke UI/UX implementation that merges editorial aesthetics with speed.",
    stack: ["Tailwind CSS", "GSAP", "Framer Motion", "Lenis", "Accessibility (a11y)"],
    icon: Globe,
  },
  {
    id: "04",
    title: "INTELLIGENT AUTOMATION",
    category: "WORKFLOW ORCHESTRATION",
    description:
      "AI Workflows, API Integration, automated evaluation engines, and autonomous business process automation reducing operational friction.",
    stack: ["Webhooks", "Custom Agents", "Cron Pipelines", "Multi-model LLM Fallbacks"],
    icon: Cog,
  },
  {
    id: "05",
    title: "DATA & DATABASES",
    category: "DATA INFRASTRUCTURE",
    description:
      "Robust data modeling, high-efficiency querying, vector embeddings storage, and data processing across relational and NoSQL databases.",
    stack: ["PostgreSQL", "Supabase", "MongoDB", "pgvector", "Redis", "SQL"],
    icon: Database,
  },
];

export function Expertise() {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section id="expertise" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E6E6E2] bg-[#F8F8F6]">
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
                [ 02 // CAPABILITIES ]
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#111111] uppercase">
              EXPERTISE &amp; DISCIPLINES.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] leading-relaxed">
              Numbered horizontal rows engineered with minimal Swiss editorial layout &amp; touch ergonomics.
            </p>
          </div>
        </motion.div>

        {/* Numbered Rows List */}
        <div className="divide-y divide-[#E6E6E2] border-b border-[#E6E6E2]">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveHover(service.id)}
                onMouseLeave={() => setActiveHover(null)}
                className="group relative py-6 sm:py-10 lg:py-12 transition-colors duration-300 hover:bg-white/60 active:bg-white/80 px-2 sm:px-6 lg:px-8 cursor-default"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center">
                  {/* Number & Category */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-start gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-light text-[#777777] group-hover:text-[#111111] transition-colors">
                        {service.id}
                      </span>
                      <span className="h-3.5 w-[1px] bg-[#D5D5D0]"></span>
                      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase text-[#777777]">
                        <Icon className="w-3.5 h-3.5 text-[#111111]" />
                        <span>{service.category}</span>
                      </div>
                    </div>

                    <div className="lg:hidden w-8 h-8 rounded-full border border-[#D5D5D0] flex items-center justify-center text-[#111111]">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#111111] group-hover:translate-x-1.5 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Stack */}
                  <div className="lg:col-span-4">
                    <p className="text-xs sm:text-sm lg:text-base text-[#555555] leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                      {service.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EFEFEA] text-[#333333] border border-[#E0E0DB]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action Arrow Indicator on Desktop */}
                  <div className="hidden lg:flex lg:col-span-1 justify-end">
                    <div className="w-10 h-10 rounded-full border border-[#D5D5D0] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#F8F8F6] group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 bg-white border border-[#E6E6E2]"
        >
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#777777]">
            NEED A BESPOKE AI OR WEB IMPLEMENTATION?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] hover:underline touch-target"
          >
            <span>INQUIRE ABOUT SCOPE &amp; AVAILABILITY</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
