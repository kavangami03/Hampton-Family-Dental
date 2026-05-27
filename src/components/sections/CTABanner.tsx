"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />

      {/* Ambient effects */}
      <div className="absolute top-[-30%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.1] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px] pointer-events-none" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-5 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary/15 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="heading-lg text-white mb-6">
            Your Perfect Smile Awaits
          </h2>
          <p className="body-lg text-white/50 mb-10 max-w-xl mx-auto">
            New patients receive a complimentary consultation and personalized
            treatment plan. Start your journey to a healthier, more beautiful smile today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl
                bg-primary text-white font-semibold text-base
                hover:bg-primary-dark hover:shadow-[0_0_50px_rgba(11,179,182,0.4)]
                hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:5551234567"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl
                border border-white/15 text-white font-semibold text-base
                hover:bg-white/5 hover:border-white/25 transition-all duration-300"
            >
              Call (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
