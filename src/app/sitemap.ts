import type { MetadataRoute } from "next";
import { resources, services, showcases, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/showcase", "/services", "/pricing", "/brief", "/resources", "/contact"];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...showcases.map((item) => ({
      url: `${siteConfig.url}/showcase/${item.slug}`,
      lastModified: new Date(item.createdAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...services
      .filter((service) => service.slug !== "website-catalog")
      .map((service) => ({
        url: `${siteConfig.url}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
    ...resources.map((resource) => ({
      url: `${siteConfig.url}/resources/${resource.slug}`,
      lastModified: new Date(resource.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
