import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import OralCancerScreeningClient from "./OralCancerScreeningClient";

export const metadata: Metadata = {
  title: "Oral Cancer Screening in Southampton, PA | Hampton",
  description:
    "Quick, painless oral cancer screening in Southampton, PA — part of every checkup. Early detection saves lives. Call Hampton Family Dental: (215) 357-2224.",
  keywords: [
    "oral cancer screening southampton pa",
    "oral cancer screening",
    "oral cancer symptoms",
    "signs of oral cancer",
    "mouth cancer screening",
  ],
  alternates: {
    canonical: `${SITE_URL}/general-dentistry/oral-cancer-screening`,
  },
  openGraph: {
    title: "Oral Cancer Screening in Southampton, PA | Hampton",
    description:
      "Quick, painless oral cancer screening in Southampton, PA — part of every checkup. Early detection saves lives. Call Hampton Family Dental: (215) 357-2224.",
    url: `${SITE_URL}/general-dentistry/oral-cancer-screening`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oral Cancer Screening in Southampton, PA | Hampton",
    description:
      "Quick, painless oral cancer screening in Southampton, PA — part of every checkup. Early detection saves lives. Call Hampton Family Dental: (215) 357-2224.",
  },
};

export default function OralCancerScreeningPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Oral Cancer Screening",
    "description": "A quick, painless visual and physical exam to detect early signs of oral cancer, performed during routine checkups for patients in Southampton, PA.",
    "procedureType": "https://schema.org/DiagnosticProcedure",
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
        "name": "What are the early signs of oral cancer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watch for a sore that won't heal, a red or white patch, a lump or rough spot, persistent pain or numbness, or trouble swallowing - especially if it lasts more than two weeks. Most are harmless, but it's always worth a quick check."
        }
      },
      {
        "@type": "Question",
        "name": "What happens during an oral cancer screening?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a quick, painless exam - usually about five minutes during your checkup. We visually inspect your lips, tongue, cheeks, throat, and the floor and roof of your mouth, then gently feel your neck and jaw for unusual lumps or tender areas."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I have an oral cancer screening?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We screen at every routine checkup - typically every six months - so it's built into the care you already receive. Patients with higher risk factors, such as tobacco use, may benefit from more frequent monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "Does an oral cancer screening cost extra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We include oral cancer screening as a standard part of your comprehensive exam, so it's fully covered by dental insurance with no extra fee. Our membership plan also covers it as part of routine diagnostic visits."
        }
      },
      {
        "@type": "Question",
        "name": "What does an abnormal screening result mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An abnormal result does not automatically mean cancer. Most tissue changes are caused by minor mouth trauma, biting your cheek, or temporary sores. We simply monitor the area or test it to be absolutely sure."
        }
      },
      {
        "@type": "Question",
        "name": "How can I lower my risk of oral cancer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can lower your risk by avoiding tobacco products, consuming alcohol in moderation, applying UV-protective lip balm outdoors, and visiting us every 6 months for professional screenings."
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
        "name": "Oral Cancer Screening",
        "item": `${SITE_URL}/general-dentistry/oral-cancer-screening`
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
      <OralCancerScreeningClient />
    </>
  );
}
