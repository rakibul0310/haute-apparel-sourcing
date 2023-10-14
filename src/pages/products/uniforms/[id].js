import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { uniform } from "@/data/products";
import Image from "next/image";
import ItemTop from "@/sectionContainers/Products/ItemTop";
import ShowItem from "@/sectionContainers/Products/ShowItem";
import RelatedItems from "@/components/RelatedItems/RelatedItems";

const Uniform = () => {
  const router = useRouter();
  const [item, setItem] = useState({});
  useEffect(() => {
    const selectedItem = uniform?.filter((u) => u?.id === router.query.id);
    setItem(selectedItem[0]);
  }, [router.query.id]);
  return (
    <div className="my-28">
      <ItemTop
        itemName={item?.title}
        currentPath={`PRODUCTS/UNIFORMS/${item?.title?.toUpperCase()}`}
      />
      <ShowItem
        image={item?.image}
        title={item?.title}
        subTitle={"100% Cotton s/j 180gsm"}
      />
      <RelatedItems products={uniform} />
    </div>
  );
};

export default Uniform;
