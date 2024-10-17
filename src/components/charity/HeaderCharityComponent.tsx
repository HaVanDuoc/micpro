import React from "react";
import NavbarComponent from "@/components/layout/NavbarComponent";
import BackgroundHeader from "@/components/ui/BackgroundHeader";
import HeroCharitySection from "@/components/charity/HeroCharitySection";

const HeaderCharityComponent = () => {
  return (
    <header>
      <BackgroundHeader />
      <div className="relative z-30 flex flex-col items-center">
        <NavbarComponent page="charity" hiddenMenu="lg" />
        <HeroCharitySection />
      </div>
    </header>
  );
};

export default HeaderCharityComponent;
