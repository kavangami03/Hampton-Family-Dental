import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import EmergencyDentistryClient from "./EmergencyDentistryClient";

export const metadata: Metadata = {
  title: "Emergency Dentist in Southampton, PA | Same-Day | Hampton",
  description:
    "Same-day emergency dentist in Southampton, PA. Fast relief for tooth pain, broken teeth, abscesses & lost crowns. Call (215) 357-2224 now.",
  keywords: [
    "emergency dentist southampton pa",
    "same day dentist southampton",
    "tooth pain relief southampton",
    "broken tooth southampton",
    "dental abscess southampton",
  ],
  alternates: {
    canonical: `${SITE_URL}/general-dentistry/emergency-dentistry`,
  },
  openGraph: {
    title: "Emergency Dentist in Southampton, PA | Same-Day | Hampton",
    description:
      "Same-day emergency dentist in Southampton, PA. Fast relief for tooth pain, broken teeth, abscesses & lost crowns. Call (215) 357-2224 now.",
    url: `${SITE_URL}/general-dentistry/emergency-dentistry`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Dentist in Southampton, PA | Same-Day | Hampton",
    description:
      "Same-day emergency dentist in Southampton, PA. Fast relief for tooth pain, broken teeth, abscesses & lost crowns. Call (215) 357-2224 now.",
  },
};

export default function EmergencyDentistryPage() {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Emergency Dental Care",
    "description": "Same-day emergency dental treatment for severe tooth pain, broken or knocked-out teeth, dental abscesses, and lost crowns in Southampton, PA.",
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
        "name": "Same-Day Emergency Dentistry"
      }
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I do if a tooth is knocked out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Find the tooth, handle it only by the crown, and gently rinse it. Try to place it back in the socket. If that's not possible, keep it moist in a cup of milk or saliva and get to our office within 1 hour."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stop a toothache fast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Take an over-the-counter pain reliever like ibuprofen as directed, rinse with warm salt water, and use a cold compress on your cheek. Keep your head elevated. These ease pain temporarily - call us so we can treat the cause."
        }
      },
      {
        "@type": "Question",
        "name": "Is a dental abscess an emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. An abscess is a bacterial infection that can spread, so it needs same-day care. Don't squeeze it; rinse with warm salt water and call us immediately. Swelling that affects breathing or swallowing is a 911 emergency."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do for a broken or cracked tooth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rinse with warm water, apply a cold compress to reduce swelling, and save any pieces. Avoid chewing on that side and call us right away - a cracked tooth can worsen quickly."
        }
      },
      {
        "@type": "Question",
        "name": "How do I handle a tooth abscess?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An abscess is a serious bacterial infection that can cause swelling, fever, and severe pain. Do not squeeze or pop it. Rinse with warm salt water and call our office immediately for antibiotics or emergency root canal treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day emergency appointments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We reserve time each day for emergencies and do everything we can to see you the same day for severe pain, swelling, or a broken or knocked-out tooth. Call (215) 357-2224."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an emergency dental visit cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on what's needed to relieve pain and stabilize the tooth - we keep it clear and discuss it before treatment. Many emergency exams are covered by insurance, we accept CareCredit, and our membership plan helps patients without insurance."
        }
      },
      {
        "@type": "Question",
        "name": "Should I go to the ER or a dentist for a dental emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most dental emergencies, a dentist treats the problem fastest - ERs can manage pain and infection but usually can't repair the tooth. Go to the ER or call 911 for swelling that affects breathing or swallowing, a broken jaw, or uncontrolled bleeding."
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
        "name": "Emergency Dentistry",
        "item": `${SITE_URL}/general-dentistry/emergency-dentistry`
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
      <EmergencyDentistryClient />
    </>
  );
}
