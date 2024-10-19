import StatsSection from "@/components/restaurant/StatsSection";
import FeaturesSection from "@/components/restaurant/FeaturesSection";
import HeaderRestaurantComponent from "@/components/restaurant/HeaderRestaurantComponent";
import React from "react";

const RestaurantPage = () => {
  return (
    <>
      <HeaderRestaurantComponent />
      <FeaturesSection />
      <StatsSection />
    </>
  );
};

export default RestaurantPage;
