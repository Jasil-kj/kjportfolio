"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Rocket, Target } from "lucide-react";

export function Approach() {
  const principles = [
    {
      title: "THINK.",
      subtitle: "First-Principles Analysis",
      text: "Deconstructing problems to their fundamental truths. Whether structuring machine learning loss functions or defining API models, clarity precedes implementation.",
      icon: Lightbulb,
    },
    {
      title: "BUILD.",
      subtitle: "Uncompromising Execution",
      text: "Transforming prototypes into resilient, production-ready systems. Clean code, scalable databases, low latency, and uncompromising aesthetic execution.",
      icon: Target,
    },
    {
      title: "EVOLVE.",
      subtitle: "Continuous Adaptation",
      text: "Measuring real-world performance, iterating based on telemetry and feedback, and staying on the frontier of AI research and developer paradigms.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E6E6E2] bg-[#F8F8F6]">
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
                [ 05 // PHILOSOPHY ]
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#111111] uppercase">
              THINK. BUILD. EVOLVE.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] leading-relaxed">
              A disciplined philosophy reconciling mathematical engineering with purposeful digital craft.
            </p>
          </div>
        </motion.div>

        {/* Central Manifesto Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 sm:my-16 p-6 sm:p-10 lg:p-14 bg-white border border-[#E6E6E2] relative overflow-hidden"
        >
          <span className="text-[9vw] font-display font-black text-[#111111]/[0.03] absolute -bottom-10 right-0 select-none pointer-events-none">
            MANIFESTO
          </span>

          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#777777] block mb-3 sm:mb-4">
              CREDO &amp; COMMITMENT
            </span>
            <p className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight leading-snug">
              &ldquo;I believe good technology should solve real problems. My approach combines engineering fundamentals, experimentation and creative thinking to build products that are useful, scalable and thoughtfully designed.&rdquo;
            </p>
            <div className="mt-5 sm:mt-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#111111]"></div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                Mohammed Jasil KJ
              </span>
            </div>
          </div>
        </motion.div>

        {/* Principles 3-Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E6E6E2] p-6 sm:p-8 flex flex-col justify-between hover:border-[#111111] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#E6E6E2]">
                    <span className="font-display text-xl sm:text-2xl font-bold text-[#111111]">
                      {p.title}
                    </span>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#777777]" />
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2 sm:mb-3">
                    {p.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {p.text}
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#E6E6E2] text-xs font-mono text-[#AAAAAA]">
                  PHASE 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
