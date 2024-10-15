"use client";

import React from "react";
import TitleComponent from "@/components/common/TitleComponent";
import Container from "@/components/common/Container";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HERO_DATA } from "@/data/home";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";

const HeroHomeComponent = () => {
  const { heading, sub_heading } = HERO_DATA;

  return (
    <AnimationFadeUpComponent>
      <Container>
        <div className="max-w-screen-md mx-auto mb-5 sm:mb-20">
          <TitleComponent
            heading="heading-1"
            title={heading}
            highlight={[7]}
            className="capitalize"
          />

          <p className="text-center para-2 mt-8 mb-11">{sub_heading}</p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Button
              endContent={<FaArrowRightLong />}
              className="py-6 px-10 bg-primary rounded-full text-light flex !sub-heading-2"
            >
              Start a Project
            </Button>
            <Button
              variant="bordered"
              className="py-6 px-10 bg-transparent border border-dark rounded-full text-dark flex !sub-heading-2"
            >
              Pricing
            </Button>
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default HeroHomeComponent;
