import React from "react";

const PrimarySectionHeader = ({ title, subTitle }) => {
  return (
    <div className="section-container flex flex-col lg:flex-row justify-between items-center">
      <h2 className="section-title text-[#002147] text-2xl text-center lg:text-5xl p-[2px] font-bold border-e-0 lg:border-e-2 w-full lg:w-1/2 me-8 border-r-sky-500">
        {title}
      </h2>
      <div className="description-container w-full lg:w-1/2">
        <p className="description w-full p-3 text-base lg:text-lg font-light">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PrimarySectionHeader;
