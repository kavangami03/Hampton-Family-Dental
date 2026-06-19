import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ToothExtractionClient from "./ToothExtractionClient";

export const metadata: Metadata = {
  title: "Tooth Extraction in Southampton, PA | Wisdom Teeth | Hampton",
  description:
    "Gentle tooth extractions & wisdom teeth removal in Southampton, PA — comfortable care, clear aftercare, 15% off for members. (215) 357-2224.",
  keywords: [
    "tooth extraction southampton pa",
    "wisdom tooth removal southampton",
    "tooth extraction cost southampton",
    "dry socket",
    "tooth extraction aftercare",
  ],
  alternates: {
    canonical: `${SITE_URL}/general-dentistry/tooth-extraction`,
  },
  openGraph: {
    title: "Tooth Extraction in Southampton, PA | Wisdom Teeth | Hampton",
    description:
      "Gentle tooth extractions & wisdom teeth removal in Southampton, PA — comfortable care, clear aftercare, 15% off for members. (215) 357-2224.",
    url: `${SITE_URL}/general-dentistry/tooth-extraction`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooth Extraction in Southampton, PA | Wisdom Teeth | Hampton",
    description:
      "Gentle tooth extractions & wisdom teeth removal in Southampton, PA — comfortable care, clear aftercare, 15% off for members. (215) 357-2224.",
  },
};

export default function ToothExtractionPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Tooth Extraction",
    "description": "Safe, gentle, and comfortable tooth extractions, including wisdom teeth removal and emergency extractions, performed by experienced dentists in Southampton, PA.",
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
      ],
      "availableService": {
        "@type": "MedicalProcedure",
        "name": "Tooth Extractions & Wisdom Teeth Removal"
      }
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a tooth extraction cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on whether it's a simple or surgical extraction and which tooth is involved — wisdom and impacted teeth cost more than a straightforward extraction. We give you a clear estimate first. Most insurance covers 50–80%, we accept CareCredit, and members get 15% off."
        }
      },
      {
        "@type": "Question",
        "name": "Does a tooth extraction hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The extraction itself shouldn't hurt — we fully numb the area with local anesthesia, so you'll feel pressure but not pain. Some soreness afterward is normal and is easily managed with the medication and aftercare instructions we provide."
        }
      },
      {
        "@type": "Question",
        "name": "What is a dry socket and how do I prevent it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A dry socket occurs when the protective blood clot in the empty socket dislodges prematurely, exposing bone and nerves. You can prevent this by avoiding straws, smoking, spitting, or strenuous exercise for 48 hours after extraction."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to recover from a tooth extraction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people feel much better within a few days, with the socket fully healing over a few weeks. Surgical and wisdom tooth extractions can take a bit longer. Following your aftercare instructions — soft foods, no straws, gentle rinsing — speeds recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need my wisdom teeth removed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always — but impacted wisdom teeth that cause pain, swelling, crowding, or infection should come out. We'll review your X-rays and recommend removal only if it benefits your long-term oral health, ideally before problems start."
        }
      },
      {
        "@type": "Question",
        "name": "What can I eat after a tooth extraction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stick to soft, cool foods for the first day or two — yogurt, smoothies (no straw), mashed potatoes, soup that isn't too hot, and scrambled eggs. Avoid crunchy, chewy, or spicy foods and gradually return to your normal diet as the area heals."
        }
      },
      {
        "@type": "Question",
        "name": "How soon can I replace an extracted tooth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the replacement option and how the site heals — implants often wait a few weeks to months, while bridges or partial dentures may be placed sooner. We'll plan the timing with you so you're never left with a noticeable gap longer than necessary."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to replace an extracted tooth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Except for wisdom teeth, we highly recommend replacing extracted teeth. Gaps can cause surrounding teeth to drift, resulting in bite misalignment and bone loss. We can replace them with dental implants, bridges, or partial dentures."
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
        "name": "General Dentistry",
        "item": `${SITE_URL}/general-dentistry`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tooth Extraction",
        "item": `${SITE_URL}/general-dentistry/tooth-extraction`
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
      <ToothExtractionClient />
    </>
  );
}
