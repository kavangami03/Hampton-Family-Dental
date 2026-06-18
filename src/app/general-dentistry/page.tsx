import type { Metadata } from "next";
import GeneralDentistryHubContent from "@/components/hub-page/GeneralDentistryHubContent";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";
import { absoluteUrl } from "@/lib/site";

const metadataSource = {
  title: "General & Preventive Dentistry in Southampton, PA",
  intro:
    "General & preventive dentistry in Southampton, PA — cleanings, checkups, X-rays, emergency care & gum therapy. Formerly Brenner Dental Group. (215) 357-2224.",
  metadata: {
    title: "General & Preventive Dentistry Southampton, PA | Hampton",
    description:
      "General & preventive dentistry in Southampton, PA — cleanings, checkups, X-rays, emergency care & gum therapy. Formerly Brenner Dental Group. (215) 357-2224.",
    keywords:
      "general dentistry southampton pa, preventive dentistry southampton, teeth cleaning southampton, dental checkup southampton, family dentist 18966",
    canonical: "/general-dentistry",
    openGraphTitle:
      "General & Preventive Dentistry in Southampton, PA | Hampton Family Dental",
    openGraphDescription:
      "General & preventive dentistry in Southampton, PA — cleanings, checkups, X-rays, emergency care & gum therapy. Formerly Brenner Dental Group. (215) 357-2224.",
  },
};

export const metadata: Metadata = buildServicePageMetadata(metadataSource);

const faqs = [
  {
    q: "How often should I go to the dentist?",
    a: "For most people, a dental checkup and cleaning every six months is ideal. If you’re prone to cavities, gum disease, or other issues, we may recommend more frequent visits. We’ll suggest the right schedule for you at your appointment.",
  },
  {
    q: "What happens at a dental checkup?",
    a: "A checkup includes a thorough exam of your teeth and gums, a professional cleaning to remove plaque and tartar, digital X-rays when needed, and an oral cancer screening. We’ll review anything we find and answer your questions.",
  },
  {
    q: "What is preventive dentistry?",
    a: "Preventive dentistry is the care that keeps problems from starting — regular cleanings, exams, X-rays, and screenings that catch issues early, when they’re easier and less expensive to treat.",
  },
  {
    q: "Do you see patients without dental insurance?",
    a: "Yes. Our in-house membership plans cover routine checkups, cleanings, and diagnostic X-rays for a low yearly fee, plus 15% off restorative treatments — a simple option for patients without insurance.",
  },
  {
    q: "Do you offer same-day emergency dental care?",
    a: "Yes. We reserve time for same-day emergency appointments for issues like severe toothaches, chipped or broken teeth, and dental trauma. Call us at (215) 357-2224 and we’ll get you seen as quickly as possible.",
  },
];

const schemaFaqs = [
  {
    q: "How often should I go to the dentist?",
    a: "For most people, a checkup and cleaning every six months is ideal. If you're prone to cavities or gum disease, we may recommend more frequent visits. We'll suggest the right schedule at your appointment.",
  },
  {
    q: "What happens at a dental checkup?",
    a: "A checkup includes a thorough exam of your teeth and gums, a professional cleaning, digital X-rays when needed, and an oral cancer screening. We'll review anything we find and answer your questions.",
  },
  {
    q: "What is preventive dentistry?",
    a: "Preventive dentistry is the care that keeps problems from starting - regular cleanings, exams, X-rays, and screenings that catch issues early, when they're easier and less expensive to treat.",
  },
  {
    q: "Do you see patients without dental insurance?",
    a: "Yes. Our in-house membership plans cover routine checkups, cleanings, and diagnostic X-rays for a low yearly fee, plus 15% off restorative treatments.",
  },
  {
    q: "Do you offer same-day emergency dental care?",
    a: "Yes. We reserve time for same-day emergency appointments for severe toothaches, chipped or broken teeth, and dental trauma. Call (215) 357-2224 and we'll get you seen as quickly as possible.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "General & Preventive Dentistry Services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Oral Hygiene",
      "url": absoluteUrl("/general-dentistry/oral-hygiene"),
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Dental Checkups & X-Rays",
      "url": absoluteUrl("/general-dentistry/checkups-and-x-rays"),
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Emergency Dentistry",
      "url": absoluteUrl("/general-dentistry/emergency-dentistry"),
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Tooth Extraction",
      "url": absoluteUrl("/general-dentistry/tooth-extraction"),
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Oral Cancer Screening",
      "url": absoluteUrl("/general-dentistry/oral-cancer-screening"),
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Perio Protect",
      "url": absoluteUrl("/general-dentistry/perio-protect"),
    },
  ],
};

export default function GeneralDentistryHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
      <GeneralDentistryHubContent faqs={faqs} schemaFaqs={schemaFaqs} />
    </>
  );
}
