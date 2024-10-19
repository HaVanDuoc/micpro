import React from "react";
import NavbarComponent from "@/components/layout/NavbarComponent";
import BackgroundHeader from "@/components/ui/BackgroundHeader";
import HeroRestaurantSection from "@/components/restaurant/HeroRestaurantSection";
import IpadSection from "@/components/restaurant/IpadSection";

const HeaderRestaurantComponent = () => {
  return (
    <header>
      <BackgroundHeader />
      <div className="relative z-30 flex flex-col items-center">
        <NavbarComponent page="restaurant" hiddenMenu="lg" />
        <HeroRestaurantSection />
        <IpadSection />
      </div>
    </header>
  );
};

export default HeaderRestaurantComponent;
