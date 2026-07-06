export type ShowcaseType =
  | "landing-page"
  | "company-profile"
  | "ecommerce"
  | "web-app"
  | "mobile-app"
  | "dashboard";

export type ShowcaseStatus = "concept" | "client-project" | "case-study";

export type ShowcaseItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: ShowcaseType;
  industry: string[];
  style: string[];
  goal: string[];
  features: string[];
  status: ShowcaseStatus;
  featured: boolean;
  image?: string;
  visualTone: "sky" | "mint" | "peach" | "yellow" | "dark" | "paper";
  shortDescription: string;
  description: string;
  recommendedFor: string[];
  problem: string;
  solution: string;
  pageStructure: string[];
  keyFeatures: string[];
  styleDirection: string;
  liveUrl?: string;
  createdAt: string;
};

export type ServiceItem = {
  slug: ShowcaseType | "website-catalog";
  title: string;
  shortDescription: string;
  description: string;
  bestFor: string[];
  commonSections: string[];
  keyFeatures: string[];
};

export type ResourceItem = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
};

export type PricingPackage = {
  slug: "website-launch" | "custom-build";
  title: string;
  description: string;
  bestFor: string[];
  includes: string[];
  priceLabel: string;
  ctaLabel: string;
  highlighted: boolean;
};
