"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, CheckCircle, ExternalLink } from "lucide-react";

export function EducationAndAchievements() {
  const education = [
    {
      institution: "Yenepoya Institute of Technology, Mangaluru",
      degree: "B.E. in Artificial Intelligence and Machine Learning (VTU)",
      duration: "2023 – 2027",
      score: "CGPA: 7.81 / 10",
      description: "Undergraduate curriculum covering Neural Networks, Deep Learning, Statistical Machine Learning, Natural Language Processing, and Discrete Mathematics.",
    },
    {
      institution: "TMHSS, Perumbilav, Kerala",
      degree: "Class 12th (Higher Secondary)",
      duration: "Completed 2022",
      score: "Score: 79%",
      description: "Higher secondary education with a focused foundation in Physics, Chemistry, and Mathematics.",
    },
    {
      institution: "MH English School, Edappal, Kerala",
      degree: "Class 10th (Secondary School)",
      duration: "Completed 2021",
      score: "Score: 82%",
      description: "Secondary education with foundational coursework in sciences and computing.",
    },
  ];

  const certifications = [
    {
      title: "One Million Prompters — Prompt Engineering for AI Systems",
      issuer: "Dubai Future Foundation / Dubai Centre for Artificial Intelligence",
      year: "2025",
    },
    {
      title: "GEN-AI Camp",
      issuer: "AlgoUniversity (Mentored by Microsoft Engineer Nipun)",
      year: "2025",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia / Forage",
      year: "Oct 2025",
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte Australia / Forage",
      year: "Oct 2025",
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 border-b border-[#E6E6E2] bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E6E6E2]">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#777777]">
                [ 05 // CREDENTIALS &amp; LEADERSHIP ]
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#111111] uppercase">
              ACADEMICS &amp; HONOURS.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-[#777777] leading-relaxed">
              Formal engineering foundation, professional certifications &amp; national hackathon leadership.
            </p>
          </div>
        </div>

        {/* Featured Achievement: Hackathon Core Organizer */}
        <div className="my-8 sm:my-12 p-6 sm:p-10 lg:p-12 bg-white border border-[#E6E6E2] relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#111111]">
            <Trophy className="w-4 h-4 shrink-0" />
            <span className="font-bold">FLAGSHIP ACHIEVEMENT // NATIONAL HACKATHON LEADERSHIP</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111111] uppercase tracking-tight mb-2">
            Core Organizer — Matrix Fusion 4.0
          </h3>
          <p className="text-xs font-mono text-[#777777] uppercase tracking-wider mb-3">
            Yen Artificia, Yenepoya Institute of Technology • April 2026
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-[#555555] max-w-4xl leading-relaxed">
            Organised and led the college&apos;s flagship <strong className="text-[#111111] font-semibold">24-hour national-level AI and ML hackathon</strong>; managed end-to-end coordination, logistics, budget &amp; finance, judging criteria, and platform operations for <strong className="text-[#111111] font-semibold">100+ national participants</strong>.
          </p>
        </div>

        {/* Two-Column: Education + Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4 sm:pt-8">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 pb-3 sm:pb-4 border-b border-[#E6E6E2] text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>FORMAL EDUCATION</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E6E6E2] p-5 sm:p-6 hover:border-[#111111] transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-mono text-[#777777]">
                      {edu.duration}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono uppercase px-2 py-0.5 rounded-full bg-[#111111] text-[#F8F8F6] font-bold">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#111111]">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#444444] mb-2 sm:mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 pb-3 sm:pb-4 border-b border-[#E6E6E2] text-xs font-mono uppercase tracking-widest text-[#111111] font-bold">
              <Award className="w-4 h-4 shrink-0" />
              <span>INDUSTRY CERTIFICATIONS</span>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E6E6E2] p-4 sm:p-5 flex flex-col justify-between hover:border-[#111111] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EAEAE6] text-[#111111] flex items-center justify-center text-xs font-mono shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-[#777777] font-mono mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3.5 pt-2.5 border-t border-[#E6E6E2] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#777777]">
                    <span>STATUS: COMPLETED</span>
                    <span className="font-semibold text-[#111111]">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
