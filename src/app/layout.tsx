import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "../context/ModalContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamolov",
  description:
    "Portfolio website of Jamolov Muhammadali, a Frontend & Full-Stack Web Developer specializing in React, Next.js, and modern web technologies.",
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
    <html lang="en" className={geist.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className="antialiased bg-white text-gray-900">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}