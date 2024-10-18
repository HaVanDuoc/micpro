import React from "react";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";
import Container from "@/components/common/Container";
import TitleComponent from "@/components/common/TitleComponent";
import ImageComponent from "@/components/common/ImageComponent";
import IMG from "@/assets/charity/volunteers-posting-social-media 1.png";
import utils from "@/utils";
import cn from "@/utils/tailwind-utils";
import { BREATHE_DATA } from "@/data/charity";

const BreatheSection = () => {
  const { title, sub_title, volunteers } = BREATHE_DATA;
  const colorTexts = ["#1663F9", "#FF7999", "#3DB0E5", "#F5953A"];

  return (
    <AnimationFadeUpComponent>
      <Container marginY gapTitleContent>
        <TitleComponent
          title={title}
          heading="heading-2"
          highlight={[6]}
          colorHighlight="primary"
        />

        <div className="body-1 dark-1 text-center">{sub_title}</div>

        <div className="grid lg:grid-cols-2 items-center justify-center gap-14 sm:gap-20">
          <ImageComponent
            img={IMG}
            alt={utils.generateRandomAriaLabel("Volunteer__")}
          />

          <div className="grid grid-cols-2 gap-10">
            {volunteers.map((_, index) => (
              <div className="flex flex-col gap-5" key={index}>
                <div
                  className={cn("heading-3")}
                  style={{
                    color: colorTexts[index],
                  }}
                >
                  {_.count}
                </div>
                <div className="body-1 dark-1">{_.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default BreatheSection;
