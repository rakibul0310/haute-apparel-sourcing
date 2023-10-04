import Container from "@/components/Container/Container";
import SecondarySectionHeader from "@/components/SectionTitle/SecondarySectionHeader";
import React from "react";

const MissionAndVision = () => {
  return (
    <>
      <Container cls={"my-20"}>
        <SecondarySectionHeader
          title={"Mission & Vision"}
          subTitle={
            "The mission & vision of Haute Apparel Sourcing is very transparent."
          }
        />
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              OUR MISSION
            </h2>
            <p className="font-semibold mb-3 text-gray-700">
              Haute Apparel Sourcing is a fast-growing apparel R&D,
              merchandising & sourcing company from Dhaka, Bangladesh
            </p>
            <p className="text-gray-700">
              Throughout the years, Haute Apparel Sourcing has established
              itself as a core manufacture partner for fashion brands in Europe
              and U.S.A. Besides our reputation for reliability, our customers
              endorse our value-added services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              OUR VISION
            </h2>
            <p className="font-semibold mb-3 text-gray-700">
              Haute Apparel Sourcing is working as a buying house in the field
              of garments industry. Our major concern is to play our role as a
              buying house to our customers.
            </p>
            <p className="text-gray-700">
              Our services include all that a buyer needs for successful buying.
              Haute Apparel Sourcing has 10+ years of experience on its back in
              dealing with all categories of garments. Our objective is to
              provide total customer satisfaction by offering a range of quality
              garments at our reasonable prices
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MissionAndVision;
