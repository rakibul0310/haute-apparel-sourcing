import CategoryCard from "@/components/Card/CategoryCard";
import Container from "@/components/Container/Container";
import SecondarySectionHeader from "@/components/SectionTitle/SecondarySectionHeader";
import React from "react";
import image1 from "/src/assets/icons/category1.png";
import image2 from "/src/assets/icons/category2.png";
import image3 from "/src/assets/icons/categgory3.png";
import image4 from "/src/assets/icons/category4.png";

const dataObj = [
  {
    id: 1,
    image: image1,
    title: "UNIFORM",
  },
  {
    id: 2,
    image: image2,
    title: "MEN'S",
  },
  {
    id: 3,
    image: image3,
    title: "WOMEN'S",
  },
  {
    id: 4,
    image: image4,
    title: "OTHERS",
  },
];

const ShowCase = () => {
  return (
    <div className="py-10">
      <Container cls={"my-10"}>
        <SecondarySectionHeader
          title={"SHOWCASE"}
          subTitle={"OUR PRODUCTS SHOWCASE"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 my-10">
          {dataObj?.map((d) => (
            <CategoryCard
              key={d?.id}
              image={d?.image}
              title={d.title}
              cls={`category-card${d?.id}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ShowCase;
