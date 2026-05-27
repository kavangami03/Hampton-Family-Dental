"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "123 Hampton Boulevard, Suite 200", sub: "Hampton, NY 11946" },
  { icon: Phone, label: "Call Us", value: "(555) 123-4567", sub: "Mon-Fri: 8am - 6pm" },
  { icon: Mail, label: "Email Us", value: "hello@hamptonfamilydental.com", sub: "We reply within 24 hours" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 8am - 6pm", sub: "Sat: 9am - 2pm | Sun: Closed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative section-padding bg-beige-light overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="label-text text-primary mb-4 block">Get In Touch</span>
          <h2 className="heading-lg text-navy mb-5">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="body-lg text-navy/50 max-w-2xl mx-auto">
            Ready to experience luxury dental care? We&apos;d love to hear from you.
            Reach out to schedule your visit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-white premium-shadow">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-beige-light/50 border border-navy/5
                      text-navy text-sm outline-none focus:border-primary/30 focus:bg-white
                      transition-all duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-name"
                    className="absolute left-4 top-2 text-[10px] text-navy/40 font-medium tracking-wide uppercase
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                      peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-wide
                      peer-focus:uppercase peer-focus:text-primary transition-all duration-200"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-beige-light/50 border border-navy/5
                      text-navy text-sm outline-none focus:border-primary/30 focus:bg-white
                      transition-all duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-email"
                    className="absolute left-4 top-2 text-[10px] text-navy/40 font-medium tracking-wide uppercase
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                      peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-wide
                      peer-focus:uppercase peer-focus:text-primary transition-all duration-200"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-beige-light/50 border border-navy/5
                      text-navy text-sm outline-none focus:border-primary/30 focus:bg-white
                      transition-all duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-phone"
                    className="absolute left-4 top-2 text-[10px] text-navy/40 font-medium tracking-wide uppercase
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                      peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-wide
                      peer-focus:uppercase peer-focus:text-primary transition-all duration-200"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 pt-6 pb-2 rounded-xl bg-beige-light/50 border border-navy/5
                      text-navy text-sm outline-none focus:border-primary/30 focus:bg-white
                      transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a Service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="invisalign">Invisalign</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="veneers">Veneers</option>
                    <option value="implants">Dental Implants</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                  <label
                    htmlFor="contact-service"
                    className="absolute left-4 top-2 text-[10px] text-navy/40 font-medium tracking-wide uppercase"
                  >
                    Service
                  </label>
                </div>
              </div>

              <div className="relative mb-6">
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-beige-light/50 border border-navy/5
                    text-navy text-sm outline-none focus:border-primary/30 focus:bg-white
                    transition-all duration-300 resize-none placeholder-transparent"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-4 top-2 text-[10px] text-navy/40 font-medium tracking-wide uppercase
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal
                    peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-wide
                    peer-focus:uppercase peer-focus:text-primary transition-all duration-200"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl
                  bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-base
                  hover:shadow-[0_0_40px_rgba(11,179,182,0.35)] hover:scale-[1.02]
                  active:scale-[0.98] transition-all duration-300 disabled:opacity-80"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group p-5 rounded-2xl bg-white luxury-border
                  hover:premium-shadow hover:border-primary/10 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0
                    group-hover:bg-primary/15 transition-colors duration-300">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="label-text text-navy/30 text-[10px] mb-1">{info.label}</p>
                    <p className="font-semibold text-navy text-sm">{info.value}</p>
                    <p className="text-navy/40 text-xs mt-0.5">{info.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white">
              <p className="font-heading text-lg font-bold mb-1">Dental Emergency?</p>
              <p className="text-white/70 text-sm mb-3">
                Don&apos;t wait — call us immediately for same-day emergency care.
              </p>
              <a
                href="tel:5551234567"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  bg-white/20 text-white text-sm font-semibold
                  hover:bg-white/30 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
