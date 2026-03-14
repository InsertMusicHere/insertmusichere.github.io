import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saumitra Panchal: Software Developer",
  description:
    "Portfolio of Saumitra Panchal — Software Developer with 8+ years experience in Python, AI/ML, and Data Engineering.",
  keywords: ["Saumitra Panchal", "Software Developer", "Python", "Machine Learning", "AI", "Data Science"],
  authors: [{ name: "Saumitra Panchal" }],
  openGraph: {
    title: "Saumitra Panchal — Software Developer",
    description: "8+ years of building intelligent software. Python, AI/ML, Data Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
