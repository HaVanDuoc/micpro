import React from "react";
import StatsSection from "@/components/restaurant/StatsSection";
import FeaturesSection from "@/components/restaurant/FeaturesSection";
import HeaderRestaurantComponent from "@/components/restaurant/HeaderRestaurantComponent";
import OrderedSection from "@/components/restaurant/OrderedSection";
import OfferSection from "@/components/restaurant/OfferSection";

const RestaurantPage = () => {
  return (
    <>
      <HeaderRestaurantComponent />
      <FeaturesSection />
      <StatsSection />
      <OrderedSection />
      <OfferSection />
    </>
  );
};

export default RestaurantPage;
