"use client";

import { motion } from "framer-motion";
import { Scan, Box, Zap, BrainCircuit, ShieldCheck } from "lucide-react";

const technologies = [
  {
    icon: Scan,
    title: "Digital X-Rays",
    desc: "90% less radiation than traditional X-rays with instant, crystal-clear images for precise diagnosis.",
  },
  {
    icon: Box,
    title: "3D Scanning",
    desc: "Comprehensive 3D imaging for accurate treatment planning, implant placement, and orthodontic mapping.",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    desc: "Minimally invasive laser treatments for gum therapy, cavity treatment, and faster healing times.",
  },
  {
    icon: BrainCircuit,
    title: "AI Diagnostics",
    desc: "Artificial intelligence-assisted analysis for early detection and more accurate treatment outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Sterilization",
    desc: "Hospital-grade sterilization protocols ensuring the highest standards of safety and cleanliness.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 md:py-36 bg-navy-dark overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[-20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[300px] h-[300px] rounded-full bg-primary/[0.05] blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="label-text text-primary mb-4 block">Innovation</span>
          <h2 className="heading-lg text-white mb-5">
            Advanced <span className="text-primary">Technology</span>
          </h2>
          <p className="body-lg text-white/50 max-w-2xl mx-auto">
            We invest in the most advanced dental technology to provide you with
            safer, faster, and more comfortable treatments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative p-7 rounded-2xl
                bg-white/[0.04] border border-white/[0.06]
                hover:bg-white/[0.08] hover:border-primary/20
                backdrop-blur-sm transition-all duration-500
                ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(11,179,182,0.1) 0%, transparent 70%)"
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20
                  flex items-center justify-center mb-5
                  group-hover:bg-primary/20 group-hover:glow-effect transition-all duration-500">
                  <tech.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3
                  group-hover:text-primary transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl
              bg-primary text-white font-semibold
              hover:bg-primary-dark hover:shadow-[0_0_40px_rgba(11,179,182,0.3)]
              transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Experience Our Technology
          </a>
        </motion.div>
      </div>
    </section>
  );
}
