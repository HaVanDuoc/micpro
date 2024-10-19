import React from "react";
import Container from "../common/Container";
import ImageComponent from "../common/ImageComponent";

import IMG from "@/assets/restaurant/iPad & Apple Pencil.svg";

const IpadSection = () => {
  return (
    <Container animationFadeUp>
      <ImageComponent img={IMG} alt="ipad" />
    </Container>
  );
};

export default IpadSection;
