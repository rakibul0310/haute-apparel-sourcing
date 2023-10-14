import Image from "next/image";
import React, { useState } from "react";

const ProductsList = ({ product, width, height, related }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cursor-pointer relative overflow-hidden"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Image
        className="cursor-pointer hover:shadow-lg transition-all ease-in-out duration-500"
        src={product?.image}
        alt="product image"
        width={width}
        height={height}
      />
      <div
        className={`product-overlay absolute overflow-hidden hidden bottom-0 md:flex justify-center items-center  ${
          related ? "w-[200px]" : "w-full"
        } transition-all ease-in-out duration-300 ${
          hovered ? "h-[150px]" : "h-0"
        }`}
      >
        <span className="text-gray-700 text-center text-2xl font-bold underline">
          View
        </span>
      </div>
    </div>
  );
};

export default ProductsList;
