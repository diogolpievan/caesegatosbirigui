import {
  ADDRESS,
  EMAIL_HREF,
  INSTAGRAM_HREF,
  PHONE_HREF,
} from "@/constants/contact";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.caesegatosbirigui.com.br";

export const SITE_NAME = "Cães e Gatos Birigui";

export const SITE_DESCRIPTION =
  "Clínica especializada em dermatologia e odontologia veterinária para cães e gatos em Birigui. Cuidados odontológicos, tratamento de pele e cirurgias especializadas com equipe experiente.";

const LOGO_URL = `${SITE_URL}/images/logo-caes-e-gatos-birigui.png`;

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

export const AGGREGATE_RATING = {
  ratingValue: 5.0,
  bestRating: 5,
  reviewCount: 19,
};

export const VETERINARY_CARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  telephone: PHONE_HREF.replace("tel:", ""),
  email: EMAIL_HREF.replace("mailto:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.replace(", Birigui", ""),
    addressLocality: "Birigui",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.2770011,
    longitude: -50.3468158,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [INSTAGRAM_HREF],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: AGGREGATE_RATING.ratingValue,
    bestRating: AGGREGATE_RATING.bestRating,
    reviewCount: AGGREGATE_RATING.reviewCount,
  },
} as const;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "pt-BR",
} as const;

export const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": WEBPAGE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": BUSINESS_ID },
  inLanguage: "pt-BR",
} as const;

export const BUSINESS_SCHEMA_ID = BUSINESS_ID;
