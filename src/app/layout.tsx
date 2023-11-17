import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.scss";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocational Test",
  description: "A test to measure how satisfied you are with a particular job.",
  icons: {
    icon: "/favicon.ico",
  },
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={notoSansKr.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
