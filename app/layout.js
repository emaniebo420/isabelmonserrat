import "./globals.css";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-script",
});

export const metadata = {
  metadataBase: new URL('https://isabelmonserrat.com'),
  verification: {
  google: 's8Uhm9uVJKY8yQ9F7RxDWnICWYRZlLaxo_iq6C126gA',
},
  title: {
    default: "Isabel Monserrat | Filipino-Spanish Artist | Original Paintings",
    template: "%s | Isabel Monserrat",
  },
  description: "Original paintings and commissions by Isabel Monserrat, a Filipino-Spanish contemporary artist based in Philippines. Explore her gallery and discover unique, handcrafted artworks.",
  keywords: "Filipino artist, original paintings, paintings, mixed media, oil painting, acrylic painting, art commissions, Philippines, Tagaytay, Metro Manila, Manila, Isabel Monserrat",
  openGraph: {
    title: "Isabel Monserrat | Filipino-Spanish Artist",
    description: "Original paintings and commissions by Isabel Monserrat, Filipino-Spanish artist from Philippines.",
    url: "https://isabelmonserrat.com",
    siteName: "Isabel Monserrat Art",
    type: "website",
    images: [
      {
        url: "https://isabelmonserrat.com/images/art1.webp",
        width: 800,
        height: 600,
        alt: "Oasis, oil on canvas by Isabel Monserrat",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${script.variable}`}>
      <body className="min-h-full flex flex-col font-inter" style={{ animation: 'fadeIn 0.7s ease' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
