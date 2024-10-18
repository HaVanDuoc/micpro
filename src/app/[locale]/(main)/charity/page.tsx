import React from "react";
import HeaderCharityComponent from "@/components/charity/HeaderCharityComponent";
import CompanySection from "@/components/charity/CompanySection";
import HelpingSection from "@/components/charity/HelpingSection";
import VideoSection from "@/components/charity/VideoSection";
import TopDonorsSection from "@/components/charity/TopDonorsSection";
import BreatheSection from "@/components/charity/BreatheSection";
import TestimonialSection from "@/components/charity/TestimonialSection";
import ArticlesSection from "@/components/charity/ArticlesSection";

const CharityPage = () => {
  return (
    <>
      <HeaderCharityComponent />
      <CompanySection />
      <HelpingSection />
      <VideoSection />
      <TopDonorsSection />
      <BreatheSection />
      <TestimonialSection />
      <ArticlesSection />
    </>
  );
};

export default CharityPage;
