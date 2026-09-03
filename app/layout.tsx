import type { Metadata } from "next";
import { Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ferdy Oktavian | Portfolio",
  description:
    "Portfolio of Muhammad Ferdy Oktavian, Informatics graduate interested in software development, machine learning, computer vision, web development, and game development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
