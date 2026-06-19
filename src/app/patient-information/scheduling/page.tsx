import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import SchedulingClient from "./SchedulingClient";

export const metadata: Metadata = {
  title: "Book a Dental Appointment in Southampton, PA | Hampton",
  description:
    "Schedule your dental appointment in Southampton, PA with Hampton Family Dental. Call (215) 357-2224 or request a time online. Same-day emergencies welcome.",
  alternates: {
    canonical: `${SITE_URL}/patient-information/scheduling`,
  },
  openGraph: {
    title: "Book a Dental Appointment in Southampton, PA | Hampton Family Dental",
    description:
      "Schedule your dental appointment in Southampton, PA with Hampton Family Dental. Call (215) 357-2224 or request a time online. Same-day emergencies welcome.",
    url: `${SITE_URL}/patient-information/scheduling`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Dental Appointment in Southampton, PA | Hampton Family Dental",
    description:
      "Schedule your dental appointment in Southampton, PA with Hampton Family Dental. Call (215) 357-2224 or request a time online. Same-day emergencies welcome.",
  },
};

export default function SchedulingPage() {
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
        "name": "Patient Information",
        "item": `${SITE_URL}/patient-information`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Scheduling",
        "item": `${SITE_URL}/patient-information/scheduling`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SchedulingClient />
    </>
  );
}
