import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Goals from "@/components/goals";
import Inspiration from "@/components/inspiration";
import Connect from "@/components/connect";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Goals />
      <Inspiration />
      <Connect />
      <Footer />
    </div>
  );
}
