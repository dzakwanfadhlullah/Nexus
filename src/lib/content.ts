import { services, showcases } from "@/data/site";
import type { ShowcaseItem } from "@/types/content";

export function getShowcaseBySlug(slug: string) {
  return showcases.find((item) => item.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedShowcases(current: ShowcaseItem, limit = 3) {
  return showcases
    .filter((item) => item.slug !== current.slug)
    .map((item) => {
      let score = item.type === current.type ? 3 : 0;
      score += item.industry.filter((value) => current.industry.includes(value)).length * 3;
      score += item.goal.filter((value) => current.goal.includes(value)).length * 2;
      score += item.style.filter((value) => current.style.includes(value)).length;
      return { item, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function buildWhatsAppUrl(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6288232452571";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formatType(type: ShowcaseItem["type"]) {
  const labels: Record<ShowcaseItem["type"], string> = {
    "landing-page": "Landing Page",
    "company-profile": "Company Profile",
    ecommerce: "E-commerce",
    "web-app": "Web App",
    "mobile-app": "Mobile App",
    dashboard: "Dashboard",
  };
  return labels[type];
}

export function formatShowcaseStatus(status: ShowcaseItem["status"]) {
  const labels: Record<ShowcaseItem["status"], string> = {
    concept: "Concept",
    "client-project": "Client Project",
    "case-study": "Case Study",
  };
  return labels[status];
}
