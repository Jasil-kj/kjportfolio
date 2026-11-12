"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const channels = [
    {
      name: "EMAIL DIRECT",
      handle: "mohammedjasilkj@gmail.com",
      href: "mailto:mohammedjasilkj@gmail.com",
      icon: Mail,
      sub: "Primary communication channel",
    },
    {
      name: "PHONE / WHATSAPP",
      handle: "+91 97455 99760",
      href: "tel:+919745599760",
      icon: Phone,
      sub: "Available for voice & messages",
    },
    {
      name: "LINKEDIN",
      handle: "linkedin.com/in/jasilkj",
      href: "https://linkedin.com/in/jasilkj",
      icon: LinkedinIcon,
      sub: "Professional network & endorsements",
    },
    {
      name: "GITHUB",
      handle: "github.com/Jasil-kj",
      href: "https://github.com/Jasil-kj",
      icon: GithubIcon,
      sub: "Public repos & open-source code",
    },
  ];

  return (
    <footer id="contact" className="bg-[#090909] text-[#F5F5F5] pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 lg:px-12 relative dark-editorial-grid overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Tagline / Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 sm:pb-10 border-b border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span>OPEN TO RELOCATE • SEEKING AI &amp; ML ROLES</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
            <span>KERALA, INDIA // UTC+05:30</span>
          </div>
        </div>

        {/* Massive Hero Finish Typography */}
        <div className="py-12 sm:py-20 lg:py-24 border-b border-white/10">
          <div className="max-w-5xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-400 block mb-4 sm:mb-6">
              [ 07 // DIRECT CONTACT &amp; OPPORTUNITIES ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-black tracking-[-0.04em] uppercase text-white mb-8 sm:mb-10 select-none">
              HAVE AN IDEA?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
                LET&apos;S BUILD IT.
              </span>
            </h2>

            {/* Direct Email & Phone Buttons: Full width on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="mailto:mohammedjasilkj@gmail.com"
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#090909] font-display text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider active:scale-98 hover:bg-zinc-200 transition-all touch-target"
              >
                <Mail className="w-4 h-4 text-black shrink-0" />
                <span className="truncate">mohammedjasilkj@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              <a
                href="tel:+919745599760"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border border-white/20 text-zinc-300 font-mono text-xs uppercase tracking-widest hover:border-white hover:text-white transition-colors touch-target"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 97455 99760</span>
              </a>
            </div>
          </div>
        </div>

        {/* Verified Channels Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="py-12 sm:py-16 border-b border-white/10">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6 sm:mb-8">
            VERIFIED RESUME CONTACT CHANNELS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {channels.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 sm:p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] active:bg-white/[0.1] hover:border-white/30 transition-all duration-300 flex items-center justify-between touch-target"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-display text-xs sm:text-sm font-bold tracking-wider text-white truncate">
                        {s.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-mono text-zinc-400 truncate">
                        {s.handle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Credits & Back to Top: Stack on mobile */}
        <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-xs font-mono text-zinc-400">
          <div>
            <p className="font-display font-bold text-sm text-white tracking-wider uppercase">
              MOHAMMED JASIL KJ
            </p>
            <p className="text-zinc-500 mt-0.5 text-[11px] sm:text-xs">
              B.E. AI &amp; ML (VTU) • FREELANCE FULL-STACK DEVELOPER @ DEPLOTAI
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
            <span className="text-[11px] sm:text-xs">&copy; 2026 — ALL RIGHTS RESERVED.</span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-zinc-300 hover:text-white hover:border-white transition-colors touch-target"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
