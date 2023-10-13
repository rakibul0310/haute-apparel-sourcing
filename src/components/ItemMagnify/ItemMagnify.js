import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import ImageMagnifier from "../ImageMagnifier/ImageMagnifier";

const ItemMagnify = ({ image, title, subTitle }) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div>
              <ImageMagnifier src={image} width={300} height={400} />
            </div>
            <div>
              <Image src={image} alt="product image" width={100} height={100} />
            </div>
          </div>
          <div>
            <h2>{title}</h2>
            <h2>{subTitle}</h2>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ItemMagnify;
