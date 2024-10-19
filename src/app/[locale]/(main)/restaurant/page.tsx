import React from "react";
import StatsSection from "@/components/restaurant/StatsSection";
import FeaturesSection from "@/components/restaurant/FeaturesSection";
import HeaderRestaurantComponent from "@/components/restaurant/HeaderRestaurantComponent";
import OrderedSection from "@/components/restaurant/OrderedSection";
import OfferSection from "@/components/restaurant/OfferSection";
import FoodBlogSection from "@/components/restaurant/FoodBlogSection";
import ClientSaySection from "@/components/restaurant/ClientSaySection";
import SubscribeSection from "@/components/restaurant/SubscribeSection";

const RestaurantPage = () => {
  return (
    <>
      <HeaderRestaurantComponent />
      <FeaturesSection />
      <StatsSection />
      <OrderedSection />
      <OfferSection />
      <FoodBlogSection />
      <ClientSaySection />
      <SubscribeSection />
    </>
  );
};

export default RestaurantPage;
