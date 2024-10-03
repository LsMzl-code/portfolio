import { MetadataRoute } from "next";
import { baseUrl } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules:
    {
      // S'applique à tous les moteurs de recherche
      userAgent: "*",
      // Toutes les pages peuvent être explorées par les moteurs de recherche
      allow: "/",
    },

    // Où se situe le fichier sitemap.xml
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}