"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  ArrowUpRight,
  MoveHorizontal,
  Clock,
  Award,
} from "lucide-react";

const transformations = [
  {
    before: "/images/smile_before_after_1779858325738.png",
    after: "/images/cosmetic_smile_1779858128482.png",
    patient: "Sarah M.",
    age: 34,
    treatment: "Porcelain Veneers",
    duration: "2 visits",
    sessions: 2,
    quote:
      "I can't stop smiling. The transformation is beyond what I imagined — it's like a brand new me.",
  },
  {
    before: "/images/service_general_1779858374972.png",
    after: "/images/service_veneers_1779858461216.png",
    patient: "Michael R.",
    age: 41,
    treatment: "Invisalign + Whitening",
    duration: "6 months",
    sessions: 8,
    quote:
      "The entire process was comfortable. The results? Incredible. I finally feel confident in every photo.",
  },
  {
    before: "/images/family_dental_1779858082600.png",
    after: "/images/hero_portrait_1779858045495.png",
    patient: "Jennifer L.",
    age: 29,
    treatment: "Cosmetic Makeover",
    duration: "3 visits",
    sessions: 3,
    quote:
      "Hampton Family Dental gave me the confidence to smile again. I keep catching myself smiling for no reason.",
  },
];

function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden
        cursor-ew-resize select-none"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* AFTER image (full) */}
      <Image
        src={after}
        alt="After treatment"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 700px"
        priority
      />

      {/* BEFORE image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={before}
          alt="Before treatment"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 700px"
        />
      </div>

      {/* Vignettes */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />

      {/* Slider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/60 via-white to-white/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-70" style={{ animationDuration: "2.5s" }} />
          <div className="relative w-12 h-12 rounded-full bg-white shadow-[0_6px_24px_rgba(11,179,182,0.35)]
            flex items-center justify-center border-2 border-white">
            <div className="absolute inset-1 rounded-full border border-primary/30" />
            <MoveHorizontal className="w-4 h-4 text-navy" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* BEFORE label */}
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full
        backdrop-blur-xl bg-navy-dark/55 border border-white/15 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        <span className="text-white text-[9px] tracking-[0.25em] uppercase font-semibold">
          Before
        </span>
      </div>

      {/* AFTER label */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full
        backdrop-blur-xl bg-primary/65 border border-white/30 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-white text-[9px] tracking-[0.25em] uppercase font-semibold">
          After
        </span>
      </div>

      {/* Drag hint */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md bg-white/15 border border-white/20">
        <MoveHorizontal className="w-2.5 h-2.5 text-white" />
        <span className="text-white text-[9px] tracking-widest uppercase font-semibold">
          Drag
        </span>
      </div>
    </div>
  );
}

export default function SmileGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = transformations[activeIndex];

  const next = () =>
    setActiveIndex((p) => (p + 1) % transformations.length);
  const prev = () =>
    setActiveIndex(
      (p) => (p - 1 + transformations.length) % transformations.length
    );

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[-8%] w-[450px] h-[450px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[380px] h-[380px] rounded-full bg-navy/[0.04] blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
        {/* Section header — compact */}
        <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-beige-light border border-primary/15">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-navy/70 text-[10px] tracking-[0.25em] uppercase font-semibold">
                Real Results
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
            Smile{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-dark to-primary bg-clip-text text-transparent italic font-normal">
                Transformations
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
        </div>

        {/* ──────── MAIN SHOWCASE CARD ──────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-beige-light via-white to-beige-light
            rounded-[24px] md:rounded-[28px] p-3 md:p-4 lg:p-5
            border border-navy/[0.06]
            shadow-[0_30px_80px_-30px_rgba(40,47,90,0.2)]"
        >
          <div className="grid lg:grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            {/* LEFT — Slider (7 cols, landscape 4:3) */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/3] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <BeforeAfterSlider
                      before={active.before}
                      after={active.after}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Case number — bottom left of slider */}
                <div className="absolute bottom-3 left-3 z-10 flex items-end gap-1.5 pointer-events-none">
                  <span className="font-heading italic text-white text-2xl md:text-3xl font-bold leading-none drop-shadow-lg">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-white/70 text-[9px] tracking-widest pb-1">
                    / {String(transformations.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — Story Panel (5 cols) */}
            <div className="lg:col-span-5 relative flex flex-col">
              <div className="relative h-full rounded-2xl bg-white border border-navy/[0.05]
                shadow-[0_15px_40px_-20px_rgba(40,47,90,0.1)] p-5 md:p-6 lg:p-7 overflow-hidden flex flex-col">

                {/* Decorative giant quote */}
                <Quote
                  className="absolute -top-2 -right-2 w-28 h-28 text-primary/8 -rotate-180 pointer-events-none"
                  strokeWidth={1}
                />

                {/* Eyebrow */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-5 bg-primary" />
                    <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-semibold">
                      Case · {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Quote */}
                    <p
                      className="font-heading italic text-navy text-base md:text-lg lg:text-xl leading-snug mb-5 flex-1"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      &ldquo;{active.quote}&rdquo;
                    </p>

                    {/* Patient + treatment in one row */}
                    <div className="flex items-center gap-3 pb-4 mb-4 border-b border-navy/8">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark
                        flex items-center justify-center text-white font-heading font-bold text-sm shrink-0
                        ring-2 ring-primary/15">
                        {active.patient.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading text-navy font-bold text-sm leading-tight">
                          {active.patient}
                        </p>
                        <p className="text-navy/45 text-[10px] tracking-wide">
                          Age {active.age} · Verified
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-primary text-[9px] tracking-[0.2em] uppercase font-semibold">
                          Treatment
                        </p>
                        <p className="text-navy font-semibold text-xs mt-0.5">
                          {active.treatment}
                        </p>
                      </div>
                    </div>

                    {/* Mini stats — horizontal compact */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="flex items-center gap-2.5 rounded-xl bg-beige-light/60 px-3 py-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-primary/15 flex items-center justify-center shrink-0">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-navy/45 text-[9px] tracking-widest uppercase font-semibold">
                            Duration
                          </p>
                          <p className="font-heading text-navy text-sm font-bold leading-none mt-0.5">
                            {active.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-xl bg-beige-light/60 px-3 py-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-primary/15 flex items-center justify-center shrink-0">
                          <Award className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-navy/45 text-[9px] tracking-widest uppercase font-semibold">
                            Sessions
                          </p>
                          <p className="font-heading text-navy text-sm font-bold leading-none mt-0.5">
                            {active.sessions}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ──── BOTTOM STRIP — thumbs + nav ──── */}
          <div className="mt-3 md:mt-4 lg:mt-5 flex items-stretch gap-2 md:gap-3">
            {/* Prev */}
            <button
              onClick={prev}
              className="shrink-0 w-11 md:w-14 rounded-xl bg-white border border-navy/10 text-navy
                flex items-center justify-center
                hover:bg-navy hover:text-white hover:border-navy hover:scale-105
                transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Thumbnails */}
            <div className="flex-1 grid grid-cols-3 gap-2 md:gap-3">
              {transformations.map((t, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`group relative h-12 md:h-14 rounded-xl overflow-hidden
                      transition-all duration-500 ${
                        isActive
                          ? "ring-2 ring-primary shadow-[0_10px_30px_-10px_rgba(11,179,182,0.4)]"
                          : "ring-1 ring-navy/10 hover:ring-primary/40 opacity-65 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={t.after}
                      alt={t.patient}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive ? "bg-navy/25" : "bg-navy/55 group-hover:bg-navy/35"
                    }`} />

                    {/* Label */}
                    <div className="absolute inset-0 flex items-center justify-between px-2.5">
                      <span className="font-heading italic text-white text-base font-bold leading-none drop-shadow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white text-[10px] font-semibold tracking-wide truncate text-right max-w-[60%]">
                        {t.patient}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="shrink-0 w-11 md:w-14 rounded-xl bg-navy text-white
                flex items-center justify-center
                hover:bg-primary hover:scale-105 shadow-[0_8px_25px_-10px_rgba(11,179,182,0.4)]
                transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <p className="text-navy/55 text-sm">
            Ready to write your own smile story?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full
              bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-semibold tracking-[0.18em] uppercase
              shadow-[0_8px_25px_rgba(11,179,182,0.35)]
              hover:shadow-[0_12px_35px_rgba(11,179,182,0.5)]
              hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Book Consultation</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
