"use client";

import React from "react";
import Container from "../common/Container";
import { ImQuotesLeft } from "react-icons/im";
import { Avatar } from "@nextui-org/react";
import SwiperComponent from "@/components/common/SwiperComponent";
import { QUOTES_DATA } from "@/data/home";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QuotesItem = ({ data }: { data: any }) => {
  return (
    <div className="text-light w-full p-10 rounded-3xl bg-gradient-to-r from-[#3F56EE] to-[#5094FA]">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
        <div className="lg:order-1 hidden lg:block">
          <ImQuotesLeft size={50} className="text-white" />
        </div>

        <div className="order-1 lg:order-4 flex flex-col justify-center items-center lg:items-start gap-3 min-w-[200px]">
          <Avatar
            src={data?.avt}
            alt="avatar user"
            className="mb-3 w-16 h-16"
          />
          <div className="heading-5">{data.user}</div>
          <div className="body-2">{data.job}</div>
        </div>

        <div className="order-2 lg:order-3 bg-light w-auto h-[2px] lg:w-[2px] lg:h-auto"></div>

        <div className="order-3 lg:order-2 sm:p-6 max-w-screen-md para-2 text-center lg:text-left">
          {data.content}
        </div>
      </div>
    </div>
  );
};

const QuotesSection = () => {
  const { items } = QUOTES_DATA;

  return (
    <Container>
      <SwiperComponent
        data={items}
        isAutoPlay
        isPagination
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {(item: unknown) => <QuotesItem data={item} />}
      </SwiperComponent>
    </Container>
  );
};

export default QuotesSection;
