import Container from "@/components/Container/Container";
import SecondarySectionHeader from "@/components/SectionTitle/SecondarySectionHeader";
import React from "react";
import image1 from "/src/assets/icons/digital.png";
import image2 from "/src/assets/icons/analysis.png";
import image3 from "/src/assets/icons/email.png";
import image4 from "/src/assets/icons/seo.png";
import image5 from "/src/assets/icons/social.png";
import image6 from "/src/assets/icons/b_growth.png";
import SecondaryCard from "@/components/Card/SecondaryCard";

const dataObj = [
  {
    id: 1,
    image: image1,
    title: "100% Quality Maintain",
    details:
      "We are very much committed about the quality of our very owned manufacturing products as well as our sourcing products.",
  },
  {
    id: 2,
    image: image2,
    title: "Certification & Recognition",
    details:
      "We are certified by various instituions. Our manufactured Uniform and RMG are 100% safe and risk free.",
  },
  {
    id: 3,
    image: image3,
    title: "Digital Management",
    details:
      "Our office and factory is managed by digitally. We the higher management and all workers are digitally managed.",
  },
  {
    id: 4,
    image: image4,
    title: "Highly Committed",
    details:
      "We are always committed to our promise. We never break our commitment with our clients.",
  },
  {
    id: 5,
    image: image5,
    title: "Timely Shipment",
    details:
      "We are always very much concerned about the shipment on time. We understand the value of the time in the industry.",
  },
  {
    id: 6,
    image: image6,
    title: "Less Costly",
    details:
      "Our products and our sourcing charge are very cost-effective. We charge 10-15% less than other companies in the industry.",
  },
];

const OurSpecialities = () => {
  return (
    <div className="bg-[#F7F7FC] py-10">
      <Container cls={"my-10"}>
        <SecondarySectionHeader
          title={"OUR SPECIALITIES"}
          subTitle={
            "Why Do We Call Ourself #1 Garments Buying House & RMG Manufacturer"
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {dataObj?.map((d) => (
            <SecondaryCard
              key={d?.id}
              image={d?.image}
              title={d.title}
              details={d?.details}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurSpecialities;
