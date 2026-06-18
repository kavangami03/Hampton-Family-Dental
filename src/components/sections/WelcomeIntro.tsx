import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export default function WelcomeIntro() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-primary-dark text-[10px] tracking-[0.25em] uppercase font-semibold">
                Welcome
              </span>
            </div>
            <h2
              className="font-heading text-navy leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Welcome to Hampton Family Dental
            </h2>
            <div className="inline-flex items-start gap-3 rounded-2xl bg-beige-light border border-navy/[0.06] px-4 py-3 text-navy/65 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                283 Second Street Pike, Suite 140, Southampton, PA 18966
              </span>
            </div>
          </div>

          <div className="space-y-5 text-navy/65 text-sm md:text-base leading-relaxed">
            <p>
              Looking for a trusted family dentist in Southampton, PA? You&apos;re
              in the right place. Hampton Family Dental — formerly Brenner Dental
              Group — has cared for smiles in Southampton and the surrounding
              Bucks County communities for over two decades. Same welcoming team,
              same convenient location on Second Street Pike, with a refreshed
              name and an even stronger focus on comfortable, modern care.
            </p>
            <p>
              Led by Dr. Jeffrey Brenner and Dr. Keyur Dudhat, our practice
              offers complete dental care for the whole family under one roof —
              preventive checkups and cleanings, tooth-colored fillings, dental
              implants, crowns, Invisalign and ClearCorrect, teeth whitening, and
              same-day emergency treatment. Whether you&apos;re booking your
              child&apos;s first visit or restoring your own smile, you&apos;ll be
              treated with patience, honesty, and gentle hands.
            </p>
            <p>
              We proudly welcome new patients from Southampton (18966), Richboro,
              Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley.
            </p>
            <Link
              href="/patient-information/new-patients"
              className="group inline-flex items-center gap-2 text-primary-dark font-semibold text-sm"
            >
              <span>New patient information</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
