import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, Mail, Phone, MapPin, Calendar, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility Statement | Hampton Family Dental",
  description:
    "Read the Accessibility Statement for Hampton Family Dental in Southampton, PA. We are committed to ensuring digital accessibility for all users.",
  alternates: {
    canonical: `${SITE_URL}/accessibility`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Accessibility Statement | Hampton Family Dental",
    description:
      "Read the Accessibility Statement for Hampton Family Dental in Southampton, PA. We are committed to ensuring digital accessibility for all users.",
    url: `${SITE_URL}/accessibility`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | Hampton Family Dental",
    description:
      "Read the Accessibility Statement for Hampton Family Dental in Southampton, PA. We are committed to ensuring digital accessibility for all users.",
  },
};

export default function AccessibilityPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Accessibility Statement" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Accessibility Statement",
        "item": `${SITE_URL}/accessibility`
      }
    ]
  };

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Accessibility Statement
              </h1>
              <p className="text-primary-light font-medium tracking-wide uppercase text-sm">
                Last Updated: June 19, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="space-y-10 prose prose-navy max-w-none text-navy/80 text-sm md:text-base leading-relaxed">
            
            {/* Sincere Intro & Commitment */}
            <div className="space-y-4">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">1. Our Commitment to Accessibility</h2>
              <p>
                At Hampton Family Dental, we are dedicated to ensuring digital accessibility for everyone, including individuals with disabilities. We continuously strive to improve the user experience for all visitors to our website, and we apply the relevant accessibility standards to guarantee that our digital environment is open, welcoming, and easy to navigate.
              </p>
              <p>
                We believe that every patient and community member should have equal access to dental health information and practice scheduling services. Ensuring our website is accessible is a core reflection of our patient-centered care and values.
              </p>
            </div>

            {/* WCAG Conformance Callout */}
            <div className="bg-beige-light/25 border border-navy/5 rounded-3xl p-6 md:p-8 space-y-4">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Accessibility className="w-6 h-6 text-primary shrink-0" />
                2. Accessibility Standards & Conformance Goal
              </h2>
              <p className="font-semibold text-navy/95">
                We strive to conform our website to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
              <p className="text-navy/70">
                The World Wide Web Consortium (W3C) has established Web Content Accessibility Guidelines (WCAG) to define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
              </p>
              <p className="text-navy/70">
                Hampton Family Dental aim to conform to <strong>WCAG 2.1 Level AA</strong>. This standard makes web content more accessible to people with a wide range of sensory, cognitive, and physical disabilities, which in turn benefits all users.
              </p>
            </div>

            {/* Ongoing Efforts */}
            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">3. Ongoing Development & Maintenance Efforts</h2>
              <p>
                Digital accessibility is an active, ongoing effort. As web standards and technologies evolve, we continually review and optimize our Site to ensure it remains accessible. Our developer and administrative teams routinely audit our Site, review styling contrasts, verify alternative text on images, ensure keyboard navigation compatibility, and address any potential usability obstacles.
              </p>
            </div>

            {/* Assistance & Contacts */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 md:p-8 space-y-4">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                4. Requesting Assistance & Reporting Accessibility Barriers
              </h2>
              <p className="font-semibold text-navy/95">
                We welcome your feedback and want to support you if you encounter any barriers on our Site.
              </p>
              <p className="text-navy/70">
                If you experience difficulty accessing any content or functionality on our website, or if you identify a digital barrier, please let us know immediately. We will work with you to provide the requested information, schedule your appointment, or resolve the issue through an alternative communication method.
              </p>
              <p className="text-navy/70">
                You can reach our accessibility coordinator directly through the following contact channels:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-2 text-xs md:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-navy/5 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Direct Phone</p>
                    <a href={practiceInfo.phoneTel} className="text-primary hover:underline font-medium">
                      {practiceInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-navy/5 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Support Email</p>
                    <a href={`mailto:${practiceInfo.email}`} className="text-primary hover:underline font-medium break-all">
                      {practiceInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-navy/5 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Office Location</p>
                    <p className="text-navy/60 font-medium">{practiceInfo.address.street}</p>
                    <p className="text-navy/60 text-xs">{practiceInfo.address.suite}, {practiceInfo.address.city}, {practiceInfo.address.state}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Content */}
            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">5. Third-Party Web Content</h2>
              <p>
                While we make every effort to ensure the accessibility of pages under our direct control, our Site may occasionally integrate or link to third-party services and content (such as Google Maps for directions, CareCredit for patient financing, or social media platforms). 
              </p>
              <p>
                Hampton Family Dental cannot guarantee that these external, third-party sites fully conform to WCAG requirements. However, we actively advocate for accessibility conformance and seek to partner with vendor platforms that prioritize digital inclusivity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Scheduling CTA Banner ─── */}
      <section className="py-16 md:py-20 bg-beige-light/30 border-t border-navy/[0.04] text-center space-y-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6">
          <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
            Need Dental Care? We Are Here to Assist
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            If you need assistance booking an appointment or have questions about our services, please call our friendly office team. We are happy to coordinate your visit over the phone.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Request Appointment
            </Link>
            <a
              href={practiceInfo.phoneTel}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-navy/15 text-navy text-xs font-semibold tracking-widest uppercase hover:bg-navy hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call {practiceInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
