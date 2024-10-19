import React from "react";
import Container from "../common/Container";
import { STATS_DATA } from "@/data/restaurant";

const StatsSection = () => {
  return (
    <Container fullWidth marginY>
      <div className="p-14 flex flex-wrap items-center justify-center gap-24 bg-gradient-to-tr from-[#5C70F4] to-[#9A40E4]">
        {STATS_DATA.map((_, index) => (
          <div className="space-y-5 text-center text-light" key={index}>
            <div className="heading-2">{_.value}</div>
            <div className="body-1">{_.label}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StatsSection;
