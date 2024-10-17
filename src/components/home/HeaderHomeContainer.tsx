import React from "react";
import NavbarComponent from "@/components/layout/NavbarComponent";
import HeroHomeComponent from "@/components/home/HeroHomeComponent";
import AgencySection from "@/components/home/AgencySection";
import BackgroundHeader from "@/components/ui/BackgroundHeader";

const HeaderHomeContainer = () => {
  return (
    <header>
      <BackgroundHeader />
      <div className="relative z-30 flex flex-col items-center">
        <NavbarComponent page="home" hiddenMenu="lg" />
        <HeroHomeComponent />
        <AgencySection />
      </div>
    </header>
  );
};

export default HeaderHomeContainer;
