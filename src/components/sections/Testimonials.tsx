"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amanda Richardson",
    role: "Invisalign Patient",
    image: "/images/patient_testimonial_1_1779858256371.png",
    quote: "From the moment I walked in, I felt like a VIP. The staff is incredibly warm, and Dr. Hampton made my Invisalign journey completely painless. My smile has never looked better!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Cosmetic Dentistry",
    image: "/images/patient_testimonial_2_1779858279502.png",
    quote: "I was terrified of dentists my whole life. Hampton Family Dental changed everything. The gentle approach, the modern technology — it's a completely different experience. I actually look forward to my appointments now.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "Family Patient",
    image: "/images/patient_testimonial_3_1779858302817.png",
    quote: "Our entire family goes to Hampton Dental. The kids love it, my wife loves it, and I love the results. Professional, caring, and always on time. The best dental practice we've ever been to.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding bg-beige-light overflow-hidden">
      <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="label-text text-primary mb-4 block">Patient Stories</span>
          <h2 className="heading-lg text-navy mb-5">
            What Our Patients <span className="gradient-text">Say</span>
          </h2>
          <p className="body-lg text-navy/50 max-w-2xl mx-auto">
            Real stories from real patients. Their smiles and words are our
            greatest reward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative p-7 rounded-2xl bg-white luxury-border
                hover:premium-shadow-lg hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/10 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-navy/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-navy/5">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                  <p className="text-primary text-xs font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
