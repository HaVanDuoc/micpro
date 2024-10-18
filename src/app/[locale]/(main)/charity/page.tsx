import React from "react";
import HeaderCharityComponent from "@/components/charity/HeaderCharityComponent";
import CompanySection from "@/components/charity/CompanySection";
import HelpingSection from "@/components/charity/HelpingSection";
import VideoSection from "@/components/charity/VideoSection";
import TopDonorsSection from "@/components/charity/TopDonorsSection";
import BreatheSection from "@/components/charity/BreatheSection";

const CharityPage = () => {
  return (
    <>
      <HeaderCharityComponent />
      <CompanySection />
      <HelpingSection />
      <VideoSection />
      <TopDonorsSection />
      <BreatheSection />
    </>
  );
};

export default CharityPage;
