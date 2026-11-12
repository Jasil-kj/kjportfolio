"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "work", "expertise", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "WORK", href: "#work", id: "work" },
    { label: "EXPERTISE", href: "#expertise", id: "expertise" },
    { label: "ACADEMICS", href: "#education", id: "education" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3.5 sm:py-4 bg-[#F8F8F6]/95 backdrop-blur-md border-b border-[#E6E6E2]"
            : "py-5 sm:py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand - Always single-line */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 sm:gap-3 tracking-tighter whitespace-nowrap shrink-0"
          >
            <span className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-[-0.05em] text-[#111111] whitespace-nowrap">
              JASIL KJ.
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] tracking-widest font-mono uppercase px-2 py-0.5 rounded-full border border-[#D5D5D0] text-[#777777] bg-white/60 whitespace-nowrap">
              AI &amp; ML ENG
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="mailto:mohammedjasilkj@gmail.com"
              className="ml-2 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full bg-[#111111] text-[#F8F8F6] hover:bg-black transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] min-h-[44px]"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Actions: Connect Pill + Hamburger Button (44px min target) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="mailto:mohammedjasilkj@gmail.com"
              className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider px-3 py-2 rounded-full bg-[#111111] text-[#F8F8F6] active:scale-95 transition-transform min-h-[44px]"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="w-11 h-11 rounded-full border border-[#D5D5D0] bg-white flex items-center justify-center text-[#111111] active:bg-[#EAEAE6] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F8F8F6] flex flex-col justify-between pt-24 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#777777] mb-2">
                INDEX NAVIGATION
              </span>
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 border-b border-[#E6E6E2] active:bg-black/5 px-1 rounded transition-colors"
                  >
                    <span
                      className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isActive ? "text-[#111111]" : "text-[#555555]"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="text-xs font-mono text-[#888888]">
                      0{idx + 1}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Direct Contact Card inside Mobile Overlay */}
            <div className="pt-6 border-t border-[#E6E6E2] flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#111111] font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>AVAILABLE FOR AI / ML ROLES</span>
              </div>

              <div className="flex flex-col gap-2 text-xs font-mono text-[#555555]">
                <a
                  href="mailto:mohammedjasilkj@gmail.com"
                  className="flex items-center gap-2 py-2 text-[#111111] font-medium"
                >
                  <Mail className="w-4 h-4 text-zinc-700" />
                  <span className="truncate">mohammedjasilkj@gmail.com</span>
                </a>
                <a
                  href="tel:+919745599760"
                  className="flex items-center gap-2 py-1 text-[#111111] font-medium"
                >
                  <Phone className="w-4 h-4 text-zinc-700" />
                  <span>+91 97455 99760</span>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Jasil-kj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full bg-[#111111] text-[#F8F8F6] font-mono text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://linkedin.com/in/jasilkj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full border border-[#111111] text-[#111111] font-mono text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
