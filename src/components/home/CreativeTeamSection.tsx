import React from "react";
import Container from "../common/Container";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import TitleComponent from "../common/TitleComponent";
import ImageComponent from "../common/ImageComponent";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { CreativeTeam_DATA } from "@/data/home";

const CreativeTeamSection = () => {
  const { title, description, members } = CreativeTeam_DATA;

  return (
    <AnimationFadeUpComponent>
      <Container marginY>
        <TitleComponent
          title={title}
          heading="heading-2"
          highlight={[2]}
          colorHighlight="primary"
        />
        <div className="body-1 text-center text-[#81879D]">{description}</div>

        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-10 mt-10">
          {members.map((member) => {
            const { id, img, job, name } = member;

            return (
              <div
                key={id}
                className="bg-[#edf0fa] w-[380px] rounded-[200px] overflow-hidden relative cursor-pointer group"
              >
                <ImageComponent img={img} alt="member creative team" />

                <div className="w-full h-full bg-primary bg-opacity-70 text-light absolute hidden group-hover:flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation">
                  <div className="body-1 uppercase">{name}</div>
                  <div className="body-3 uppercase mb-5">{job}</div>
                  <div className="flex gap-3 items-center">
                    <div className="flex-justify-center items-center rounded-full p-3 bg-[#349CFF] shadow-lg">
                      <FaFacebookF className="text-light" />
                    </div>
                    <div className="flex-justify-center items-center rounded-full p-3 bg-[#349CFF] shadow-lg">
                      <FaTwitter className="text-light" />
                    </div>
                    <div className="flex-justify-center items-center rounded-full p-3 bg-light shadow-lg">
                      <ImLinkedin2 className="text-[#349CFF]" />
                    </div>
                    <div className="flex-justify-center items-center rounded-full p-3 bg-[#349CFF] shadow-lg">
                      <FaInstagram className="text-light" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default CreativeTeamSection;
