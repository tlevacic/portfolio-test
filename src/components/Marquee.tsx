"use client";

import { motion } from "motion/react";

const words = ["React", "Next.js", "TypeScript", "Node.js", "Three.js", "WebGL", "Framer Motion", "Tailwind"];

export default function Marquee() {
  return (
    <div className="py-12 overflow-hidden border-y border-sand/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex"
      >
        <div className="flex animate-marquee">
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-6xl italic text-sand/20 whitespace-nowrap mx-8"
            >
              {word}
              <span className="text-rust mx-8">•</span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee">
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-6xl italic text-sand/20 whitespace-nowrap mx-8"
            >
              {word}
              <span className="text-rust mx-8">•</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
