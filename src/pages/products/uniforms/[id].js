import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { uniform } from "@/data/products";
import Image from "next/image";
import ItemTop from "@/sectionContainers/Products/ItemTop";

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
      <Image src={item?.image} alt="" width={300} height={300} />
    </div>
  );
};

export default Uniform;
