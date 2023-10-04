import React from "react";

const SecondarySectionHeader = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <h2 className="text-[#57C3A6] text-base text-center font-bold w-full lg:w-1/2 me-8">
        {title}
      </h2>
      <div className="w-full lg:w-1/2">
        <p className="w-full p-3 text-2xl lg:text-4xl font-semibold">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default SecondarySectionHeader;
