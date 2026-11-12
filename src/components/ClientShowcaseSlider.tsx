"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Slide {
  title: string;
  category: string;
  image: string;
}

interface ClientShowcaseSliderProps {
  slides: Slide[];
}

export function ClientShowcaseSlider({ slides }: ClientShowcaseSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header inside preview container */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#777777] pb-2.5 mb-1 border-b border-[#E6E6E2]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-[#111111] uppercase tracking-wider">
            {activeSlide.title}
          </span>
          <span className="text-[#AAAAAA]">•</span>
          <span className="uppercase tracking-widest text-[#777777] hidden sm:inline">
            {activeSlide.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-[#111111] font-bold">
            0{current + 1}
          </span>
          <span className="text-[#AAAAAA]">/</span>
          <span className="text-[10px] font-mono text-[#777777]">
            0{slides.length}
          </span>
        </div>
      </div>

      {/* Main Slideshow Frame */}
      <div className="relative aspect-[16/10] w-full bg-[#E8E8E4] overflow-hidden border border-[#E6E6E2]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-top"
              priority={current === 0}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                {activeSlide.title} — {activeSlide.category}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Navigation Arrows */}
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#111111] backdrop-blur-md shadow-md flex items-center justify-center transition-all active:scale-95 touch-target"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-[#111111] backdrop-blur-md shadow-md flex items-center justify-center transition-all active:scale-95 touch-target"
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="mt-3 pt-2 border-t border-[#E6E6E2] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                current === idx ? "w-6 bg-[#111111]" : "w-1.5 bg-[#D5D5D0]"
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider">
          AUTOPLAY • SWIPE READY
        </span>
      </div>
    </div>
  );
}

