import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DentalBridgesClient from "./DentalBridgesClient";

export const metadata: Metadata = {
  title: "Dental Bridges in Southampton, PA | Hampton Family Dental",
  description:
    "Dental bridges in Southampton, PA — replace one or more missing teeth with natural-looking fixed porcelain restorations. (215) 357-2224.",
  keywords: [
    "dental bridges southampton pa",
    "dental bridge cost southampton",
    "types of dental bridges",
    "fixed bridge southampton",
    "replace missing teeth 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry/dental-bridges`,
  },
  openGraph: {
    title: "Dental Bridges in Southampton, PA | Hampton Family Dental",
    description:
      "Dental bridges in Southampton, PA — replace one or more missing teeth with natural-looking fixed porcelain restorations. (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry/dental-bridges`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Bridges in Southampton, PA | Hampton Family Dental",
    description:
      "Dental bridges in Southampton, PA — replace one or more missing teeth with natural-looking fixed porcelain restorations. (215) 357-2224.",
  },
};

export default function DentalBridgesPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Bridge",
    "description": "Fixed dental bridges that replace one or more missing teeth with natural-looking porcelain restorations, for patients in Southampton, PA.",
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
        "name": "How much does a dental bridge cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on how many teeth are replaced and the material. We give you a clear estimate first. Most insurance covers a portion, we accept CareCredit, and members get 15% off."
        }
      },
      {
        "@type": "Question",
        "name": "What are the types of dental bridges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main types are traditional, cantilever, Maryland, and implant-supported bridges. We recommend the best option based on where the gap is and the health of your surrounding teeth."
        }
      },
      {
        "@type": "Question",
        "name": "Is a bridge or an implant better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A bridge is faster and surgery-free but relies on the neighboring teeth and doesn't prevent bone loss. An implant replaces the root and stands alone but costs more upfront. We'll help you choose."
        }
      },
      {
        "@type": "Question",
        "name": "How long do dental bridges last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With good oral hygiene and regular checkups, most bridges last 10 to 15 years or more. Keeping the supporting teeth and gums healthy is key."
        }
      },
      {
        "@type": "Question",
        "name": "How do I clean under a dental bridge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a floss threader or interdental brush to clean beneath the false tooth daily, along with normal brushing and flossing. We'll show you the technique."
        }
      },
      {
        "@type": "Question",
        "name": "Does getting a bridge hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No - the teeth are numbed during preparation, so you'll feel pressure but not pain. Any mild sensitivity afterward is temporary."
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
        "name": "Restorative Dentistry",
        "item": `${SITE_URL}/restorative-dentistry`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dental Bridges",
        "item": `${SITE_URL}/restorative-dentistry/dental-bridges`
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
      <DentalBridgesClient />
    </>
  );
}
