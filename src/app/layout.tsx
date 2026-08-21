import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-heebo", display: "swap", weight: ["200", "300", "400", "500", "600"] });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fcfcfa", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "LIBI Diamonds | תכשיטי יהלומים בהתאמה אישית", template: "%s | LIBI Diamonds" },
  description: "טבעות אירוסין, עגילי יהלום, שרשראות וצמידים בהתאמה אישית. מפרט ברור, מחירים ישירים וליווי אישי בבחירת היהלום.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "he_IL", siteName: SITE.name, url: SITE.url, title: "LIBI Diamonds | יהלום, בלי כל מה שסביבו", description: "תכשיטי יהלומים בהתאמה אישית, עם מפרט ברור וליווי אישי.", images: [{ url: absoluteUrl("/images/design/home/hero-01.jpg"), width: 1200, height: 1500, alt: "טבעת יהלום של LIBI Diamonds על בד בגוון כחול עמוק" }] },
  twitter: { card: "summary_large_image", title: "LIBI Diamonds", description: "תכשיטי יהלומים בהתאמה אישית.", images: [absoluteUrl("/images/design/home/hero-01.jpg")] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "jewelry",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org", "@type": "JewelryStore", name: SITE.name, url: SITE.url,
    telephone: "+972-50-861-1888", email: SITE.email, image: absoluteUrl("/images/design/home/hero-01.jpg"),
    contactPoint: { "@type": "ContactPoint", telephone: "+972-50-861-1888", contactType: "sales", availableLanguage: ["Hebrew", "English"] },
  };
  return <html lang="he" dir="rtl" className={heebo.variable}><body><JsonLd data={organization} /><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
