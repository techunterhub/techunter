import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../store/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Techunter",
  description: "At Techunter, our mission is to empower newcomers in the tech industry by providing comprehensive guidance in tech journey—completely free of charge! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Providers>
        <Navbar />
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
