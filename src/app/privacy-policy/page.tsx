import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Hampton Family Dental",
  description:
    "Read the Privacy Policy for Hampton Family Dental in Southampton, PA. Understand how we handle your personal data and comply with privacy regulations.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Hampton Family Dental",
    description:
      "Read the Privacy Policy for Hampton Family Dental in Southampton, PA. Understand how we handle your personal data and comply with privacy regulations.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Hampton Family Dental",
    description:
      "Read the Privacy Policy for Hampton Family Dental in Southampton, PA. Understand how we handle your personal data and comply with privacy regulations.",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" },
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
        "name": "Privacy Policy",
        "item": `${SITE_URL}/privacy-policy`
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
                Privacy Policy
              </h1>
              <p className="text-primary-light font-medium tracking-wide uppercase text-sm">
                Effective Date: June 19, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          
          {/* Legal Warning Banner */}
          <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-3xl p-6 md:p-8 mb-12 flex gap-4 items-start shadow-sm">
            <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-amber-800">
                Practice & Attorney Review Required
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-amber-900/80">
                <strong>Attention practice administrator / legal counsel:</strong> This Privacy Policy is a draft layout incorporating standard web transparency guidelines. It is currently <strong>pending final legal review and official approval</strong> by Hampton Family Dental&apos;s attorney to ensure full compliance with Pennsylvania state medical regulations, federal healthcare laws, and your specific HIPAA Notice of Privacy Practices (NPP). Please verify the PHI and HIPAA statements in Section 4 before publishing this page live.
              </p>
            </div>
          </div>

          <div className="space-y-10 prose prose-navy max-w-none text-navy/80 text-sm md:text-base leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">1. Introduction</h2>
              <p>
                At Hampton Family Dental (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at {SITE_URL} (the &ldquo;Site&rdquo;) or interact with us online. By using the Site, you consent to the data practices described in this policy.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you interact with the Site. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Your name, email address, phone number, and physical address when you submit contact forms or request information.</li>
                <li><strong>Appointment Requests:</strong> Information submitted through our online scheduling request form to book visits.</li>
                <li><strong>Technical and Usage Data:</strong> IP addresses, browser types, operating systems, referring URLs, pages viewed on the Site, and the dates/times of your visits, collected automatically via cookies and web analytics.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to operate, maintain, and improve our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to your inquiries and fulfilling scheduling requests.</li>
                <li>Sending administrative communications, newsletters, or wellness updates (which you can opt out of at any time).</li>
                <li>Analyzing Site usage trends to optimize layout, load speed, and user experience.</li>
                <li>Complying with applicable legal obligations and protecting the security of our Site.</li>
              </ul>
            </div>

            <div className="space-y-3 bg-beige-light/10 border border-navy/5 rounded-3xl p-6 md:p-8">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold flex items-center gap-2">
                4. Protected Health Information (PHI) & HIPAA
              </h2>
              <p className="font-semibold text-navy/95">
                Please note that this website is for informational and appointment-scheduling coordination purposes only.
              </p>
              <p>
                Protected Health Information (PHI) collected during your clinical treatment in our office is subject to the federal Health Insurance Portability and Accountability Act (HIPAA). All PHI and clinical patient records are handled strictly in accordance with our practice&apos;s official <strong>Notice of Privacy Practices (NPP)</strong>, which is separate from this website privacy policy.
              </p>
              <p className="text-xs text-navy/60 italic">
                [Client Note: Please insert a link to your official Notice of Privacy Practices PDF here, or contact your IT provider to upload the clinical HIPAA documentation.]
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">5. Cookies & Analytics</h2>
              <p>
                We use cookies—small text files stored on your browser—to remember preferences and analyze web traffic. We use services like Google Analytics to compile aggregated, non-identifying statistical report charts about visitor demographics and Site activity. You can configure your web browser to disable or reject cookies, though some features of the Site may not function properly without them.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">6. Third-Party Services</h2>
              <p>
                Our Site may contain links to third-party platforms, such as scheduling widgets, mapping directions (Google Maps), or financing programs (CareCredit). We do not control and are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you access through our links.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">7. Data Security</h2>
              <p>
                We implement industry-standard administrative, physical, and technical security safeguards—such as Secure Sockets Layer (SSL) encryption—to protect your submitted information against unauthorized access, loss, or alteration. However, please be aware that no transmission of data over the internet can be guaranteed 100% secure.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">8. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to request access to, correction of, or deletion of the personal data you have submitted to us through our Site. To make such a request, please contact us using the information provided below.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">9. Children&apos;s Privacy</h2>
              <p>
                Our Site is not directed to individuals under the age of 13. We do not knowingly collect personal information online from children. If we become aware that we have inadvertently collected data from a child under 13, we will take immediate steps to delete that information from our database.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable regulatory standards. Any modifications will be posted directly on this page with an updated effective date at the top. We encourage you to periodically review this page to stay informed.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-navy/10">
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">11. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or our data management practices, please reach out to us:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-2 text-xs md:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light/35 border border-navy/5 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Hampton Family Dental</p>
                    <p className="text-navy/60">{practiceInfo.address.street}</p>
                    <p className="text-navy/60">{practiceInfo.address.suite}</p>
                    <p className="text-navy/60">{practiceInfo.address.city}, {practiceInfo.address.state} {practiceInfo.address.zip}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light/35 border border-navy/5 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Phone Number</p>
                    <a href={practiceInfo.phoneTel} className="text-primary hover:underline font-medium">
                      {practiceInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light/35 border border-navy/5 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email Address</p>
                    <a href={`mailto:${practiceInfo.email}`} className="text-primary hover:underline font-medium break-all">
                      {practiceInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ─── Scheduling CTA Banner ─── */}
      <section className="py-16 md:py-20 bg-beige-light/30 border-t border-navy/[0.04] text-center space-y-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 space-y-6">
          <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
            Schedule an Appointment
          </h2>
          <p className="text-navy/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about our practice or ready to book your first comprehensive examination? Contact our team or use our convenient online scheduler.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/patient-information/scheduling"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
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
