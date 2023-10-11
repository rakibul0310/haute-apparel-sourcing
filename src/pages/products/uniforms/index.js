import Container from "@/components/Container/Container";
import PrimarySkeleton from "@/components/Skeleton/PrimarySkeleton";
import { uniform } from "@/data/products";
import ProductTop from "@/sectionContainers/Products/ProductTop";
import ProductsList from "@/sectionContainers/Products/ProductsList";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => setCurrentProducts(uniform), 3000);
  }, [currentProducts]);

  return (
    <Container cls="my-32">
      <ProductTop title={"Uniforms"} values={[]} />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {currentProducts?.length > 0 ? (
          currentProducts?.map((c) => (
            <ProductsList
              key={c?.id}
              product={c}
              currentProducts={currentProducts}
              setCurrentProducts={setCurrentProducts}
            />
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
