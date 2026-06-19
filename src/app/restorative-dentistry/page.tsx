import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import RestorativeDentistryClient from "./RestorativeDentistryClient";

export const metadata: Metadata = {
  title: "Restorative Dentistry in Southampton, PA | Hampton",
  description:
    "Restorative dentistry in Southampton, PA — implants, crowns, bridges, fillings, root canals & dentures. Formerly Brenner Dental Group. (215) 357-2224.",
  keywords: [
    "restorative dentistry southampton pa",
    "dental implants southampton",
    "dental crowns southampton",
    "dentures southampton",
    "root canal southampton",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry`,
  },
  openGraph: {
    title: "Restorative Dentistry in Southampton, PA | Hampton Family Dental",
    description:
      "Restore your smile in Southampton, PA — dental implants, crowns, bridges, fillings, root canals & dentures. Formerly Brenner Dental Group. Call (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry`,
    type: "website",
  },
};

export default function RestorativeDentistryPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Restorative Dentistry Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Dental Implants",
        "url": `${SITE_URL}/restorative-dentistry/dental-implants`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dental Crowns",
        "url": `${SITE_URL}/restorative-dentistry/dental-crowns`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dental Bridges",
        "url": `${SITE_URL}/restorative-dentistry/dental-bridges`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Dental Fillings",
        "url": `${SITE_URL}/restorative-dentistry/dental-fillings`,
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Root Canal Treatment",
        "url": `${SITE_URL}/restorative-dentistry/root-canal`,
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Dentures",
        "url": `${SITE_URL}/restorative-dentistry/dentures`,
      },
    ],
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a root canal take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most root canals are completed in one to two visits, each about 60 to 90 minutes depending on the tooth. Modern techniques make it about as comfortable as a routine filling, and it relieves the pain an infected tooth causes.",
        },
      },
      {
        "@type": "Question",
        "name": "How much do dental implants and dentures cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost depends on how many teeth you're restoring and the materials used, so we provide a personalized quote at your consultation. We offer financing and CareCredit, and our membership plan includes 15% off restorative treatments.",
        },
      },
      {
        "@type": "Question",
        "name": "How long do dental implants last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With good hygiene and regular checkups, dental implants can last decades - often a lifetime. The titanium implant fuses with the jawbone to form a permanent foundation; only the crown on top may need replacement after many years.",
        },
      },
      {
        "@type": "Question",
        "name": "Does insurance cover restorative dentistry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many plans cover a portion of fillings, crowns, root canals, and dentures, while implant coverage varies. We'll review your benefits and explain your options, including financing and membership-plan savings.",
        },
      },
      {
        "@type": "Question",
        "name": "What's the difference between a filling, a crown, and an implant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A filling repairs a small cavity, a crown caps and protects a more damaged tooth, and an implant replaces a tooth that's missing entirely. We recommend the most conservative option that fully restores your tooth.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Restorative Dentistry",
        "item": `${SITE_URL}/restorative-dentistry`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
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
      <RestorativeDentistryClient />
    </>
  );
}
