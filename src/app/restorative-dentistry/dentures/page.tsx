import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DenturesClient from "./DenturesClient";

export const metadata: Metadata = {
  title: "Dentures in Southampton, PA | Full & Partial | Hampton",
  description:
    "Custom full, partial & implant-supported dentures in Southampton, PA — natural-looking, comfortable, secure. (215) 357-2224.",
  keywords: [
    "dentures southampton pa",
    "partial dentures southampton",
    "implant supported dentures southampton",
    "dentures cost southampton",
    "permanent dentures 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry/dentures`,
  },
  openGraph: {
    title: "Dentures in Southampton, PA | Full & Partial | Hampton",
    description:
      "Custom full, partial & implant-supported dentures in Southampton, PA — natural-looking, comfortable, secure. (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry/dentures`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentures in Southampton, PA | Full & Partial | Hampton",
    description:
      "Custom full, partial & implant-supported dentures in Southampton, PA — natural-looking, comfortable, secure. (215) 357-2224.",
  },
};

export default function DenturesPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dentures",
    "description": "Custom full, partial, and implant-supported dentures that replace missing teeth comfortably and naturally, for patients in Southampton, PA.",
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
        "name": "How much do dentures cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the type - full vs partial, standard vs premium, and whether they're implant-supported. We give you a clear estimate first. Many plans cover a portion, we accept CareCredit, and members get 15% off."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between full and partial dentures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full dentures replace all the teeth in an arch when no natural teeth remain; partial dentures fill in several missing teeth while your remaining natural teeth stay in place."
        }
      },
      {
        "@type": "Question",
        "name": "What are permanent or implant-supported dentures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implant-supported dentures snap securely onto dental implants instead of resting on the gums - no slipping or adhesives, much more stable, and they help preserve jawbone."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair or reline dentures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If your dentures feel loose, crack, or no longer fit, we repair and reline them rather than having you live with discomfort."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get used to dentures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people adjust within a few weeks - speaking and eating get easier as your mouth adapts. We'll guide you through the transition and make adjustments for comfort."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get dentures the same day my teeth are removed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - immediate dentures are placed the same day your teeth are extracted, so you're never without a smile. They're relined or replaced after your gums heal for the best fit."
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
        "name": "Dentures",
        "item": `${SITE_URL}/restorative-dentistry/dentures`
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
      <DenturesClient />
    </>
  );
}
