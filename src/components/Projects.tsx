"use client";

import { motion } from "motion/react";

const projects = [
  {
    id: "01",
    title: "Nebula",
    category: "Web Application",
    year: "2024",
    description: "A real-time collaborative design tool that bridges the gap between designers and developers with live code preview.",
    tech: ["React", "WebSocket", "WebGL"],
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    id: "02",
    title: "Axiom",
    category: "E-Commerce Platform",
    year: "2024",
    description: "Premium headless commerce experience with 3D product visualization and AR try-on capabilities.",
    tech: ["Next.js", "Three.js", "Shopify"],
    image: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
  },
  {
    id: "03",
    title: "Velox",
    category: "SaaS Dashboard",
    year: "2023",
    description: "Analytics dashboard for fintech startups featuring real-time data visualization and predictive insights.",
    tech: ["TypeScript", "D3.js", "Node.js"],
    image: "linear-gradient(135deg, #c45d3a 0%, #d68a5b 50%, #c9b99a 100%)",
  },
  {
    id: "04",
    title: "Meridian",
    category: "Creative Agency",
    year: "2023",
    description: "Award-winning agency website with immersive WebGL experiences and seamless page transitions.",
    tech: ["GSAP", "Three.js", "Nuxt"],
    image: "linear-gradient(135deg, #0a0a0a 0%, #2d3436 50%, #485460 100%)",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="number">002</span>
          <span className="font-body text-sm text-sand/60 ml-4 uppercase tracking-[0.3em]">
            Selected Work
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 tracking-tight">
            Featured<br />
            <span className="italic text-stroke hoverable">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden project-card hoverable ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl md:text-9xl italic text-white/10">
                    {project.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1 bg-cream/10 rounded-full backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-rust">{project.id}</span>
                  <span className="font-body text-sm text-sand/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-sand/40 text-sm">{project.year}</span>
                </div>

                <h3 className="font-display text-4xl md:text-6xl mb-6 tracking-tight hoverable">
                  {project.title}
                </h3>

                <p className="font-body text-sand/70 leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] hoverable"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-rust scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
