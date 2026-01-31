import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tin Levacic | Creative Developer",
  description: "Portfolio of Tin Levacic — A creative developer crafting digital experiences at the intersection of design and technology.",
  keywords: ["developer", "portfolio", "creative", "web development", "design", "frontend"],
  authors: [{ name: "Tin Levacic" }],
  openGraph: {
    title: "Tin Levacic | Creative Developer",
    description: "Crafting digital experiences at the intersection of design and technology.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
