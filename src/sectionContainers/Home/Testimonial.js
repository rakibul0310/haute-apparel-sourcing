import Container from "@/components/Container/Container";
import SecondarySectionHeader from "@/components/SectionTitle/SecondarySectionHeader";
import React from "react";
import image1 from "/src/assets/images/person1.jpg";
import image2 from "/src/assets/images/person2.jpg";
import TestimonialCard from "@/components/Card/TestimonialCard";

const dataObj = [
  {
    id: 1,
    image: image1,
    name: "Mike Luo",
    designation: "Star Fashion, UAE",
    review:
      "Haute Apparel Sourcing has been in apparel manufacturing business for a long time, we are doing business with them for a long time. I am really satisfied with Haute Apparel Sourcing",
  },
  {
    id: 2,
    image: image2,
    name: "Mir Kashem Chowdhury",
    designation: "Binary Lab School & Collage, Bangladesh",
    review:
      "We are very hapy with the quality of Haute Apparel Sourcing's Uniform quality. Our Students are satisfied with the quality of these uniform",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#F7F7FC] py-10">
      <Container cls={"my-10"}>
        <SecondarySectionHeader
          title={"TESTIMONIALS"}
          subTitle={"Our customer Always Happy With Our Services"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 my-10">
          {dataObj?.map((d) => (
            <TestimonialCard
              key={d?.id}
              image={d?.image}
              name={d.name}
              designation={d?.designation}
              review={d?.review}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
