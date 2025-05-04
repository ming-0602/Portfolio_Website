import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ming Xuan, Leong's Portfolio",
  description: "Ming Xuan, Leong's Portfolio",
  icons: {
    icon: "/favicon.png", // Points to public/favicon.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/*<Head>*/}
    {/*    <link rel="icon" href="/favicon.png" />*/}
    {/*</Head>*/}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
