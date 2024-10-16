import React from "react";
import TitleComponent from "@/components/common/TitleComponent";
import Container from "@/components/common/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import { HERO_DATA } from "@/data/home";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";
import ButtonHeroComponent from "@/components/ui/hero/ButtonHeroComponent";

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
            <ButtonHeroComponent
              bg="primary"
              variant="solid"
              endContent={<FaArrowRightLong />}
            >
              Start a Project
            </ButtonHeroComponent>
            <ButtonHeroComponent bg="transparent" variant="bordered">
              Pricing
            </ButtonHeroComponent>
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default HeroHomeComponent;
