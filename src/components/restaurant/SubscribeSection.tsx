import React from "react";
import Container from "../common/Container";
import ImageComponent from "../common/ImageComponent";
import SUBSCRIBE from "@/assets/restaurant/hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-png-image-2f3ef9ac42b1ff80a6f9a2950c5eacf9 1.png";
import { Button, Input } from "@nextui-org/react";
import { LuMail } from "react-icons/lu";

const SubscribeSection = () => {
  return (
   <div className="px-5 sm:p-0">
      <Container
        marginY
        animationFadeUp
        className="bg-gradient-to-tr from-[#5C70F4] to-[#9A40E4] rounded-3xl sm:py-10 sm:px-20"
      >
        <div className="grid lg:grid-cols-2 items-center gap-10">
        
  
          <div className="lg:order-2 text-light space-y-4 sm:space-y-6 ">
            <p className="body-1">$20 discount for your first order</p>
            <h3 className="heading-3">Join our newsletter and get updates</h3>
            <p className="body-2">
              Join our email subcription now to get updates on promotoions and
              coupons.
            </p>
  
            <Input
              startContent={<LuMail className="text-gray-500 w-6 h-6" />}
              endContent={
                <Button color="primary" className="rounded px-5 body-4">
                  Subscribe
                </Button>
              }
              placeholder="Your email address"
              classNames={{
                inputWrapper: "h-14 rounded outline-none",
              }}
            />
          </div>
  
  
          <div className="lg:order-1">
            <ImageComponent img={SUBSCRIBE} alt="hamburger" />
          </div>
        </div>
      </Container>
   </div>
  );
};

export default SubscribeSection;
