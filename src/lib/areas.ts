export interface ServiceArea {
  city: string;
  slug: string;
  zipCodes: string;
  driveTime: string;
  intro: string;
  neighborhoodNote: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    city: "Southampton",
    slug: "dentist-southampton-pa",
    zipCodes: "18966",
    driveTime: "Right here in Southampton",
    intro:
      "Local families choose Hampton Family Dental for gentle preventive, cosmetic, restorative, and emergency dentistry close to home.",
    neighborhoodNote:
      "Our office is located on Second Street Pike, making visits simple for Southampton patients before work, after school, or between errands.",
  },
  {
    city: "Richboro",
    slug: "dentist-richboro-pa",
    zipCodes: "18954",
    driveTime: "About 10 minutes from Richboro",
    intro:
      "Richboro patients visit our Southampton office for relationship-first dental care, clear treatment planning, and comfortable appointments.",
    neighborhoodNote:
      "We are a convenient nearby choice for Richboro families looking for one office for cleanings, fillings, crowns, whitening, Invisalign, and more.",
  },
  {
    city: "Warminster",
    slug: "dentist-warminster-pa",
    zipCodes: "18974",
    driveTime: "About 15 minutes from Warminster",
    intro:
      "Patients from Warminster count on our team for modern dental care in a welcoming setting with practical scheduling and financing options.",
    neighborhoodNote:
      "Our Southampton location keeps comprehensive care within easy reach for Warminster adults, children, and seniors.",
  },
  {
    city: "Newtown",
    slug: "dentist-newtown-pa",
    zipCodes: "18940",
    driveTime: "About 20 minutes from Newtown",
    intro:
      "Newtown patients come to Hampton Family Dental for thoughtful dentistry, natural-looking cosmetic options, and trusted family care.",
    neighborhoodNote:
      "From routine checkups to restorative treatment plans, our team helps Newtown families feel informed and comfortable at every step.",
  },
  {
    city: "Holland",
    slug: "dentist-holland-pa",
    zipCodes: "18966",
    driveTime: "About 10 minutes from Holland",
    intro:
      "Holland families can access full-service dental care nearby, including preventive visits, emergency support, and smile-enhancing treatments.",
    neighborhoodNote:
      "Our practice is close enough for convenient recurring care while still offering the technology and experience patients expect from a comprehensive dental office.",
  },
  {
    city: "Feasterville",
    slug: "dentist-feasterville-pa",
    zipCodes: "19053",
    driveTime: "About 15 minutes from Feasterville",
    intro:
      "Feasterville patients trust Hampton Family Dental for gentle care, clear communication, and treatment options for the whole family.",
    neighborhoodNote:
      "Whether you need a cleaning, urgent dental visit, or cosmetic consultation, our Southampton team is nearby and ready to help.",
  },
  {
    city: "Huntingdon Valley",
    slug: "dentist-huntingdon-valley-pa",
    zipCodes: "19006",
    driveTime: "About 20 minutes from Huntingdon Valley",
    intro:
      "Huntingdon Valley patients visit us for comfortable, comprehensive dentistry from a team focused on long-term oral health.",
    neighborhoodNote:
      "We make it easy to coordinate preventive, restorative, cosmetic, and emergency dental needs from one nearby Southampton office.",
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
