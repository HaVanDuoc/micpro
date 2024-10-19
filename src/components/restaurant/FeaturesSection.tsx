import React from "react";
import Container from "@/components/common/Container";
import TitleComponent from "@/components/common/TitleComponent";
import ImageComponent from "@/components/common/ImageComponent";
import TitleContentContainer from "@/components/common/TitleContentContainer";
import { Features_DATA } from "@/data/restaurant";

const FeaturesSection = () => {
  const { title, sub_title, items } = Features_DATA;

  return (
    <Container marginY animationFadeUp gapTitleContent>
      <TitleContentContainer
        title={
          <>
            <TitleComponent
              title={title}
              heading="heading-2"
              highlight={[2]}
              colorHighlight="primary"
            />

            <p className="body-1 dark-1 text-center">{sub_title}</p>
          </>
        }
        content={
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((_, index) => (
              <div key={index} className="text-center space-y-5 group">
                <div className="w-full rounded-xl overflow-hidden">
                  <ImageComponent
                    img={_.img}
                    alt="Food"
                    className="group-hover:scale-110 animation"
                  />
                </div>
                <h1 className="heading-4 group-hover:text-primary animation">
                  {_.name}
                </h1>
                <p className="dark-1 body-2">{_.des}</p>
              </div>
            ))}
          </div>
        }
      />
    </Container>
  );
};

export default FeaturesSection;
