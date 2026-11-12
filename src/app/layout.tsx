import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Mohammed Jasil KJ — AI/ML Engineer & Developer",
  description:
    "Personal portfolio of Mohammed Jasil KJ. AI/ML Engineer and Developer exploring the intersection of intelligent systems, technology and digital experiences.",
  keywords: [
    "Mohammed Jasil KJ",
    "AI/ML Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Full-Stack Developer",
    "Next.js",
    "Python",
    "Creative Developer",
    "Hirica",
    "Infina",
    "DeployAI",
  ],
  authors: [{ name: "Mohammed Jasil KJ" }],
  openGraph: {
    title: "Mohammed Jasil KJ — AI/ML Engineer & Developer",
    description:
      "Building intelligent digital experiences at the intersection of AI/ML, scalable software, and high-craft design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-[#F8F8F6] text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-[#F8F8F6]">
        {children}
      </body>
    </html>
  );
}
