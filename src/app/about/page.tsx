import type { Metadata } from "next";
import AboutPageContent from "@/components/cauders/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Who You Build With Shapes What Gets Delivered",
  description: "Cauders is an engineering-first software development company. We engineer custom software applications, applied AI workflows, and resilient systems for scaling businesses worldwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cauders | Engineering, AI & Automation Excellence",
    description: "Learn about Cauders, our engineering philosophy, and how we help ambitious businesses turn complex operational challenges into dependable software systems.",
    url: "https://www.cauders.com/about",
    siteName: "Cauders",
    images: [
      {
        url: "https://res.cloudinary.com/cauders/image/upload/v1792827587/Gemini_Generated_Image_4u4g1b4u4g1b4u4g_cihgix.jpg",
        width: 1200,
        height: 630,
        alt: "About Cauders - Engineering and AI Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cauders | Engineering, AI & Automation Excellence",
    description: "Learn about Cauders, our engineering philosophy, and how we help ambitious businesses turn complex operational challenges into dependable software systems.",
    images: ["https://res.cloudinary.com/cauders/image/upload/v1792827587/Gemini_Generated_Image_4u4g1b4u4g1b4u4g_cihgix.jpg"],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
