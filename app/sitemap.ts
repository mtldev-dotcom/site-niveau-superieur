import { MetadataRoute } from "next";
import { services } from "./services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://niveausuperieur.ca";
  const now = new Date();

  const staticRoutes = [
    "/",
    "/services",
    "/projets",
    "/a-propos",
    "/contact",
    "/soumission",
    "/confidentialite",
    "/conditions",
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency:
      path === "/"
        ? "monthly"
        : path === "/projets"
        ? "weekly"
        : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/services" || path === "/soumission"
        ? 0.9
        : path === "/projets" || path === "/contact"
        ? 0.8
        : path === "/a-propos"
        ? 0.7
        : 0.6,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries];
}
