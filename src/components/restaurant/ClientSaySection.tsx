"use client";

import React from "react";
import Container from "../common/Container";
import TitleContentContainer from "../common/TitleContentContainer";
import TitleComponent from "../common/TitleComponent";
import SwiperComponent from "../common/SwiperComponent";
import { Avatar } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import { CLIENT_SAY_DATA } from "@/data/restaurant";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientItem = ({ data }: { data: any }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-8 shadow hover:shadow-xl animation space-y-6 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Avatar
            src={data.avt.src}
            alt={`Avatar client ${data.name}`}
            size="lg"
          />

          <div>
            <p className="sub-heading-3 font-bold">{data.name}</p>
            <p className="body-1 dark-1">{data.job}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {Array.from({ length: data.rating }, (_, index) => (
            <div className="text-yellow-500" key={index}>
              <FaStar />
            </div>
          ))}
        </div>
      </div>

      <p className="body-1">{data.say}</p>
    </div>
  );
};

const ClientSaySection = () => {
  const { title, sub, items } = CLIENT_SAY_DATA;

  return (
    <Container marginY animationFadeUp>
      <TitleContentContainer
        title={
          <>
            <TitleComponent
              title={title}
              heading="heading-2"
              highlight={[2]}
              colorHighlight="primary"
            />
            <p className="para-3 dark-1">{sub}</p>
          </>
        }
        content={
          <SwiperComponent
            data={items}
            isAutoPlay
            isPagination
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {(item: unknown) => <ClientItem data={item} />}
          </SwiperComponent>
        }
      />
    </Container>
  );
};

export default ClientSaySection;
