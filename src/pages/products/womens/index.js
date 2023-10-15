import Container from "@/components/Container/Container";
import SelectOption from "@/components/SelectOption/SelectOption";
import PrimarySkeleton from "@/components/Skeleton/PrimarySkeleton";
import { womens } from "@/data/products";
import ProductsList from "@/sectionContainers/Products/ProductsList";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setTimeout(() => setCurrentProducts(womens), 1500);
  }, []);

  useEffect(() => {
    let category = [];
    womens?.map(
      (i) => !category?.includes(i?.category) && category?.push(i?.category)
    );
    setCategories(category);
  }, []);

  return (
    <Container cls="my-32">
      <div className="flex justify-between items-center">
        <div className="w-1/2 text-3xl text-start text-[#57c3a6] font-bold">
          {"Women's"}
        </div>
        <SelectOption
          defValue={"All"}
          values={categories}
          product={womens}
          setCurrentProducts={setCurrentProducts}
        />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {currentProducts?.length > 0 ? (
          currentProducts?.map((c) => (
            <Link key={c?.id} href={`/products/womens/${c?.id}`}>
              <ProductsList
                product={c}
                related={false}
                width={300}
                height={300}
              />
            </Link>
          ))
        ) : (
          <>
            <PrimarySkeleton />
            <PrimarySkeleton />
            <PrimarySkeleton />
            <PrimarySkeleton />
            <PrimarySkeleton />
            <PrimarySkeleton />
          </>
        )}
      </div>
    </Container>
  );
};

export default Products;
