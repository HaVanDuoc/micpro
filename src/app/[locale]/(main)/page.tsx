"use client";

import BudgetSection from "@/components/home/BudgetSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import TeamWorkSection from "@/components/home/TeamWorkSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <TeamWorkSection />
      <ExpertiseSection />
      <BudgetSection />
    </>
  );
};

export default HomePage;
