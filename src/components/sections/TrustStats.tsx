"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, TrendingUp, Zap, Sparkles, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Patients",
    desc: "Smiles transformed",
  },
  {
    icon: Award,
    value: 20,
    suffix: "+",
    label: "Years Experience",
    desc: "Of dental excellence",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Satisfaction",
    desc: "Patient happiness score",
  },
  {
    icon: Zap,
    value: 100,
    suffix: "%",
    label: "Modern Tech",
    desc: "Latest equipment",
  },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2200;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden
        bg-gradient-to-b from-white via-beige-light to-white"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft ambient orbs */}
      <div className="absolute top-[15%] left-[8%] w-[400px] h-[400px] rounded-full bg-primary/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-primary/[0.05] blur-[140px] pointer-events-none" />

      {/* Editorial guide lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] hidden md:block">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-navy" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-navy" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-navy" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/15 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Trusted Excellence
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(1.85rem, 3.8vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Numbers That{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Speak Volumes
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
            </span>
          </motion.h2>

          {/* Rating row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-2.5 mt-4"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-navy text-xs font-semibold">4.9 / 5</span>
            <span className="w-1 h-1 rounded-full bg-navy/30" />
            <span className="text-navy/55 text-xs">500+ Google Reviews</span>
          </motion.div>
        </div>

        {/* Stats Row — Editorial style with vertical dividers */}
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0
            lg:divide-x lg:divide-navy/[0.08]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
                className="group relative px-3 md:px-6 lg:px-8 text-center cursor-default"
              >
                {/* Icon + number prefix in one row */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="font-mono text-primary text-[10px] tabular-nums">
                    0{i + 1}
                  </span>
                  <div className="h-px w-4 bg-primary/40" />
                  <div className="w-7 h-7 rounded-lg bg-white border border-primary/20
                    flex items-center justify-center shadow-[0_2px_10px_rgba(11,179,182,0.12)]
                    group-hover:bg-primary group-hover:border-primary
                    transition-all duration-500">
                    <stat.icon className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Number */}
                <div
                  className="font-heading text-navy font-bold leading-none tabular-nums mb-2"
                  style={{
                    fontSize: "clamp(2rem, 3.6vw, 3.25rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="font-heading text-navy/90 text-sm md:text-base font-semibold tracking-tight">
                  {stat.label}
                </p>
                <p className="text-navy/45 text-[11px] mt-0.5 tracking-wide">
                  {stat.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mx-auto mt-3 h-[2px] w-6 bg-primary/40 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <div className="h-px w-10 bg-navy/15" />
          <span className="text-navy/40 text-[10px] tracking-[0.35em] uppercase">
            Every Smile Tells a Story
          </span>
          <div className="h-px w-10 bg-navy/15" />
        </motion.div>
      </div>
    </section>
  );
}
