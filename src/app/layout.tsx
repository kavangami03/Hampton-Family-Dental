import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
