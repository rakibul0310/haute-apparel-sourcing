import Image from "next/image";
import React from "react";

const PrimaryCard = ({ image, title, details }) => {
  return (
    <>
      <div className="w-full max-w-sm bg-white border shadow-sm cursor-pointer border-gray-200 rounded-lg transition-all ease-in-out duration-300 dark:bg-gray-800 dark:border-gray-700 country_card">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <div className="w-24 h-24 relative">
            <Image
              fill
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={image}
              alt="Bonnie"
            />
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white country-title transition-all ease-in-out duration-300">
            {title}
          </h5>
          <div className="flex mt-4 space-x-3 md:mt-6 px-4">
            <p className="text-gray-500 text-base font-normal">{details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryCard;
