// import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/header";
import {Footer} from "@/app/footer";
import { getSetting } from "./queries/getSetting";

const FontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const FontMono = JetBrains_Mono({
  variable: "--font-jet-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const setting = await getSetting();
  return {
    title: {
      template: `%s | ${setting.siteName}`,
      default: "Untitled",
    },
    description: "Piano Blog"
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontSans.variable} ${FontMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
