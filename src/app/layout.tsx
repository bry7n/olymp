import type { Metadata } from "next";
import { Outfit, Geist, Fraunces } from "next/font/google"; // Using Fraunces as surrogate for Tenaciou
import "./globals.css";

const outfit = Outfit({
  variable: "--font-cabinet", // Using alias for ease
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const geist = Geist({
  variable: "--font-satoshi", // Using alias for ease
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-tenacious",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deuses do Olympus | Hamburgueria & Pizzaria",
  description: "Artesanal, forno a lenha, e o tempero dos Deuses. Peça agora a verdadeira comida do Olimpo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${geist.variable} ${fraunces.variable} bg-black text-slate-200 antialiased`}>
      <body suppressHydrationWarning className="min-h-[100dvh] bg-[#050505] selection:bg-[#CA9949] selection:text-black">
        {children}
      </body>
    </html>
  );
}
