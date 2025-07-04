import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Footer from "./footer"
import Navbar from "./navbar";
import { Poppins } from "next/font/google";
import ConstructionBanner from "./components/warning";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "edev – Solutions numériques pour un impact local",
  description: "ēdev est une startup technologique qui développe des solutions digitales sur mesure pour répondre aux besoins réels des communautés en Afrique centrale",
  icons:'/images/edev.webp'
};

export default async function LocalLayout({
  children,
  params
} : {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const {locale} = await params ;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

 return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        
            <NextIntlClientProvider locale={locale}>
              <div className="flex flex-col max-h-screen max-w-screen">
                <ConstructionBanner />
                <Navbar />
                <main className="">
                  {children}
                </main>
                <Footer />
              </div>
            </NextIntlClientProvider> 
      </body>
    </html>
  );
  
}




