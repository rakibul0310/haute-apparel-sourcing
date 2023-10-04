import Container from "@/components/Container/Container";
import PrimarySectionHeader from "@/components/SectionTitle/PrimarySectionHeader";
import React from "react";
import image1 from "/src/assets/icons/uniform.png";
import image2 from "/src/assets/icons/dress.png";
import image3 from "/src/assets/icons/branch.png";
import PrimaryCard from "@/components/Card/PrimaryCard";

const dataObj = [
  {
    id: 1,
    image: image1,
    title: "Uniform Manufacturer & Supplier",
    details:
      "From 2011, We has been working as Uniform manufacturer and supplier in Bangladesh. Till now, We have supplied more than 1 million Uniform to various Schools and Colleges in Bangladesh.",
  },
  {
    id: 2,
    image: image2,
    title: "RMG Manufacturing",
    details:
      "We have been manufacturing various ladies and gents garments items in our own factory. We have been manufacturing garments items such as t-shirt, polo shirt, trousers etc.",
  },
  {
    id: 3,
    image: image3,
    title: "Garments Buying Agency",
    details:
      "We has been working as one of the best garments buying houses in Bangladesh. We help the overseas companies to source the best quality apprel from Bangladesh.",
  },
];

const WhatWeDo = () => {
  return (
    <>
      <Container cls={"my-6"}>
        <PrimarySectionHeader
          title={"WHAT WE DO"}
          subTitle={
            "We help to source the best quality apparels from Bangladesh. We manufacture RMG & UNIFORMS. We are the #1 Uniform Supplier in Bangladesh"
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {dataObj?.map((d) => (
            <PrimaryCard
              key={d?.id}
              image={d?.image}
              title={d.title}
              details={d?.details}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default WhatWeDo;
