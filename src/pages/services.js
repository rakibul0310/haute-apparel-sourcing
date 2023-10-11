import PrimaryCard from "@/components/Card/PrimaryCard";
import Container from "@/components/Container/Container";
import PrimarySectionHeader from "@/components/SectionTitle/PrimarySectionHeader";
import React from "react";
import image1 from "../assets/icons/sampling.webp";
import image2 from "../assets/icons/quality.webp";
import image3 from "../assets/icons/vendor.webp";
import image4 from "../assets/icons/report.webp";

const dataObj = [
  {
    id: 1,
    image: image1,
    title: "Sampling",
    details:
      "We provide samples that are developed to incorporate colors, fabrics, and styles based on the requirements of our buyers. We manufacture samples in quantities as required by our customers. By offering this essential service, we sharpen the marketing efforts of our buyers in their region by giving them an edge over their competition.",
  },
  {
    id: 2,
    image: image2,
    title: "Total Quality Management",
    details:
      "We closely monitor orders from the moment of sampling to the time of shipment. We provide updated status on sampling, production and shipment to our buyers on a regular basis through the latest ERP system. A pro-active approach is maintained towards the identification of problem areas and immediate application of corrective measures to ensure timely delivery of products. The detailed physical inspection of the samples are selected at random and based on specifications of the buyers and cover criteria like design/style, shrinkage, accessories, appearance, markings, color, labeling, material, assortments, workmanship, measurements, packaging etc.",
  },
  {
    id: 3,
    image: image4,
    title: "Status Reporting",
    details:
      "Status report is based on multi-state inspection and transmitted to the buyers. The production progress is analyzed in relation to delivery terms and suitable course of action is taken to ensure that goods are delivered in time. Consignments are readied for shipment only if they match up-to the standards required by our buyers.",
  },
  {
    id: 4,
    image: image1,
    title: "Shipping Co-Ordination",
    details:
      "Shipping documents are checked as per the buyer’s instruction and the copy documents are sent to buyers well in advance of the shipment to avoid any discrepancies.",
  },
  {
    id: 5,
    image: image2,
    title: "Price",
    details:
      "We scrutinize prices quoted by our factory as well as other suppliers and with our own experience of the cost structure in the country, we obtain the most realistic prices from them.",
  },
  {
    id: 6,
    image: image3,
    title: "Other Service",
    details:
      "We keep buyers informed about the market trends, new developments in industry, changes in Govt, policy and regulations etc. Inform buyers about new fabrics, designs and fashion trends within our knowledge. When receiving buyers, we send invitation letters to obtain visa’s, arrange hotel bookings on their behalf, plan their meetings appropriately and try to provide all reasonable assistance that a buyer may need in a foreign land to make their visit comfortable and useful.",
  },
];

const services = () => {
  return (
    <>
      <Container cls={"my-28"}>
        <PrimarySectionHeader
          title={"OUR SERVICES"}
          subTitle={
            "We are providing a variety of services, starting from Trustworthy Vendors, TQM, Sampling, Logistics to full transparency for the customer through the ERP system. The services offered will guarantee a smooth relationship and will only catalyse the speed of the process."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
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

export default services;
