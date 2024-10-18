import React from "react";
import HeaderCharityComponent from "@/components/charity/HeaderCharityComponent";
import CompanySection from "@/components/charity/CompanySection";
import HelpingSection from "@/components/charity/HelpingSection";
import VideoSection from "@/components/charity/VideoSection";

const CharityPage = () => {
  return (
    <>
      <HeaderCharityComponent />
      <CompanySection />
      <HelpingSection />
      <VideoSection />
    </>
  );
};

export default CharityPage;
