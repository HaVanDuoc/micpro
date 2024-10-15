import React from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import HeroHomeComponent from "@/components/home/HeroHomeComponent";
import AgencySection from "@/components/home/AgencySection";

const HeaderContainer = () => {
  return (
    <header>
      <div className="container h-full relative z-0">
        <div className="shadow-[0_0_300px_300px_rgba(81,180,250,100)] absolute top-[600px] left-0"></div>
        <div className="shadow-[0_0_200px_200px_rgba(133,74,235,100)] absolute top-[800px] left-1/3"></div>
        <div className="shadow-[0_0_200px_200px_rgba(248,217,151,100)] absolute top-[800px] right-1/3"></div>
        <div className="shadow-[0_0_300px_300px_rgba(248,166,240,100)] absolute top-[600px] right-0"></div>
      </div>

      <div className="relative z-30 flex flex-col items-center">
        <NavbarComponent hiddenMenu="lg" />
        <HeroHomeComponent />
        <AgencySection />
      </div>
    </header>
  );
};

export default HeaderContainer;
