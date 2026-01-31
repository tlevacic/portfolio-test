"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12 pt-24">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-rust/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-sand/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

      {/* Decorative Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sand/20 to-transparent origin-left"
      />

      <div className="max-w-[1400px] mx-auto w-full">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="number">001</span>
          <span className="font-body text-sm text-sand/60 ml-4 uppercase tracking-[0.3em]">
            Creative Developer
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display text-[clamp(3rem,15vw,12rem)] leading-[0.85] tracking-tight"
          >
            <span className="block">Crafting</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-display text-[clamp(3rem,15vw,12rem)] leading-[0.85] tracking-tight italic"
          >
            <span className="text-stroke hoverable">Digital</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-display text-[clamp(3rem,15vw,12rem)] leading-[0.85] tracking-tight"
          >
            <span className="gradient-text">Experiences</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-md font-body text-sand/70 text-lg leading-relaxed"
        >
          Building immersive web experiences that blend cutting-edge technology
          with thoughtful design. Based in Zagreb, working globally.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex items-center gap-8"
        >
          <a
            href="#work"
            className="group flex items-center gap-4 font-body text-sm uppercase tracking-[0.2em] hoverable"
          >
            <span className="relative">
              View Work
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-rust scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-xs text-sand/40 uppercase tracking-[0.3em] rotate-90 origin-center translate-x-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-sand/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
