import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAS Corporation | Giải pháp Công nghệ Thanh toán Hiện đại",
  description:
    "CAS cung cấp các giải pháp và dịch vụ công nghệ thanh toán hiện đại, đáp ứng mọi nhu cầu của doanh nghiệp. Kiến tạo nền tảng - Chắp cánh thành công!",
  keywords:
    "CAS, công nghệ thanh toán, giải pháp doanh nghiệp, startup, fintech, thanh toán hiện đại",
  authors: [{ name: "CAS Corporation" }],
  creator: "CAS Corporation",
  publisher: "CAS Corporation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://cascorp.vn",
    title: "CAS Corporation | Giải pháp Công nghệ Thanh toán Hiện đại",
    description:
      "CAS cung cấp các giải pháp và dịch vụ công nghệ thanh toán hiện đại, đáp ứng mọi nhu cầu của doanh nghiệp.",
    siteName: "CAS Corporation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CAS Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAS Corporation | Giải pháp Công nghệ Thanh toán Hiện đại",
    description:
      "CAS cung cấp các giải pháp và dịch vụ công nghệ thanh toán hiện đại, đáp ứng mọi nhu cầu của doanh nghiệp.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="canonical" href="https://cascorp.vn" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
