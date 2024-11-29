import type { Metadata } from "next";
import localFont from "next/font/local";
import { ColorSchemeScript } from "@mantine/core";
import "./globals.css";
import { Provider } from "./_provider/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "techunter | we are the techunter and we love to build things",
  description: "we are the techunter hub and we love to build things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
        <Navbar />
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
