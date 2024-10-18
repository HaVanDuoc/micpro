import React from "react";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import Container from "../common/Container";
import ImageComponent from "../common/ImageComponent";
import IMG from "@/assets/charity/ima.png";
import utils from "@/utils";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

const JoinSection = () => {
  return (
    <AnimationFadeUpComponent>
      <Container marginY>
        <div className="text-light rounded-3xl sm:gap-14 flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-tr from-[#9A40E4] to-[#5C70F4]">

          <div className="lg:order-last lg:basis-1/2 flex flex-col gap-6 p-10 text-center lg:text-left lg:items-start items-center">
            <div className="heading-3">Become a Volunteer of our charity</div>
            <div className="body-2">
              {`We believe your project is only as good as the team that's working
              on it. When we work with you and your team, we know there are no
              shortcuts to success. Your research is done; now lets get down to
              business!`}
            </div>
            <div>
              <Button
                endContent={
                  <div className="text-light p-2 bg-primary rounded-full">
                    <FaArrowRightLong />
                  </div>
                }
                className="rounded shadow bg-white p-3 !sub-heading-1 font-bold"
              >
                Join the team
              </Button>
            </div>
          </div>

          <ImageComponent
            img={IMG}
            alt={utils.generateRandomAriaLabel("join the team__")}
            className="mt-10 lg:basis-1/2"
          />
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default JoinSection;
