"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  X,
  ArrowUpRight,
  Calendar,
  Sparkles,
  Globe,
  MessageCircle,
} from "lucide-react";

// Lenis instance exposed by SmoothScrollProvider — pause smooth scroll
// alongside locking native body scroll so the page is fully frozen.
type LenisLike = { stop: () => void; start: () => void };

interface MobileMenuProps {
  links: { label: string; href: string }[];
  activeSection?: string;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.25 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.08, duration: 0.4 },
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function MobileMenu({
  links,
  activeSection = "home",
  onClose,
}: MobileMenuProps) {
  // ─── Lock background scroll while the menu is open ───
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY;

    // Save current styles
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevHtmlOverflow = html.style.overflow;

    // Pause Lenis virtual scroll
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    lenis?.stop();

    // Freeze the page in place — keeps scroll position visible without jumping
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      html.style.overflow = prevHtmlOverflow;
      // Restore the original scroll position
      window.scrollTo(0, scrollY);
      lenis?.start();
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-navy-dark/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Panel — promoted to its own compositing layer so the slide-in transform
          doesn't force a re-rasterization of the heavy blurred orbs inside. */}
      <motion.div
        variants={panelVariants}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        className="absolute right-0 top-0 bottom-0 w-[92%] max-w-[420px]
          bg-gradient-to-br from-navy-dark via-navy to-navy-dark
          shadow-[-30px_0_80px_rgba(0,0,0,0.4)]
          flex flex-col overflow-hidden"
      >
        {/* Ambient orbs — GPU-promoted so the blur is rasterized once, not per frame.
            Reduced blur radius (100→70px) for a meaningful perf win at virtually
            identical visual cost. */}
        <div
          style={{ transform: "translateZ(0)" }}
          className="absolute top-[10%] -right-20 w-72 h-72 rounded-full bg-primary/20 blur-[70px] pointer-events-none"
        />
        <div
          style={{ transform: "translateZ(0)" }}
          className="absolute bottom-[15%] -left-20 w-64 h-64 rounded-full bg-primary/10 blur-[60px] pointer-events-none"
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ────────── Top: logo + close ────────── */}
        <motion.div
          variants={headerVariants}
          className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4"
        >
          <Image
            src="/logo.svg"
            alt="Hampton Family Dental"
            width={220}
            height={55}
            priority
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-white/8 border border-white/15
              flex items-center justify-center text-white
              hover:bg-white/15 hover:scale-105 active:scale-95
              transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Divider with chip */}
        <motion.div
          variants={headerVariants}
          className="relative z-10 flex items-center gap-3 px-6 mb-2"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/25">
            <Sparkles className="w-3 h-3 text-primary-light" />
            <span className="text-[10px] tracking-widest uppercase text-primary-light font-semibold">
              Luxury Care
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </motion.div>

        {/* ────────── Nav links ────────── */}
        <nav className="relative z-10 flex-1 min-h-0 px-6 py-2 overflow-y-auto scrollbar-soft">
          {links.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <motion.div
                key={link.label}
                custom={i}
                variants={linkVariants}
                className="relative"
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-2.5
                    border-b border-white/8 transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-[10px] font-mono tabular-nums transition-colors ${
                        isActive ? "text-primary-light" : "text-white/30"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-heading text-[1.25rem] leading-none transition-colors ${
                        isActive
                          ? "text-primary-light"
                          : "text-white group-hover:text-primary-light"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-all duration-300
                      ${
                        isActive
                          ? "text-primary-light translate-x-0.5 -translate-y-0.5"
                          : "text-white/30 group-hover:text-primary-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* ────────── Info cards ────────── */}
        <div className="relative z-10 px-6 pt-2 pb-5 space-y-2 shrink-0">
          <motion.a
            href="tel:+15551234567"
            custom={0}
            variants={cardVariants}
            className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10
              hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 text-primary-light" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-widest uppercase text-white/40">
                Call Us
              </p>
              <p className="text-white font-semibold text-sm">
                (555) 123-4567
              </p>
            </div>
          </motion.a>

          <div className="grid grid-cols-2 gap-2.5">
            <motion.div
              custom={1}
              variants={cardVariants}
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-2">
                <Clock className="w-3.5 h-3.5 text-primary-light" />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-white/40">
                Hours
              </p>
              <p className="text-white text-xs font-semibold mt-0.5 leading-tight">
                Mon–Sat
                <br />
                8AM – 6PM
              </p>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/10"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-2">
                <MapPin className="w-3.5 h-3.5 text-primary-light" />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-white/40">
                Visit
              </p>
              <p className="text-white text-xs font-semibold mt-0.5 leading-tight">
                123 Smile Ave,
                <br />
                Hampton
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div custom={3} variants={cardVariants} className="pt-1">
            <Link
              href="#contact"
              onClick={onClose}
              className="group relative flex items-center justify-between gap-2 w-full
                pl-5 pr-2 py-3 rounded-full
                bg-gradient-to-r from-primary to-primary-dark text-white
                shadow-[0_10px_40px_rgba(11,179,182,0.4)]
                hover:shadow-[0_15px_50px_rgba(11,179,182,0.55)]
                active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold tracking-wide">
                  Book Appointment
                </span>
              </span>
              <span className="relative z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            custom={4}
            variants={cardVariants}
            className="flex items-center justify-between pt-3"
          >
            <p className="text-[10px] tracking-widest uppercase text-white/30">
              Follow Us
            </p>
            <div className="flex items-center gap-2">
              {[Globe, MessageCircle, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social link"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10
                    flex items-center justify-center text-white/60
                    hover:text-primary-light hover:bg-primary/10 hover:border-primary/30
                    hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
