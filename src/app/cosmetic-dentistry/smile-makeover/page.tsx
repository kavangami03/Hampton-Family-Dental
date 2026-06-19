import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import SmileMakeoverClient from "./SmileMakeoverClient";

export const metadata: Metadata = {
  title: "Smile Makeover in Southampton, PA | Hampton Family Dental",
  description:
    "Custom smile makeovers in Southampton, PA — combine veneers, whitening, bonding & alignment into one personalized plan for your dream smile. (215) 357-2224.",
  keywords: [
    "smile makeover southampton pa",
    "cosmetic dentistry southampton",
    "full smile transformation southampton",
    "smile design southampton",
    "smile makeover cost 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/cosmetic-dentistry/smile-makeover`,
  },
  openGraph: {
    title: "Smile Makeover in Southampton, PA | Hampton Family Dental",
    description:
      "Custom smile makeovers in Southampton, PA — combine veneers, whitening, bonding & alignment into one personalized plan for your dream smile. (215) 357-2224.",
    url: `${SITE_URL}/cosmetic-dentistry/smile-makeover`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Makeover in Southampton, PA | Hampton Family Dental",
    description:
      "Custom smile makeovers in Southampton, PA — combine veneers, whitening, bonding & alignment into one personalized plan for your dream smile. (215) 357-2224.",
  },
};

export default function SmileMakeoverPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Smile Makeover",
    "description": "Custom smile makeovers combining veneers, whitening, bonding, and alignment into one personalized cosmetic plan, for patients in Southampton, PA.",
    "provider": {
      "@type": "Dentist",
      "name": "Hampton Family Dental",
      "telephone": "+12153572224",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "283 Second Street Pike, Suite 140",
        "addressLocality": "Southampton",
        "addressRegion": "PA",
        "postalCode": "18966",
        "addressCountry": "US"
      },
      "areaServed": [
        "Southampton PA",
        "Richboro PA",
        "Warminster PA",
        "Newtown PA",
        "Holland PA",
        "Feasterville PA",
        "Huntingdon Valley PA"
      ]
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a smile makeover cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's fully customized, so cost depends on the treatments in your plan - from a whitening-and-bonding refresh to full veneers. We give you a clear, itemized estimate and offer CareCredit financing."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in a smile makeover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Whatever your smile needs - it can combine whitening, veneers, bonding, clear aligners, and crowns or implants. We design a personalized plan around your goals and budget."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a smile makeover take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the treatments - a whitening-and-bonding refresh can be quick, while a plan involving alignment or implants takes longer. We'll map out a clear timeline."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see my new smile before treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - we often use digital smile design or previews so you can see the expected result before we begin, and adjust the plan together until you love it."
        }
      },
      {
        "@type": "Question",
        "name": "Can I do my smile makeover in phases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Many patients phase treatment over time to fit their schedule and budget. We'll prioritize the steps that matter most and plan the rest at your pace."
        }
      },
      {
        "@type": "Question",
        "name": "Will a smile makeover look natural?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - our goal is a result that looks like the best version of your own smile, not fake. We match shape and shade to your face so it looks completely natural."
        }
      }
    ]
  };

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
        "name": "Cosmetic Dentistry",
        "item": `${SITE_URL}/cosmetic-dentistry`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Smile Makeover",
        "item": `${SITE_URL}/cosmetic-dentistry/smile-makeover`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SmileMakeoverClient />
    </>
  );
}
