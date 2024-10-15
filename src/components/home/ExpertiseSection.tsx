"use client";

import React from "react";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";
import Container from "@/components/common/Container";
import TitleComponent from "../common/TitleComponent";
import { FaCheck } from "react-icons/fa6";
import { Expertise_DATA } from "@/data/home";

const ExpertiseSection = () => {
  const { title, sub_title, items } = Expertise_DATA;

  const colors = ["#D555C7", "#F49235", "#6BCEFD", "#FF7999"];

  return (
    <AnimationFadeUpComponent>
      <Container marginY className="px-5">
        <div className="bg-[#F1F5F9] rounded-3xl px-5 py-12 sm:py-20">
          <TitleComponent
            title={title}
            heading="heading-2"
            highlight={[3]}
            colorHighlight="primary"
            className="mb-10"
          />

          <div className="para-2 text-center mb-8">{sub_title}</div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                className="flex flex-col p-5 rounded-lg bg-white"
                key={item.id}
              >
                <div className="heading-5 mb-11">{item.title}</div>

                <div className="space-y-4">
                  {item.list.map((item) => (
                    <div className="flex items-center gap-4" key={item.id}>
                      <div>
                        <div
                          className="text-white p-1 rounded-full"
                          style={{
                            backgroundImage: `linear-gradient(150deg, ${colors[index]} 0%, #fff 100%)`,
                          }}
                        >
                          <FaCheck />
                        </div>
                      </div>
                      <div className="body-2">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default ExpertiseSection;
