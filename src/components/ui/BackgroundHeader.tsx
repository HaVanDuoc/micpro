import React from "react";

const BackgroundHeader = () => {
  return (
    <div className="container h-full relative z-0">
      <div className="shadow-[0_0_300px_300px_rgba(81,180,250,100)] absolute top-[600px] left-0"></div>
      <div className="shadow-[0_0_200px_200px_rgba(133,74,235,100)] absolute top-[800px] left-1/3"></div>
      <div className="shadow-[0_0_200px_200px_rgba(248,217,151,100)] absolute top-[800px] right-1/3"></div>
      <div className="shadow-[0_0_300px_300px_rgba(248,166,240,100)] absolute top-[600px] right-0"></div>
    </div>
  );
};

export default BackgroundHeader;
