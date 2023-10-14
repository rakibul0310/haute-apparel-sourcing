import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import ImageMagnifier from "../ImageMagnifier/ImageMagnifier";

const ItemMagnify = ({ image, title, subTitle }) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          <div className="border-2 border-gray-200 w-full flex flex-col items-center p-2">
            <div>
              <ImageMagnifier src={image} width={300} height={400} />
            </div>
            <div className="mt-4 relative">
              <div className="w-[100px] h-full absolute top-0 bg-gray-300 opacity-[0.5]"></div>
              <Image src={image} alt="product image" width={100} height={100} />
            </div>
          </div>
          <div className="w-full text-center md:text-start">
            <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
            <h2 className="text-sm text-gray-500">{subTitle}</h2>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ItemMagnify;
