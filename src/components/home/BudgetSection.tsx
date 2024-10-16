"use client";

import React from "react";
import Container from "../common/Container";
import AnimationFadeUpComponent from "../animation/AnimationFadeUpComponent";
import TitleComponent from "../common/TitleComponent";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import cn from "@/utils/tailwind-utils";
import { BUDGET_DATA } from "@/data/home";

const BudgetSection = () => {
  const { title, budgets } = BUDGET_DATA;

  return (
    <AnimationFadeUpComponent>
      <div className="w-full bg-[#F2F3F8]">
        <Container marginY className="py-16">
          <TitleComponent
            title={title}
            heading="heading-2"
            highlight={[6]}
            colorHighlight="primary"
            breakLineAt={[5]}
            className="mb-6 sm:mb-16"
          />

          <Tabs
            color="primary"
            aria-label="Tabs budget"
            radius="full"
            items={budgets}
            classNames={{
              base: "justify-center",
              tab: "py-5 px-10",
            }}
          >
            {(item) => (
              <Tab
                key={item.name}
                title={item.name}
                className="flex flex-col lg:flex-row gap-5"
              >
                {item.items.map((i) => (
                  <Card key={i.id} className="!rounded-3xl !overflow-hidden">
                    <CardBody className="!p-0 ">
                      <div className="pt-6 px-10 pb-10">
                        <div className="flex flex-row justify-between items-center gap-5 mb-5">
                          <div className="sub-heading-2">{i.class}</div>
                          <div className="sub-heading-3 text-primary bg-primary bg-opacity-10 rounded-full px-3 py-1">
                            {i.type}
                          </div>
                        </div>
                        <div>
                          <span className="heading-2">${i.price}</span>
                          <span className="para-1">
                            {i.price !== 0
                              ? item.name === "Monthly"
                                ? "/Per Month"
                                : "/Per Year"
                              : null}
                          </span>
                        </div>
                      </div>

                      <div className="p-10 bg-[#EAEDF9] flex-grow">
                        <div className="flex flex-wrap gap-5 justify-between pb-10">
                          {i.providers.map((provider) => (
                            <div
                              className="flex flex-row gap-3 items-center min-w-[250px]"
                              key={provider.id}
                            >
                              <div
                                className="text-white p-1 rounded-full"
                                style={{
                                  backgroundImage: `linear-gradient(150deg, #D555C7 0%, #F396EA 100%)`,
                                }}
                              >
                                <FaCheck />
                              </div>
                              <div className="body-1">{provider.value}</div>
                            </div>
                          ))}
                        </div>

                        <Button
                          className={cn(
                            "px-10 rounded-full sub-heading-2 text-light bg-gradient-to-r from-[#5F45D9] via-[#F961D8] to-[#FE9E66]"
                          )}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </Tab>
            )}
          </Tabs>
        </Container>
      </div>
    </AnimationFadeUpComponent>
  );
};

export default BudgetSection;
