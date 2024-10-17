import React from "react";
import TitleComponent from "@/components/common/TitleComponent";
import Container from "@/components/common/Container";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";
import ButtonHeroComponent from "../ui/hero/ButtonHeroComponent";
import { HERO_DATA } from "@/data/charity";

const HeroCharitySection = () => {
  const { heading, sub_heading, buttons } = HERO_DATA;

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
            <ButtonHeroComponent
              bg="primary"
              variant="solid"
              endContent={<FaArrowRightLong />}
            >
              {buttons[0].name}
            </ButtonHeroComponent>
            <ButtonHeroComponent
              bg="white"
              variant="solid"
              startContent={<FaPlay className="text-primary w-5 h-5" />}
            >
              {buttons[1].name}
            </ButtonHeroComponent>
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default HeroCharitySection;
