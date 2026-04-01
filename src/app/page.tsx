import { Hero } from "@/components/Hero";
import { MenuGrid } from "@/components/MenuGrid";
import { Marquee, Footer } from "@/components/Extras";
import { History } from "@/components/Bussines";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Marquee />
      <MenuGrid />
      <History />
      <Reviews />

      <Footer />
    </main>
  );
}
