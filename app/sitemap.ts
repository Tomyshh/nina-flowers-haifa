import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nina-flowers.co.il";

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
