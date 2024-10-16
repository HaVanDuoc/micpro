"use client";

import BudgetSection from "@/components/home/BudgetSection";
import CreativeTeamSection from "@/components/home/CreativeTeamSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import QuotesSection from "@/components/home/QuotesSection";
import TeamWorkSection from "@/components/home/TeamWorkSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <TeamWorkSection />
      <ExpertiseSection />
      <BudgetSection />
      <QuotesSection />
      <CreativeTeamSection />
    </>
  );
};

export default HomePage;
