import React from "react";
import Container from "../common/Container";
import TitleComponent from "../common/TitleComponent";
import { Button, Divider } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import ImageComponent from "../common/ImageComponent";
import { BLOG_FOOD_DATA } from "@/data/restaurant";

const FoodBlogSection = () => {
  const { title, sub, button, items } = BLOG_FOOD_DATA;

  return (
    <section className="bg-[#F1F5F9] py-5">
      <Container marginY animationFadeUp>
        <div className="grid lg:grid-cols-2 gap-14 sm:gap-24">
          <div className="flex flex-col place-items-center sm:place-items-start text-center sm:text-left gap-5 sm:gap-8">
            <TitleComponent
              title={title}
              heading="heading-2"
              highlight={[2]}
              colorHighlight="primary"
            />

            <div className="body-2 dark-1">{sub}</div>

            <Button
              color="primary"
              endContent={<FaArrowRightLong />}
              className="px-5 rounded-md sub-heading-2"
            >
              {button.name}
            </Button>
          </div>

          <div className="flex flex-col gap-8">
            {items.map((_, index) => (
              <>
                <div className="flex items-center gap-5 sm:gap-8" key={index}>
                  <div className="rounded-lg overflow-hidden w-[40%] h-full">
                    <ImageComponent heightFull img={_.img} alt="BLOG__" />
                  </div>

                  <div className="sm:space-y-3 w-[60%]">
                    <p className="body-3 dark-1">
                      Blog {`0${index + 1}`.slice(-2)}
                    </p>
                    <h5 className="heading-5 line-clamp-2">{_.name}</h5>
                    <p className="body-2 dark-1 line-clamp-3">{_.des}</p>
                  </div>
                </div>

                {index < items.length - 1 ? <Divider /> : null}
              </>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FoodBlogSection;
