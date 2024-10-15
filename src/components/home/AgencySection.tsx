import React from "react";
import { AGENCY_DATA } from "@/data/home";
import TitleComponent from "../common/TitleComponent";
import { motion } from "framer-motion";

const Ticker = () => {
  const brands = AGENCY_DATA.brand;

  // Nhân đôi danh sách để tạo ticker liên tục
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex flex-row gap-7"
        animate={{
          x: ["0%", "-100%"], // Di chuyển từ 0% đến -100%
        }}
        transition={{
          ease: "linear", // Chạy tuyến tính không giật
          duration: 20, // Thời gian di chuyển (điều chỉnh tốc độ)
          repeat: Infinity, // Lặp lại mãi mãi
        }}
      >
        {repeatedBrands.map((brand, index) => (
          <div key={index} className="h-[30px] flex-shrink-0">
            {brand.brand}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AgencySection = () => {
  return (
    <section className="px-5 sm:px-0 py-5">
      <div className="container sm:py-16 sm:px-14 rounded-3xl bg-white overflow-hidden space-y-10">
        <div className="container sm:mb-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
          {AGENCY_DATA.top.map((item) => (
            <div className="space-y-5 p-5 w-[240px]" key={item.id}>
              {item.icon}
              <p className="sub-heading-1">{item.name}</p>
            </div>
          ))}
        </div>

        <TitleComponent
          heading="heading-1"
          title="More than 80,000+ companies trust Micpro"
          highlight={["80,000+"]}
          colorHighlight="primary"
          className="px-0 sm:px-10 lg:px-20"
        />

        <div className="w-full">
          <Ticker />
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
