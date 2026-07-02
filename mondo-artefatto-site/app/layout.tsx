import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mondo-artefatto.art";

export const metadata: Metadata = {
  title: {
    default: "Mondo Artefatto",
    template: "%s — Mondo Artefatto",
  },
  description:
    "A collection of ten images about a world edited before it reaches us.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mondo Artefatto",
    description:
      "A collection of ten images about a world edited before it reaches us.",
    siteName: "Mondo Artefatto",
    locale: "en_GB",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Mondo Artefatto — A Collection in Ten Images",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mondo Artefatto",
    description:
      "A collection of ten images about a world edited before it reaches us.",
    images: ["/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logoipsum-280.png",
  },
  other: {
    "theme-color": "#F3EFE6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-paper text-ink">
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only
            fixed top-4 left-4 z-[100]
            px-4 py-2 rounded
            bg-soft-green text-ink
            font-label text-xs uppercase tracking-widest
            focus:outline-none focus:ring-2 focus:ring-ink
          "
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
