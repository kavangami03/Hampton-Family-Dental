"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowUpRight, Globe, MessageCircle, AtSign, Share2 } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Smile Gallery", href: "#gallery" },
  { label: "Technology", href: "#technology" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Invisalign",
  "Teeth Whitening",
  "Veneers",
  "Dental Implants",
  "Pediatric Dentistry",
  "Emergency Care",
];

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Chat" },
  { icon: AtSign, href: "#", label: "Email" },
  { icon: Share2, href: "#", label: "Share" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-[30%] w-[400px] h-[200px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center mb-5 group">
              <Image 
                src="/logo.svg" 
                alt="Hampton Family Dental Logo" 
                width={200} 
                height={50} 
                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium family and cosmetic dentistry. Where advanced technology
              meets compassionate care.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/5
                    flex items-center justify-center
                    hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white/50 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-white/40 text-sm
                      hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100
                      -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white/40 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-heading text-white font-semibold text-base mb-5">Contact</h4>
            <div className="space-y-3 text-white/40 text-sm mb-6">
              <p>123 Hampton Boulevard, Suite 200</p>
              <p>Hampton, NY 11946</p>
              <p className="text-primary font-medium">(555) 123-4567</p>
              <p>hello@hamptonfamilydental.com</p>
            </div>

            <h4 className="font-heading text-white font-semibold text-sm mb-3">Stay Updated</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5
                  text-white text-sm placeholder:text-white/25 outline-none
                  focus:border-primary/30 transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold
                  hover:bg-primary-dark transition-colors duration-200"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Hampton Family Dental. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-primary/50" /> for beautiful smiles
          </p>
        </div>
      </div>
    </footer>
  );
}
