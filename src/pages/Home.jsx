import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import Hero from "../components/home/Hero";
import PortfolioPreview from "../components/home/PortfolioPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioPreview />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
