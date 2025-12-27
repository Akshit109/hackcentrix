"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #ff0909 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <span className="mb-3 sm:mb-4 inline-block font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
          [ Protocol: Hackcentrix_Initiated ]
        </span>
        <h1 className="mb-4 sm:mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter">
          Hackcentrix
        </h1>
        <p className="mx-auto mb-8 sm:mb-10 max-w-2xl px-4 font-mono text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          Where deep thinking meets bold innovation. Breach the boundary between
          reality and algorithm.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://vision.hack2skill.com/event/gdgoc-25-hackcentrix"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border-2 border-primary bg-primary px-8 sm:px-10 py-3 sm:py-4 font-mono text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-primary"
          >
            <span className="relative z-10">Initialize Sequence</span>
            <div className="absolute inset-0 -z-10 bg-primary opacity-0 group-hover:opacity-20 blur-xl transition-all" />
          </a>
          <div className="font-mono text-xs sm:text-sm text-muted-foreground italic">
            // Sequence ID: HC-2025-ALPHA
          </div>
        </div>
      </motion.div>

      {/* Decorative Circuit Lines */}
      <div className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden pointer-events-none">
        <div className="circuit-line left-1/4 top-0 h-full w-px" />
        <div className="circuit-line left-1/2 top-1/4 h-full w-px" />
        <div className="circuit-line right-1/4 top-0 h-full w-px" />
        <div className="circuit-line left-0 top-3/4 h-px w-full opacity-10" />
      </div>
    </section>
  );
}
