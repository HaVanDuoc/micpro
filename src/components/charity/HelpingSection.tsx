import React from "react";
import Container from "../common/Container";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import TitleComponent from "../common/TitleComponent";
import { FaCheck } from "react-icons/fa6";
import ImageComponent from "../common/ImageComponent";
import { HELPING_DATA } from "@/data/charity";
import IMG_1 from "@/assets/charity/card.png";
import IMG_2 from "@/assets/charity/card (1).png";

const HelpingSection = () => {
  const { heading, heading_2, text, items } = HELPING_DATA;

  return (
    <AnimationFadeUpComponent>
      <Container marginY>
        <TitleComponent
          title={heading}
          heading="heading-2"
          highlight={[6]}
          colorHighlight="primary"
          breakLineAt={[5]}
          className="mb-14 sm:mb-20"
        />

        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div className="lg:order-last w-full relative">
            <ImageComponent
              img={IMG_1}
              alt="card 1"
              className="w-[70%] absolute top-0 right-0 z-30"
            />
            <div className="w-[90%] px-14 pt-24 pb-14 bg-[#F2F2F2] rounded-3xl z-20">
              <ImageComponent img={IMG_2} alt="card 2" />
            </div>
            <div className="absolute top-[20%] right-[10%] translate-y-[100%] shadow-[0_0_150px_50px_rgba(0,137,254,1)] z-10"></div>
            <div className="absolute bottom-[10%] left-[10%] shadow-[0_0_150px_50px_rgba(0,137,254,1)] z-10"></div>
          </div>

          <div className="space-y-6 ">
            <div className="heading-2">{heading_2}</div>
            <div className="sub-heading-2 dark-1 mb-5">{text}</div>
            <div className="flex flex-col gap-5">
              {items.map((i) => (
                <div className="flex items-center gap-5" key={i.id}>
                  <div className="bg-red-500 p-1 rounded-full text-light">
                    <FaCheck />
                  </div>
                  <p className="body-1">{i.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default HelpingSection;
