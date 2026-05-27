"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What insurance plans do you accept?",
    a: "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and many more. Our team will help verify your coverage and maximize your benefits. We also offer flexible financing options for patients without insurance.",
  },
  {
    q: "How does the Invisalign process work?",
    a: "Your Invisalign journey begins with a digital 3D scan of your teeth. We create a custom treatment plan with clear aligners that gradually straighten your teeth. You'll switch to new aligners every 1-2 weeks, with check-ups every 6-8 weeks. Most treatments are completed in 6-18 months.",
  },
  {
    q: "Do you offer emergency dental care?",
    a: "Yes! We offer same-day emergency appointments for urgent dental needs including severe toothaches, broken teeth, knocked-out teeth, and dental infections. Call our emergency line and we'll get you seen as quickly as possible.",
  },
  {
    q: "How long does professional teeth whitening last?",
    a: "Professional teeth whitening results typically last 1-3 years, depending on your diet and oral hygiene habits. We offer both in-office whitening for immediate results and custom take-home kits for gradual whitening. Touch-up treatments can extend your results.",
  },
  {
    q: "At what age should my child first visit the dentist?",
    a: "We recommend your child's first dental visit by their first birthday or within six months of their first tooth appearing. Early visits help establish good oral health habits and allow us to monitor development. Our pediatric care is designed to make children feel comfortable and excited about dental visits.",
  },
  {
    q: "How do I schedule an appointment?",
    a: "You can schedule an appointment by calling us at (555) 123-4567, filling out the contact form on our website, or using our online booking system. We offer flexible scheduling including early morning and evening appointments to accommodate your busy schedule.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="label-text text-primary mb-4 block">Common Questions</span>
          <h2 className="heading-lg text-navy mb-5">
            Frequently <span className="gradient-text">Asked</span>
          </h2>
          <p className="body-lg text-navy/50">
            Everything you need to know about our practice and services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300
                  ${openIndex === i
                    ? "bg-beige-light border border-primary/10"
                    : "bg-beige-light/40 border border-transparent hover:bg-beige-light/70 hover:border-navy/5"
                  }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`font-heading text-base md:text-lg font-semibold transition-colors duration-300
                    ${openIndex === i ? "text-primary" : "text-navy"}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${openIndex === i
                      ? "bg-primary text-white rotate-0"
                      : "bg-navy/5 text-navy/40 rotate-0"
                    }`}>
                    {openIndex === i
                      ? <Minus className="w-4 h-4" />
                      : <Plus className="w-4 h-4" />
                    }
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-navy/50 text-sm md:text-base leading-relaxed mt-4 pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
