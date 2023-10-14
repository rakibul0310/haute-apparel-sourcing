import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Link from "next/link";
import ProductsList from "@/sectionContainers/Products/ProductsList";

const RelatedItems = ({ products }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const prod = products?.slice(randomNumber, randomNumber + 6);
    setRelatedProducts(prod);
  }, [products]);
  return (
    <Container cls={"mt-28"}>
      <div className="mb-10">
        <h2 className="text-3xl text-[#57c3a6]">RELATED PRODUCTS</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {relatedProducts?.map((r) => (
          <Link key={r?.id} href={`/products/uniforms/${r?.id}`}>
            <ProductsList product={r} width={200} height={200} related={true} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default RelatedItems;
