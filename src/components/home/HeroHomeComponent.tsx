import React from "react";
import TitleComponent from "@/components/common/TitleComponent";
import Container from "@/components/common/Container";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroHomeComponent = () => {
  return (
    <Container>
      <div className="max-w-screen-md mx-auto mb-5 sm:mb-20">
        <TitleComponent
          heading="heading-1"
          title="Build Your Dream Website with Our Skilled Development Team"
          highlight={["Development"]}
          className="capitalize"
        />

        <p className="text-center para-2 mt-8 mb-11">
          Are you looking for a way to close all marketing, technical and
          customer support tasks for your company in one place
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Button className="py-6 px-10 bg-primary rounded-full text-light flex !sub-heading-2">
            Start a Project
          </Button>
          <Button
            variant="bordered"
            className="py-6 px-10 bg-transparent border border-dark rounded-full text-dark flex !sub-heading-2"
            endContent={<FaArrowRightLong />}
          >
            Pricing
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroHomeComponent;
