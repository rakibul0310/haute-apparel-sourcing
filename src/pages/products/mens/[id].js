import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ItemTop from "@/sectionContainers/Products/ItemTop";
import ShowItem from "@/sectionContainers/Products/ShowItem";
import RelatedItems from "@/components/RelatedItems/RelatedItems";
import { mens } from "@/data/products";

const Mens = () => {
  const router = useRouter();
  const [item, setItem] = useState({});
  useEffect(() => {
    const selectedItem = mens?.filter((u) => u?.id === router.query.id);
    setItem(selectedItem[0]);
  }, [router.query.id]);
  return (
    <div className="my-28">
      <ItemTop
        itemName={item?.title}
        currentPath={`PRODUCTS/MENS/${item?.title?.toUpperCase()}`}
      />
      <ShowItem
        image={item?.image}
        title={item?.title}
        subTitle={"100% Cotton s/j 180gsm"}
      />
      <RelatedItems products={mens} path={"mens"} />
    </div>
  );
};

export default Mens;
