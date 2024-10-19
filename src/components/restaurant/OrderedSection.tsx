import React from "react";
import Container from "../common/Container";
import TitleContentContainer from "../common/TitleContentContainer";
import TitleComponent from "../common/TitleComponent";
import ImageComponent from "../common/ImageComponent";
import FOOD from "@/assets/restaurant/food (4).png";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong, FaCartShopping } from "react-icons/fa6";

const OrderedSection = () => {
  return (
    <Container animationFadeUp>
      <TitleContentContainer
        title={
          <TitleComponent
            title="Most Ordered Food in New York"
            heading="heading-2"
            highlight={[4]}
            colorHighlight="primary"
          />
        }
        content={
          <>
            <div className="grid lg:grid-cols-2 gap-6 p-6 rounded-3xl bg-gradient-to-r from-[#F2F4FF] #FFE5EC to-[#FFF4EA]">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  className="group hover:shadow cursor-pointer grid grid-flow-col md:auto-cols-[auto_1fr_auto] grid-rows-[auto_auto] items-center gap-5 p-5 rounded bg-white"
                  key={index}
                >
                  <div className=" w-[120px] h-full px-3 rounded-md bg-[#FBF5EF] md:row-span-2 flex justify-center items-center">
                    <ImageComponent
                      img={FOOD}
                      alt="food"
                      className="group-hover:scale-110 animation"
                    />
                  </div>

                  <div className="space-y-3 md:row-span-2 lg:row-span-1">
                    <div className="heading-4 group-hover:text-primary animation">
                      Chiken Curry
                    </div>
                    <div className="body-4 dark-1">
                      1234 elgin st. Celina, newyork city 7894
                    </div>
                  </div>

                  <div className="heading-4 text-primary lg:text-left text-right">
                    $88
                  </div>

                  <div className="lg:row-span-2  lg:text-left text-right">
                    <Button color="primary" isIconOnly>
                      <FaCartShopping />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Button
                className="text-light bg-primary sub-heading-2 rounded-lg px-5"
                endContent={<FaArrowRightLong />}
              >
                VIEW ALL FOOD
              </Button>
            </div>
          </>
        }
      />
    </Container>
  );
};

export default OrderedSection;
