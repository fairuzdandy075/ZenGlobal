import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
import FAQ from '@/components/FAQ';
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import MitraPerusahaan from '@/components/MitraPerusahaan';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Method />
      <FAQ />
      <MitraPerusahaan />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;