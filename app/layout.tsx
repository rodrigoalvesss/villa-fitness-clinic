import type { Metadata, Viewport } from "next";
import { MotionLayer } from "./components/MotionLayer";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";
import "./reviews.css";
import "./mobile.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://villa-fitness.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VILLA Fitness Clinic | Treino Personalizado em Vila Verde",
    template: "%s | VILLA Fitness Clinic",
  },
  description:
    "Ginásio de treino personalizado em Vila Verde. Um espaço reservado, acompanhamento próximo e treino pensado ao pormenor.",
  keywords: [
    "treino personalizado Vila Verde",
    "personal trainer Vila Verde",
    "Pilates Vila Verde",
    "VILLA Fitness Clinic",
  ],
  openGraph: {
    title: "VILLA Fitness Clinic",
    description: "Treino personalizado, pensado ao pormenor.",
    siteName: "VILLA Fitness Clinic",
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "VILLA Fitness Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VILLA Fitness Clinic",
    description: "Treino personalizado, pensado ao pormenor.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon-villa.png", type: "image/png", sizes: "1024x1024" }],
    shortcut: "/favicon-villa.png",
    apple: "/favicon-villa.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light dark",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "VILLA Fitness Clinic",
  description: "Ginásio de treino personalizado em Vila Verde.",
  telephone: "+351 917 616 847",
  email: "villafitnessclinic@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua do Município, 122",
    postalCode: "4730-760",
    addressLocality: "Vila Verde",
    addressCountry: "PT",
  },
  sameAs: [
    "https://www.instagram.com/villa.fitnessclinic/",
    "https://www.facebook.com/profile.php?id=61560344797910&locale=pt_PT",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <MotionLayer />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
