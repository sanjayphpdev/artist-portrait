import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import Hero from "../components/home/Hero";
import PortfolioPreview from "../components/home/PortfolioPreview";
import HeroTwo from "../components/home/HeroTwo";
import ValentineSpecial from "../components/home/ValentineSpecial";
import Steps from "../components/home/Steps";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroTwo />
      <PortfolioPreview />
      <Steps />
      <ValentineSpecial />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
