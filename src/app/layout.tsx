import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <Navbar />
        <Hero />
        <AboutUs />
        <Products />  
        <Footer />  
        {children} 
      </body>
    </html>
  );
}
