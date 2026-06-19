import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import OurStoryClient from "./OurStoryClient";

export const metadata: Metadata = {
  title: "Our Story | Hampton Family Dental, Southampton PA",
  description:
    "The story of Hampton Family Dental — formerly Brenner Dental Group — serving Southampton, PA families for decades. Same trusted location, same caring team.",
  alternates: {
    canonical: `${SITE_URL}/about/our-story`,
  },
  openGraph: {
    title: "Our Story | Hampton Family Dental, Southampton PA",
    description:
      "The story of Hampton Family Dental — formerly Brenner Dental Group — serving Southampton, PA families for decades. Same trusted location, same caring team.",
    url: `${SITE_URL}/about/our-story`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Hampton Family Dental, Southampton PA",
    description:
      "The story of Hampton Family Dental — formerly Brenner Dental Group — serving Southampton, PA families for decades. Same trusted location, same caring team.",
  },
};

export default function OurStoryPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story - Hampton Family Dental",
    "description": "The story of Hampton Family Dental — formerly Brenner Dental Group — serving Southampton, PA families for decades. Same trusted location, same caring team.",
    "publisher": {
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
      }
    }
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
        "name": "Our Story",
        "item": `${SITE_URL}/about/our-story`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <OurStoryClient />
    </>
  );
}
