import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MouseGlow from "@/components/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dangau Sala D’Kontena | Premium Nature Retreat",
  description: "A premium agrotourism retreat in Yan, Kedah near Mount Jerai. Experience the perfect blend of Malay village heritage and modern container living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-accent selection:text-primary-dark scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <MouseGlow />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
