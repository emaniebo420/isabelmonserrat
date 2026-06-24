import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://isabelmonserrat.com'),
  title: {
    default: "Isabel Monserrat — Filipino Artist | Original Paintings",
    template: "%s — Isabel Monserrat",
  },
  description: "Original paintings and commissions by Isabel Monserrat, a Filipino artist from Tagaytay, Philippines. Browse her gallery and shop unique handcrafted artworks.",
  keywords: "Filipino artist, original paintings, paintings, mixed media, oil painting, acrylic painting, art commissions, Philippines, Tagaytay, Metro Manila, Manila, Isabel Monserrat",
  openGraph: {
    title: "Isabel Monserrat — Filipino Artist",
    description: "Original paintings and commissions by Isabel Monserrat, Filipino artist from Tagaytay, Philippines.",
    url: "https://isabelmonserrat.com",
    siteName: "Isabel Monserrat Art",
    type: "website",
    images: [
      {
        url: "https://isabelmonserrat.com/images/art1.jpg",
        width: 800,
        height: 600,
        alt: "Oasis — Oil on Canvas by Isabel Monserrat",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-inter" style={{ animation: 'fadeIn 0.7s ease' }}>
        {children}
      </body>
    </html>
  );
}