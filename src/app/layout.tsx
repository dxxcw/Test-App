import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Vocational Test",
  description: "A test to measure how satisfied you are with a particular job.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
