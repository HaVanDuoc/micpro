import React from "react";
import Container from "../common/Container";
import TitleComponent from "../common/TitleComponent";
import ImageComponent from "../common/ImageComponent";
import utils from "@/utils";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import cn from "@/utils/tailwind-utils";
import { Articles_DATA } from "@/data/charity";

const ArticlesSection = () => {
  const { title, items } = Articles_DATA;
  const colors = [
    "text-secondary-3 bg-secondary-3",
    "text-secondary-2 bg-secondary-2",
    "text-secondary-4 bg-secondary-4",
  ];

  return (
    <AnimationFadeUpComponent>
      <Container marginY gapTitleContent animationFadeUp>
        <TitleComponent
          title={title}
          heading="heading-2"
          highlight={[3]}
          colorHighlight="primary"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {items.map((_, index) => (
            <div
              className="flex flex-col gap-6 cursor-pointer group"
              key={index}
            >
              <div
                className={cn(
                  "body-2 w-fit bg-opacity-10 rounded py-1 px-3",
                  colors[index]
                )}
              >
                {_.type}
              </div>

              <div className="grow heading-5 group-hover:text-primary animation">
                {_.title}
              </div>

              <div className="overflow-hidden rounded-lg">
                <ImageComponent
                  img={_.img}
                  alt={utils.generateRandomAriaLabel("Article__")}
                  className="group-hover:scale-110 animation"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            endContent={<FaArrowRightLong className="text-light" />}
            className="bg-primary sub-heading-2 rounded-md text-light"
          >
            VIEW ALL ARTICLES
          </Button>
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default ArticlesSection;
