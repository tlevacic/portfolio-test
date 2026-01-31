"use client";

import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-sand/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            href="#"
            className="font-display text-4xl italic tracking-tight hoverable"
          >
            TL<span className="text-rust">.</span>
          </motion.a>

          {/* Center Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-body text-sm text-sand/40 text-center"
          >
            Designed & Built with passion
            <br />
            <span className="text-sand/60">Zagreb, Croatia</span>
          </motion.p>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-sand/30"
          >
            © {currentYear} Tin Levacic
          </motion.p>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <a
            href="#"
            className="group flex flex-col items-center gap-2 hoverable"
          >
            <span className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center group-hover:bg-cream group-hover:border-cream transition-all duration-300">
              <svg
                className="w-4 h-4 text-cream group-hover:text-ink transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
              </svg>
            </span>
            <span className="font-mono text-xs text-sand/30 uppercase tracking-wider">
              Back to top
            </span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
