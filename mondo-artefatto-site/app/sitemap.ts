import type { MetadataRoute } from "next";
import { pieces } from "@/lib/pieces";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mondo-artefatto.art";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/colophon`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];

  const pieceRoutes: MetadataRoute.Sitemap = pieces.map((p) => ({
    url: `${siteUrl}/pieces/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...pieceRoutes];
}
