import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dwich 62 | Liévin",
    template: "%s | Dwich 62",
  },
  description:
    "Dwich 62 à Liévin : burgers, kebabs et sandwiches. Commande Uber Eats, horaires, adresse et contact.",
  openGraph: {
    title: "Dwich 62 | Liévin",
    description:
      "Dwich 62 à Liévin : burgers, kebabs et sandwiches. Commande Uber Eats, horaires, adresse et contact.",
    siteName: "Dwich 62",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}