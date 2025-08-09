import Image from "next/image";
import Navbar from "./navbar";
import HeroSection from "@/components/herosection";
import CTASection from "@/components/cta-section";
import AboutAndBuySection from "@/components/about-and-buy-section";
import OurStorySection from "@/components/our-story-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
   <div className="bg-transparent text-white min-h-screen blinker-thin ">
      
      {/* <main className="px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12"> */}
          <Navbar />
          <HeroSection />
          <CTASection/>
          <AboutAndBuySection/>
          <OurStorySection/>
          <Footer/>
          <BackToTop />
         
        {/* </div>
      </main> */}
    </div>
  );
}
