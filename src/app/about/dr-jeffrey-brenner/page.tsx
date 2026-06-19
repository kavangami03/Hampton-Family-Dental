import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import DrBrennerClient from "./DrBrennerClient";

export const metadata: Metadata = {
  title: "Dr. Jeffrey Brenner, DMD | Hampton Family Dental",
  description:
    "Meet Dr. Jeffrey Brenner, DMD — founder of Hampton Family Dental (formerly Brenner Dental Group) in Southampton, PA, caring for families since the 1990s.",
  alternates: {
    canonical: `${SITE_URL}/about/dr-jeffrey-brenner`,
  },
  openGraph: {
    title: "Dr. Jeffrey Brenner, DMD | Hampton Family Dental",
    description:
      "Meet Dr. Jeffrey Brenner, DMD — founder of Hampton Family Dental (formerly Brenner Dental Group) in Southampton, PA, caring for families since the 1990s.",
    url: `${SITE_URL}/about/dr-jeffrey-brenner`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jeffrey Brenner, DMD | Hampton Family Dental",
    description:
      "Meet Dr. Jeffrey Brenner, DMD — founder of Hampton Family Dental (formerly Brenner Dental Group) in Southampton, PA, caring for families since the 1990s.",
  },
};

export default function DrBrennerBioPage() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Jeffrey Brenner, DMD",
    "jobTitle": "Dentist",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Hampton Family Dental",
      "alternateName": "Brenner Dental Group"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Temple University School of Dentistry"
    },
    "knowsAbout": [
      "Family Dentistry",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Dental Crowns",
      "Preventive Dentistry"
    ],
    "image": `${SITE_URL}/images/dentist_portrait_1779858109259.webp`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "283 Second Street Pike, Suite 140",
      "addressLocality": "Southampton",
      "addressRegion": "PA",
      "postalCode": "18966",
      "addressCountry": "US"
    },
    "telephone": "+12153572224"
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
        "name": "About Us",
        "item": `${SITE_URL}/about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dr. Jeffrey Brenner",
        "item": `${SITE_URL}/about/dr-jeffrey-brenner`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <DrBrennerClient />
    </>
  );
}
