import React from "react";
import HeaderCharityComponent from "@/components/charity/HeaderCharityComponent";
import CompanySection from "@/components/charity/CompanySection";
import HelpingSection from "@/components/charity/HelpingSection";
import VideoSection from "@/components/charity/VideoSection";
import TopDonorsSection from "@/components/charity/TopDonorsSection";

const CharityPage = () => {
  return (
    <>
      <HeaderCharityComponent />
      <CompanySection />
      <HelpingSection />
      <VideoSection />
      <TopDonorsSection />
    </>
  );
};

export default CharityPage;
