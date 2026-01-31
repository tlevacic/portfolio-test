"use client";

import { motion } from "motion/react";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "40+", label: "Projects Completed" },
  { number: "15+", label: "Happy Clients" },
  { number: "3", label: "Awwwards" },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"] },
  { category: "Animation", items: ["GSAP", "Framer Motion", "Three.js", "WebGL", "Lottie"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "AWS"] },
  { category: "Design", items: ["Figma", "Prototyping", "Design Systems", "Typography"] },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rust/5 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="number">003</span>
          <span className="font-body text-sm text-sand/60 ml-4 uppercase tracking-[0.3em]">
            About Me
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column - Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl leading-tight tracking-tight mb-8"
            >
              A developer with an{" "}
              <span className="italic text-rust">obsession</span> for craft
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 font-body text-sand/70 leading-relaxed"
            >
              <p>
                I&apos;m Tin, a creative developer based in Zagreb, Croatia. I specialize in
                building exceptional digital experiences that live at the intersection of
                design and technology.
              </p>
              <p>
                With over 5 years of experience, I&apos;ve had the privilege of working with
                startups, agencies, and established brands to bring their visions to life.
                My approach combines technical excellence with a keen eye for aesthetics.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring generative art,
                experimenting with new web technologies, or seeking inspiration in
                architecture and contemporary design.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-sand/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-4xl md:text-5xl text-cream">
                    {stat.number}
                  </span>
                  <p className="font-body text-sm text-sand/50 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs text-rust">0{i + 1}</span>
                    <h3 className="font-display text-2xl italic">{skill.category}</h3>
                    <div className="flex-1 h-[1px] bg-sand/10 group-hover:bg-rust/30 transition-colors duration-500" />
                  </div>
                  <div className="flex flex-wrap gap-3 pl-8">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="font-body text-sm text-sand/60 px-4 py-2 border border-sand/10 rounded-full hover:border-rust/50 hover:text-cream transition-all duration-300 hoverable"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-16 relative"
            >
              <div className="aspect-square max-w-[300px] ml-auto relative">
                <div className="absolute inset-0 border border-sand/20 rounded-full blob" />
                <div className="absolute inset-4 border border-rust/30 rounded-full blob" style={{ animationDelay: "-2s" }} />
                <div className="absolute inset-8 border border-sand/10 rounded-full blob" style={{ animationDelay: "-4s" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl italic text-sand/20">TL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
