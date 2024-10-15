"use client";

import React from "react";
import Container from "../common/Container";
import TitleComponent from "../common/TitleComponent";
import ImageComponent from "../common/ImageComponent";
import { TEAM_WORK_DATA } from "@/data/home";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";
import cn from "@/utils/tailwind-utils";

const TeamWorkSection = () => {
  const { title, team_works } = TEAM_WORK_DATA;

  return (
    <Container>
      <TitleComponent
        heading="heading-2"
        title={title}
        highlight={[2]}
        colorHighlight="primary"
        className="md:mb-14"
      />

      <div className="flex flex-col gap-14">
        {team_works.map((work, index) => (
          <BoxLayout reserve={index % 2 !== 0} data={work} key={index} />
        ))}
      </div>
    </Container>
  );
};

const BoxLayout = ({
  data,
  reserve = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  reserve: boolean;
}) => {
  return (
    <AnimationFadeUpComponent>
      <div
        className={cn(
          "flex flex-col lg:flex-row gap-9 items-center",
          reserve && "lg:flex-row-reverse"
        )}
      >
        <ImageComponent
          img={data?.img}
          alt="team work 1"
          className="lg:w-[60%] order-2"
        />

        <div
          className={cn(
            "lg:w-[40%] space-y-6 order-1",
            reserve && "lg:text-right"
          )}
        >
          <div className="body-2 text-[#81879D]">{data?.text}</div>
          <h3 className="heading-3">{data?.name}</h3>
          <p className="para-2">{data?.description}</p>

          <div
            className={cn(
              "tracking-[0.3em] flex flex-col",
              reserve && "lg:items-end"
            )}
          >
            <p>VIEW PORTFOLIO</p>
            <div
              className={cn(
                "mt-3 flex h-1 w-1/3 bg-gradient-to-r from-[#B112F4]",
                reserve && "lg:bg-gradient-to-l"
              )}
            ></div>
          </div>
        </div>
      </div>
    </AnimationFadeUpComponent>
  );
};

export default TeamWorkSection;
