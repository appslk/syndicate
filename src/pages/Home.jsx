import brickBg from "../assets/images/homepage/brick-bg.png";

import Hero from "../components/homepage/Hero";
import Mint from "../components/homepage/Mint";
import Workshop from "../components/homepage/Workshop";
import Collections from "../components/homepage/Collections";
import Roadmap from "../components/homepage/Roadmap";
import Team from "../components/homepage/Team";
import FAQ from "../components/homepage/FAQ";
import Footer from "../components/homepage/Footer";

const HomePage = () => {
  return (
    <>
      <header className="homepage h-[50px] bg-[#0A0A0A]"></header>
      <main
        className="homepage font-montserrat overflow-x-hidden bg-[#0A0A0A] bg-fixed text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]"
        style={{ backgroundImage: `url(${brickBg})` }}
      >
        <Hero />
        <Mint />
        <Workshop />
        <Collections />
        <Roadmap />
        <Team />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
