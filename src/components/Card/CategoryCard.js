import Image from "next/image";
import React, { useState } from "react";

const CategoryCard = ({ title, image }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="category-card flex items-end justify-center relative overflow-hidden h-[500px] w-[250px] cursor-pointer"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="overlay"></div>
      {!hovered && (
        <h2 className="text-center text-2xl font-extrabold uppercase text-white bg-[#57c3a6] p-2 z-10">
          {title}
        </h2>
      )}
      <div
        className={`absolute bottom-0 transition-all ease-in-out duration-500 w-full ${
          hovered ? "h-full" : "h-0"
        } overflow-hidden bg-[#57c3a6dd] flex flex-col justify-center items-center`}
      >
        <div className="w-[8rem] h-[8rem] relative">
          <Image fill className="rounded-sm" src={image} alt="category image" />
        </div>
        <h2 className="text-center text-2xl font-extrabold uppercase text-white p-2">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
