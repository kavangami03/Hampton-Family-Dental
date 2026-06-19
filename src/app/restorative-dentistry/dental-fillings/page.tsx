import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DentalFillingsClient from "./DentalFillingsClient";

export const metadata: Metadata = {
  title: "Tooth-Colored Dental Fillings in Southampton, PA | Hampton",
  description:
    "Tooth-colored dental fillings in Southampton, PA — repair cavities with natural-looking composite. Same-visit care. (215) 357-2224.",
  keywords: [
    "dental fillings southampton pa",
    "tooth colored fillings southampton",
    "cavity filling southampton",
    "composite filling southampton",
    "tooth filling cost 18966",
  ],
  alternates: {
    canonical: `${SITE_URL}/restorative-dentistry/dental-fillings`,
  },
  openGraph: {
    title: "Tooth-Colored Dental Fillings in Southampton, PA | Hampton",
    description:
      "Tooth-colored dental fillings in Southampton, PA — repair cavities with natural-looking composite. Same-visit care. (215) 357-2224.",
    url: `${SITE_URL}/restorative-dentistry/dental-fillings`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooth-Colored Dental Fillings in Southampton, PA | Hampton",
    description:
      "Tooth-colored dental fillings in Southampton, PA — repair cavities with natural-looking composite. Same-visit care. (215) 357-2224.",
  },
};

export default function DentalFillingsPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Filling",
    "description": "Tooth-colored composite dental fillings that repair cavities and restore decayed teeth, for patients in Southampton, PA.",
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
        "name": "How much does a dental filling cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the size and location of the cavity and the material. We give you a clear estimate first. Most plans cover fillings well, often 80-100%, and we accept CareCredit."
        }
      },
      {
        "@type": "Question",
        "name": "Are tooth-colored fillings better than metal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most patients, yes - composite bonds to the tooth, matches your natural color, removes less healthy tooth, and contains no metal. We use tooth-colored fillings as our standard."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if I have a cavity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cavities often start painlessly. Watch for a toothache, sensitivity to hot/cold/sweet, a visible hole or dark spot, or food catching in one spot. Regular checkups catch them early."
        }
      },
      {
        "@type": "Question",
        "name": "Does getting a filling hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No - we numb the tooth first, so you'll feel pressure but not pain. The visit is usually quick, and mild sensitivity afterward fades within a day or two."
        }
      },
      {
        "@type": "Question",
        "name": "How long do fillings last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tooth-colored fillings typically last 7 to 10 years or more with good care. We check your fillings at each visit and replace them if they wear or chip."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I leave a cavity untreated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Decay keeps spreading - a small cavity can grow into one needing a crown, or reach the nerve and require a root canal. Treating it early with a filling is faster and less expensive."
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
        "name": "Dental Fillings",
        "item": `${SITE_URL}/restorative-dentistry/dental-fillings`
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
      <DentalFillingsClient />
    </>
  );
}
