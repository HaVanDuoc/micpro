import React from "react";
import Container from "../common/Container";
import TitleContentContainer from "../common/TitleContentContainer";
import TitleComponent from "../common/TitleComponent";
import ImageComponent from "../common/ImageComponent";
import { Button } from "@nextui-org/react";
import { OFFER_DATA } from "@/data/restaurant";

const OfferSection = () => {
  const { title, sub_title, leftContent, rightContent } = OFFER_DATA;

  return (
    <Container marginY animationFadeUp>
      <TitleContentContainer
        title={
          <>
            <TitleComponent
              title={title}
              heading="heading-2"
              highlight={[3]}
              colorHighlight="primary"
            />

            <div className="para-1 dark-1">{sub_title}</div>
          </>
        }
        content={
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="h-full relative lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-tr-none lg:rounded-br-none rounded-3xl overflow-hidden">
              <ImageComponent
                img={leftContent.img}
                alt="Order"
                className="h-full z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-70 z-20"></div>
              <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-30">
                <div className="text-light w-[200px] space-y-3">
                  <p className="sub-heading-3 sub-heading-3">
                    {leftContent.text_1}
                  </p>
                  <p>
                    <span className="text-primary text-3xl text-italic heading-5">
                      {leftContent.percent}%
                    </span>{" "}
                    <span className="uppercase">off</span>
                  </p>
                  <p className="body-2">{leftContent.text_2}</p>
                </div>
                <Button color="primary" className="rounded-full shadow mt-10">
                  Order Now
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {rightContent.map((_, index) => (
                <div
                  className="h-full flex items-center gap-5 bg-[#FCF7FB] p-3 rounded-lg"
                  key={index}
                >
                  <ImageComponent
                    img={_.img}
                    alt="order"
                    className="rounded overflow-hidden min-w-[110px]"
                  />

                  <div className="space-y-1">
                    <div className="flex items-center">
                      <p className="sub-heading-1 grow">{_.name}</p>
                      <p className="sub-heading-1 text-primary">$ {_.price}</p>
                    </div>

                    <p className="body-3 dark-1">{_.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </Container>
  );
};

export default OfferSection;
