import React from "react";
import Container from "@/components/common/Container";
import TitleComponent from "@/components/common/TitleComponent";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ABOUT_US_DATA } from "@/data/home";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";

const AboutUsSection = () => {
  const { heading, sub_heading } = ABOUT_US_DATA;

  return (
    <AnimationFadeUpComponent>
      <Container marginY className="p-5">
        <div className="flex flex-col justify-center items-center text-center text-light space-y-10 bg-gradient-to-tr from-[#9A40E4]  to-[#5C70F4] rounded-3xl py-20 sm:px-24 px-10">
          <TitleComponent
            title={heading}
            heading="heading-3"
            className="lg:max-w-screen-lg"
          />
          <div className="body-2 md:max-w-screen-md">{sub_heading}</div>

          <div>
            <Button
              className="sub-heading-1 font-bold bg-light rounded-lg shadow py-7 px-5"
              endContent={
                <div className=" flex justify-center items-center p-2 bg-primary shadow rounded-full text-light">
                  <FaArrowRightLong />
                </div>
              }
            >
              Join the team
            </Button>
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default AboutUsSection;
