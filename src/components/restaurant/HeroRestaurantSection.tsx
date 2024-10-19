import React from "react";
import TitleComponent from "@/components/common/TitleComponent";
import Container from "@/components/common/Container";
import { HERO_RESTAURANT_DATA } from "@/data/restaurant";
import Image from "next/image";

import GOOGLE from "@/assets/restaurant/google-play-app-store-android-wallets-b4ba278fac7b94c31b4e817ee72c8b63 1.svg";
import APPLE from "@/assets/restaurant/iphone-app-store-apple-store-stock-e2904e244823ccff8630acc91812664c 1.svg";

const HeroRestaurantSection = () => {
  const { heading, sub_heading } = HERO_RESTAURANT_DATA;

  return (
    <Container animationFadeUp>
      <div className="max-w-screen-md mx-auto mb-5 sm:mb-20">
        <TitleComponent
          heading="heading-1"
          title={heading}
          highlight={[6]}
          className="capitalize"
        />

        <p className="text-center para-2 mt-8 mb-11">{sub_heading}</p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Image
            src={GOOGLE}
            alt="google play"
            width={200}
            height={60}
            className="cursor-pointer shadow"
          />
          <Image
            src={APPLE}
            alt="App store"
            width={200}
            height={60}
            className="cursor-pointer shadow"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroRestaurantSection;
