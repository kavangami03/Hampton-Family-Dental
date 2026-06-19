import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DentalImplantsClient from "./DentalImplantsClient";

export const metadata: Metadata = {
  title: "Dental Implants in Southampton, PA | Cost & Options | Hampton",
  description:
    "Dental implants in Southampton, PA — single tooth to full-mouth & All-on-4. Permanent, natural tooth replacement. Financing available. (215) 357-2224.",
  keywords: [
    "dental implants southampton pa",
    "dental implant cost southampton",
    "all on 4 southampton",
    "single tooth implant southampton",
    "full mouth implants southampton",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry/dental-implants`,
  },
  openGraph: {
    title: "Dental Implants in Southampton, PA | Cost & Options | Hampton",
    description:
      "Dental implants in Southampton, PA — single tooth to full-mouth & All-on-4. Permanent, natural tooth replacement. Financing available. (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry/dental-implants`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implants in Southampton, PA | Cost & Options | Hampton",
    description:
      "Dental implants in Southampton, PA — single tooth to full-mouth & All-on-4. Permanent, natural tooth replacement. Financing available. (215) 357-2224.",
  },
};

export default function DentalImplantsPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Implants",
    "description": "Titanium dental implants that permanently replace missing teeth - single tooth, multiple, All-on-4, and full-mouth options - for patients in Southampton, PA.",
    "procedureType": "https://schema.org/SurgicalProcedure",
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
        "name": "How much do dental implants cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on how many teeth you’re replacing and the type of restoration — a single implant differs greatly from full-mouth or All-on-4. We give you a clear written estimate first. Many plans cover part of the crown or surgery, we accept CareCredit, and members get 15% off."
        }
      },
      {
        "@type": "Question",
        "name": "What is All-on-4?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-on-4 replaces a full arch of teeth using just four implants as anchors for a fixed, non-removable set of teeth. It’s a popular, efficient alternative to dentures for patients missing most or all of their teeth in an arch."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the dental implant process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most cases take about 3 to 6 months from placement to final crown, because the implant needs time to fuse with the bone (osseointegration). We’ll give you a personalized timeline — some cases qualify for faster options."
        }
      },
      {
        "@type": "Question",
        "name": "Is the dental implant procedure painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients experience very little discomfort. The surgery is performed under local anesthesia, meaning the area is completely numb. Over-the-counter pain relievers are usually sufficient for any post-procedure soreness."
        }
      },
      {
        "@type": "Question",
        "name": "How long do dental implants last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper home care and regular professional checkups, the titanium implant post can last a lifetime. The custom crown on top may need replacement after 10 to 15 years due to normal wear."
        }
      },
      {
        "@type": "Question",
        "name": "Are dental implants better than a bridge or dentures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implants are the only option that replaces the tooth root, so they protect your jawbone and don’t rely on or damage neighboring teeth. Bridges and dentures are good options too — we’ll help you choose based on your needs and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Does insurance cover dental implants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coverage varies — many plans cover a portion of the crown or surgery rather than the full cost. We’ll review your benefits with you and explain your options, including financing through CareCredit and our membership-plan savings."
        }
      },
      {
        "@type": "Question",
        "name": "Am I too old for dental implants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! As long as you are in good health and have sufficient bone density, age is not a factor. Many elderly patients choose implants to replace unstable dentures."
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
        "name": "Dental Implants",
        "item": `${SITE_URL}/restorative-dentistry/dental-implants`
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
      <DentalImplantsClient />
    </>
  );
}
