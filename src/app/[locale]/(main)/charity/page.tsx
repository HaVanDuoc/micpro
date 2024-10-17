import React from "react";
import HeaderCharityComponent from "@/components/charity/HeaderCharityComponent";
import CompanySection from "@/components/charity/CompanySection";
import HelpingSection from "@/components/charity/HelpingSection";

const CharityPage = () => {
  return (
    <>
      <HeaderCharityComponent />
      <CompanySection />
      <HelpingSection />
    </>
  );
};

export default CharityPage;
