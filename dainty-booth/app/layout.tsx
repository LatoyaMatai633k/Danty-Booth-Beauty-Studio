import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dainty Booth Beauty Studio | Personalised Facial & Skincare Treatments",
  description:
    "Dainty Booth Beauty Studio offers personalised facial and skincare treatments including HydraFacial, Deep Cleanse, Dermaplaning, Chemical Peel, Microneedling and Skin Tag Removal. Serving Vryheid, Ladysmith, Newcastle, Johannesburg and Durban.",
  keywords: "facial treatments, HydraFacial, skincare, beauty studio, South Africa, Dainty Booth, Sinikiwe Sibisi",
  openGraph: {
    title: "Dainty Booth Beauty Studio",
    description: "Personalised facial and skincare experiences designed to help you feel cared for, confident and beautiful in your own skin.",
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
      <body>{children}</body>
    </html>
  );
}
