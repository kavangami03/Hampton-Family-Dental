import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

// Self-hosted, preloaded, and subset to only the weights/styles the design uses
// (was: a render-blocking Google Fonts <link> requesting every weight of both
// families). Eliminates the extra connection + the late font-swap layout shift.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hampton Family Dental | Luxury Dental Care Designed Around Your Smile",
  description:
    "Premium family and cosmetic dentistry combining advanced technology, personalized care, and a calm modern experience. Serving families with gentle, luxury dental care.",
  keywords: [
    "luxury dental care",
    "family dentistry",
    "cosmetic dentistry",
    "Invisalign",
    "teeth whitening",
    "dental implants",
    "veneers",
    "pediatric dentistry",
  ],
  openGraph: {
    title: "Hampton Family Dental | Luxury Dental Care",
    description:
      "Premium family and cosmetic dentistry combining advanced technology, personalized care, and a calm modern experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
