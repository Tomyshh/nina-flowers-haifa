import type { Metadata } from "next";
import { DM_Sans, Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "700"],
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nina-flowers.co.il",
  ),
  title: {
    default: "פרחי נו\"ש",
    template: "%s | פרחי נו\"ש",
  },
  applicationName: "Nina Flowers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      className={`${playfair.variable} ${heebo.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
