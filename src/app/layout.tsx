import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/lib/order-context";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMASH HOUSE — Smash Burgers Sin Negociar",
  description:
    "Smash burgers de verdad: carne fresca aplastada en plancha, pan brioche tostado, queso derretido hasta el borde. Pide para llevar o recoger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
