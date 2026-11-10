import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolution Career Institute | NEET, IIT-JEE, CUET & NDA Coaching",
  description:
    "Join Evolution Career Institute, Lucknow, for academic guidance and competitive exam preparation for NEET, IIT-JEE, CUET, NDA, and Classes 9th to 12th. An initiative of IIT JEE qualified mentors.",
  keywords: [
    "Evolution Career Institute",
    "NEET Coaching Lucknow",
    "IIT-JEE Coaching Lucknow",
    "CUET Preparation Lucknow",
    "NDA Coaching",
    "Sainik School Entrance",
    "RMS Preparation",
    "RIMS Preparation",
    "Board Examinations Class 9 to 12",
    "Sadar Cantt Coaching",
    "Coaching in Sadar Cantt Lucknow",
  ],
  authors: [{ name: "Evolution Career Institute" }],
  creator: "Evolution Career Institute",
  publisher: "Evolution Career Institute",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    title: "Evolution Career Institute | NEET, IIT-JEE, CUET & NDA Coaching",
    description:
      "An initiative of IIT JEE qualified mentors in Lucknow. Comprehensive preparation for NEET, IIT-JEE, CUET, NDA, Sainik School, and Board Examinations for Classes 9th to 12th.",
    type: "website",
    locale: "en_IN",
    siteName: "Evolution Career Institute",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#071D43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#FFC928] selection:text-[#071D43] bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
