import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABlock from "@/components/shared/CTABlock";
import { getServiceArea, serviceAreas } from "@/lib/areas";
import { practiceInfo } from "@/lib/navigation";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    return {};
  }

  return {
    title: `Dentist in ${area.city}, PA | Hampton Family Dental`,
    description: `${area.city}, PA patients can visit Hampton Family Dental in Southampton for gentle family, cosmetic, restorative, and emergency dentistry.`,
  };
}

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  const otherAreas = serviceAreas.filter((item) => item.slug !== area.slug);
  const breadcrumbs = [
    { label: "Areas We Serve", href: "/areas-we-serve" },
    { label: area.city },
  ];

  const services = [
    "Family dental checkups and cleanings",
    "Same-day emergency dental appointments when available",
    "Cosmetic dentistry, whitening, veneers, and Invisalign",
    "Restorative care including fillings, crowns, bridges, dentures, and implants",
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <Image
          src="/images/clinic_interior_1779858062605.webp"
          alt="Hampton Family Dental treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/92 to-navy-dark/60" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  {area.driveTime}
                </span>
              </div>
            </div>

            <h1
              className="font-heading text-white mb-6"
              style={{
                fontSize: "clamp(2.45rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
              }}
            >
              Dentist in {area.city}, PA
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              {area.intro}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/patient-information/scheduling"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Schedule an Appointment
                <Calendar className="w-4 h-4" />
              </Link>
              <a
                href={practiceInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Phone className="w-4 h-4" />
                {practiceInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-beige-light/25">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Local Dental Care
              </div>
              <h2 className="mb-5 font-heading text-3xl font-bold text-navy md:text-4xl">
                Comprehensive dental care near {area.city}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-navy/65 md:text-base">
                {area.neighborhoodNote} Hampton Family Dental is located at {practiceInfo.address.full}, formerly Brenner Dental Group, with a team focused on practical, comfortable care for every stage of life.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex gap-3 rounded-2xl border border-navy/5 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-navy/70">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-navy/5 bg-white p-6 shadow-lg">
                <h3 className="mb-5 font-heading text-2xl font-bold text-navy">
                  Visiting from {area.city}
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3 border-b border-navy/8 pb-4">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                        Drive Time
                      </p>
                      <p className="text-sm font-semibold text-navy">
                        {area.driveTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 border-b border-navy/8 pb-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                        Area ZIP
                      </p>
                      <p className="text-sm font-semibold text-navy">
                        {area.zipCodes}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                        Payment Support
                      </p>
                      <p className="text-sm leading-relaxed text-navy/65">
                        PPO insurance guidance, in-house membership options, and flexible financing are available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                All Areas We Serve
              </p>
              <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
                Nearby communities
              </h2>
            </div>
            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary transition-colors hover:text-primary-dark"
            >
              View All Areas
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherAreas.map((item) => (
              <Link
                key={item.slug}
                href={`/areas-we-serve/${item.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-navy/5 bg-beige-light/30 p-5 transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <div>
                  <p className="font-heading text-xl font-bold text-navy">
                    {item.city}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                    Dentist {item.city}, PA
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </main>
  );
}
