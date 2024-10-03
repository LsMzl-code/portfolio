import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/config/site";

//*** FONTS ***//
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });


//*** METADATA ***//
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Louis Mazzella",
      url: siteConfig.url,
    },
  ],
  creator: "Louis Mazzella",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.louis-mzl.fr",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: "Louis Mazzella",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${lato.className}} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": siteConfig.name,
                "jobTitle": "Développeur Web",
                "image": "https://www.louis-mzl.fr/images/photo.jpg",
                "url": "https://www.louis-mzl.fr",
                "description": siteConfig.description,
                "sameAs": [
                  "https://www.linkedin.com/in/louis-mazzella-5509292a2/",
                  "https://github.com/LsMzl-code",
                  // "https://twitter.com/louis-mzl"
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "knowsAbout": siteConfig.keywords,
              })
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
