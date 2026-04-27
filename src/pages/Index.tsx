import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyNova from "@/components/landing/WhyNova";
import Stats from "@/components/landing/Stats";
import Doctors from "@/components/landing/Doctors";
import Services from "@/components/landing/Services";
import Awards from "@/components/landing/Awards";
import IvfCta from "@/components/landing/IvfCta";
import SuccessStories from "@/components/landing/SuccessStories";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main id="top" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyNova />
      <Stats />
      <Doctors />
      <Services />
      <Awards />
      <IvfCta />
      <SuccessStories />
      <Footer />
    </main>
  );
};

export default Index;
