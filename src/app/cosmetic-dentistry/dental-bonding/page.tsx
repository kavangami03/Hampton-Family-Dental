import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DentalBondingClient from "./DentalBondingClient";

export const metadata: Metadata = {
  title: "Dental Bonding in Southampton, PA | Hampton Family Dental",
  description:
    "Dental bonding in Southampton, PA — fix chips, gaps & discoloration in one visit with natural-looking composite. Affordable cosmetic care. (215) 357-2224.",
  keywords: [
    "dental bonding southampton pa",
    "teeth bonding southampton",
    "composite bonding southampton",
    "dental bonding cost southampton",
    "chipped tooth repair 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/cosmetic-dentistry/dental-bonding`,
  },
  openGraph: {
    title: "Dental Bonding in Southampton, PA | Hampton Family Dental",
    description:
      "Dental bonding in Southampton, PA — fix chips, gaps & discoloration in one visit with natural-looking composite. Affordable cosmetic care. (215) 357-2224.",
    url: `${SITE_URL}/cosmetic-dentistry/dental-bonding`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Bonding in Southampton, PA | Hampton Family Dental",
    description:
      "Dental bonding in Southampton, PA — fix chips, gaps & discoloration in one visit with natural-looking composite. Affordable cosmetic care. (215) 357-2224.",
  },
};

export default function DentalBondingPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Bonding",
    "description": "Tooth-colored composite dental bonding that repairs chips, gaps, and discoloration in a single visit, for patients in Southampton, PA.",
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
        "name": "How much does dental bonding cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bonding is one of the most affordable cosmetic treatments - usually far less than veneers or crowns, often in one visit. Cost depends on how many teeth. We give you a clear price first and accept CareCredit."
        }
      },
      {
        "@type": "Question",
        "name": "How long does dental bonding last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With good care, bonding typically lasts 3 to 10 years before it may need a touch-up. Avoiding habits like biting nails or ice and keeping up with checkups helps it last."
        }
      },
      {
        "@type": "Question",
        "name": "Is bonding or a veneer better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bonding is faster, cheaper, and reversible - great for small fixes. Veneers cost more and are permanent but offer a more dramatic, longer-lasting result. We'll recommend the right one."
        }
      },
      {
        "@type": "Question",
        "name": "Does dental bonding hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually not - most bonding requires no drilling and no anesthesia, so there's little to no discomfort. It's one of the gentlest cosmetic treatments."
        }
      },
      {
        "@type": "Question",
        "name": "Can bonding fix a chipped tooth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - bonding is a fast, natural-looking way to repair a chipped or cracked tooth, often in a single visit. We color-match the composite so the repair blends in."
        }
      },
      {
        "@type": "Question",
        "name": "Does bonding stain over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Composite can pick up stains from coffee, tea, wine, and smoking more than natural enamel. Good hygiene and limiting staining habits keep it fresh; we can polish or refresh it."
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
        "name": "Dental Bonding",
        "item": `${SITE_URL}/cosmetic-dentistry/dental-bonding`
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
      <DentalBondingClient />
    </>
  );
}
