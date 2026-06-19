import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";
import { buildServicePageMetadata } from "@/components/service-page/servicePageMetadata";
import { SITE_URL } from "@/lib/site";

const data = {
  eyebrow: "General Dentistry",
  title: "Teeth Cleaning & Oral Hygiene in Southampton, PA",
  intro: "Maintain a healthy, vibrant smile with professional cleanings and preventative hygiene care. Regular scaling and polishing remove stubborn plaque and tartar buildup, preventing gum disease and protecting your overall health.",
  duration: "45–60 minutes",
  visits: "Every 6 months",
  image: "/images/service_general_1779858374972.webp",
  
  // 4.1 Intro paragraph (NEW — add a lead-in above "What Is a Professional Teeth Cleaning?")
  introBody: {
    text: "A professional teeth cleaning is the single most important appointment for keeping your smile healthy for life. At Hampton Family Dental — formerly Brenner Dental Group — our registered hygienists give patients across Southampton, PA a thorough, comfortable cleaning that removes the plaque and tartar daily brushing can’t reach, protects your gums, and keeps your whole mouth healthy. Most dental insurance plans cover routine cleanings at 100%, so there’s no reason to put your dental hygiene on hold.",
    links: [
      { text: "dental hygiene", href: "/general-dentistry" }
    ]
  },
  
  whatIs: {
    title: "What is a Professional Teeth Cleaning?",
    text: "Even with diligent brushing and flossing, mineralized plaque (tartar) builds up in hard-to-reach spots beneath the gumline. A professional hygiene cleaning involves scaling away tartar, polishing away surface stains, and evaluating your gum tissue for signs of gingivitis. Our registered dental hygienists also provide tailored home care guidance to protect your enamel.",
    links: [
      { text: "registered dental hygienists", href: "/general-dentistry" }
    ]
  },
  benefits: [
    "Removes stubborn tartar that home brushing can't reach",
    "Prevents cavities, bone loss, and gum disease",
    "Lifts surface stains for a brighter, polished smile",
    "Eliminates chronic bad breath (halitosis)",
  ],
  processSteps: [
    {
      title: "Clinical Exam & Gum Mapping",
      text: "Our hygienist carefully inspects your mouth and measures your gum pockets to assess overall periodontal health.",
    },
    {
      title: "Tartar Scaling",
      text: "Using specialized ultrasonic and hand scaling tools, we gently remove plaque and tartar deposits from your teeth.",
    },
    {
      title: "Polishing & Flossing",
      text: "We polish your teeth using a gritty prophylaxis paste to lift stains, followed by a thorough professional flossing.",
    },
    {
      title: "Fluoride Protection (Optional)",
      text: "If recommended, we apply a concentrated fluoride varnish to strengthen your enamel and prevent future cavities.",
    },
  ],
  
  // 4.2 Regular Cleaning vs. Deep Cleaning (NEW SECTION)
  comparison: {
    title: "Regular Cleaning vs. Deep Cleaning — What's the Difference?",
    intro: {
      text: "Not every cleaning is the same. A regular cleaning (called a prophylaxis) is the routine cleaning healthy patients get every six months — it removes plaque and tartar above the gumline and polishes the teeth. A deep cleaning (scaling and root planing) goes further, cleaning below the gumline to treat early gum disease when tartar has worked its way into the gum pockets.\n\nAt your visit, we measure the health of your gums and recommend the right cleaning for you. If your gums are healthy, a regular cleaning keeps them that way. If we find signs of gum disease — bleeding, deeper pockets, or tartar below the gumline — a deep cleaning stops the problem before it leads to bone loss or tooth loss. We’ll always explain why a particular cleaning is recommended before we begin.",
      links: [
        { text: "regular cleaning", href: "/general-dentistry" },
        { text: "gum disease", href: "/general-dentistry/perio-protect" }
      ]
    },
    columns: ["", "Regular Cleaning", "Deep Cleaning"],
    rows: [
      ["Also called", "Prophylaxis", "Scaling & root planing"],
      ["For", "Healthy gums (routine)", "Early–moderate gum disease"],
      ["Cleans", "Above the gumline", "Above & below the gumline"],
      ["How often", "Every 6 months", "As needed, then maintenance"]
    ]
  },
  
  candidacy: {
    text: "Professional teeth cleanings are recommended for every child and adult at least once every six months to keep gums healthy.",
    checks: [
      "Recommended for all ages (toddlers to seniors)",
      "Experiencing early bleeding when flossing (gingivitis)",
      "Having plaque buildup or coffee/tea stains",
      "Essential during pregnancy to protect gum health",
    ],
  },
  
  // 4.3 Why Regular Cleanings Matter (NEW SECTION)
  candidacyBody: {
    title: "Why Regular Teeth Cleanings Matter",
    text: "Skipping cleanings lets tartar build up where a toothbrush can’t reach, and that’s how gum disease, cavities, and bad breath start. Because the same bacteria behind gum disease are linked to heart disease, diabetes, and other health conditions, keeping your mouth clean is part of keeping your whole body healthy.\n\nRoutine cleanings also save you money. Catching a small problem at a six-month checkup is far less expensive than treating it after it becomes a cavity, an infection, or gum disease. For patients without insurance, our in-house membership plan includes two cleanings a year with no deductibles, making prevention simple and affordable.",
    links: [
      { text: "six-month checkup", href: "/general-dentistry/checkups-and-x-rays" },
      { text: "in-house membership plan", href: "/specials" }
    ]
  },
  
  costInfo: {
    text: "Preventative dental cleanings are covered at 100% by almost all dental insurance plans, with zero out-of-pocket costs for you.",
    financingNote: "Our in-house membership plans cover 2 professional cleanings per year with no deductibles.",
  },
  
  // 5. Expand FAQ from 2 to 6
  faqs: [
    {
      q: "How much does a teeth cleaning cost?",
      a: "Most dental insurance plans cover routine cleanings at 100%, so many patients pay nothing out of pocket. Without insurance, the cost depends on whether you need a regular or deep cleaning — we’ll give you a clear estimate first, and our in-house membership plan includes two cleanings a year with no deductibles.",
    },
    {
      q: "What's the difference between a regular cleaning and a deep cleaning?",
      a: "A regular cleaning removes plaque and tartar above the gumline for patients with healthy gums. A deep cleaning (scaling and root planing) also cleans below the gumline to treat early gum disease. We measure your gum health and recommend the right one for you.",
    },
    {
      q: "Why do I need a cleaning if I brush twice a day?",
      a: "Brushing and flossing are crucial, but they cannot remove tartar once it has hardened onto your teeth. Tartar must be scaled off by a dental professional using specialized instruments.",
    },
    {
      q: "How often should I get my teeth cleaned?",
      a: "For most patients, we recommend a routine cleaning and exam every 6 months. Patients with a history of gum disease or active orthodontic work may benefit from cleanings every 3 to 4 months.",
    },
    {
      q: "Does a teeth cleaning hurt?",
      a: "A routine cleaning is comfortable and painless for most patients — you’ll mainly feel the scaler and a bit of pressure. If your gums are sensitive or you need a deep cleaning, we can numb the area so you stay comfortable throughout.",
    },
    {
      q: "Is a professional cleaning safe during pregnancy?",
      a: "Yes. Professional cleanings are safe and especially important during pregnancy, when hormonal changes raise the risk of gum inflammation (pregnancy gingivitis). Let us know you’re expecting so we can tailor your care.",
    },
  ],
  
  faqTitle: "Teeth Cleanings in Southampton, PA FAQs",
  
  relatedServices: [
    { label: "Dental Checkups", href: "/general-dentistry/checkups-and-x-rays" },
    { label: "Perio Protect", href: "/general-dentistry/perio-protect" },
    { label: "Oral Cancer Screening", href: "/general-dentistry/oral-cancer-screening" },
  ],
  
  breadcrumbs: [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Oral Hygiene", href: "/general-dentistry/oral-hygiene" },
  ],
  
  // Custom schema overrides
  medicalProcedureSchema: {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Professional Teeth Cleaning (Dental Prophylaxis)",
    "description": "Professional dental cleaning that removes plaque and tartar, prevents gum disease, and brightens the smile, for patients in Southampton, PA.",
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
  }
};

export const metadata = buildServicePageMetadata({
  title: data.title,
  intro: data.intro,
  metadata: {
    title: "Teeth Cleaning in Southampton, PA | Dental Hygiene | Hampton",
    description: "Professional teeth cleaning in Southampton, PA — remove plaque & tartar, prevent gum disease, brighten your smile. Most insurance covers 100%. (215) 357-2224.",
    keywords: "teeth cleaning southampton pa, dental cleaning southampton, professional teeth cleaning, deep cleaning teeth, dental hygiene southampton",
    canonical: `${SITE_URL}/general-dentistry/oral-hygiene`,
  }
});

export default function OralHygienePage() {
  return <ServicePageTemplate {...data} />;
}
