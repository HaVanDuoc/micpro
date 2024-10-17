import React from "react";
import { AGENCY_DATA } from "@/data/home";
import TitleComponent from "@/components/common/TitleComponent";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";

const CompanySection = () => {
  const { brand, heading, top } = AGENCY_DATA;

  return (
    <AnimationFadeUpComponent>
      <section className="px-5 sm:px-0 pt-5 bg-white">
        <div className="container py-16 sm:px-14  overflow-hidden flex flex-col gap-24">
          <TitleComponent
            heading="heading-1"
            title={heading}
            highlight={[2]}
            colorHighlight="primary"
            className="px-0 sm:px-10 lg:px-20"
          />

          <div className="w-full flex flex-row flex-wrap justify-center lg:justify-between items-center gap-7">
            {brand.map((brand) => (
              <div key={brand.id} className="h-[30px]">
                {brand.brand}
              </div>
            ))}
          </div>

          <div className="container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
            {top.map((item) => (
              <div className="space-y-5 p-5 w-[240px]" key={item.id}>
                {item.icon}
                <p className="sub-heading-1">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimationFadeUpComponent>
  );
};

export default CompanySection;
