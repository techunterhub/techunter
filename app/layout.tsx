import type { Metadata } from "next";
import localFont from "next/font/local";
import { ColorSchemeScript } from "@mantine/core";
import "./globals.css";
import { Provider } from "./_provider/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Techunter",
  description:
    "At Techunter, our mission is to empower newcomers in the tech industry by providing comprehensive guidance in tech journey—completely free of charge! ",
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
