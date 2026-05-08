import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    {
      locale: "he",
      path: "/he",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      locale: "en",
      path: "/en",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
  ];

  return entries.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    alternates: {
      languages: {
        "he-IL": `${baseUrl}/he`,
        "en-IL": `${baseUrl}/en`,
        "x-default": `${baseUrl}/he`,
      },
    },
  }));
}
