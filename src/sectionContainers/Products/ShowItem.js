import ItemMagnify from "@/components/ItemMagnify/ItemMagnify";
import React from "react";

const ShowItem = ({ image, title, subTitle }) => {
  return (
    <div>
      <ItemMagnify image={image} title={title} subTitle={subTitle} />
    </div>
  );
};

export default ShowItem;
