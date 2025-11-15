import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Programs } from "@/components/Programs";
import { ProximaSede } from "@/components/ProximaSede";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Programs />
      <ProximaSede />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
