import React from "react";

const PrimarySectionHeader = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <h2 className="section-title text-[#57C3A6] text-2xl text-center lg:text-5xl p-[2px] font-bold w-full lg:w-1/2 me-8">
        {title}
      </h2>
      <div className="w-full lg:w-1/2">
        <p className="w-full p-3 text-base font-bold">{subTitle}</p>
      </div>
    </div>
  );
};

export default PrimarySectionHeader;
