import React from "react";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import Container from "../common/Container";
import TitleComponent from "../common/TitleComponent";
import { Avatar } from "@nextui-org/react";
import utils from "@/utils";
import { TOP_DONORS_DATA } from "@/data/charity";

const TopDonorsSection = () => {
  const { title, donors } = TOP_DONORS_DATA;

  return (
    <AnimationFadeUpComponent>
      <Container marginY gapTitleContent>
        <TitleComponent
          title={title}
          heading="heading-2"
          highlight={[1]}
          colorHighlight="primary"
        />

        <div className="flex flex-wrap items-center justify-between gap-5">
          {donors.map((i, index) => (
            <div
              className="min-w-[200px] flex flex-grow items-center gap-6 shadow hover:shadow-primary px-5 py-3 rounded-lg border border-gray-300 cursor-pointer group"
              key={index}
            >
              <Avatar
                src={i.avt}
                alt={utils.generateRandomAriaLabel("Donors__")}
                size="lg"
              />

              <div className="space-y-3 flex-1">
                <p className="heading-5 group-hover:text-primary">{i.name}</p>
                <p className="para-1 dark-1">{i.volumes}</p>
              </div>

              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-secondary-2 text-light ">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default TopDonorsSection;
