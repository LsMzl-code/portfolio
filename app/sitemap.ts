import { MetadataRoute } from "next"

export const baseUrl = "https://www.louis-mzl.fr/"


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/#accueil`,
      lastModified: "2024-10-02",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#presentation`,
      lastModified: "2024-10-02",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/#projets`,
      lastModified: "2024-10-02",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#experiences`,
      lastModified: "2024-10-02",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: "2024-10-02",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}