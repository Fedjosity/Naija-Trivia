import type { Metadata } from "next";
import { Outfit, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Navbar from "@/components/ui/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daily Naija Trivia — Master Nigerian Culture, One Question at a Time",
  description:
    "The #1 Nigerian trivia app. Challenge yourself daily with AI-powered questions about Nigerian history, music, sports, and culture. Compete on leaderboards and earn rewards.",
  keywords: [
    "Nigerian trivia",
    "Nigeria quiz",
    "Nigerian history",
    "Afrobeats quiz",
    "Nigerian culture",
    "trivia app",
    "Naija trivia",
    "learn Nigerian history",
  ],
  openGraph: {
    title: "Daily Naija Trivia — Master Nigerian Culture",
    description:
      "Challenge yourself daily with AI-powered trivia about Nigerian history, music, sports, and culture.",
    type: "website",
    locale: "en_NG",
    siteName: "Daily Naija Trivia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Naija Trivia — Master Nigerian Culture",
    description:
      "Challenge yourself daily with AI-powered trivia about Nigerian history, music, sports, and culture.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-surface-dark text-text-primary antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
