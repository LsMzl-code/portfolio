type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    facebook: string;
    linkedIn: string;
  };
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "Louis Mazzella",
  description: "Découvrez mon portfolio de développeur web spécialisé en JavaScript, TypeScript, Next.js et React. Plongez dans mes projets, mon parcours et mes compétences en développement front-end et back-end.",
  url: "https://www.louis-mzl.fr",
  ogImage: "https://www.louis-mzl.fr/og",
  links: {
    twitter: "",
    facebook: "",
    linkedIn: "",
  },
  keywords: [
    "développement web",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "portfolio",
    "Louis Mazzella",
    "expériences",
    "compétences",
    "projets",
    "développeur",
    "Brest",
    "freelance",
    "Mzl",
    "Nest",
    "NestJs",
    "Tailwind",
    "html",
    "css",
    "php",
    "symfony",
    "mysql",
    "postgresql",
    "mongodb",
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "google cloud",
    "serverless",
    "microservices",
    "api",
    "rest",
    "graphql",
    "seo",
    "performance",
    "optimisation",
    "accessibilité",
    "mobile-first",
    "responsive design",
    "ux",
    "ui",
    "design",
    "graphique",
    "interface",
    "utilisateur",
    "frontend",
    "backend",
    "fullstack",
    "developpement",
  ]
};