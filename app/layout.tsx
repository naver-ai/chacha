import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const ss = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChaCha - Chatbot for Children's Events and Emotion Sharing",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ss.className}>{children}</body>
    </html>
  );
}
