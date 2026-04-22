import FooterSection from "@/components/layout/footer/footer-section";
import Navbar from "@/components/layout/navbar/navbar-section";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ─── Change these constants to update everything at once ───────────────────
const BASE_URL = "https://iarafathossain.me";
const FULL_NAME = "Arafat Hossain";
const JOB_TITLE = "Full Stack Web Developer";
const PROFILE_IMAGE = `${BASE_URL}/og-image.png`; // 1200×630 recommended
const AVATAR_IMAGE = `${BASE_URL}/avatar.jpg`; // square headshot

const DESCRIPTION =
  "Arafat Hossain is a Full Stack Web Developer from Rangpur, Bangladesh, " +
  "specializing in Next.js, React, TypeScript, Node.js, PostgreSQL, and AI " +
  "integration. Building production-ready, scalable web applications since 2022.";

const KEYWORDS = [
  "Arafat Hossain",
  "Arafat Hossain developer",
  "Full Stack Developer Bangladesh",
  "Next.js developer Bangladesh",
  "React developer Rangpur",
  "MERN stack developer",
  "TypeScript developer",
  "PostgreSQL developer",
  "AI integration developer",
  "iarafathossain",
  "web developer portfolio",
];
// ──────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${FULL_NAME} | ${JOB_TITLE}`,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: FULL_NAME, url: BASE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,

  // ── Canonical & Robots ────────────────────────────────────────────────
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description: DESCRIPTION,
    images: [
      {
        url: PROFILE_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — ${JOB_TITLE}`,
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} | ${JOB_TITLE}`,
    description: DESCRIPTION,
    images: [PROFILE_IMAGE],
    creator: "@iarafathossaini",
  },

  // ── Verification (add your tokens once you verify in Search Console) ──
  verification: {
    google: "et8To98ur-21h4TQ77MnKurS2tOW0cYNkj7CMHM_BEg",
  },

  // ── Favicons / App icons ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0ea5e9" },
    ],
  },

  // ── Web app manifest ─────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Misc ─────────────────────────────────────────────────────────────
  category: "technology",
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────
// This is what makes Google show your name, photo, and job title in search.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Person — triggers the Google Knowledge Panel / rich result
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: FULL_NAME,
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: AVATAR_IMAGE,
        width: 400,
        height: 400,
      },
      jobTitle: JOB_TITLE,
      description: DESCRIPTION,
      email: "arafat24official@gmail.com",
      telephone: "+8801870577034",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rangpur",
        addressCountry: "BD",
      },
      sameAs: [
        "https://linkedin.com/in/iarafathossain",
        "https://github.com/iarafathossain",
        BASE_URL,
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Full Stack Web Development",
        "AI Integration",
        "REST APIs",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Begum Rokeya University, Rangpur",
      },
    },

    // 2. WebSite — enables Google Sitelinks Search Box
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: `${FULL_NAME} — Portfolio`,
      description: DESCRIPTION,
      author: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
    },

    // 3. WebPage — for the homepage specifically
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: `${FULL_NAME} | ${JOB_TITLE}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      description: DESCRIPTION,
      inLanguage: "en-US",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to Google Fonts CDN for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* JSON-LD structured data injected into <head> via next/script */}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <FooterSection />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
