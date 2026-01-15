import Image from "next/image";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AnniversarySection from "./Components/Home/AnniversarySection";
import ClientsSlide from "./Components/Home/ClientsSlide";
import FaqSection from "./Components/Home/FaqSection";
import HeroSection from "./Components/Home/HeroSection";
import Industries from "./Components/Home/Industries";
import Ourstory from "./Components/Home/Ourstory";
import QuoteSlider from "./Components/Home/QuoteSlider";
import Cards from "./Components/Home/Cards";

export default function Home() {
  
  return (
    <div className="container-fluid p-0 m-0">
      <div className="wrapped-section">
        <Header />
        <HeroSection />
        <QuoteSlider />
        <ClientsSlide />
        <Ourstory />
        <Industries />
        <Cards />
        <AnniversarySection />
        <div className="white-space"></div>
        <FaqSection />
         <div className="white-space"></div>
        <Footer />
      </div>
    </div>
  );
}
