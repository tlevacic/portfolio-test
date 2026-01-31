"use client";

import { motion } from "motion/react";

const socials = [
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "Dribbble", href: "https://dribbble.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rust/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sand/5 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="number">004</span>
          <span className="font-body text-sm text-sand/60 ml-4 uppercase tracking-[0.3em]">
            Get In Touch
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8"
            >
              Let&apos;s create{" "}
              <span className="italic text-stroke hoverable">something</span>{" "}
              <span className="text-rust">extraordinary</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-body text-sand/70 text-lg leading-relaxed max-w-md mb-12"
            >
              Have a project in mind? I&apos;m always open to discussing new opportunities,
              creative ideas, or potential collaborations.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              href="mailto:hello@tinlevacic.com"
              className="group inline-flex items-center gap-4 hoverable"
            >
              <span className="font-display text-2xl md:text-3xl italic group-hover:text-rust transition-colors duration-300">
                hello@tinlevacic.com
              </span>
              <span className="w-12 h-12 rounded-full border border-sand/30 flex items-center justify-center group-hover:bg-rust group-hover:border-rust transition-all duration-300">
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </motion.a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-body text-sm uppercase tracking-[0.2em] text-sand/60">
                  Available for Projects
                </span>
              </div>
              <p className="font-body text-sand/50">
                Currently accepting new projects for Q2 2025.
                <br />
                Timezone: CET (UTC+1)
              </p>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-body text-sm uppercase tracking-[0.2em] text-sand/40 mb-6">
                Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-lg px-6 py-3 border border-sand/20 rounded-full hover:bg-cream hover:text-ink hover:border-cream transition-all duration-300 hoverable"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
