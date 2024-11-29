import type { Metadata } from "next";
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
      <body className={`antialiased`}>
        <Provider>
        <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "okkpbprvnt");
            `,
          }}
        />
      </Head>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
