import Container from "@/components/Container/Container";
import PrimarySkeleton from "@/components/Skeleton/PrimarySkeleton";
import { uniform } from "@/data/products";
import ProductTop from "@/sectionContainers/Products/ProductTop";
import ProductsList from "@/sectionContainers/Products/ProductsList";
import Link from "next/link";
import React, { createContext, useEffect, useState } from "react";

export const UniformContext = createContext();

const Products = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => setCurrentProducts(uniform), 1500);
  }, [currentProducts]);

  return (
    <UniformContext.Provider value={{ uniform, setCurrentProducts }}>
      <Container cls="my-32">
        <ProductTop title={"Uniforms"} values={[]} />
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
          {currentProducts?.length > 0 ? (
            currentProducts?.map((c) => (
              <Link key={c?.id} href={`/products/uniforms/${c?.id}`}>
                <ProductsList
                  product={c}
                  // currentProducts={currentProducts}
                  // setCurrentProducts={setCurrentProducts}
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
    </UniformContext.Provider>
  );
};

export default Products;
