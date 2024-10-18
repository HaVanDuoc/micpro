import React from "react";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import Container from "../common/Container";
import TitleComponent from "../common/TitleComponent";
import { Testimonial_DATA } from "@/data/charity";
import { Avatar, Badge, Divider } from "@nextui-org/react";
import utils from "@/utils";
import { ImQuotesRight } from "react-icons/im";
import cn from "@/utils/tailwind-utils";

const TestimonialSection = () => {
  const { title, sub_title, testimonials } = Testimonial_DATA;
  const colors = ["#F5953A", "#3DB0E5", "#FF7999"];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((_, index) => {
            return (
              <div
                className={cn(
                  "group text-center flex flex-col justify-center items-center gap-6 p-10 rounded-3xl border border-gray-300 shadow cursor-pointer"
                )}
                key={index}
              >
                <div className="group-hover:scale-110 animation">
                  <Badge content={<ImQuotesRight />} placement="bottom-right">
                    <Avatar
                      src={_.avt}
                      alt={utils.generateRandomAriaLabel("Testimonial__")}
                      size="lg"
                    />
                  </Badge>
                </div>

                <div className="body-2">{_.tes}</div>

                <Divider
                  className="w-24 h-[2px]"
                  style={{ background: colors[index] }}
                />

                <div>
                  <div className="heading-5">{_.name}</div>
                  <div className="body-3 dark-1">{_.job}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default TestimonialSection;
